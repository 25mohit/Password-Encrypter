import './App.css';
import { Home } from './components/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Header />   */}
                <Routes>
                      <Route path='/' exact element={<div><Home /></div>}/>
                </Routes>
      </Router>
    </div>
  );
}

export default App;
