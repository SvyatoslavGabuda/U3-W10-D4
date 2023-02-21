import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addOne, removeOne } from "../redux/actions/actions";
import FavJob from "./FavJob";

const stateToProps = (state) => ({
  favCompanies: state.favorite.companies,
  counter: state.favorite.counter,
});

const dispatchToProps = (dispatch) => ({
  addOne: () => {
    dispatch(addOne());
  },
  removeOne: () => {
    dispatch(removeOne());
  },
});

class JustClassComp extends Component {
  render() {
    console.log(this.props.counter);
    return (
      <>
        <Container>
          <Row className="my-4">
            <h2>
              Sono un class component che usa redux <i className="bi bi-rocket-takeoff"></i>
            </h2>
          </Row>
          <Row>
            <button
              onClick={() => {
                this.props.addOne();
              }}
            >
              +1
            </button>
            <p className="text-center my-2">N:{this.props.counter}</p>
            <button onClick={() => this.props.removeOne()}>-1</button>
          </Row>
          <Row>
            <h4>repliclo i preferiti:</h4>
            {this.props.favCompanies.map((job) => (
              <FavJob key={job._id} data={job} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default connect(stateToProps, dispatchToProps)(JustClassComp);
