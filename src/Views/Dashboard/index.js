import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import ImgTRuck from './../../Components/Carousel/imgFrist.jpg'
import Header from "../../Components/Header";
import { motion } from "framer-motion";

export default function Dashboard({ location }) {

  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <motion.main
        initial={{ width: "100px" }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Container className="pt-3">
          <Row className="mt-4">
            <Col>
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <Button variant="info">Info</Button>
            </Col>
            <Col>
              <figure>
                <img
                  className="d-block w-100 featurette-image img-fluid mx-auto"
                  src={ImgTRuck}
                  alt="First slide"
                />
              </figure>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <figure>
                <img
                  className="d-block w-100 featurette-image img-fluid mx-auto"
                  src={ImgTRuck}
                  alt="First slide"
                />
              </figure>
            </Col>
            <Col>
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <Button variant="info">Info</Button>
            </Col>
          </Row>
        </Container>
      </motion.main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}