import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

class validation {
  validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extrairErros: string[] = [];
    errors.array().map((err) => extrairErros.push(err.msg));
    return res.status(422).json({
      message: extrairErros,
    });
  }
}

export default new validation().validator;
