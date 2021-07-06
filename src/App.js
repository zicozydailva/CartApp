import './App.css';
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="*" component={Default} />
      </Switch>
    </>
  );
}

export default App;