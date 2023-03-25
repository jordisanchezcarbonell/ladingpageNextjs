// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Node as Logtail } from "@logtail/js";
const logger = new Logtail("6Ys5vKFzG9xb3jXPCtwgRhD2");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = {
    id: 123,
    name: "John Doe",
  };

  await logger.info(
    "Handling a request to /api/hello",
    { user } // you can log structured data
  );

  res.status(200).json({ name: user.name });
}
