import React, { Component } from "react";

import AdvertList from '../AdvertList/AdvertList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.goForward = this.goForward.bind(this);
        this.goBack = this.goBack.bind(this);
        this.updateFilter = this.updateFilter.bind(this);

        this.state = {
            pages: {},
            actualPage: 1,
            advertActualPage: [],
            pagesNumber: 0

        }
    }


    componentDidMount() {
        this.updateFilter();
    }

    componentDidUpdate() {
        const { deactivateFilters, update } = this.props;
        if (update) {
            this.updateFilter();
            deactivateFilters();
        }
    }


    updateFilter(){
        const { totalAdverts, numberPerPage, adverts} = this.props;
        const pagesNumber = Math.ceil(totalAdverts / numberPerPage);
        
        let pages = {}
        let index = 0;
        adverts.forEach(function (advert, key) {
            if ((key) % numberPerPage === 0) {
                index += 1;
                pages = {
                    ...pages,
                    [index]: []
                }
            }
            pages[index].push(advert);
        });

        this.setState({
            pages: pages,
            actualPage: 1,
            advertActualPage: pages[1],
            pagesNumber: pagesNumber,
        })

    }

    goForward() {

        const { pages,  actualPage, pagesNumber } = this.state;

        if (actualPage < pagesNumber) {
            this.setState({
                actualPage: actualPage + 1,
                advertActualPage: pages[actualPage + 1]
            })
        } else {
            this.setState({
                actualPage: 1,
                advertActualPage: pages[1]
            })

        }
    }

    goBack() {

        const { pages, actualPage, pagesNumber } = this.state;

        if (actualPage > 1) {
            this.setState({
                actualPage: actualPage - 1,
                advertActualPage: pages[actualPage - 1]
            })
        } else {
            this.setState({
                actualPage: pagesNumber,
                advertActualPage: pages[pagesNumber]
            })

        }
    }



    render() {
        //const { advert } = this.state;
        const { advertActualPage } = this.state;

        return (
            <React.Fragment>
                <Grid container alignItems='center' alignContent='center' spacing={5}>

                    <AdvertList adverts={advertActualPage} />

                    <Button
                        onClick={this.goBack}
                        variant="contained"
                        color="secondary"
                    >
                        Go Back
                    </Button>

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


//export default withRouter(Pagination);