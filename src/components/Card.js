import { Link } from 'react-router-dom';
import MUICard from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import MUILink from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export const Card = ({ id, name, image, wikiLink }) => {
    const classes = useStyles();

    return (
        <MUICard className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={image}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <MUILink href={wikiLink}>
                    {wikiLink}
                </MUILink>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/person/${id}`}>
                        View
                    </Link>
                </Button>
            </CardActions>
        </MUICard>
    )
}
