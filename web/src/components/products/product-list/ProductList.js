
import { Component } from 'react';
import Product from '../product/Product';

import productsService from '../../../services/products';

class ProductList extends Component {

  state = {
    products: []
  }

  // Una vez renderizado el componente pedimos los datos a la API y actualizamos el estado.
  // El nuevo estado no depende del anterior, podemos setearlo directamente.
  componentDidMount() {
    productsService.list()
      .then(products => this.setState({ products }));
  }

  handleDeleteProduct = (id) => {
    productsService.remove(id)
      .then(() => {
        this.setState((state, props) => ({
          products: state.products.filter(product => product.id !== id)
        }));
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="row row-cols-12 row-cols-sm-2 row-cols-md-4">
        {products.map(product => (
          <div key={product.id} className="col mb-3"><Product {...product} onClickDelete={this.handleDeleteProduct}/></div>
        ))}
      </div>
    )
  }

}

export default ProductList;
