//Thanks to: https://codepen.io/jeremywynn/pen/AvHuJ

import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./wdLoader.css";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <svg
          width="116px"
          height="130px"
          viewBox="0 0 116 130"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <description></description>
          <defs>
            <linearGradient id="gradient-1" x1="0%" x2="41%" y1="100%" y2="17%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0%" x2="103%" y1="0%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0%" x2="42%" y1="0%" y2="82%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
            <linearGradient id="gradient-4" x1="15%" x2="5%" y1="0%" y2="20%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
            <linearGradient id="gradient-5" x1="97%" x2="0%" y1="0%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
            <linearGradient
              id="gradient-6"
              x1="81%"
              x2="47%"
              y1="100%"
              y2="32%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.9)" }}
              />
              <stop
                offset="54%"
                style={{ stopColor: "rgba(255,255,255,0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(255,255,255,0.5)" }}
              />
            </linearGradient>
          </defs>
          <g
            id="loader"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="watch-dogs-loader-1">
              <path
                d="M57,16 L100.30127,41 L100.30127,91 L57,116 L13.6987298,91 L13.6987298,41 L57,16 Z M57,22 L95.1051178,44 L95.1051178,88 L57,110 L18.8948822,88 L18.8948822,44 L57,22 Z"
                id="outer-hexagon-border"
                fill="#ffffff"
              ></path>
              <path
                d="M57,38 L81.2487113,52 L81.2487113,80 L57,94 L32.7512887,80 L32.7512887,52 L57,38 Z M57,46 L74.3205081,56 L74.3205081,76 L57,86 L39.6794919,76 L39.6794919,56 L57,46 Z"
                id="inner-hexagonal-ring"
                stroke="transparent"
                fill="#ffffff"
              ></path>
              <path
                d="M57,22 L95.1051178,44 L95.1051178,88 L57,110 L18.8948822,88 L18.8948822,44 L57,22 Z M57,38 L81.2487113,52 L81.2487113,80 L57,94 L32.7512887,80 L32.7512887,52 L57,38 Z"
                id="outer-hexagonal-ring"
                fill="#3EB5D2"
              ></path>
              <g id="caret-wrapper">
                <g
                  id="caret"
                  transform="translate(39.000000, 113.000000)"
                  fill="#979797"
                >
                  <path
                    d="M33.4285714,3.37097789 L19.0869466,11.8304615 L17.9795302,12.4836769 L16.6730995,10.2688443 L17.7805158,9.6156289 L32.3416249,1.02668134 L33.4285714,0.385540141 L33.4285714,3.37097789 Z"
                    id="right-slant"
                  ></path>
                  <path
                    d="M2.57142857,3.38241804 L16.9195456,11.8224868 L18.0277467,12.4743699 L19.3315127,10.2579676 L18.2233116,9.60608458 L3.65188302,1.03465601 L2.57142857,0.399094569 L2.57142857,3.38241804 Z"
                    id="left-slant"
                  ></path>
                </g>
              </g>
              <g id="outermost-lines">
                <path
                  d="M57.5,16.2886751 L57,16 L56.5,16.2886751 L56.5,66 L57.5,66 L57.5,16.2886751 Z"
                  id="line-1"
                  fill="#677a7e"
                ></path>
                <path
                  d="M114.157677,33 L57,66 L114.157677,33 Z"
                  id="line-2"
                  stroke="#677a7e"
                ></path>
                <path
                  d="M114.157677,99 L57,66 L114.157677,99 Z"
                  id="line-3"
                  stroke="#677a7e"
                ></path>
                <path
                  d="M57.5,115.711325 L57,116 L56.5,115.711325 L56.5,66 L57.5,66 L57.5,115.711325 Z"
                  id="line-4"
                  fill="#677a7e"
                ></path>
                <path
                  d="M57,66 L-0.15767665,99 L57,66 Z"
                  id="line-5"
                  stroke="#677a7e"
                ></path>
                <path
                  d="M57,66 L-0.15767665,33 L57,66 Z"
                  id="line-6"
                  stroke="#677a7e"
                ></path>
              </g>
              <g
                id="inner-triangles"
                transform="translate(14.000000, 16.000000)"
              >
                <polygon
                  id="inner-triangle-1"
                  points="43 0 86.3012702 25 43 50 "
                  style={{ fill: "url(#gradient-1)" }}
                ></polygon>
                <polygon
                  id="inner-triangle-2"
                  points="86.3012702 25 86.3012702 75 43 50 "
                  style={{ fill: "url(#gradient-2)" }}
                ></polygon>
                <polygon
                  id="inner-triangle-3"
                  points="43 50 86.3012702 75 43 100 "
                  style={{ fill: "url(#gradient-3)" }}
                ></polygon>
                <polygon
                  id="inner-triangle-4"
                  points="43 100 -0.301270189 75 43 50 "
                  style={{ fill: "url(#gradient-4)" }}
                ></polygon>
                <polygon
                  id="inner-triangle-5"
                  points="42.9999993 50 -0.301270189 75 -0.301270189 25 "
                  style={{ fill: "url(#gradient-5)" }}
                ></polygon>
                <polygon
                  id="inner-triangle-6"
                  points="43 0 43 50 -0.301270189 25 "
                  style={{ fill: "url(#gradient-6)" }}
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      </Grid>
    </React.Fragment>
  );
};
export default Loading;
