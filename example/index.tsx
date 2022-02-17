import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductsButtons, ProductTitle } from '../.';

const App = () => {
  
const product = {
  id : '1',
  title : 'Coffe Mug - Card !!',
  //img: './coffee-mug.png'
}
  return (
    <div>
      <ProductCard 
          product={ product }
          className='bg-dark text-white'
          initialValues = {{
              count : 4,
              //maxCount: 10
          }}
      >

          {
              ( {reset, increaseBy, count, isMaxCountReached} ) => (
                  <>
                      <ProductImage/>
                      <ProductTitle />
                      <ProductsButtons /> 
                      
                  </>
              )
          }
          
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
