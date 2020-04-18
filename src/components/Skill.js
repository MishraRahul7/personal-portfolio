import React from "react";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import checkBold from "@iconify/icons-mdi/check-bold";
import codeBracesBox from "@iconify/icons-mdi/code-braces-box";
import databaseIcon from "@iconify/icons-mdi/database";
import tableSettings from "@iconify/icons-mdi/table-settings";

const useStyles = makeStyles((theme) => ({
  skillPage: {
    minHeight: "100vh",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
    },
  },
  headContent: {
    textAlign: "center",
    marginTop: "-25vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
    },
  },
  head: {
    color: "#002147",
    // color: "#ed1c24",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  aboutSkill: {
    marginTop: "2vh",
    color: "#002147",
    fontSize: "1rem",
  },
  paper: {
    height: 250,
    width: 250,
    margin: "auto",
    color: "white",
    padding: theme.spacing(2),
    backgroundColor: "#002147",
  },
  paperOnXs: {
    textAlign: "center",
    marginTop: "-40vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10vh",
      marginBottom: "2em",
    },
  },
  head2: {
    textAlign: "center",
    color: "white",
    // color: "#ed1c24",
    fontSize: "1.3rem",
    marginTop: "-2em",
  },
  icon: {
    color: "white",
    width: "2.5em",
    height: "2.5em",
    padding: "15px",
    top: -50,
    backgroundColor: "#ed1c24",
    position: "relative",
    borderRadius: "50%",
  },
}));

const Skill = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.data);
  if (!data) {
    return null;
  } else {
    return (
      <Grid
        className={classes.skillPage}
        container
        justify="center"
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.headContent}>
          <Typography className={classes.head}>Skills Overview</Typography>
          <Typography className={classes.aboutSkill}>
            Below is a quick overview of my main technical skill sets and tools
            I use.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.paperOnXs}>
          <Paper elevation={4} className={classes.paper}>
            <Icon icon={codeBracesBox} className={classes.icon}></Icon>
            <Typography className={classes.head2}>Frontend</Typography>
            <List>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24"></Icon>
                <Typography>{data.skills[0].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24" />
                <Typography>{data.skills[1].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24" />
                <Typography>{data.skills[5].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24" />
                <Typography>{data.skills[6].name}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.paperOnXs}>
          <Paper elevation={4} className={classes.paper}>
            <Icon icon={databaseIcon} className={classes.icon}></Icon>
            <Typography className={classes.head2}>Backend</Typography>
            <List>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24"></Icon>
                <Typography>{data.skills[2].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24" />
                <Typography>{data.skills[3].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24" />
                <Typography>{data.skills[4].name}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.paperOnXs}>
          <Paper elevation={4} className={classes.paper}>
            <Icon icon={tableSettings} className={classes.icon}></Icon>
            <Typography className={classes.head2}>Others</Typography>
            <List>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24"></Icon>
                <Typography>{data.skills[7].name}</Typography>
              </ListItem>
              <ListItem>
                <Icon icon={checkBold} color="#ed1c24"></Icon>
                <Typography>{data.skills[10].name}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};
export default Skill;
