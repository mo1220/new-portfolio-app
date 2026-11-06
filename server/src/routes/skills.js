const express = require('express');
const { prisma } = require('../lib/prisma');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;

    const skills = await prisma.skill.findMany({
      where: category ? { category } : undefined,
      orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }, { name: 'asc' }],
    });

    res.json({
      success: true,
      data: skills,
      meta: { count: skills.length, category: category || null },
    });
  })
);

module.exports = router;
