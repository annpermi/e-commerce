import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://nb.scene7.com/is/image/NB/ml574es2_nb_02_i?$pdpflexf2$&wid=440&hei=440'},
    {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://as-images.apple.com/is/rfb-macbook-air-silver-select-201902?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1548454536059'}
]
const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;