import React, {Component} from 'react';

class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    render() {
        fetch('http://localhost:3000/')
            .then(response => response.json()).then(data => {
                this.setState({
                    data: JSON.stringify(data)
                })
            }
        );

        return(
            <div>
                {this.state.data}
            </div>
        );
    }
}

export default FetchTest;