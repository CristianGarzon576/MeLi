export default function Search({props}) {
  console.log(props);
  return (
    <div>searchPage</div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      data: 'cristian'
    }
  }
}
