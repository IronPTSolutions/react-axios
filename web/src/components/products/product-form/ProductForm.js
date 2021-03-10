import { Component } from 'react';
import { Redirect } from 'react-router';

import productsService from '../../../services/products';

const validations = {
  title: (value) => {
    let message;
    if (!value) {
      message = 'Title is required';
    }
    return message;
  },
  description: (value) => {
    let message;
    if (!value) {
      message = 'Description is required';
    } else if (value && value.length < 5) {
      message = 'Description needs at least 5 characters'
    }
    return message;
  },
  price: (value) => {
    let message;
    if (!value) {
      message = 'Price is required';
    } else if (value && Number(value) <= 0) {
      message = 'Price must be grater than 0'
    }
    return message;
  },
  image: (value) => {
    let message;
    if (!value) {
      message = 'Image is required';
    }
    return message;
  }
}

class ProductForm extends Component {
  state = {
    product: {
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
    },
    errors: {
      title: validations.title(),
      description: validations.description(),
      price: validations.price(),
      image: validations.image()
    },
    touch: {},
    isCreated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state, props) => ({
      product: {
        ...state.product,
        [name]: value,
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value),
      }
    }));
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState((state, props) => ({
      touch: {
        ...state.touch,
        [name]: true
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      productsService.create(this.state.product)
        .then(product => this.setState({ isCreated: true }))
        .catch(error => {
          const { message, errors } = error.response?.data || { message: error.message };
          this.setState({
            errors: {
              ...errors,
              title: !errors && message
            },
            touch: {
              ...errors,
              title: !errors && message
            }
          })
        })
    }
  }

  isValid = () => {
    const { errors } = this.state;
    return !Object.keys(errors).some(error => errors[error]);
  }

  render() {
    const { product, errors, touch, isCreated } = this.state;

    if (isCreated) {
      return (<Redirect to="/" />)
    }

    return (
      <div className="row row-cols-2">
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa fa-tag fa-fw"></i></span>
              <input type="text" name="title" className={`form-control ${(touch.title && errors.title) ? 'is-invalid' : ''}`} placeholder="Product name..."
                value={product.title} onBlur={this.handleBlur} onChange={this.handleChange} />
              <div className="invalid-feedback">{errors.title}</div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa fa-edit fa-fw"></i></span>
              <textarea name="description" className={`form-control ${(touch.description && errors.description) ? 'is-invalid' : ''}`} placeholder="Product description..."
                value={product.description} onBlur={this.handleBlur} onChange={this.handleChange}></textarea>
              <div className="invalid-feedback">{errors.description}</div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa fa-money fa-fw"></i></span>
              <input type="number" name="price" className={`form-control ${(touch.price && errors.price) ? 'is-invalid' : ''}`} placeholder="Product price..."
                value={product.price} onBlur={this.handleBlur} onChange={this.handleChange} />
              <div className="invalid-feedback">{errors.price}</div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa fa-picture-o fa-fw"></i></span>
              <input type="text" name="image" className={`form-control ${(touch.image && errors.image) ? 'is-invalid' : ''}`} placeholder="Product image..."
                value={product.image} onBlur={this.handleBlur} onChange={this.handleChange} />
              <div className="invalid-feedback">{errors.image}</div>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text"><i className="fa fa-tag"></i></label>
              <select name="category" className={`form-control ${(touch.category && errors.category) ? 'is-invalid' : ''}`}
                value={product.category} onBlur={this.handleBlur} onChange={this.handleChange}>
                <option value="men clothing">Men clothing</option>
                <option value="women clothing">Women clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
              <div className="invalid-feedback">{errors.category}</div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.isValid()}>Create Product</button>
          </form>
        </div>
        <div className="col">
          <img className="img-fluid img-thumbnail" src={product.image} alt={product.title} onError={(event) => event.target.src = 'https://via.placeholder.com/150'}/>
        </div>
      </div>
      
    );
  }
}

export default ProductForm;
