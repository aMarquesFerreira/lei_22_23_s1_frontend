import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import './styles.css'

export default function Planeamento(){
    return(
        <>
        <header>
        <NavbarComponent />
        <Jumbotron className='text-center'>
          <Container>
            <h1 className='jumbotron-heading' > Planeamento</h1>
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
                    <h2>Truck <b>Management</b></h2>
                  </div>
                  <div className="col-sm-7">
                    <a href="#" className="btn btn-secondary"> <span>Novo Planeamento</span></a>
                  </div>
                </Row>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Enroll</th>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Tare</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><a href="#"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar" /> Michael Holz</a></td>
                    <td>04/10/2013</td>
                    <td>Admin</td>
                    <td><span className="status text-success">&bull;</span> Active</td>
                    <td>
                      <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                      <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                    </td>
                  </tr>
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