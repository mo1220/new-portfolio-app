/**
 * @deprecated Use portfolio-server (`server/`) APIs instead.
 * Kept as a lightweight readiness probe for the Next.js process.
 */
export default function handler(_req, res) {
  res.status(200).json({
    success: true,
    data: {
      service: 'portfolio-web',
      message: 'Use NEXT_PUBLIC_API_URL backend for portfolio/profile/contact data.',
      backendHint: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
    },
  });
}
