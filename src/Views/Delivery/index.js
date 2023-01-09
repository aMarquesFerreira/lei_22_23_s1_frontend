import {Container, Row, Jumbotron, InputGroup, Form, Col} from 'react-bootstrap';
import {useState, useEffect, useMemo} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import ListDelivery from '../../Components/Delivery/ListDelivery';
import {deliveryGetAll} from '../../Services/Delivery';
import PaginationComponent from '../../Components/Pagination';
import {motion} from "framer-motion";

export default function Delivery({location}) {
    const navigation = useNavigate();

    const [deliverys, setDeliverys] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // pagination
    const [offset, setOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    // filters
    const [filterMinWeight, setFilterMinWeight] = useState(null)
    const [filterMaxWeight, setFilterMaxWeight] = useState(null)

    const ITEMS_DELIVERY_PAGE = 4;

    const abortController = new AbortController();

    useEffect(() => {
        setLoading(true);
        updatePage(1).then(() => setLoading(false));
    }, []);

    useEffect(() => {
        updatePage();
    }, [offset, filterMinWeight, filterMaxWeight]);

    const selectPage = (page) => setOffset((page - 1) * ITEMS_DELIVERY_PAGE);

    const updatePage = async () => {
        let filters = {};
        if (filterMinWeight != null) {
            filters = {...filters, minWeight: filterMinWeight}
        }
        if (filterMaxWeight != null) {
            filters = {...filters, maxWeight: filterMaxWeight}
        }
        await deliveryGetAll(offset, ITEMS_DELIVERY_PAGE, filters, abortController.signal)
            .then((data) => {
                setDeliverys(data.delivery);

                setCurrentPage(offset / ITEMS_DELIVERY_PAGE + 1);
                setPageCount(Math.ceil(data.total / ITEMS_DELIVERY_PAGE))
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDeleteDelivery = (id) => {
    };

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
                <NavbarComponent/>
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
            <motion.main
                initial={{width: "100px"}}
                animate={{width: "100%"}}
                exit={{x: "100%", opacity: 0}}
                transition={{duration: 0.5}}
            >
                <Container>
                    <Row>
                        <InputGroup className="mb-3" as={Col}>
                            <InputGroup.Text id="basic-addon1">Min Weight</InputGroup.Text>
                            <Form.Control
                                placeholder="Enter min weight"
                                aria-label="min weight"
                                aria-describedby="basic-addon1"
                                type="number"
                                value={filterMinWeight || ''}
                                onChange={(e) => setFilterMinWeight(Math.min(e.target.value, 10000))}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" as={Col}>
                            <InputGroup.Text id="basic-addon1">Max Weight</InputGroup.Text>
                            <Form.Control
                                placeholder="Enter max weight"
                                aria-label="max weight"
                                aria-describedby="basic-addon1"
                                type="number"
                                value={filterMaxWeight || ''}
                                onChange={(e) => setFilterMaxWeight(Math.min(e.target.value, 10000))}
                            />
                        </InputGroup>
                    </Row>

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
                        <PaginationComponent
                            total={pageCount}
                            itemsPerPage={ITEMS_DELIVERY_PAGE}
                            currentPage={currentPage}
                            onPageChange={(page) => selectPage(page)}
                        />
                    </div>
                </Container>
            </motion.main>
            <FooterCompoment/>
        </>
    );
}
