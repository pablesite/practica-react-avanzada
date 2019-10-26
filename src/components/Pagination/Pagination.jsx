import React, { Component } from "react";

import AdvertList from '../AdvertList/AdvertList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.goForward = this.goForward.bind(this);
        this.goBack = this.goBack.bind(this);
        this.updatePages = this.updatePages.bind(this);

        this.state = {
            pages: {},
            actualPage: 1,
            advertActualPage: [],
            pagesNumber: 0

        }
    }


    componentDidMount() {
        this.updatePages();
    }

    componentDidUpdate() {
        const { disableUpdate, update } = this.props;
        if (update) {
            this.updatePages();
            disableUpdate();
        }
    }


    updatePages() {
        const { totalAdverts, numberPerPage, adverts } = this.props;
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

        const { pages, actualPage, pagesNumber } = this.state;

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
        const { advertActualPage, actualPage, pagesNumber } = this.state;
        console.log(this.state)

        return (
            <React.Fragment>
                <Grid container alignItems='center' alignContent='center' spacing={5}>
                    <AdvertList adverts={advertActualPage} />
                </Grid>

                <Grid container alignItems='center' alignContent='space-between' spacing={1} justify='center'>
                        <Grid item xs={1} sm={2}>
                            <Box textAlign="center">
                                <Button
                                    onClick={this.goBack}
                                    variant="text"
                                    color="secondary"
                                >
                                Go Back
                                </Button>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={1} sm={2} alignItems='center' alignContent='center' justify='center'  >
                            <Box textAlign="center">
                                {
                                    // STATE: pages (info anuncios), actualPage (id), advertActualPage, pagesNumber
                                    //             // PROPS: 
                                    // totalAdverts={adverts.length}
                                    // numberPerPage='3'
                                    // adverts={adverts}
                                    // disableUpdate = {disableUpdate}
                                    // update={update}

                                actualPage

                                    // {/* // adverts.map(function (advert1, i) {
                                    // //     return <Advert key={i} advert={advert1}/>
                                    // //     }) */}
                            
                                } of {pagesNumber}
                            </Box>
                         </Grid>

                        <Grid item xs={1} sm={2} >
                            <Box textAlign="center">
                                <Button
                                    onClick={this.goForward}
                                    variant="text"
                                    color="secondary"
                                >
                                Go Forward
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    
            </React.Fragment>
        )
    }
}


//export default withRouter(Pagination);