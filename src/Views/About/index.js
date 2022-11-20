import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Carousel from '../../Components/Carousel';
import ImgTRuck from './../../Components/Carousel/imgFrist.jpg'
export default function About() {
    return (
        <>
            <header><NavbarComponent /></header>
            <main>
                <Carousel />
                <Container className='marketing'>
                <Row className='mt-4'>
                        <Col className='lg-4'>
                            <figure >
                                <img className='rounded-circle '
                                    alt='' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' />
                            </figure>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </Col>
                        <Col className='lg-4'>
                            <figure>
                                <img className='rounded-circle'
                                    alt='' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' />
                            </figure>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </Col>
                        <Col className='lg-4'>
                            <figure>
                                <img className='rounded-circle'
                                    alt='' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' />
                            </figure>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </Col>
                    </Row>
                    <hr className="featurette-divider"/>
                    <Row className='mt-4'>
                        <Col className='md-7'>
                            <h3 className='featurette-heading'>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button variant="info">Info</Button>
                        </Col>
                        <Col className='md-5'>
                            <figure>
                                <img
                                    className="d-block w-100 featurette-image img-fluid mx-auto"
                                    src={ImgTRuck}
                                    alt="First slide"
                                />
                            </figure>
                        </Col>
                    </Row>
                    <hr className="featurette-divider"/>
                    <Row className='mt-4'>
                        <Col className='md-5'>
                            <figure>
                                <img
                                    className="d-block w-100 featurette-image img-fluid mx-auto"
                                    src={ImgTRuck}
                                    alt="First slide"
                                />
                            </figure>
                        </Col>
                        <Col className='md-7'>
                            <h3 className='featurette-heading'>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Button variant="info">Info</Button>
                        </Col>
                    </Row>
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}