import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";
// import addToCart from "./Products"
const ProductCard = ({ product, handleAddToCart }) => {
  // console.log("product",product.cost);
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product._id}
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography>${product.cost}</Typography>
        <Typography>
          <Rating name="read-only" value={product.rating} readOnly />
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          startIcon={<AddShoppingCartOutlined />}
          variant="contained"
          fullWidth
          name="Add to cart"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
