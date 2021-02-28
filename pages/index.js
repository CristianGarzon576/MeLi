import Header from '../components/Header/Header'

export default function Home() {
  const initialState = '';
  const breadCrumbs = [];
  return (
    <div className="PageContainer">
        <Header breadCrumbs={breadCrumbs} initialState={initialState} />
    </div>    
  )
}
