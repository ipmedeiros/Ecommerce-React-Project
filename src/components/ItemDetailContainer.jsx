import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((products) => {
      const foundProduct = products.find((prod) => prod.id === parseInt(id));
      setProduct(foundProduct);
    });
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;