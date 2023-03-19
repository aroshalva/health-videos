import { makeStyles } from "@material-ui/core";
import { FoodMap as FoodMapComponent } from "App/components/FoodMap/QuickStart";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const FoodMap: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FoodMapComponent />
    </div>
  );
};
