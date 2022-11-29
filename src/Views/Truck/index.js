import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import './styles.css';
import ListTruck from '../../Components/List';
import { truckDelete, truckGetAll } from '../../Services/Truck';
import data from '../../Data/truck';
export default function Truck() {
  const navigation = useNavigate();
  const [trucks, setTrucks] = useState([data]);
  const [isLoading, setLoading] = useState(false);

  const handleDeletetruck = (id) => {
    setLoading(true);
    setTimeout(() => {
      truckDelete(id).then((res) => {
        if (res.status === 200) {
          setTrucks(trucks.filter((truck) => truck.idTruck !== id));
          setLoading(false);
          // setTimeout(() => {
          //   navigation('/');
          // }, 1000);
        }
      });
    });
  };

  const handleUpdatetruck = (id) => {
    navigation(`/truck/edit/${id}`)
  };

  useEffect(() => {
    setLoading(true);
    truckGetAll()
      .then((trucks) => {
        console.log(trucks);
        setTrucks(trucks);
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
            <h1 className="jumbotron-heading">List Truck</h1>
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
                      Truck <b>Management</b>
                    </h2>
                  </div>
                  <div className="col-sm-7">
                    <Link to={"./new"} className="btn btn-secondary">
                      <span>Add New Truck</span>
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
                    <th>Enroll</th>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Tare</th>
                    <th>BatteryCapacity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ListTruck trucks={trucks} handleDeletetruck={handleDeletetruck} handleUpdatetruck={handleUpdatetruck} />
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
