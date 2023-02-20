import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import Job from "./Job";

const AllSearch = () => {
  const allSearch = useSelector((state) => state.saveJob.allSearchedJob);
  //   console.log(favJobs);
  return (
    <>
      <Container>
        <h2>All your search</h2>
        {allSearch.map((job) => job.map((el) => <Job key={el._id} data={el} />))}
      </Container>
    </>
  );
};
export default AllSearch;
