import bcrypt from "bcrypt";

export const hash = async (plaintext: string) => {
  return await bcrypt.hash(plaintext, bcrypt.genSaltSync(7));
};

export const validatePassword = async (plaintext: string, hash: string) => {
  return await bcrypt.compare(plaintext, hash);
};
