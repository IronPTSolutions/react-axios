import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Products from './screens/Products';
import CreateProduct from './screens/CreateProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container py-5">
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/create-product" component={CreateProduct}/>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
