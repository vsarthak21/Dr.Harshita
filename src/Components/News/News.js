import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row } from 'react-bootstrap';
import classe from "./News.module.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 430,
        display: "block",
        margin: "auto",
        marginBottom: 20
        // height: 400
    },
    media: {
        height: 140,
    },
});


const News = () => {
    const classes = useStyles();
    return (
        <div id={"news"} className={classe.news}>
            <h1 className={classe.h1}>What's New?</h1>
            <hr className={classe.hrline} ></hr>
            <Row style={{margin:"2%"}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("../../Images/role.jpg")}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Role of Physiotherapy in Pediatric Conditions
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Treating a child is exciting, challenging and enriching. The bigger challenge is to make patients/child feel comfortable and reassured by their surroundings during treatment.
                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a target="_blank" href="https://www.jagranjosh.com/articles/role-of-physiotherapy-in-pediatric-conditions-1594724520-1">Read More</a>

                    </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("../../Images/mobile.jpg")}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Virtual physiotherapy founds to be as effective as in-person treatment
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A new study of 27,000 virtual physiotherapy patients has concluded that digital physiotherapy must become a significant part of the treatment mix post COVID-19.
                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a target="_blank" href="https://www.mobihealthnews.com/news/europe/virtual-physiotherapy-study-shows-it-just-effective-person-treatment">Read More</a>
                    </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require("../../Images/covid.jpg")}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Role of physiotherapy during the treatment of Covid19
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                There have been several studies which have proved that long term exercises has yielded equal and sometimes better results compared to surgery or pharmacotherapy

                </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a target="_blank" href="https://www.greaterkashmir.com/news/opinion/role-of-physiotherapy-in-covid19/">Read More</a>
                    </Button>
                    </CardActions>
                </Card>
            </Row>


        </div>
    );
}

export default News;