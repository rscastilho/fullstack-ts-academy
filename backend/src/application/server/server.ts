import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routers from '../router/router';
import 'express-async-errors';

dotenv.config();
class app {
  app = express.application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routs();
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.log('Erro registrado no middleware - express async errors', Error);
      res.status(StatusCodes.BAD_GATEWAY).json({ message: error.message, info: 'Erro gerado no middleware' });
    });
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routs() {
    this.app.use(routers);
  }
}

export default new app();
