// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Node: Logtail } = require("@logtail/js");
const logtail = new Logtail("FyvbCfevrmsNehWqLUMdmUpU");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logtail.info(
    "Log message with structured data. dese la api231313132131231231231 ",
    {
      item: "Orange Soda",
      price: 100.0,
    }
  );
  res.status(200).json({ name: "John Doe" });
}
