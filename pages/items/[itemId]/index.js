import Header from "../../../components/Header/Header";
import { getItemInformation } from "../../../services/controllers/item";

export default function Item({author, item}) {
  return (
    <div className="PageContainer">
      <Header initialState={''}/>
      <div>ItemPage</div>
      <div>Author: {author.name} {author.lastname} </div>
      <div>{!!item && item.title}</div>
    </div>
  )
}

export async function getServerSideProps({params, res, query}) {
  console.log("🚀 ~ file: index.js ~ line 16 ~ getServerSideProps ~ query", query)
  console.log("🚀 ~ file: index.js ~ line 16 ~ getServerSideProps ~ res", res)
  console.log("🚀 ~ file: index.js ~ line 16 ~ getServerSideProps ~ params", params)
  console.log(res);
  const {itemId} = params;
  const {author, item} = await getItemInformation(itemId);
  return {
    props: {
      author,
      item
    }
  }
}
