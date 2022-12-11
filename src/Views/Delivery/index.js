import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListDelivery from '../../Components/Delivery/ListDelivery';
import { deliveryDelete, deliveryGetAll } from '../../Services/Delivery';
import PaginationComponent from '../../Components/Pagination';
export default function Delivery(props) {
  const navigation = useNavigate();
  const [deliverys, setDeliverys] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_DELIVERY_PAGE = 4;

  useEffect(() => {
      const abortController = new AbortController();
    setLoading(true);
    deliveryGetAll(abortController.signal)
      .then((data) => {
        setDeliverys(data);
      })
      .catch((error) => {
         if (abortController.signal.aborted) {
           console.log('The aborted the request', error.message);
         } else {
           console.error('The request failed', error.message);
         }
      })
      .finally(() => {
        setLoading(false);
      });
      return () => {
        abortController.abort();
      };
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

  
    const filtered = useMemo(() => {
      let filteredResult = deliverys;
      setTotalItems(filteredResult.length);
      return filteredResult.slice(
        (currentPage - 1) * ITEMS_DELIVERY_PAGE,
        (currentPage - 1) * ITEMS_DELIVERY_PAGE + ITEMS_DELIVERY_PAGE
      );
    }, [deliverys, currentPage]);

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
                    deliverys={filtered}
                    handleDeleteDelivery={handleDeleteDelivery}
                    handleUpdateDelivery={handleUpdateDelivery}
                  />
                </tbody>
              </table>
            </div>
            <PaginationComponent
              total={totalItems}
              itemsPerPage={ITEMS_DELIVERY_PAGE}
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
