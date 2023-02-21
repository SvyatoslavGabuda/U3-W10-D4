import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addOne } from "../redux/actions/actions";

import Job from "./Job";

const AllSearch = () => {
  const allSearch = useSelector((state) => state.saveJob.allSearchedJob);
  const dispatch = useDispatch();

  //   console.log(favJobs);
  return (
    <>
      <Container>
        <h2>All your search</h2>
        <button onClick={() => dispatch(addOne())}>+1</button>
        {allSearch.map((job) => job.map((el) => <Job key={el._id} data={el} />))}
      </Container>
    </>
  );
};
export default AllSearch;
