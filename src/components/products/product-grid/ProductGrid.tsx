import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

interface Props {
  products: Product[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-center">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};


// export const ProductGrid: React.FC<Props> = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-center" style={{ border: '1px solid orange' }}>
//       {products.map((product) => (
//         <ProductGridItem key={product.slug} product={product} />
//       ))}
//     </div>
//   );
// };