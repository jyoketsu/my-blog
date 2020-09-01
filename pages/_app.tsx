import React, { useEffect } from "react";
import "../styles.css";
import PropTypes from "prop-types";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { wrapper } from "../src/redux/store";
import { useTypedSelector } from "../src/redux/reducer/RootState";
import { useDispatch } from "react-redux";
import { switchThemeType } from "../src/redux/actions";

function MyApp(props) {
  const { Component, pageProps } = props;
  const themeType = useTypedSelector((state) => state.common.themeType);
  const dispatch = useDispatch();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const sessionThemeType = sessionStorage.getItem("theme-type");
    if (sessionThemeType) {
      dispatch(switchThemeType(sessionThemeType));
    }
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = createMuiTheme({
  //   palette: {
  //     // type: themeType,
  //     type: themeType ? themeType : prefersDarkMode ? "dark" : "light",
  //   },
  // });

  let theme: any;
  const type = themeType ? themeType : prefersDarkMode ? "dark" : "light";
  if (type === "light") {
    theme = createMuiTheme({
      palette: {
        background: {
          default: "#f2f2f3",
        },
        type: "light",
      },
    });
  } else if (type === "dark") {
    theme = createMuiTheme({
      palette: {
        type: "dark",
      },
    });
  }

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
