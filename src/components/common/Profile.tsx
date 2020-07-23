import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { User } from "../../../interfaces/user";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginBottom: 15,
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
  },
  back: {
    width: "100%",
    height: "116px",
    position: "absolute",
    top: 0,
    backgroundSize: "cover",
    filter: "blur(2px)",
    zIndex: 1,
  },
  center: {
    textAlign: "center",
  },
});

interface Props {
  user: User;
}

export default function Profile({ user }: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div
        className={classes.back}
        style={{ backgroundImage: `url(${user.avatar})` }}
      ></div>
      <CardContent>
        <Avatar uri={user.avatar} name={user.username} />
        <Typography
          className={classes.center}
          color="textSecondary"
          gutterBottom
        >
          {user.profile}
        </Typography>
        <Typography
          className={classes.center}
          color="textSecondary"
          gutterBottom
        >
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useAvatarStyles = makeStyles({
  avatarWrapper: {
    position: "relative",
    width: "100%",
    height: "230px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: "50px 0 0 0",
    zIndex: 2,
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
});

interface AvatarProps {
  uri: string;
  name: string;
}

function Avatar({ uri, name }: AvatarProps) {
  const classes = useAvatarStyles();
  return (
    <div className={classes.avatarWrapper}>
      <i
        className={classes.avatar}
        style={{ backgroundImage: `url(${uri})` }}
      ></i>
      <h2>{name}</h2>
    </div>
  );
}
