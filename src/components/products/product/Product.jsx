import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';



function Product({product}) {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.title}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='h2' color='textSecondary'>
                        {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
} 

export default Product
