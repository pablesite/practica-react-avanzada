import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AdvertList from '../AdvertList/AdvertList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from "@material-ui/styles";


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adverts: []
        }

        console.log(props)
        this.goHome = this.goHome.bind(this);
        this.goForward = this.goForward.bind(this);


    }

    componentDidMount() {
        // if (this.checkUserExist()) {
        // this.getAdvert();
        // }

        const { totalAdverts, numberPerPage, adverts } = this.props;
        const pagesNumber = totalAdverts / numberPerPage;


        var temp = [];
        var doubles = adverts.map(function (x, key) {
            console.log(numberPerPage)
            if (key< numberPerPage){
                temp.push(x)
            }
            return temp;
        });


        this.setState({ adverts: temp });


    }

    goHome() {
        this.props.history.push('/home');
    }

    goForward() {

    }

    render() {
        //const { advert } = this.state;
        const { adverts } = this.state;


        return (
            <React.Fragment>
                <Grid container alignItems='center' alignContent='center' spacing={5}>

                    <AdvertList adverts={adverts} />

                    <Button
                        onClick={this.goForward}
                        variant="contained"
                        color="secondary"
                    >
                        Go Forward
                    </Button>
                </Grid>
            </React.Fragment>
        )
    }
}


export default withRouter(Pagination);