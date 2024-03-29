import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { dataApi } from "../actions/index";
import Loader from "../loader";
import "./Styles.css";

const useStyles = makeStyles((theme) => ({
  aboutPage: {
    minHeight: "40vh",
    backgroundColor: "#002147",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
    },
  },
  imageBox: {
    textAlign: "end",
    [theme.breakpoints.down("sm")]: { textAlign: "center" },
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: "0.5em",
    marginRight: "2vw",
  },
  intro: {
    textAlign: "start",
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "-25%",
    },
  },
  typoHeading: {
    color: "#fff",
    fontSize: "1rem",
  },
  typoName: {
    color: "#ed1c24",
    fontWeight: "bold",
    fontSize: "3rem",
  },
  typoContent: {
    marginTop: "1vh",
    color: "#fff",
    fontSize: "1rem",
    width: "80%",
    [theme.breakpoints.down("xs" | "sm")]: {
      width: "100vw",
    },
  },
  hireBtn: {
    backgroundColor: "#ed1c24",
    width: "8vw",
    marginTop: "1em",
    borderRadius: "20px",
    color: "white",
    textTransform: "none",
    transition: "all .4s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2);",
    },
    [theme.breakpoints.down("sm", "xs")]: {
      width: "20vw",
    },
  },
}));

const handleClick = () => {
  window.scrollTo({
    top: 5000,
    behavior: "smooth",
  });
};
const About = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataApi());
  }, [dispatch]);

  if (!data) {
    return <Loader />;
  } else {
    return (
      <>
        <Grid
          className={classes.aboutPage}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4} className={classes.imageBox}>
            <img
              className={classes.img}
              alt="avatar"
              src={data.basics.picture}
            />
          </Grid>
          <Grid item xs className={classes.intro}>
            <Typography className={classes.typoHeading}>
              Hello my name is
            </Typography>

            <Typography className={classes.typoName}>
              {data.basics.name}
            </Typography>
            <Typography className={classes.typoContent}>
              {data.basics.summary}
            </Typography>
            <Button className={classes.hireBtn} onClick={() => handleClick()}>
              Hire me
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
};
export default About;
