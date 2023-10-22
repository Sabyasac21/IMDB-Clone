// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home'
import MoviesList from './components/MoviesList/MoviesList';
import Movie from './components/Movie/Movie';




function App() {
  return (<div className='App'>
    <Router>
      <Header></Header>
      
      <Routes>
        <Route index element = {<Home/>}></Route>
        <Route path='movie/:id' element = {<Movie/>}></Route>
        <Route path='movies/:type' element = {<MoviesList/>}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>
      </Routes>
    </Router>
    

  </div>)

}

export default App;
