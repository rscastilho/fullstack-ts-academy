import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
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
      console.log('erro aqui no middleware', Error);
      res.status(500).send(error.message);
    });
  }
  
  private routs() {
    this.app.use(routers);
  }
}

export default new app();
