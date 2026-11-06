const express = require('express');
const { z } = require('zod');
const { prisma } = require('../lib/prisma');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

const createSchema = z.object({
  slug: z.string().min(1).max(100),
  name: z.string().min(1).max(200),
  title: z.string().min(1).max(200),
  subtitle: z.string().max(500).optional().nullable(),
  content: z.string().max(5000).optional().nullable(),
  imageSrc: z.string().max(500).optional().nullable(),
  group: z.enum(['career', 'personal', 'other']).default('personal'),
  techStack: z.string().max(500).optional().nullable(),
  projectUrl: z.string().url().optional().nullable(),
  githubUrl: z.string().url().optional().nullable(),
  isPublished: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const group = typeof req.query.group === 'string' ? req.query.group : undefined;
    const includeDrafts = req.query.includeDrafts === 'true';

    const items = await prisma.portfolioItem.findMany({
      where: {
        ...(group ? { group } : {}),
        ...(includeDrafts ? {} : { isPublished: true }),
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    res.json({
      success: true,
      data: items,
      meta: { count: items.length, group: group || null },
    });
  })
);

router.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const item = await prisma.portfolioItem.findUnique({
      where: { slug: req.params.slug },
    });

    if (!item || !item.isPublished) {
      const error = new Error('Portfolio item not found');
      error.status = 404;
      error.code = 'PORTFOLIO_NOT_FOUND';
      throw error;
    }

    res.json({ success: true, data: item });
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) {
      const error = new Error('Invalid portfolio payload');
      error.status = 400;
      error.code = 'VALIDATION_ERROR';
      error.details = parsed.error.flatten();
      throw error;
    }

    const item = await prisma.portfolioItem.create({ data: parsed.data });
    res.status(201).json({ success: true, data: item });
  })
);

module.exports = router;
