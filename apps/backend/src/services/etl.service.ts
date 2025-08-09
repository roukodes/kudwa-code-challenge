import { runETL } from '@/etl';

export async function runETLService() {
  return await runETL();
}
