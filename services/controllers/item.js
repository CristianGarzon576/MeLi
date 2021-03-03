import { env } from '../../environments/env.js';
import { get } from '../base-services.js';
import { getCategories } from './category.js';

export const getItemInformation = async (itemId) =>  {
  const itemUrl = `${env.api.item.baseUrl}${itemId}`;
  const descriptionUrl = `${itemUrl}${env.api.item.description}`;
  const response = await Promise.all([get(itemUrl), get(descriptionUrl)]);
  return await mappedItemResponse(response);
}

export const mappedItemResponse = async ([itemData, descriptionData]) =>  {
  const author = env.author;
  let item = null;
  let breadCrumbs = [];
  try {
    const description = 'plain_text' in descriptionData ? descriptionData.plain_text: '';    
    const mappedItem = mapItem(itemData, true);
    breadCrumbs = await getCategories(mappedItem.category_id);
    item = {
      ...mappedItem,
      description
    } || null;
  } catch (error) {
  }
  return {item, author, breadCrumbs};
}


export const mapItem = (item, isFromItem = false) => {
  const {id, title, price, currency_id, condition, thumbnail, sold_quantity, pictures, category_id, address} = item;
  const free_shipping = item.shipping.free_shipping;
  const state_name = !!address && 'state_name' in address ? address.state_name : '';
  const pictureToShow = !!isFromItem && !!item && !!pictures && !!pictures.length ? pictures[0].secure_url : thumbnail;
  const objectPrice = {
    currency: currency_id,
    amount: price,
    decimals: 0
  };
  const newItem = {
    id,
    title,
    condition,
    picture: pictureToShow,
    price: objectPrice,
    address: state_name,
    free_shipping,
    sold_quantity,
    category_id
  };
  return newItem;
};

export default { getItemInformation, mapItem };