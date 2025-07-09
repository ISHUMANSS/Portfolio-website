
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='error' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
