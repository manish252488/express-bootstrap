import { Router, Request, Response } from "express";

const router = Router();

// GET /api/example
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Example route is working!",
    data: {
      timestamp: new Date().toISOString(),
    },
  });
});

// GET /api/example/:id
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `Example route with id: ${id}`,
    data: {
      id,
      timestamp: new Date().toISOString(),
    },
  });
});

// POST /api/example
router.post("/", (req: Request, res: Response) => {
  const { body } = req;
  res.status(201).json({
    success: true,
    message: "Example POST route",
    data: body,
  });
});

export default router;

