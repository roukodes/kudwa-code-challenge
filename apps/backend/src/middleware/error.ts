import type { NextFunction, Request, Response } from 'express';

import { API_STATUS_CODES } from '@/utils/constants';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const status =
    typeof err === 'object' && err !== null && 'status' in err
      ? Number((err as { status?: number }).status) || API_STATUS_CODES.SERVER_ERROR
      : API_STATUS_CODES.SERVER_ERROR;

  const message =
    typeof err === 'object' && err !== null && 'message' in err
      ? String((err as { message?: string }).message)
      : 'Internal Server Error';

  return res.status(status).json({ success: false, message });
}
