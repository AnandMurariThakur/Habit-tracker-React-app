import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addMovies } from "../modules";
import { data } from "../utility/constant";

const Home = (props) => {
  console.log("home");
  const { addMovies, movies } = props;

  useEffect(() => {
    addMovies(data);
  }, [addMovies]);

  useEffect(() => {
    console.log(movies, "store");
  }, [movies]);

  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.addMovies.movies,
});

const mapDispatchToProps = {
  addMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
