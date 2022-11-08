import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  const result = await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  res.json(result);
}
