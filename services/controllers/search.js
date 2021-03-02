import { env } from '../../environments/env.js';
import { get } from '../base-services.js';
import { getCategories } from './category.js';

export const searchItems = async (param) => {
  const url = `${env.api.search}?q=${param}`;
  const response = await get(url);
  return await mappedSearchResponse(response)
};

const mapItem = (item) => {
  const {id, title, condition, thumbnail, currency_id, price, address} = item;
  const free_shipping = item.shipping.free_shipping;
  const objectPrice = {
    currency: currency_id,
    amount: price,
    decimals: 0
  };
  return {id, title, condition, picture: thumbnail, price: objectPrice, address: address.state_name, free_shipping};
};

const findCategory = (categories) => {
  let category = '';
  const keys = Object.keys(categories);
  keys.reduce( (acc, curr) => {
    if (categories[curr] > acc ) {
      acc = categories[curr];
      category = curr;
    }
    return acc;
  }, 0);
  return category;
};

const findCategoryMap = (categories) => {
 const categoryEntries = [...categories.entries()].reduce((a,e) => e[1] > a[1] ? e : a);
 return categoryEntries[0];
};

const mappedSearchResponse = async (response) => {
  let categories = [];
  let items = [];
  const author = env.author;
  try {
    // items = response.results.map(mapItem).slice(0,4);
    // const categories2 = response.results.reduce((acc, curr, index) => {
    //   const value = curr["category_id"];
    //   acc[value] = !!acc[value] ? acc[value] + 1 : 1;
    //   return acc;
    // }, {});
    
    // Map solution
    // items = response.results.map(mapItem).slice(0,4);
    // const categories2 = response.results.reduce((acc, curr, index) => {
    //   const category = curr["category_id"];
    //   const val = acc.has(category) ? acc.get(category): 0;
    //   acc.set(category, val + 1);
    //   return acc;
    // }, new Map());

    // Dani Solution 170ms
    const categoryIds = []
    const categoryOccurrences = new Array(response.results.length);
    categoryOccurrences.fill(0);
    console.log(response.results.length);
    items = response.results.map(mapItem).slice(0,4);
    for (let i = 0; i<response.results.length; i++) {
      const {category_id} = response.results[i];
      const pos = categoryIds.indexOf(category_id) > -1 ? categoryIds.indexOf(category_id) : 0
      categoryIds[pos] = category_id;
      categoryOccurrences[pos]++;
    }
    const categorytofind = categoryIds[categoryOccurrences.findIndex((element, index, array) => {
      return array.sort((a, b) => a < b)[0] === element
    })];

    // const categorytofind = findCategoryMap(categories2);
    // const categorytofind = findCategory(categories2);
    categories = await getCategories(categorytofind);
  } catch {
  }
  return {author, items, categories};
};

//Map

export default {searchItems};

