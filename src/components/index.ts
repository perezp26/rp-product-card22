import { ProductCard  as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductsButtons } from './ProductButtons';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductsButtons } from './ProductButtons';

export const ProductCard : ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons
});


export default ProductCard;