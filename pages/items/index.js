import { searchItems } from "../../services/controllers/search";

export default function Search({author, items, categories}) {
  return (
    <>
      <div>searchPage</div>
      <div>Author: {author.name} {author.lastname} </div>
      <div>categories: {categories.map(categorie => (<p key={categorie}> {categorie} </p>))}</div>
      <div>items: {items.map(item => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}</div>
    </>
  )
}

export async function getServerSideProps({params, res, query}) {
  const {search} = query;
  const searchData = await searchItems(search);
  return {
    props: searchData
  }
}