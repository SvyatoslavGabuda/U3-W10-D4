import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import FavJob from "./FavJob";

const Favorites = () => {
  const favJobs = useSelector((state) => state.favorite.companies);
  console.log(favJobs);
  return (
    <>
      <Container>
        <h2>your favovorite companies:</h2>
        {favJobs.map((job) => (
          <FavJob key={job._id} data={job} />
        ))}
      </Container>
    </>
  );
};
export default Favorites;
