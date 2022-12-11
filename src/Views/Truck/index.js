import { Container, Row, Jumbotron, Col } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListTruck from '../../Components/List';
import { truckDelete, truckGetAll } from '../../Services/Truck';
import data from '../../Data/truck';
import PaginationComponent from '../../Components/Pagination';
export default function Truck() {
  const navigation = useNavigate();
  const [trucks, setTrucks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_TRUCK_PAGE = 4;


  const handleDeletetruck = (id) => {
    setLoading(true);
    setTimeout(() => {
      truckDelete(id).then((res) => {
        if (res.status === 200) {
          setTrucks(trucks.filter((truck) => truck.idTruck !== id));
          setLoading(false);
          setTimeout(() => {
            alert(`Truck deleted successfully! ${id}`);
          });
        }
      });
    });
  };

  const handleUpdatetruck = (id) => {
    navigation(`/truck/edit/${id}`);
  };

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    truckGetAll(abortController.signal)
      .then((data) => {
        setTrucks(data);
      })
      .catch((error) => {
        if (abortController.signal.aborted) {
          console.log('The aborted the request');
        } else {
          console.error('The request failed');
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }
  const filtered = useMemo(() => {
    let filteredResult = trucks;
    setTotalItems(filteredResult.length);
    return filteredResult.slice(
      (currentPage - 1) * ITEMS_TRUCK_PAGE,
      (currentPage - 1) * ITEMS_TRUCK_PAGE + ITEMS_TRUCK_PAGE
    );
  }, [trucks, currentPage]);

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
                    <Link to={'./new'} className="btn btn-secondary truck">
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
                    <th>Year</th>
                    <th>Enroll</th>
                    <th>Month</th>
                    <th>Tare</th>
                    <th>BatteryCapacity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ListTruck
                    trucks={filtered}
                    handleDeletetruck={handleDeletetruck}
                    handleUpdatetruck={handleUpdatetruck}
                  />
                </tbody>
              </table>
            </div>
            <PaginationComponent
              total={totalItems}
              itemsPerPage={ITEMS_TRUCK_PAGE}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </Container>
      </main>
      <FooterCompoment />
    </>
  );
}
