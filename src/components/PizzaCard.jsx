import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import Context from '../Context';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PizzaCard = () => {
    const { pizzas, handleClick } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3">
            {pizzas.map((e) => (
                < Card className='border-success mt-5' key={e.id} style={{ width: '18rem'}}>
                    <Card.Img src={e.img} alt={e.name} />
                    <Card.Body>
                        <Card.Title className='fs-3 text-center text-capitalize bg-warning' >{(e.name)}</Card.Title>
                        <hr />
                        <h5 className='fw-bold mt-4 bg-success text-light'>Ingredientes:</h5>
                        <ListGroup variant='flush'>
                            {e.ingredients.map((ingredients, index) => (
                                <ListGroup.Item key={`${e.id}-${index}`}>
                                    🍕{ingredients}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <hr />
                        <h3 className='fw-bold text-center'>
                            Precio: ${e.price}
                        </h3>
                        <div className='d-flex justify-content-around'>
                            <Button
                                onClick={() => navigate(`/pizza/${e.id}`)}
                                className='fw-bold bg-warning border-success'>
                                Ver más
                            </Button>

                            <Button className='fw-bold bg-success border-success' onClick={() => handleClick(e)}>
                                Añadir al carro
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default PizzaCard;