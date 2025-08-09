import type { NextFunction, Request, Response } from 'express';

import { API_STATUS_CODES } from '@/utils/constants';

export function success(res: Response, data: unknown, status = API_STATUS_CODES.OK) {
  return res.status(status).json({ success: true, data });
}

export function asyncHandler<T extends (...args: any[]) => Promise<any>>(fn: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
