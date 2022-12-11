import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import ListTravel from '../../../Components/Planeamento/listTravel.Manger';
import { travelGetAll } from '../../../Services/Travel';
import { truckGetById } from '../../../Services/Truck';
import PaginationComponent from '../../../Components/Pagination';
export default function Travel() {
  const navigation = useNavigate();
  const [travels, settravels] = useState([]);
  const [isLoading, setLoading] = useState(false);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_TRAVEL_PAGE = 4;

  useEffect(() => {
     const abortController = new AbortController();
    setLoading(true);
    travelGetAll(abortController.signal)
      .then((data) => {
        settravels(data);
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
    let filteredResult = travels;
    setTotalItems(filteredResult.length);
    return filteredResult.slice(
      (currentPage - 1) * ITEMS_TRAVEL_PAGE,
      (currentPage - 1) * ITEMS_TRAVEL_PAGE + ITEMS_TRAVEL_PAGE
    );
  }, [travels, currentPage]);
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
                  <ListTravel travels={filtered} />
                </tbody>
              </table>
            </div>
            <PaginationComponent
              total={totalItems}
              itemsPerPage={ITEMS_TRAVEL_PAGE}
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
