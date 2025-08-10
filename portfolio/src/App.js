
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';


//some functions the whole app need:
/*
  -dark light theme togle
  -information on about how to contact me
  -consistent nice colour theme 
    -needs to work with both light and dark
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>

        {/*catch all route*/}
        

        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
