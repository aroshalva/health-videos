import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sectionTitle: {
    color: "#428d7c",
    background: "#ffebc8",
    fontSize: "2rem",
    padding: "5px 15px",
    marginBottom: "15px",
    width: "100%",
  },
}));

export const SectionTitle: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionTitle}>
      <Typography variant="h4">{children}</Typography>
    </div>
  );
};
