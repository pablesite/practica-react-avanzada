import React, { Component } from 'react';


export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //adverts: []
        }
    }

    render() {
        //const { adverts } = this.state;

        return (
            <React.Fragment>                
                    
                    <div>
                        <p>Welcome {this.props.name} {this.props.surname}!</p>
                        
                        <p>Remember that you will find a selection of adverts filtered by {this.props.tag}</p>

                    </div>
                
        
            </React.Fragment>
        );
    }
}