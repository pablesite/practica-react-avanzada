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
                        <p>Welcome {this.props.name}!</p>
                        <p>
                            {
                                this.props.role === 'admin'
                                    ?
                                    'You are Admin'
                                    :
                                    'You are User'
                            }
                        </p>

                        <p>Remember that you will find a selection of adverts filtered by {this.props.tag}</p>

                    </div>
                
        
            </React.Fragment>
        );
    }
}