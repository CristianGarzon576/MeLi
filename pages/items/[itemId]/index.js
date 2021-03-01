import Header from "../../../components/Header/Header";
import ItemContainer from "../../../components/ItemContainer/ItemContainer";
import { getItemInformation } from "../../../services/controllers/item";

export default function Item({author, item}) {
  return (
    <div className="PageContainer">
      <Header initialState={''}/>
      <ItemContainer item={item}/>
    </div>
  )
}

export async function getServerSideProps({params, res, query}) {
  const {itemId} = params;
  const {author, item} = await getItemInformation(itemId);
  return {
    props: {
      author,
      item
    }
  }
}
