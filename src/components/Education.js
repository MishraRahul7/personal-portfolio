import React from "react";
import { useSelector } from "react-redux";
import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  educationPage: {
    minHeight: "100vh",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },

  stepperLabel: {
    "& .MuiStepLabel-active": {
      color: "white",
    },
    "& .MuiStepLabel-completed": {
      color: "white",
    },
    "&.Mui-disabled .MuiStepLabel-label": {
      color: "white",
    },
    "& .MuiStepIcon-root": {
      color: "#ed1c24",
    },
  },
  gridHome: {
    minHeight: "100vh",
  },
  gridItem: {
    textAlign: "center",
    marginTop: "-40vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
      marginBottom: "1em",
    },
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Roboto,sens-serif",
  },
  eduPaper: {
    height: "50vh",
    width: "30vw",
    margin: "auto",
    backgroundColor: "#002147",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      height: "auto",
      marginBottom: "1em",
    },
  },
  stepper: {
    backgroundColor: "#002147",
    color: "white",
  },
  // eslint-disable-next-line no-dupe-keys
  stepperLabel: {
    "& .MuiStepLabel-active": {
      color: "white",
    },
    "& .MuiStepLabel-completed": {
      color: "white",
    },
    "&.Mui-disabled .MuiStepLabel-label": {
      color: "white",
    },
    "& .MuiStepIcon-root": {
      color: "#ed1c24",
    },
  },

  endText: {
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor: "#002147",
    color: "white",
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
  eduSummary: {
    marginTop: "2vh",
    color: "#002147",
    fontSize: "1rem",
  },
  nextBtn: {
    backgroundColor: "#ed1c24",
    width: "4vw",
    marginTop: "3em",
    borderRadius: "20px",
    color: "white",
    textTransform: "none",
    transition: "all .4s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2);",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
  backBtn: {
    backgroundColor: "white",
    width: "4vw",
    marginTop: "3em",
    borderRadius: "20px",
    color: "Black",
    textTransform: "none",
    transition: "all .4s ease",
    "&:hover": {
      backgroundColor: "#ed1c24",
      color: "white",
      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2);",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
}));

const Education = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.data);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  if (!data) {
    return null;
  } else {
    return (
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.educationPage}
      >
        <Grid item xs={12} className={classes.headContent}>
          <Typography className={classes.head}>Education</Typography>
          <Typography className={classes.aboutSkill}></Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.gridItem}>
          <Paper elevation={4} className={classes.eduPaper}>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              className={classes.stepper}
            >
              {data.education.map((edu) => {
                return (
                  <Step key={edu}>
                    <StepLabel className={classes.stepperLabel}>
                      {edu.studyType}
                    </StepLabel>
                    <StepContent>
                      <Typography style={{ fontSize: "12px" }}>
                        {edu.institution}
                      </Typography>
                      <Typography style={{ fontSize: "10px" }}>
                        Study Area: {edu.area}
                      </Typography>
                      <Typography style={{ fontSize: "10px" }}>
                        Year: {edu.end.year}{" "}
                      </Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backBtn}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            className={classes.nextBtn}
                            onClick={handleNext}
                          >
                            {activeStep === data.education.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === data.education.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography className={classes.endText}>
                  Education completed - Present-you&apos;re finished
                </Typography>
                <Button
                  onClick={handleReset}
                  style={{ backgroundColor: "white", color: "#282C34" }}
                >
                  Reset
                </Button>
              </Paper>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
};
export default Education;
