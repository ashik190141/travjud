import { exist } from "../../../utils/exist";
import { prisma } from "../../helpers/prisma";
import { ICategory } from "./category.interface";

const createCategory = async (userId:string,payload: ICategory) => {
  await exist.isUser(userId);

  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

const getCategories = async () => {
  // Logic to retrieve categories from the database
  // This is a placeholder; replace with actual database logic
};

const updateCategory = async (categoryId: string, updatedData: any) => {
  // Logic to update a category in the database
  // This is a placeholder; replace with actual database logic
};

const deleteCategory = async (categoryId: string) => {
  // Logic to delete a category from the database
  // This is a placeholder; replace with actual database logic
};

export const CategoryService = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
