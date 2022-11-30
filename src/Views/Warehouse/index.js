import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import './styles.css'
import {warehouseGetAll} from '../../Services/Warehouse/index.js';
import {warehouseDelete} from '../../Services/Warehouse/index.js';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Warehouse() {
  const [warehouses, setWarehouses] = useState([]);
  
  console.log("warehouse view start");
  
useEffect( ()=> {
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
              []);


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
                  <a href="#" className="btn btn-secondary"> <span>Export to Excel</span></a>
                  <ButtonGroup>
                    <Button className="btn btn-secondary" as={Link} to="/signin">nao usar DUVIDA</Button>
                    <Button className="btn btn-secondary" as={Link} to="/signup">nao usar DUVIDA</Button>
                  </ButtonGroup>
                    
                  </div>
                </Row>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Identifier</th>
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Coordinates</th>
                    <th>Altitude</th>
                  </tr>
                </thead>
                <tbody>
              
                  
                {warehouses && warehouses.map(warehouse =>
                    <tr key={warehouse.idwarehouse}>
                        <td>{warehouse.id}</td>
                        <td>{warehouse.warehouseIdentifier.identifier}</td>
                        <td>{warehouse.designation.warehouseDesignation}</td>
                        <td>{warehouse.address.street}</td>
                        <td>{warehouse.coordinates.latitude},{warehouse.coordinates.longitude}</td>
                        <td>{warehouse.altitude.whAltitude}</td>
                        <td><span className="status text-success">&bull;</span> Active</td>
                        <td>
                          <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                          <a href="#" className="delete" title="Delete" data-toggle="tooltip" onClick='deleteWarehouse()'><i className="material-icons">&#xE5C9;</i></a>
                        </td>

                    </tr>
                )}


                
                
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </main>
      <FooterCompoment />
    </>
  )
}
