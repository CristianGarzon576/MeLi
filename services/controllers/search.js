import { env } from '../../environments/env.js';
import { get } from '../base-services.js';
import { getCategories } from './category.js';
import { mapItem } from './item.js';

export const searchItems = async (param) => {
  const url = `${env.api.search}?q=${param}`;
  const response = await get(url);
  return await mappedSearchResponse(response)
};

export const findCategoryId = (items) => {
  const categoryIds = []
  const categoryOccurrences = new Array(items.length);
  categoryOccurrences.fill(0);

  for (let i = 0; i < items.length; i++) {
    const {category_id} = items[i];
    const pos = categoryIds.indexOf(category_id) > -1 ? categoryIds.indexOf(category_id) : 0
    categoryIds[pos] = category_id;
    categoryOccurrences[pos]++;
  }

  const categorytofind = categoryIds[categoryOccurrences.findIndex((element, index, array) => {
    return array.sort((a, b) => a < b)[0] === element
  })];

  return categorytofind;
};


export const mappedSearchResponse = async (response) => {
  let categories = [];
  let items = [];
  const author = env.author;
  try {

    items = response.results.map(mapItem).slice(0,4);
    const categorytofind = findCategoryId(response.results);
    categories = await getCategories(categorytofind);

  } catch {
  }
  return {author, items, categories};
};

export default {searchItems};
