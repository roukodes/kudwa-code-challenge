import app from '@/app';
import { env } from '@/config';
import { prisma } from '@/db';

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

async function shutdown() {
  // eslint-disable-next-line no-console
  console.log('Shutting down...');
  await prisma.$disconnect();
  server.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
