import Header from "../../components/Header/Header";
import { SearchContainer } from "../../components/SearchContainer/SearchContainer";
import { searchItems } from "../../services/controllers/search";

export default function Search({author, items, categories, search}) {
  return (
    <div className="PageContainer">
      <Header initialState={search}/>
      <SearchContainer breadCrumbs={categories} items={items} />
    </div>
  )
}

export async function getServerSideProps({params, res, query}) {
  const {search} = query;
  const searchData = await searchItems(search);
  return {
    props: {...searchData, search}
  }
}