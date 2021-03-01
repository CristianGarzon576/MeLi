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
  let item = null;
  try {
    const description = 'plain_text' in descriptionData ? descriptionData.plain_text: '';
    const {id, title, price, currency_id, condition, thumbnail, sold_quantity, pictures} = itemData;
    const {free_shipping} = itemData.shipping;
    const objectPrice = {
      currency: currency_id,
      amount: price,
      decimals: 0
    };
    item = {
      id,
      title,
      price: objectPrice,
      picture: pictures[0].secure_url || thumbnail,
      condition,
      free_shipping,
      sold_quantity,
      description
    } || null;
  } catch (error) {
  }
  return {item, author};
}

export default { getItemInformation };