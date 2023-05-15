import { makeStyles } from "@material-ui/core";
import { FoodMapItem } from "../FoodMapItem/FoodMapItem";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export const FoodMap: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FoodMapItem imageName="salmon.png" tooltipText="Salmon" />
    </div>
  );
};
