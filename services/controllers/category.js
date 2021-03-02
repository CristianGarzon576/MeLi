import { env } from "../../environments/env";
import { get } from "../base-services";

export async function getCategories(CategoryId) {
  const categoryUrl = `${env.api.category}${CategoryId}`;
  console.time('voy a llamar al endpoint de categoria')
  const response = await get(categoryUrl);
  console.timeEnd('voy a llamar al endpoint de categoria')
  return mappedBreadCrumbs(response);
}

const mappedBreadCrumbs = (response) => {
  let categories;
  try {
    categories = response.path_from_root.map(breadCrumb => breadCrumb.name);
  } catch (error) {
    categories = [];
  }
  return categories;
};
