import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import PizzaContext from "../Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PizzaInfo = () => {
    const { id } = useParams();
    const { pizzas, handleClick } = useContext(PizzaContext);

    const pizzaInfo = pizzas.find(pizza => pizza.id.toString() === id);

    return (
        <div className="card-container d-flex flex-wrap justify-content-center">
            <Card className="d-flex flex-row" style={{width: '90rem', marginTop: '5rem'}}>
                <Card.Img variant="top" src={pizzaInfo.img} alt={pizzaInfo.name} />
                <Card.Body>
                    <Card.Title className='title'>{(pizzaInfo.name)}</Card.Title>
                    <Card.Text>
                        {pizzaInfo.desc}
                    </Card.Text>
                    <p className='fw-bold'>Ingredientes:</p>
                    <ListGroup key={pizzaInfo.id} variant='flush' className='ingredients'>
                        {pizzaInfo.ingredients.map((ingredients,) => (
                            <ListGroup.Item key={ingredients}>
                                🍕{ingredients}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr />
                    <span className="fw-bold fs-2">
                        Precio: ${pizzaInfo.price}
                    </span>
                    <div className='d-flex flex-row justify-content-around'>
                        <Link to={'/'}>
                            <Button variant="info" className='fw-bold'>Volver🍕</Button>
                        </Link>
                        <Button variant="danger" className='fw-bold' onClick={() => handleClick(pizzaInfo)}>Añadir🛒</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PizzaInfo;