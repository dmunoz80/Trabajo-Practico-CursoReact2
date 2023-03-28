import { useContext } from "react";
import Context from "../Context";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carrito = () => {
    const { ShopCart, AddItem, SubtractItem, total } = useContext(Context);

    return (
        <div>
            <ListGroup className='d-flex flex-column align-items-center mt-5'>
                <ListGroup.Item className='bg-warning bg-opacity-50'>
                    <h2>Detalles del pedido:</h2>
                    {ShopCart.map((e) => (
                        <Card key={e.id} className='d-flex flex-row align-items-center mt-2 gap-3' style={{ width: '50rem' }}>
                            <Card.Img src={e.img} alt={e.name} style={{ width: '7rem' }} />
                            <Card.Title className="text-capitalize">{e.name}</Card.Title>
                            <Card.Body>
                                <div className="d-flex justify-content-end align-items-center gap-3">
                                    <span className='fw-bold'>
                                        ${e.price * e.quantity}
                                    </span>
                                    <Button className='fw-bold bg-warning border-success rounded-circle' onClick={() => SubtractItem(e.id)}>-</Button>
                                    <span className='fw-bold'>
                                        {e.quantity}
                                    </span>
                                    <Button className='fw-bold bg-success border-success rounded-circle' onClick={() => AddItem(e.id)}>+</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                    <h3 className="fw-bold  mt-3">Total: ${total}</h3>

                    <Button className='fw-bold mx-3 bg-success'>Ir a Pagar</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Carrito;