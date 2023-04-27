// RouteSelector.js
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const RouteSelector = ({ routes, onRouteSelection }) => {
    const handleColorChange = (routeId, event) => {
        if (event === '#ff0000') {
            onRouteSelection(routeId, event);

        }
        else if (event === null) {

            onRouteSelection(routeId, null);

        }
        else {
            onRouteSelection(routeId, event.target.value);

        }
    };

    return (
        <Form className=''>
            <h3>Select Routes</h3>
            {routes.map((route) => (
                <Row>
                    <Col sm={8}>
                        <Form.Check
                            type="switch"
                            value={route.id}
                            onChange={(e) =>
                                handleColorChange(route.id, e.target.checked ? '#ff0000' : null)
                            }
                            label={route.name.slice(0, 25)}
                            key={route.id}
                        />
                    </Col>
                    <Col sm={4}>
                    <Form.Control type="color" onChange={(e) => handleColorChange(route.id, e)} defaultValue={'#ff0000'} />

                    </Col>

                </Row>
            ))}

        </Form>
    );
};

export default RouteSelector;
