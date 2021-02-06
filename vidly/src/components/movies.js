import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    render() {
        return (
            <h1>basic skeleton</h1>
        );
    }

    handleDelete = (movie) => {
        console.log("movie got deleted");ß
    }
}

export default Movies;
