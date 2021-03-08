
function Product({ id, title, description, price, image, category, titleMaxWords, descriptionMaxChars, onClickDelete }) {
  return (
    <div className="card border-0">
      <img src={image} className="card-img-top" alt={title} style={{ width: '100%', height: '100px', objectFit: 'contain' }}/>
      <div className="card-body">
        <h5 className="card-title">{title.split(' ').slice(0, titleMaxWords).join(' ')}</h5>
        <p className="card-text">{description.slice(0, descriptionMaxChars)}...</p>
        <div class="d-grid gap-2">
          <button className="btn btn-danger" onClick={() => onClickDelete(id)}><i className="fa fa-trash-o" /> Delete</button>
        </div>
      </div>
    </div>
  );
}

Product.defaultProps = {
  titleMaxWords: 4,
  descriptionMaxChars: 100
}

export default  Product;
