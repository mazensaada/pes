
import './App.css';
import Bio from './compents/Bio';
import Fullname from './compents/FullName';
import Photo from './compents/Photo';
import Profession from './compents/Profession';

function App() {
const name ="mazen saada"
const profession="student"
const bio ="software enginering"
  return (
    <div className="App">
      <div className='user'>
     <Fullname fff={name}/>
     <Profession profession={profession}/>
     <Bio bio={bio} />
     </div>
     <Photo
      className='img'>
      <img src='./mazen.jpg' alt=''></img> 
     </Photo>

     <div class="email">
  <input type='text' placeholder='email'></input>


  
   </div>
    </div>
  );
}

export default App;
