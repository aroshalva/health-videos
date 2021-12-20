import { makeStyles } from "@material-ui/core";
import { SectionsOfInfluencers } from "allData";
import { InfluencerList } from "App/components/InfluencerList/InfluencerList";
import { SectionTitle } from "App/components/SectionTitle/SectionTitle";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const GuruPeople: React.FC<{
  sectionsOfInfluencers: SectionsOfInfluencers;
}> = ({ sectionsOfInfluencers }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sectionsOfInfluencers.map((item) => (
        <div key={item.name} style={{ marginBottom: "55px" }}>
          <SectionTitle>{item.name}</SectionTitle>

          <InfluencerList influencers={item.list} />
        </div>
      ))}
    </div>
  );
};
