import React, { Component } from 'react';
import { Consumer } from '../context';
import Spinner from '../layout/Spinner';

class Tracks extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Consumer>
                    {value =>{
                        const {track_list} = value;
                        if (track_list.length===0||track_list===undefined){
                          return <Spinner/>
                        } else {
                          return <h1>Tracks loaded</h1>
                        }
                    }}
                </Consumer>
            </div>
        );
    }
}
 
export default Tracks;