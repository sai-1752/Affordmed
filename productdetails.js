import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProductDetail(productId);
    }, [productId]);

    const fetchProductDetail = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product detail:', error);
        }
    };

    if (!product) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <div>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">Company: {product.company}</Typography>
            <Typography variant="body1">Category: {product.category}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Typography variant="body2">Rating: {product.rating}</Typography>
            <Typography variant="body2">Discount: {product.discount}%</Typography>
            <Typography variant="body2">Availability: {product.availability}</Typography>
        </div>
    );
};

export default ProductDetailPage;
