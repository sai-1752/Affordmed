import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Select, MenuItem, TextField, Button } from '@material-ui/core';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        company: '',
        rating: '',
        priceRange: '',
        availability: ''
    });
    const [sortOption, setSortOption] = useState('');
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);

    useEffect(() => {
        fetchProducts();
    }, [filters, sortOption, page]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://28.244.56.144/test/companies/AMZ/categories/Laptop/products/top-10?minPrice=1&maxPrice=10000&page=${page}&perPage=${perPage}&category=${filters.category}&company=${filters.company}&rating=${filters.rating}&priceRange=${filters.priceRange}&availability=${filters.availability}&sortOption=${sortOption}`);
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <div>
                <TextField
                    select
                    label="laptop"
                    name="laptop number"
                    value={filters.category}
                    onChange={handleFilterChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    <MenuItem value="Computer">Computer</MenuItem>
                    
                </TextField>
                <Select
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <MenuItem value="">Sort By</MenuItem>
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                </Select>
            </div>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{product.productName}</Typography>
                                <Typography variant="body2" color="textSecondary">Price: ${product.price}</Typography>
                                <Typography variant="body2" color="textSecondary">Rating: {product.rating}</Typography>
                                <Typography variant="body2" color="textSecondary">Discount: {product.discount}%</Typography>
                                <Typography variant="body2" color="textSecondary">Availability: {product.availability}</Typography>
                                <Link to={`/product/${product.productName}`}>View Details</Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div>
                <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</Button>
                <span>{page}</span>
                <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
            </div>
        </div>
    );
};

export default ProductListPage;
