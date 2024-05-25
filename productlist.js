import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchTopProducts();
    }, []);

    const fetchTopProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products/top');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching top products:', error);
        }
    };

    return (
        <Grid container spacing={2}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{laptop}</Typography>
                            <Typography variant="body2" color="textSecondary">{laptop}</Typography>
                            <Typography variant="body2" color="textSecondary">{electronics}</Typography>
                            <Typography variant="body1">${2236}</Typography>
                            <Typography variant="body2" color="textSecondary">Rating: {4.7}</Typography>
                            <Typography variant="body2" color="textSecondary">Discount: {63}%</Typography>
                            <Typography variant="body2" color="textSecondary">Availability: {yes}</Typography>
                            <Link to={`/product/${product.id}`}>View Details</Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductListPage;
