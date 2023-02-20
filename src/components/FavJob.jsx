import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REMOVE_FAV } from "../redux/actions/actions";

const FavJob = ({ data }) => {
  const myDispatch = useDispatch();
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
          onClick={() => {
            myDispatch({
              type: REMOVE_FAV,
              payload: data._id,
            });
          }}
        >
          Del From Fav
        </button>
      </Col>
    </Row>
  );
};

export default FavJob;
