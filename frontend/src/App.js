import { 
    BrowserRouter , 
    Routes , 
    Route ,
} from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollTop from './components/ScrollTop';

import {
  Home  , Season , Episode , Movie , SeasonEpisodes ,  Category, Search ,  NotFound 
} from "./pages"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ScrollTop/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path = '/category/:id' element = {<Category/>} />
          <Route path = '/film/:id' element = {<Movie/>} />
          <Route path = '/episode/:id' element = {<Episode/>} />
          <Route path = '/season/:id' element = {<Season/>} >
              <Route path = 'episodes' element = {<SeasonEpisodes/>} />
          </Route>
          <Route path='/search' element = {<Search/>} /> 
          
          <Route path='*' element = {<NotFound/>} />
        </Routes>  
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
