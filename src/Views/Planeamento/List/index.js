import {Container, Row, Jumbotron} from 'react-bootstrap';
import {useState, useEffect, useMemo} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import ListTravel from '../../../Components/Planeamento/listTravel.Manger';
import {travelGetAll} from '../../../Services/Travel';
import {motion} from "framer-motion";
import PaginationComponent from '../../../Components/Pagination';


export default function Travel({location}) {
    const navigation = useNavigate();
    const [travels, setTravels] = useState([]);
    const [isLoading, setLoading] = useState(false);

    //current page
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    //pagination
    const ITEMS_TRAVEL_PAGE = 5;

    const abortController = new AbortController();

    useEffect(() => {
        selectPage(1);
    }, []);

    const selectPage = async (page) => {
        const offset = (page - 1) * ITEMS_TRAVEL_PAGE;
        setLoading(true);
        await travelGetAll(ITEMS_TRAVEL_PAGE, offset, abortController.signal)
            .then((data) => {
                setTravels(data.data);

                setCurrentPage(offset / ITEMS_TRAVEL_PAGE + 1);
                setPageCount(Math.ceil(data.pagination.total / ITEMS_TRAVEL_PAGE))
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
                <NavbarComponent/>
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
            <motion.main
                initial={{width: "100px"}}
                animate={{width: "100%"}}
                exit={{x: "100%", opacity: 0}}
                transition={{duration: 0.5}}
            >
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
                                <ListTravel travels={travels}/>
                                </tbody>
                            </table>
                        </div>
                        <PaginationComponent
                            total={pageCount}
                            itemsPerPage={ITEMS_TRAVEL_PAGE}
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
