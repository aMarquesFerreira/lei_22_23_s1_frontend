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
import { motion } from "framer-motion";
export default function Warehouse() {
  const navigation = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const abortController = new AbortController();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)
  const [offset, setOffset] = useState(0)

  const ITEMS_WAREHUSE_PAGE = 5;

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
    selectPage(1).then(() => setLoading(false));
  }, []);

  const selectPage = async (page) => {
    console.log(`Selecting ${page}`);
    const offset = (page - 1) * ITEMS_WAREHUSE_PAGE;
    setLoading(true);
    await warehouseGetAll(offset, ITEMS_WAREHUSE_PAGE, abortController.signal)
      .then((data) => {
        setWarehouses(data.warehouse);

        setCurrentPage(offset / ITEMS_WAREHUSE_PAGE + 1);
        setPageCount(Math.ceil(data.total / ITEMS_WAREHUSE_PAGE))
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
                    warehouses={warehouses}
                    handleUpdatewarehouse={handleUpdatewarehouse}
                    handleDeletewarehouse={handleDeletewarehouse}
                  />
                </tbody>
              </table>
            </div>
            <PaginationComponent
              total={pageCount}
              itemsPerPage={ITEMS_WAREHUSE_PAGE}
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
