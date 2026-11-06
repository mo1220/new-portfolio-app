const express = require('express');
const { prisma } = require('../lib/prisma');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const profile = await prisma.profile.findFirst({
      orderBy: { createdAt: 'asc' },
    });

    if (!profile) {
      const error = new Error('Profile not found');
      error.status = 404;
      error.code = 'PROFILE_NOT_FOUND';
      throw error;
    }

    res.json({ success: true, data: profile });
  })
);

module.exports = router;
