import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const myDispatch = useDispatch();
  const savedJobs = useSelector((state) => state.favorite.companies);
  // console.log("salvati", savedJobs);
  let save = [];
  if (savedJobs.length > 0) {
    save = savedJobs.filter((job) => job._id.includes(data._id));
  }
  // console.log("save", save);

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
          style={{
            backgroundColor: save[0] == data ? "red" : "white",
          }}
          onClick={() => {
            myDispatch({
              type: "SAVE_FAV",
              payload: data,
            });
          }}
        >
          Add To Fav
        </button>
      </Col>
    </Row>
  );
};

export default Job;
