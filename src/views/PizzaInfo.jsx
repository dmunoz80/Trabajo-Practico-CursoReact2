import { useContext } from "react";
import { useParams} from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import PizzaContext from "../Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PizzaInfo = () => {
    const { id } = useParams();
    const { pizzas, handleClick } = useContext(PizzaContext);

    const pizzaInfo = pizzas.find(pizza => pizza.id.toString() === id);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <Card className="d-flex flex-row border-success" style={{width: '90rem', marginTop: '5rem'}}>
                <Card.Img variant="top" src={pizzaInfo.img} alt={pizzaInfo.name} />
                <Card.Body>
                    <Card.Title className='bg-warning fs-1 text-center'>{(pizzaInfo.name)}</Card.Title>
                    <Card.Text>
                        {pizzaInfo.desc}
                    </Card.Text>
                    <p className='fw-bold bg-success text-light px-3'>Ingredientes:</p>
                    <ListGroup key={pizzaInfo.id} variant='flush'>
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
                        <Button variant="danger" className='fw-bold bg-success border-success' onClick={() => handleClick(pizzaInfo)}>Añadir🛒</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PizzaInfo;