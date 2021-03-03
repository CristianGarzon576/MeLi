import axios from 'axios';
import { env } from '../../environments/env';
import { getCategories } from '../../services/controllers/category';
import { createCategory } from '../../__mock__/data';
import { categories_response_success } from '../../__mock__/responses';

jest.mock('axios');

describe( 'Test for Categories controller', () => {
  const categoriesRespnse = categories_response_success;
  categoriesRespnse.data.path_from_root.push(createCategory('MLA1234','Electronico'));
  categoriesRespnse.data.path_from_root.push(createCategory('MLA123','Tecnologia') );
  categoriesRespnse.data.path_from_root.push(createCategory('MLA12','Tablet') );

  const breadCrumbs = ['Electronico','Tecnologia', 'Tablet'];

  it('get categories for tablet Success', async () => {    
    axios.get.mockImplementationOnce(() => Promise.resolve(categoriesRespnse));
    const response = await getCategories('MLA12345');
    await expect(response).toEqual(breadCrumbs);
    expect(axios.get).toHaveBeenCalledWith(`${env.api.category}MLA12345`);
  });
});