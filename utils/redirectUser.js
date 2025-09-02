import { verifyToken } from "../lib/utils";

export const redirectUser = async (context) => {
  const token = context.req ? context.req.cookies?.token : null;
  // const userId = await verifyToken(token);
  const userId = "1";

  return {
    userId,
    token,
  };
};
