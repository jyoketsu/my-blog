import React from "react";
import { useDispatch } from "react-redux";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";
import { ButtonBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { switchThemeType } from "../../redux/actions";
import { useTypedSelector } from "../../redux/reducer/RootState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      width: "100%",
      height: "64px",
      backgroundColor: theme.palette.background.paper,
    },
    grow: {
      flexGrow: 1,
    },
    container: {
      maxWidth: "990px",
      height: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `0 ${theme.spacing(2)}px`,
    },
    left: { display: "flex" },
    right: { display: "flex" },
    logo: {
      width: "30px",
      height: "30px",
      backgroundImage: "url(/logo.png)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    title: {
      display: "none",
      // color: "rgba(0, 0, 0, 0.6)",
      fontSize: "18px",
      fontWeight: "bold",
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      "&:hover": {
        cursor: "pointer",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      // color: fade(theme.palette.common.black, 0.5),
      backgroundColor: fade(theme.palette.background.default, 1),
      "&:hover": {
        backgroundColor: fade(theme.palette.background.default, 1),
      },
      marginLeft: 0,
      marginRight: 8,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const [keyword, setkeyword] = React.useState("");
  const [alert, setalert] = React.useState("");
  const dispatch = useDispatch();
  const themeType = useTypedSelector((state) => state.common.themeType);

  const handleSearch = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      if (keyword) {
        router.push({
          pathname: "/articles",
          query: { keyword: keyword },
        });
      } else {
        setalert("检索内容不能为空！");
      }
    }
  };

  return (
    <div className={classes.appbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <ButtonBase onClick={() => router.push("/")}>
            <i className={classes.logo}></i>
          </ButtonBase>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => router.push("/")}
          >
            徐杰的个人博客
          </Typography>
        </div>
        <div className={classes.grow}></div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="请输入关键字"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={keyword}
            onChange={(e) => setkeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <Tooltip title={`切换为${themeType === "dark" ? "亮色" : "深色"}主题`}>
          <IconButton
            color="inherit"
            onClick={() => dispatch(switchThemeType())}
          >
            {themeType === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
