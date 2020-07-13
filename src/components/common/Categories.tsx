import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CategoryType } from "../../../interfaces/category";

const useStyles = makeStyles({
  categories: {
    marginBottom: 15,
    boxShadow: "none",
  },
  category: {
    fontSize: 14,
    userSelect: "none",
    width: "fit-content",
    "&:hover": { cursor: "pointer" },
  },
});

interface Props {
  categories: CategoryType[];
}

export default function Categories({ categories }: Props) {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push({
      pathname: "/articles",
      query: { category: id },
    });
  };

  return (
    <Card className={classes.categories}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          分类
        </Typography>
        {categories.map((category) => (
          <Typography
            key={category._id}
            className={classes.category}
            gutterBottom
            onClick={() => handleClick(category._id)}
          >{`${category.name}（${category.count}）`}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
