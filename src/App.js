import "./styles/App.css";
import Banner from "./component/Banner";
import ShoppingList from "./component/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
