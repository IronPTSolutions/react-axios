import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Section from './components/section/Section';
import ProductList from './components/products/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container py-5">
        <Section title="Products">
          <ProductList />
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
