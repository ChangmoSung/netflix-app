import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Catalogue extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '3b4c67954d8e2fa03d5382d7619f2ff1',
                language: 'en-us',
                sort_by: 'popularity.desc',
                inclulde_adult: 'false',
                include_video: 'false',
                page: '1',
                primary_release_year: '2020',
            }
        }).then(response => {
            const movies = response.data.results;

            this.setState({
                movies
            })
        })
    }

    render() {
        console.log(this.props)
        return ( 
            <div className='movie-catalogue'>
                {this.state.movies.map(movie => {
                    return (
                        <div key={movie.id} className='movie-poster'>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}
 
export default Catalogue;