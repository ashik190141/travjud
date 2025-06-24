import { prisma } from "../app/helpers/prisma";


const isUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if(!user) {
    throw new Error(`User with ID ${userId} does not exist.`);
  }
  return !!user;
}

const isCategory = async (categoryId: string): Promise<boolean> => {
  // Logic to check if the category exists in the database
  // This is a placeholder; replace with actual database logic
  return true; // Assume category exists for this example
}

export const exist = {
  isUser,
  isCategory,
};