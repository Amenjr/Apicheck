
import './App.css';
import Users from './component/users';
import {Routes,Route} from 'react-router-dom';
import Details from './component/Details';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Users/>} />
       <Route path='/details/:id' element={<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;
