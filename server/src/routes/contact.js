const express = require('express');
const { z } = require('zod');
const { prisma } = require('../lib/prisma');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().min(1).max(5000),
});

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      const error = new Error('Invalid contact payload');
      error.status = 400;
      error.code = 'VALIDATION_ERROR';
      error.details = parsed.error.flatten();
      throw error;
    }

    const message = await prisma.contactMessage.create({
      data: parsed.data,
    });

    res.status(201).json({
      success: true,
      data: {
        id: message.id,
        createdAt: message.createdAt,
      },
    });
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const unreadOnly = req.query.unread === 'true';

    const messages = await prisma.contactMessage.findMany({
      where: unreadOnly ? { isRead: false } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: messages,
      meta: { count: messages.length },
    });
  })
);

module.exports = router;
