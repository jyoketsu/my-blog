import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tag from "../common/Tag";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 15,
    },
    details: {
      flex: 1,
      height: 199,
    },
    content: {
      padding: "16px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cover: {
      width: 200,
      height: 199,
    },
    title: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    infoWrapper: {
      marginTop: 7,
    },
    info: {
      display: "inline-block",
      height: "auto",
      marginRight: "8px",
      fontSize: "14px",
      lineHeight: "20px",
      whiteSpace: "nowrap",
      borderRadius: "2px",
      cursor: "default",
      opacity: 1,
    },
  })
);

export default function ArticleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea style={{ display: "flex" }}>
        <div className={classes.details}>
          <div className={classes.content}>
            <Typography className={classes.title} variant="h6">
              禁止蒙层底部页面跟
            </Typography>
            <Typography className={classes.title} variant="body2">
              正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容
            </Typography>
            <div className={classes.infoWrapper}>
              <Typography className={classes.info} color="textSecondary">
                分类名
              </Typography>
              <Tag text="标签" color="#62592C" />
              <Tag text="标签2" color="#EB7A77" />
            </div>
            <div className={classes.infoWrapper}>
              <Typography className={classes.info} color="textSecondary">
                2020-06-02
              </Typography>
            </div>
            <div></div>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://psnine.com/Upload/game/11318.png"
          title="Live from space album cover"
        />
      </CardActionArea>
    </Card>
  );
}
