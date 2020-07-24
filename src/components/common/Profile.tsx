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
  center: {
    // textAlign: "center",
  },
});

interface Props {
  user: User;
  articleCount: number;
  cagegoryCount: number;
  tagCount: number;
}

export default function Profile({
  user,
  articleCount,
  cagegoryCount,
  tagCount,
}: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <AvatarBackground uri={user.avatar} />
      <CardContent>
        <Avatar uri={user.avatar} name={user.username} />
        <Count
          articleCount={articleCount}
          cagegoryCount={cagegoryCount}
          tagCount={tagCount}
        />
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

interface BackProps {
  uri: string;
}

const useBackStyles = makeStyles({
  back: {
    width: "100%",
    height: "116px",
    position: "absolute",
    top: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  backMask: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    filter: "blur(2px)",
  },
});

function AvatarBackground({ uri }: BackProps) {
  const classes = useBackStyles();
  return (
    <div className={classes.back}>
      <div
        className={classes.backMask}
        style={{ backgroundImage: `url(${uri})` }}
      ></div>
    </div>
  );
}

const useAvatarStyles = makeStyles({
  avatarWrapper: {
    position: "relative",
    width: "100%",
    height: "215px",
    display: "flex",
    flexDirection: "column",
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

const useCountStyles = makeStyles({
  count: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
  },
  bold: {
    fontWeight: "bold",
  },
});

interface CountProps {
  articleCount: number;
  cagegoryCount: number;
  tagCount: number;
}

function Count({ articleCount, cagegoryCount, tagCount }: CountProps) {
  const classes = useCountStyles();
  return (
    <div className={classes.count}>
      <div className={classes.item}>
        <Typography className={classes.bold}>{`${cagegoryCount} `}</Typography>
        <Typography color="textSecondary">个类别</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.bold}>{`${tagCount} `}</Typography>
        <Typography color="textSecondary">个标签</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.bold}>{`${articleCount} `}</Typography>
        <Typography color="textSecondary">篇文章</Typography>
      </div>
    </div>
  );
}
