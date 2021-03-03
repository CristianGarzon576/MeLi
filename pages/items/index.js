import { SearchContainer } from "../../components/SearchContainer/SearchContainer";
import { searchItems } from "../../services/controllers/search";

export default function Search({items}) {
  return (
    <SearchContainer items={items} />
  )
}

export async function getServerSideProps({params, res, query}) {
  const {search} = query;
  const searchData = await searchItems(search);
  return {
    props: {...searchData, breadCrumbs: searchData.categories}
  }
}