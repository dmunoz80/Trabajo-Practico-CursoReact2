import { useContext } from "react";
import PizzaContext from "../Context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity, total } = useContext(PizzaContext);

    return (
        <div>
            <ListGroup className='d-flex flex-column align-items-center mt-5'>
                <ListGroup.Item className='bg-light'>
                    <h2>Detalles del pedido:</h2>
                    {cart.map((p) => (
                        <Card key={p.id} className='d-flex flex-row align-items-center mt-2' style={{ width: '60rem' }}>
                            <Card.Img variant="top" src={p.img} alt={p.name} style={{ width: '7rem' }} />
                            <Card.Title className="text-capitalize">{p.name}</Card.Title>
                            <Card.Body>
                                <div className="d-flex justify-content-end align-items-center">
                                    <span className='fw-bold mx-1' style={{ color: '#198754' }}>
                                        ${p.price * p.quantity}
                                    </span>
                                    <Button variant="danger" className='fw-bold' onClick={() => decrementQuantity(p.id)}>-</Button>
                                    <span className='mx-2 fw-bold'>
                                        {p.quantity}
                                    </span>
                                    <Button variant="info" className='fw-bold' onClick={() => incrementQuantity(p.id)}>+</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                    <h3 className="fw-bold  mt-3">Total: ${total}</h3>
                    <Link to={'/'}>
                        <Button variant="info" className='fw-bold mx-1'>Volver🍕</Button>
                    </Link>
                    <Button variant="success" className='fw-bold mx-3'>Ir a Pagar</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Cart;