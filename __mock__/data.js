export const createItem = (
  id = '1',
  title = 'tablet',
  condition = 'new',
  thumbnail = '',
  currency_id = 'ARS',
  price = 1000,
  state_name = 'Buenos Aires',
  category_id = 'MLA12345',
  free_shipping = false,
  sold_quantity = 200,
  pictures = [],
  description = '',
  ) => {
    const address = {state_name};
    const shipping =  {free_shipping};
    return {id, title, condition, thumbnail, shipping, currency_id, price, address, sold_quantity, category_id, pictures, description};;
};

export const createCategory = (id = '1',name = 'Tablet') => {
  return {id, name};
};
