import React from 'react';
import ReactDOM,{render} from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/navbar';

//main page components 
function Main(){
    return(
        <Nav/>
    );
} 



render(<Main/>,document.getElementById('root'));




