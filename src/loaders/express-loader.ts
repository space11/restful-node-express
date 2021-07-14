import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { config } from '../config';
import { Server } from 'http';

const logger = {
  error: (msg: string | undefined) => console.error(msg),
  info: (msg: string) => console.log(msg)
};

/**
 *  @description Express Loader is responsible to set up Express.js and all middleware
 */
export class ExpressLoader {
  private server: Server;

  //TODO: Implement list of middleware as constructor parameter.
  constructor() {
    const app = express();

    // Setup error handling, this must be after all other middleware
    app.use(ExpressLoader.errorHandler);


    // Set up middleware

    //TODO: Morgan logging
    //app.use( morgan("dev"))

    // Body-parser middleware
    app.use(bodyParser.urlencoded({
      extended: false,
      limit: "20mb"
    }));
    app.use(bodyParser.json({ limit: "20mb" }));

    // TODO: Pass app to routes
    // routes(app);

    // Start application
    this.server = app.listen(config.port, () => {
      logger.info(`Express running, now listening on port ${config.port}`);
    });
  }

  /**
   * @description Returns instance of Express server
   * @returns http Server
   */
  get Server(): Server {
    return this.server;
  }

  /**
   * @description Default error handler to be used with express
   * @param error Error object
   * @param req Express Request object
   * @param res Express Response object
   * @param next Express Next function
   */
  static errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    let parsedError;

    // Attempt to gracefully parse error object
    try {
      if (error && typeof error === "object") {
        parsedError = JSON.stringify(error);
      } else {
        parsedError = error;
      }
    } catch (e) {
      logger.error(e);
    }

    // Log the original error
    logger.error(parsedError);

    // If response is already sent, don't attempt to respond to client
    if (res.headersSent) {
      return next(error);
    }

    res.status(400).json({
      success: false,
      error
    });
  }
}