import React from "react";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Typography,
  Grid,
  Link,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    minHeight: "100vh",
    backgroundColor: "#002147",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
    },
  },
  cardGridItem: {
    textAlign: "center",
    marginTop: "-40vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
      marginBottom: "2em",
    },
  },
  projectCard: {
    textAlign: "center",
    margin: "auto",
    height: "auto",
    width: 300,
  },
  headContent: {
    textAlign: "center",
    marginTop: "-25vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
    },
  },
  head: {
    color: "#ed1c24",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  projectSummary: {
    marginTop: "1vh",
    color: "#002147",
    fontSize: "1rem",
  },
  viewBtn: {
    backgroundColor: "#ed1c24",
    width: "8vw",
    margin: "2em 0em 2em 0em",
    borderRadius: "20px",
    color: "white",
    textTransform: "none",
    transition: "all .4s ease",
    "&:hover": {
      backgroundColor: "#002147",
      color: "white",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2);",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
}));

const Project = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.data);

  if (!data) {
    return null;
  } else {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        className={classes.aboutPage}
      >
        <Grid item xs={12} className={classes.headContent}>
          <Typography className={classes.head}>Featured Projects</Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardGridItem}>
          <Card elevation={4} className={classes.projectCard}>
            <CardMedia
              component="img"
              alt="Weather Project"
              height="140"
              image="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
              title="Weather Project"
            />
            <CardContent>
              <Typography className={classes.head}>
                {data.projects[0].name}
              </Typography>
              <Typography className={classes.projectSummary}>
                {data.projects[0].summary}
              </Typography>
            </CardContent>
            <Link
              style={{ textDecoration: "none" }}
              href={data.projects[0].githubUrl}
            >
              <Button className={classes.viewBtn}>View</Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    );
  }
};
export default Project;
