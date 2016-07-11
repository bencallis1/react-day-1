import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <NavBar props={['one','two']}/>
                <Footer links={['link1','link2']} />
            </div>

        )
    }
}

export default Home
