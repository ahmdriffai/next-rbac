// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  token: string;
  user: { name: string; permissions: string[] };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicGVybWlzc2lvbnMiOlsiZGFzaGJvYXJkOnJlYWQiLCJ1c2VyczptYW5hZ2UiXSwiaWF0IjoxNTE2MjM5MDIyfQ.6pfSoMZC-eVbAPdjiCGeDOZUBPYYfc6jLS5UKqmdliw";

  res.status(200).json({
    token,
    user: {
      name: "Ahmad Rifai",
      permissions: ["dashboard:read", "users:manage"],
    },
  });
}
