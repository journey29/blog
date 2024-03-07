import { db } from "@/server/db";
import { v4 as uuid } from "uuid";
import { getVerificationTokenByEmail } from "@/data/getVerificationToken";

export const generateVerificationToken = async (email: string) => {
  const tokenId = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      expires,
      token: tokenId,
    },
  });

  return verificationToken;
};
