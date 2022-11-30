import { Container, Row, Jumbotron } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import './styles.css';
import ListWarehouse from '../../Components/Warehouse/ListWarehouse';
import {warehouseGetAll} from '../../Services/Warehouse';
import {warehouseDelete} from '../../Services/Warehouse';
import data from '../../Data/warehouse';


export default function Warehouse() {
  const navigation = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  console.log("warehouse view start");
  
/*useEffect( ()=> {
                    async function fetchData() {
                      let warehouseList = await warehouseGetAll();
                      if(warehouseList== null)
                        console.log("null"); 
                      else{  
                        console.log(warehouseList); 
                        setWarehouses(warehouseList);
                      }
                    }
                    fetchData();
             },
              []);*/



const handleDeletewarehouse = (id) => {
                setLoading(true);
                setTimeout(() => {
                  warehouseDelete(id).then((res) => {
                    if (res.status === 200) {
                      setWarehouses(warehouses.filter((warehouse) => warehouse.warehouseIdentifier.identifier !== id));
                      setLoading(false);
                    }
                  });
                });
              };


    const handleUpdatewarehouse = (id) => {
        navigation(`/warehouse/edit/${identifier}`)
    };
  


useEffect(() => {
      setLoading(true);
      warehouseGetAll().then((warehouses) => {
          console.log(warehouses);
          setWarehouses(warehouses);
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
        <Jumbotron className='text-center'>
          <Container>
            <h1 className='jumbotron-heading'>List Warehouse</h1>
            <p className='lead text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus velit.
              Ut et viverra mi, vel eleifend dolor. Vestibulum ipsum dui, posuere sit amet ligula a, finibus accumsan sapien</p>
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
                    <h2>Warehouse <b>Management</b></h2>
                  </div>
                  <div className="col-sm-7">
                  <Link to={"./new"} className="btn btn-secondary">
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
                <ListWarehouse warehouses={warehouses} handleDeletewarehouse={handleDeletewarehouse} handleUpdatewarehouse={handleUpdatewarehouse} />
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
