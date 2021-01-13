import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './components/context';
import Lyrics from './components/tracks/Lyrics';



class App extends Component {
  state = {  }
  render() { 
    return ( 
     
     <Provider>
      <Router>
       <React.Fragment>
         <Navbar/>
         <div className="container">
           <Switch>
             <Route exact path='/' component={Index}/>
             <Route exact path ='/lyrics/trak/:id' component={Lyrics}/>
           </Switch>
         </div>
       </React.Fragment>
      </Router>
    </Provider>
     );
  }
}
 
export default App;
