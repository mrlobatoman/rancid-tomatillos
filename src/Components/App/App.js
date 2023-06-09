import React, { Component } from 'react';
import { fetchMovie, fetchAllMovies } from '../data/apiCalls'
import Header from '../Header/Header';
import MoviesContainer from '../Movies/MoviesContainer'
import './App.css';
import '../Movies/MoviesContainer.css'
import SingleMovie from '../Movies/singleMovie'
import { Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clicked: false,
      singleMovieDetails: {},
      err: ''
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => this.setState({ movies: data.movies, clicked: false }))
      .catch(() => {this.setState({err: 'Refresh Page'})})
  }

  viewMovie = (id) => {
    const findMovie = this.state.movies.find(movie => movie.id === id)
    fetchMovie(findMovie.id)
      .then(data => this.setState({ singleMovieDetails: data.movie, clicked: false }))
      .catch(() => {this.setState({err: 'Refresh Page'})})   
  }

  render() {
    if(this.state.err === 'Refresh Page') {
      return (<h1>Refresh Page</h1>)
    }
    return(
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/:id' render={({ match }) => <SingleMovie filteredMovie={this.state.singleMovieDetails} key ={match.params.id} id={match.params.id} />} />
            <Route path='/' render={() => <MoviesContainer className='movies-container' viewMovie={this.viewMovie} movieDetails = { this.state.movies } />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
