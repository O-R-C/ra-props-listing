import Listing from './components/Listing/Listing'
import etsyData from './js/data'

function App() {
  return (
    <div>
      <Listing items={etsyData} />
    </div>
  )
}

export default App
