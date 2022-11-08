import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  res: NextApiResponse
) {
  const posts = await prisma.post.findMany();
  res.json(posts)
}
