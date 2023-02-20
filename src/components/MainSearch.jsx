import { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { special } from "../redux/actions/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const findedJobs = useSelector((state) => state.saveJob.jobs);
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const thereIsError = useSelector((state) => state.saveJob.error);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(special(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {thereIsError && <Alert variant="danger"> There was an error with the fetch</Alert>}
          {findedJobs.map((jobData) => jobData.map((el) => <Job key={el._id} data={el} />))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
