
import { useState } from 'react';
import './App.css';
import Bio from './compents/Bio';
import Fullname from './compents/FullName';
import Navbar from './compents/Navbar';
import Photo from './compents/Photo';
import Profession from './compents/Profession';

function App() {
const name ="mazen saada"
const profession="student"
const bio ="software enginering"

 const [text,setText]=useState("")
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
     <Navbar setText={setText} />
     </div>
    </div>
  );
}

export default App;
