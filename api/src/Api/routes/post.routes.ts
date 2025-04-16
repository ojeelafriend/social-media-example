import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('', async (request: Request, response: Response) => {
  try {
    const { text } = request.body;

    return response.status(201).json({ ok: true, isAIGeneratedText: false });
  } catch (error: any) {
    return response.status(500).json({ ok: false, error: `Internal error` });
  }
});

export default router;
