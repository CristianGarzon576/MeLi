import { env } from '../../environments/env.js';
import { get } from '../base-services.js';

export async function getItemInformation(itemId) {
  const itemUrl = `${env.api.item.baseUrl}${itemId}`;
  const descriptionUrl = `${itemUrl}${env.api.item.description}`;
  const response = await Promise.all([get(itemUrl), get(descriptionUrl)]);
  return mappedItemResponse(response);

}

function mappedItemResponse([itemData, descriptionData]) {
  console.log("🚀 ~ file: item.js ~ line 13 ~ mappedItemResponse ~ itemData", itemData)
  console.log("🚀 ~ file: item.js ~ line 13 ~ mappedItemResponse ~ descriptionData", descriptionData)
  const author = env.author;
  try {
    const description = descriptionData.plain_text;
    const {id, title, price, currency_id, condition, thumbnail, sold_quantity} = itemData;
    const {free_shipping} = itemData.shipping;
    const objectPrice = {
      currency: currency_id,
      amount: price,
      decimals: 0
    };
    const item = {
      id,
      title,
      price: objectPrice,
      picture: thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description
    } || null;
    return {item, author};
  } catch (error) {
  }
  return {item: null, author};
}

export default { getItemInformation };