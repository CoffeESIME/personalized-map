import { Card, Row, Col } from 'react-bootstrap'
export const Description = () => {
    return (<Row>
        <Col sm={8} className='mx-auto'>

            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Mapas y Senderos</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Esta aplicación permitirá a los usuarios visualizar y personalizar rutas de senderismo en un mapa interactivo.
                        Los usuarios pueden cargar archivos en formato GPX, que luego se convierten en datos GeoJSON y se almacenan en una base de datos.
                        La aplicación muestra las rutas en el mapa, permitiendo a los usuarios seleccionar qué rutas desean visualizar y cambiar el color de cada ruta y crear nuevas.</Card.Subtitle>
                    <Card.Text>
                        <p>Funciones principales:</p>
                        <ul>
                            <li><strong>Carga de archivos GPX:</strong> Los usuarios pueden cargar archivos GPX desde sus dispositivos y guardarlos en la base de datos. La aplicación acepta archivos GPX de aplicaciones populares de GPS como Wikiloc, Strava, etc.</li>
                            <li><strong>Visualización de rutas:</strong> Las rutas se muestran en un mapa interactivo, donde los usuarios pueden explorar y analizar las rutas en detalle. Es posible acercar y alejar el mapa, así como arrastrarlo para navegar por diferentes áreas.</li>
                            <li><strong>Selección y personalización de rutas:</strong> Los usuarios pueden seleccionar qué rutas desean visualizar en el mapa y asignar un color personalizado a cada ruta. Esto facilita la identificación de rutas específicas y la comparación de diferentes rutas.</li>
                            <li><strong>Base de datos de rutas:</strong> Las rutas cargadas se almacenan en una base de datos, lo que permite a los usuarios acceder a ellas en futuras sesiones y compartirlas con otros usuarios.</li>
                        </ul>

                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>

        </Col></Row>)

}