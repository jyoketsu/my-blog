import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { TagType } from "../../../interfaces/tag";
import Tag from "./Tag";

const useStyles = makeStyles({
  tags: {
    marginBottom: 15,
    boxShadow: "none",
  },
});

interface Props {
  tags: TagType[];
}

export default function Tags({ tags }: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.tags}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          标签
        </Typography>
        {tags.map((tag) => (
          <Tag
            key={tag._id}
            id={tag._id}
            text={tag.name}
            color={tag.color}
            count={tag.count}
            style={{ marginBottom: "8px" }}
          />
        ))}
      </CardContent>
    </Card>
  );
}
