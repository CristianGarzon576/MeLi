export default function Search({props}) {
  console.log(props);
  return (
    <div>Item Page</div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      data: 'Garzon'
    }
  }
}
