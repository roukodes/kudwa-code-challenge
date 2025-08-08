import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';

export function validate(schema: ZodType, pick: 'params' | 'query' | 'body' = 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[pick]);
    if (!result.success) {
      return res
        .status(400)
        .json({ success: false, message: result.error.issues.map((i) => i.message).join(', ') });
    }
    (req as any)[`_${pick}`] = result.data;
    next();
  };
}
