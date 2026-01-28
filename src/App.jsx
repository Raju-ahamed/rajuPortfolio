import './App.css'
import Cards from './component/cards/Cards';
import NavBar from './component/navbar/NavBar'

const promiseCard = fetch("card.json").then(res=>res.json());
function App() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
    <body>
      <Cards
          promiseCard={promiseCard}
      >
      </Cards>
    </body>
    <footer>

    </footer>
    </>
  )
}

export default App
