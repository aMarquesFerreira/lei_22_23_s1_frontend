import { Container, Row, Jumbotron, Col } from 'react-bootstrap';
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListTruck from '../../Components/List';
import { truckDelete, truckGetAll } from '../../Services/Truck';
import data from '../../Data/truck';
import PaginationComponent from '../../Components/Pagination';
import { motion } from "framer-motion";
export default function Truck() {
  const navigation = useNavigate();
  const [trucks, setTrucks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const abortController = new AbortController();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  
  const ITEMS_TRUCK_PAGE_LIMIT = 5;

  useEffect(() => {
    selectPage(1);
  }, []);

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

  
  const selectPage = async (page) => {
    console.log(`Selecting ${page}`);
    const offset = (page - 1) * ITEMS_TRUCK_PAGE_LIMIT;
    setLoading(true);
    await truckGetAll(ITEMS_TRUCK_PAGE_LIMIT, offset, abortController.signal)
      .then((data) => {
        setTrucks(data.data);
        setCurrentPage(offset / ITEMS_TRUCK_PAGE_LIMIT + 1);
        setPageCount(Math.ceil(data.pagination.total / ITEMS_TRUCK_PAGE_LIMIT))
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

  const handleUpdatetruck = (id) => {
    navigation(`/truck/edit/${id}`);
  };

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
      <motion.main
        initial={{ width: "100px" }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
                    <th>Month</th>
                    <th>Enroll</th>
                    <th>Year</th>
                    <th>Tare</th>
                    <th>BatteryCapacity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ListTruck
                    trucks={trucks}
                    handleDeletetruck={handleDeletetruck}
                    handleUpdatetruck={handleUpdatetruck}
                  />
                </tbody>
              </table>
            </div>
            <PaginationComponent
              total={pageCount}
              itemsPerPage={ITEMS_TRUCK_PAGE_LIMIT}
              currentPage={currentPage}
              onPageChange={(page) => selectPage(page)}
            />
          </div>
        </Container>
      </motion.main>
      <FooterCompoment />
    </>
  );
}
