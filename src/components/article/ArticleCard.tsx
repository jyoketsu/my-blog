import React, { MouseEvent } from "react";
import { useRouter } from "next/router";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Tag from "../common/Tag";
import Info from "../article/ArticleInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 15,
      boxShadow: "none",
      "&:hover": {
        filter: "brightness(0.9)",
      },
      "@media (max-width: 768px)": {
        "&:hover": {
          filter: "unset",
        },
      },
    },
    actionArea: {
      display: "flex",
      "@media (max-width: 768px)": {
        flexDirection: "column-reverse",
      },
    },
    details: {
      width: "100%",
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
      "@media (max-width: 768px)": {
        width: "100%",
        height: "220px",
      },
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

export default function ArticleCard({ aritcle }) {
  const classes = useStyles();
  const router = useRouter();

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    router.push(`/article/${aritcle._id}`);
  }

  function handleClickCategory(e: MouseEvent) {
    e.stopPropagation();
    router.push({
      pathname: "/articles",
      query: { category: aritcle.category._id },
    });
  }

  const tags = aritcle.tags;

  return (
    <div>
      <Card className={classes.root} onClick={(e) => handleClick(e)}>
        <CardActionArea className={classes.actionArea}>
          <div className={classes.details}>
            <div className={classes.content}>
              <Typography className={classes.title} variant="h6">
                {aritcle.title}
              </Typography>
              <Typography className={classes.title} variant="body2">
                {aritcle.snippet}
              </Typography>
              <div className={classes.infoWrapper}>
                <Info
                  info={aritcle.category.name}
                  onClick={handleClickCategory}
                />
                {tags.map((tag: any, index: number) => (
                  <Tag
                    id={tag._id}
                    key={index}
                    text={tag.name}
                    color={tag.color}
                  />
                ))}
              </div>
              <div className={classes.infoWrapper}>
                <Info
                  info={moment(aritcle.createTime).format("YYYY年MM月DD日")}
                />
                <Info info={`阅读数：${aritcle.viewCount}`} />
              </div>
            </div>
          </div>
          {aritcle.cover ? (
            <CardMedia
              className={classes.cover}
              image={aritcle.cover}
              title={aritcle.title}
            />
          ) : null}
        </CardActionArea>
      </Card>
    </div>
  );
}
