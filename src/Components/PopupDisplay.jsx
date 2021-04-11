import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: { height: 0, paddingTop: "56.25%" },
});
export default function PopupDisplay(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="p" component="h4">
              <div>{props.date}</div>
              <div>{props.user_id}</div>
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {props.title}
            </Typography>
            <Typography gutterBottom variant="p" component="h4">
              {props.species_id}
            </Typography>

            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
            <Rating value={props.rating} precision={0.5} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary">
            Share
          </Button>
          <Button variant="contained" color="primary">
            Regulations
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
