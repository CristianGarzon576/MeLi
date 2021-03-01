import { env } from '../../environments/env.js';
import { get } from '../base-services.js';

export const searchItems = async (param) => {
  const url = `${env.api.search}?q=${param}`;
  const response = await get(url);
  return mappedSearchResponse(response)
};

const mappedSearchResponse = (response) => {
  console.log("🚀 ~ file: search.js ~ line 11 ~ mappedSearchResponse ~ response", response)
  let categories;
  let items;
  const author = env.author;
  try {
    categories = response.filters[0].values[0].path_from_root.map(data => data.name);
  } catch {
    categories = [];
  }
  try {
    items = response.results.slice(0, 4).map(item => {
      const {id, title, condition, thumbnail, currency_id, price, address} = item;
      const free_shipping = item.shipping.free_shipping;
      const objectPrice = {
        currency: currency_id,
        amount: price,
        decimals: 0
      };
      return {id, title, condition, picture: thumbnail, price: objectPrice, address: address.state_name, free_shipping};
    });
  } catch {
    items = [];
  }
  return {author, items, categories};
};

export default {searchItems};

