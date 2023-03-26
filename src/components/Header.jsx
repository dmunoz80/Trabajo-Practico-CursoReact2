import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/pizza1.jpg';
import img2 from '../img/pizza2.jpg';
import img3 from '../img/pizza3.jpg';


function Header() {

    return (

    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
        />
    </Carousel.Item>

    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default Header;