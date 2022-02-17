import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from './data/products';


describe('ProductTitle', () => {

    test('debe de mostar el componente correctamente con el titulo personalizado', () =>{

        const wrapper = render.create(
            <ProductTitle title='Custom Product' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

    test('should debe de mostar el componente con el nombre del producto ', () => { 

        const wrapper = render.create(
           <ProductCard product={ product1 } >
               {
                   () => (
                       <ProductTitle />
                   )
               }
           </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

     })
  
});