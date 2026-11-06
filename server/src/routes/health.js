const express = require('express');
const { prisma } = require('../lib/prisma');
const { asyncHandler } = require('../middleware/errorHandler');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      success: true,
      data: {
        status: 'ok',
        service: 'portfolio-server',
        timestamp: new Date().toISOString(),
      },
    });
  })
);

module.exports = router;
