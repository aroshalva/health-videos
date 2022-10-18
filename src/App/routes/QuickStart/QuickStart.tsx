import { makeStyles } from "@material-ui/core";
import { QuickStart as QuickStartComponent } from "App/components/QuickStart/QuickStart";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const QuickStart: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <QuickStartComponent />
    </div>
  );
};
