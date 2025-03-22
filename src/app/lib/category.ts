import { categories, CategoryID } from "@/app/constants/categories";

export const getCategoryById = (id: CategoryID) => {
  return categories.find(category => category.id === id) || null;
};