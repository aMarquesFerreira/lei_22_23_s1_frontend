import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListWarehouse from '../../Components/Warehouse/ListWarehouse';
import { warehouseGetAll } from '../../Services/Warehouse';
import { warehouseDelete } from '../../Services/Warehouse';
import data from '../../Data/warehouse';
import PaginationComponent from '../../Components/Pagination';
export default function Warehouse() {
  const navigation = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const ITEMS_TRUCK_PAGE = 4;

  const handleDeletewarehouse = (id) => {
    warehouseDelete(id).then(() => {
      setWarehouses(warehouses.filter((e) => e._id !== id));
    });
    setLoading(true);
    console.log(id);
    setTimeout(() => {
      warehouseDelete(id).then((res) => {
        if (res.status === 200) {
          setWarehouses(
            warehouses.filter((warehouse) => {
              warehouse.WarehouseIdentifier.identifier !== id;
            })
          );
          setLoading(false);
        }
      });
    });
  };

  const handleUpdatewarehouse = (id) => {
    navigation(`/warehouse/edit/${id}`);
  };

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    warehouseGetAll(abortController.signal)
      .then((data) => {
        setWarehouses(data);
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

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

    const filtered = useMemo(() => {
      let filteredResult = warehouses;
      setTotalItems(filteredResult.length);
      return filteredResult.slice(
        (currentPage - 1) * ITEMS_TRUCK_PAGE,
        (currentPage - 1) * ITEMS_TRUCK_PAGE + ITEMS_TRUCK_PAGE
      );
    }, [warehouses, currentPage]);

  return (
    <>
      <header>
        <NavbarComponent />
        <Jumbotron className="text-center">
          <Container>
            <h1 className="jumbotron-heading">List Warehouse</h1>
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
                      Warehouse <b>Management</b>
                    </h2>
                  </div>
                  <div className="col-sm-7">
                    <Link to={'./new'} className="btn btn-secondary">
                      <span>Add New Warehouse</span>
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
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Coordinates</th>
                    <th>Altitude</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ListWarehouse
                    warehouses={filtered}
                    handleUpdatewarehouse={handleUpdatewarehouse}
                    handleDeletewarehouse={handleDeletewarehouse}
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
