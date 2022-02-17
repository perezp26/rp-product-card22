import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from './data/products';


describe('ProductImge', () => {

    test('debe de mostar el componente correctamente con la imagen personalizado', () =>{

        const wrapper = render.create(
            <ProductImage img='' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

    test('should debe de mostar el componente con la imagen del producto ', () => { 

        const wrapper = render.create(
           <ProductCard product={ product2 } >
               {
                   () => (
                       <ProductImage />
                   )
               }
           </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

     })
  
});