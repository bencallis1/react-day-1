import React from 'react';

import NavBar from '../NavBar/NavBar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: []

        }
    }

    render() {
        return (
            <NavBar props={['one','two','three', 'four']}/>
        )
    }
}

export default Home