import { env } from "../../environments/env";
import { get } from "../base-services";

export async function getCategories(CategoryId) {
  const categoryUrl = `${env.api.category}${CategoryId}`;
  const response = await get(categoryUrl);
  return mappedBreadCrumbs(response);
}

export const mappedBreadCrumbs = (response) => {
  let categories;
  try {
    categories = response.path_from_root.map(breadCrumb => breadCrumb.name);
  } catch {
    categories = [];
  }
  return categories;
};
