import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../redux/actions/actions";

const Job = ({ data }) => {
  const myDispatch = useDispatch();
  const savedid = useSelector((state) => state.favorite.companies.map((el) => el._id));

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col>
        {" "}
        <button
          className="saveBtn"
          style={{
            color: savedid.includes(data._id) ? "red" : "black",
          }}
          onClick={() => {
            myDispatch(addToFav(data));
          }}
        >
          <i className="bi bi-heart"></i>
        </button>
      </Col>
    </Row>
  );
};

export default Job;
