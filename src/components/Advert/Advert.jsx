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
      {/* <div
        key={advert._id}
        onClick={this.goToDetail}
      > */}
{/* Esto del div hace falta. Lo he quitado para probar */}

        {/* 
<p><img src={`http://localhost:3001${advert.photo}`} alt={advert.name} ></img></p>
        <p> {advert.name}</p>
        <p>{advert.description}</p>
        <p>{advert.price}</p>
        <p>{advert.tags}</p>
        <p>{advert.type}</p>

        <br></br> */}

<Grid key={advert._id}
        onClick={this.goToDetail} 
        item xs={10} sm={4}> 
        <Card fullWidth className="card">
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
                <p>{advert.description}</p>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                <p>{advert.price}</p>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{advert.tags}</p>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{advert.type}</p>
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