import axios from 'axios';
import { env } from '../../environments/env';
import { mapItem } from '../../services/controllers/item';
import { searchItems } from '../../services/controllers/search';
import { createCategory, createItem } from '../../__mock__/data';
import { categories_response_success, search_response_success } from '../../__mock__/responses';

jest.mock('axios');

describe( 'Test for search controller', () => {
  
  //integration test
  const responseSearch = search_response_success;
  responseSearch.data.results.push(createItem());
  responseSearch.data.results.push(createItem());
  responseSearch.data.results.push(createItem());
  responseSearch.data.results.push(createItem());

  const categoriesRespnse = categories_response_success;
  categoriesRespnse.data.path_from_root.push(createCategory('MLA1234','Electronico'));
  categoriesRespnse.data.path_from_root.push(createCategory('MLA123','Tecnologia'));
  categoriesRespnse.data.path_from_root.push(createCategory('MLA12','Tablet'));

  const breadCrumbs = ['Electronico','Tecnologia', 'Tablet'];
  const items = responseSearch.data.results.map(mapItem);

  it('get results for tablet Success', async () => {
    const param = 'tablet';
    const category_id = 'MLA12345';
    const {author} = env;
    axios.get.mockImplementation((url) => {
      switch (url) {
        case `${env.api.search}?q=${param}`:
          return Promise.resolve(responseSearch);
        case `${env.api.category}${category_id}`:
          return Promise.resolve(categoriesRespnse);
      }
    });
    const response = await searchItems(param);
    await expect(response).toEqual({author, items, categories: breadCrumbs});
  });
  
  //Unit test
});