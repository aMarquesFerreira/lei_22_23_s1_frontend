import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import ListTravel from '../../../Components/Planeamento/listTravel.Manger';
import { travelGetAll } from '../../../Services/Travel';

export default function Travel() {
  const navigation = useNavigate();
  const [travels, settravels] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    travelGetAll()
      .then((travels) => {
        console.log(travels);
        settravels(travels);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

  return (
    <>
      <header>
        <NavbarComponent />
        <Jumbotron className="text-center">
          <Container>
            <h1 className="jumbotron-heading">List Travel</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus velit. Ut
              et viverra mi, vel eleifend dolor. Vestibulum ipsum dui, posuere sit amet ligula a,
              finibus accumsan sapien
            </p>
          </Container>
        </Jumbotron>
      </header>
      <main>
        <Container>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <Row>
                  <div className="col-sm-5">
                    <h2>
                      Travel <b>Management</b>
                    </h2>
                  </div>
                  <div className="col-sm-7">
                    <Link to={'./new'} className="btn btn-secondary">
                      <span>Add New Travel</span>
                    </Link>
                  </div>
                </Row>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>departureDate</th>
                    <th>arrivalDate</th>
                    <th>departureTime</th>
                    <th>departureLocation</th>
                    <th>arrivalLocation</th>
                    <th>truck</th>
                  </tr>
                </thead>
                <tbody>
                  <ListTravel
                    travels={travels}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </main>
      <FooterCompoment />
    </>
  );
}
