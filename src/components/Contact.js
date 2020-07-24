import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-mdi/github";
import stackOverflow from "@iconify/icons-mdi/stackoverflow";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import quoraIcon from "@iconify/icons-mdi/quora";
import twitterIcon from "@iconify/icons-mdi/twitter";

const useStyles = makeStyles((theme) => ({
  contactPage: {
    minHeight: "100vh",
    backgroundColor: "#002147",
  },
  headContent: {
    textAlign: "center",
    height: "auto",
    width: "100%",
    marginTop: "10vh",
    [theme.breakpoints.down("xs" | "sm")]: {
      marginTop: "10vh",
    },
  },
  contactPaper1: {
    textAlign: "center",
    height: "auto",
    width: "100%",
    marginBottom: "2em",
    [theme.breakpoints.down("xs" | "sm")]: {
      marginTop: "10vh",
    },
  },

  getInTouch: {
    textAlign: "center",
    color: "#002147",
    fontSize: "2rem",
    paddingTop: "1em",
  },
  head: {
    color: "white",
    // color: "#ed1c24",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  head2: {
    color: "#ed1c24",
    fontSize: "1rem",
    margin: "2em 0em 1em 0em",
  },
  aboutContact: {
    marginTop: "2vh",
    color: "white",
    fontSize: "1rem",
  },
  headLine: {
    margin: "1em 0em 1em 0em",
    color: "#002147",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  constactImage: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    marginRight: "2vw",
  },
  contact: {
    height: "50vh",
    textAlign: "center",
    width: "30vw",
    margin: "auto",
    backgroundColor: "white",
    [theme.breakpoints.down("xs" | "sm" | "md")]: {
      width: "80vw",
      height: "auto",
      marginBottom: "1em",
    },
  },
  gridHome: {
    minHeight: "100vh",
  },
  gridItem: {
    textAlign: "center",
  },
  title: {
    color: "#282C34",
    textTransform: "uppercase",
    fontFamily: "roboto,serif",
    textAlign: "center",
  },
  contactPaper1_1: {
    height: "auto",
    textAlign: "center",
    width: "30vw",
    margin: "auto",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "auto",
      marginBottom: "2em",
    },
  },
  tagline: {
    textTransform: "none",
    textAlign: "center",
  },
  textField: {
    marginTop: "1vh",
    backgroundColor: "transparent",
    "& .MuiInputLabel-animated": {
      color: "#002147",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
    },
    "& .MuiInputBase-input": {
      color: "#002147",
    },
    "& .MuiInputBase-input:focus": {
      color: "#002147",
    },
    width: "60%",
    padding: 0,
  },
  gridButton: {
    marginTop: "3vh",
  },
  nextBtn: {
    backgroundColor: "#ed1c24",
    width: "4vw",
    marginTop: "1em",
    borderRadius: "20px",
    color: "white",
    textDecoration: "none",
    transition: "all .4s ease",
    marginBottom: "1em",
    "&:hover": {
      backgroundColor: "#002147",
      textDecoration: "none",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2);",
    },
    [theme.breakpoints.down("sm")]: {
      width: "10vw",
      textAlign: "center",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  console.log(data);

  if (!data) {
    return null;
  } else {
    const git = data.basics.profiles[1].url;
    const linkedin = data.basics.profiles[2].url;
    const stackoverflow = data.basics.profiles[4].url;
    const quora = data.basics.profiles[5].url;
    const twitter = data.basics.profiles[3].url;

    return (
      <Grid
        justify="center"
        alignItems="center"
        direction="row"
        container
        className={classes.contactPage}
      >
        <Grid item xs={12} md={12} className={classes.headContent}>
          <Typography className={classes.head}>Contact</Typography>
          <Typography className={classes.aboutContact}>
            If you are interested in hiring me, please use the form below to get
            in touch.
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.contactPaper1}>
          <Paper elevation={4} className={classes.contactPaper1_1}>
            <Typography className={classes.head2}>
              You can also find me on the following channels
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={2} className={classes.gridIcons}>
                <a href={git} rel="noopener noreferrer" target="_blank">
                  <Icon
                    icon={githubIcon}
                    color="#002147"
                    width="40"
                    height="40"
                  />
                </a>
              </Grid>
              <Grid item xs={2} className={classes.gridIcons}>
                <a href={linkedin} rel="noopener noreferrer" target="_blank">
                  <Icon
                    icon={linkedinIcon}
                    color="#002147"
                    width="40"
                    height="40"
                  />
                </a>
              </Grid>
              <Grid item xs={2} className={classes.gridIcons}>
                <a href={quora} rel="noopener noreferrer" target="_blank">
                  <Icon
                    icon={quoraIcon}
                    color="#002147"
                    width="40"
                    height="40"
                  />
                </a>
              </Grid>
              <Grid item xs={2} className={classes.gridIcons}>
                <a href={twitter} rel="noopener noreferrer" target="_blank">
                  <Icon
                    icon={twitterIcon}
                    color="#002147"
                    width="40"
                    height="40"
                  />
                </a>
              </Grid>
              <Grid item xs={2} className={classes.gridIcons}>
                <a
                  href={stackoverflow}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon
                    icon={stackOverflow}
                    color="#002147"
                    width="40"
                    height="40"
                  />
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <a
                href={data.publications[0].website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" className={classes.nextBtn}>
                  Resume
                </Button>
              </a>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.contactPaper1}>
          <Paper elevation={4} className={classes.contactPaper1_1}>
            <Typography className={classes.getInTouch}>Get in touch</Typography>
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        name="message"
                        label="Enter your message"
                        value={body}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.gridButton}
                  >
                    <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
                      <a
                        href={`mailto:${data.basics.email}?subject=${subject} &body=${body}`}
                        target="_top"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          onBlur={handleSubmit}
                          variant="contained"
                          className={classes.nextBtn}
                        >
                          submit
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default Contact;
