import { Link } from 'react-router-dom';
import productImg from '../../assets/images/product.png';

function SeasonalProducts() {
  const products = [
    {
      id: 1,
      name: 'TRAMPA DE PEGAMENTO PARA RATAS',
      image: productImg
    },
    {
      id: 2,
      name: 'TRAMPA DE PEGAMENTO PARA CUCARACHAS',
      image: productImg
    },
    {
      id: 3,
      name: 'TRAMPA DE PEGAMENTO PARA INSECTOS',
      image: productImg
    }
  ];

  return (
    <section className="seasonal-products">
      <h2 className="section-title">ESPECIALES DE TEMPORADA</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <Link to={`/product/`} className="more-info-btn">MÁS INFORMACIÓN</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeasonalProducts;