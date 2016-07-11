import React from 'react';
import NavBar from './Navbar';
class App extends React.Component {
    render(){
        return (
           <div>
               <NavBar />
               <section>
                   <h1>Hello from app</h1>
               </section>
           </div>
        )
    }
}

export default App
