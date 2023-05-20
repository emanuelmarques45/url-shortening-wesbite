import { ShortenResponse } from "@/types/shorten"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const data: ShortenResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${req.body.url}`
      ).then(data => data.json())

      return res.json(data)
    default:
      return res.status(405).json({ message: "Method not allowed" })
  }
}
