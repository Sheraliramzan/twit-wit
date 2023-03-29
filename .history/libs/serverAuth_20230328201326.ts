import { NextApiRequest } from "next";
import { getSession, GetSessionParams } from "next-auth/react";
import prisma from "../libs/prismadb";

interface ExtendedGetSessionParams extends GetSessionParams {
  provider?: string;
}

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({
    req,
    provider: "github", // add the provider here
  } as ExtendedGetSessionParams); // cast as ExtendedGetSessionParams

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("User not found");
  }

  return { currentUser };
};

export default serverAuth;