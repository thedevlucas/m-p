import { Link } from 'react-router-dom';
import productImg from '../../assets/images/product.png';

function Equipment() {
  const categories = [
    {
      id: 1,
      name: 'UTILIDADES',
      items: [
        { id: 1, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 2, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 3, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 4, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 5, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg }
      ]
    },
    {
      id: 2,
      name: 'SEGURIDAD',
      items: [
        { id: 6, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 7, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 8, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 9, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 10, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg }
      ]
    },
    {
      id: 3,
      name: 'OTROS',
      items: [
        { id: 11, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 12, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 13, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 14, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg },
        { id: 15, name: 'TRAMPA DE PEGAMENTO PARA INSECTOS', image: productImg }
      ]
    }
  ];

  return (
    <section className="equipment">
      <h2 className="section-title">EQUIPAMIENTO</h2>
      
      {categories.map(category => (
        <div className="equipment-category" key={category.id}>
          <h3>{category.name}</h3>
          <div className="equipment-grid">
            {category.items.map(item => (
              <div className="equipment-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <Link to={`/product`} className="more-info-btn">MÁS INFORMACIÓN</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Equipment;