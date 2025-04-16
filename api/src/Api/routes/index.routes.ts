import express, { Request, Response, Express } from 'express';
import post from './post.routes';

const router = express.Router();

const routes = (server: Express) => {
  server.use('/post/', post);
};

export default routes;
