import ItemContainer from "../../../components/ItemContainer/ItemContainer";
import { getItemInformation } from "../../../services/controllers/item";

export default function Item({item}) {
  return (
    <ItemContainer item={item}/>
  )
}

export async function getServerSideProps({params, res, query}) {
  const {itemId} = params;
  const {author, item, breadCrumbs} = await getItemInformation(itemId);
  return {
    props: {
      author,
      item,
      breadCrumbs
    }
  }
}
