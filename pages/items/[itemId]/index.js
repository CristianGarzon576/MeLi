import { getItemInformation } from "../../../services/controllers/item";

export default function Item({author, item}) {
  return (
    <>
      <div>ItemPage</div>
      <div>Author: {author.name} {author.lastname} </div>
        <div>{!!item && item.title}</div>
    </>
  )
}

export async function getServerSideProps({params, res, query}) {
  const {itemId} = params;
  const {author, item} = await getItemInformation(itemId);
  console.log("🚀 ~ file: index.js ~ line 16 ~ getServerSideProps ~ item", item)
  console.log("🚀 ~ file: index.js ~ line 16 ~ getServerSideProps ~ author", author)
  return {
    props: {
      author,
      item
    }
  }
}
