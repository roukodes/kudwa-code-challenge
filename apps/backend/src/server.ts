import { PrismaClient } from '@prisma/client';

import app from '@/app';

const prisma = new PrismaClient();
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const shutdown = async () => {
  // eslint-disable-next-line no-console
  console.log('Shutting down...');
  await prisma.$disconnect();
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
