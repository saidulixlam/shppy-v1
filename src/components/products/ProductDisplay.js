import { Card, Col, Button } from "react-bootstrap";
import './ProductDipaly.css'
const ProductDisplay = (props) => {
    
    return (

        <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '16rem', border: 'none' }}>
                <h3 className="text-center my-4">{props.title}</h3>
                <Card.Img
                    variant="top"
                    src={props.imageUrl}
                    style={{
                        animation: 'enlargeAndMove 2s ease-in-out infinite alternate',
                        transformOrigin: 'center',
                    }}
                    className="imageStyle"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Text className="d-flex justify-content-between">
                        <span>${props.price}</span>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ProductDisplay;
