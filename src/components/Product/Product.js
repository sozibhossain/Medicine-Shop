import React from 'react';
import { Card,} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const {name, price, picture, id} = props.product;

    return (
        <div className="product">
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Title>$ <span>{price}</span></Card.Title>
                    <NavLink to={`/productdetails/${id}`}>
                     <Button variant="primary">Add to Cart</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;