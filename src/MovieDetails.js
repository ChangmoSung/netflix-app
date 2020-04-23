import React, { Component } from 'react';
import axios from 'axios'

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: [],
        }
    }

    componentDidMount() {
        console.log(this.props)
        axios({
            url: `https://api.themo;viedb.org/3/movie/${this.props.match.params.movieId}`,
            params: {
              api_key: '3b4c67954d8e2fa03d5382d7619f2ff1',
            }
        }).then(response => {
            const movie = response.data;
            
            this.setState({
                movie
            })
        })
    }

    render() { 
        return ( 
            <div className='single-movie'>
                <div className='single-movie-description'>
                    <h1>{this.state.movie.title}</h1>
                    <h2>{this.state.movie.tagline}</h2>
                    <p>{this.state.movie.overview}</p>
                </div>

                <div className='single-movie-poster'>
                    <img src={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt=''></img>
                </div>
            </div>
        );
    }
}
 
export default MovieDetails;