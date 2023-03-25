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
                <NavLink to='/' style={{textDecoration: 'none'}}>
                    <Navbar.Brand className='fw-bold' style={{color: '#fff'}}>
                        🍕Pizzeria Mamma Mia!
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavLink to='/cart' className='fw-bold' style={{textDecoration: 'none', color: '#fff'}}>
                            🛒 ${total}
                        </NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav;