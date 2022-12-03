import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListDelivery from '../../Components/Delivery/ListDelivery';
import { deliveryDelete, deliveryGetAll } from '../../Services/Delivery';

export default function Delivery(props) {
  const navigation = useNavigate();
  const [deliverys, setDeliverys] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    deliveryGetAll()
      .then((deliverys) => {
        console.log(deliverys);
        setDeliverys(deliverys);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteDelivery = (id) => {};

  const handleUpdateDelivery = (id) => {
    if (!id === undefined) return null;
    navigation(`./edit/${id}`);
  };

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
            <h1 className="jumbotron-heading">Deliveries List</h1>
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
                      Delivery <b>Management</b>
                    </h2>
                  </div>
                  <div className="col-sm-7">
                    <Link to={'./new'} className="btn btn-secondary">
                      <span>Add New Delivery</span>
                    </Link>
                    <a href="#" className="btn btn-secondary">
                      {' '}
                      <span>Export to Excel</span>
                    </a>
                  </div>
                </Row>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Identifier</th>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Warehouse</th>
                    <th>Time Load Truck</th>
                    <th>Time Unload Truck</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  <ListDelivery
                    deliverys={deliverys}
                    handleDeleteDelivery={handleDeleteDelivery}
                    handleUpdateDelivery={handleUpdateDelivery}
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
