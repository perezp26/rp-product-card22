# RP-Proudct-Card22

Este es un paquete de pruebas de despliegue en NPM

### Raúl Pérez

##Ejemplo
```
  import { ProductCard, ProductImage, ProductsButtons, ProductTitle }  from 'rp-product-card22
```
```
<ProductCard 
    key= { product.id }
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
```