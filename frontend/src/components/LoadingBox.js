import { Spinner } from 'react-bootstrap';

export default function LoadionBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
