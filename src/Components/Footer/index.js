import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FooterCompoment = () => {
  return (
    <>
      <Container className="justify-content-between align-items-center">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
           {/*  <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted mr-2" />
              Home
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted" />
              About
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted" />
              Home
            </li> */}
          </ul>
          <p className="text-center text-muted">© {new Date().getFullYear()} truck, Inc</p>
        </footer>
      </Container>
    </>
  );
};
export default FooterCompoment;
