import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginBottom: 15,
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
  },
});

export default function Profile() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          关于
        </Typography>
        <Typography variant="body2" component="p">
          其他内容
        </Typography>
        <Typography variant="body2" component="p">
          其他内容
        </Typography>
        <Typography variant="body2" component="p">
          其他内容
        </Typography>
        <Typography variant="body2" component="p">
          <span>邮箱：</span>
          <span>jyoketsu@gmail.com</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
