import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import PizzaContext from '../Context';

function Nav() {
    const { total } = useContext(PizzaContext);

    return (
        <Navbar className='navbar bg-success'>
            <Container>
                <NavLink to='/' className='text-decoration-none'>
                    <Navbar.Brand className='fw-bold text-light'>
                        🍕¡Pizzería Mamma Mia!
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavLink to='/ShopCart' className='fw-bold text-light text-decoration-none'>
                        👉Total Carrito de compras: ${total}
                        </NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;