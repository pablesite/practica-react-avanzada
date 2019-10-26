import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Advert.css"
import Grid from '@material-ui/core/Grid';

class Advert extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.advert._id}`);
  };

  render() {
    const { advert } = this.props;
    return (
      <React.Fragment>


        <Grid key={advert._id}
          onClick={this.goToDetail}
          item xs={10} sm={4}>
          <Card className="card">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {advert.name}
                </Typography>
              </CardContent>

              <CardMedia
                className="media"
                image={`http://localhost:3001${advert.photo}`}
                title={advert.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {advert.description}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {advert.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {advert.tags}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {advert.type}
                </Typography>
              </CardContent>

            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
        </Button>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </Grid >
        {/*         
      </div> */}
      </React.Fragment>
    );
  }
}

export default withRouter(Advert);