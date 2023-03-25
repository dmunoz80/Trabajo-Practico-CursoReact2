import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import PizzaContext from '../Context';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PizzaCards = () => {
    const { pizzas, handleClick } = useContext(PizzaContext);
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3">
            {pizzas.map((p) => (
                < Card className='border-success mt-5' key={p.id} style={{ width: '18rem'}}>
                    <Card.Img src={p.img} alt={p.name} />
                    <Card.Body>
                        <Card.Title className='fs-2 text-center bg-warning' >{(p.name)}</Card.Title>
                        <hr />
                        <h5 className='fw-bold mt-4'>Ingredientes:</h5>
                        <ListGroup variant='flush'>
                            {p.ingredients.map((ingredients, index) => (
                                <ListGroup.Item key={`${p.id}-${index}`}>
                                    🍕{ingredients}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <hr />
                        <h3 className='fw-bold text-center'>
                            Precio: ${p.price}
                        </h3>
                        <div className='d-flex justify-content-around'>
                            <Button
                                onClick={() => navigate(`/pizza/${p.id}`)}
                                className='fw-bold bg-warning border-success'>
                                Ver más
                            </Button>

                            <Button className='fw-bold bg-success border-success' onClick={() => handleClick(p)}>
                                Añadir al carro
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default PizzaCards;