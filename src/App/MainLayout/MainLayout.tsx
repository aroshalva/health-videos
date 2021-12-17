import { makeStyles, Tab, Tabs, Theme } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import React, { useState } from "react";
import { routerPaths } from "./routerPaths";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(routerPaths.intermittentFasting.path);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string
  ) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="on"
        className={classes.tabs}
        onChange={handleChange}
        value={value}
      >
        <Tab
          label="Intermittent Fasting"
          icon={<PhoneIcon />}
          value={routerPaths.intermittentFasting.path}
        />

        <Tab
          label="Ketogenic Diet"
          icon={<FavoriteIcon />}
          value={routerPaths.ketogenicDiet.path}
        />

        <Tab
          label="Bread is Poison"
          icon={<ShoppingBasket />}
          value={routerPaths.breadIsPoison.path}
        />

        <Tab
          label="Sugar is Poison"
          icon={<ThumbDown />}
          value={routerPaths.sugarIsPoison.path}
        />

        <Tab
          label="Oils that are Poison"
          icon={<ThumbUp />}
          value={routerPaths.oilsThatArePoison.path}
        />

        <Tab
          label="Good Youtube Channels"
          icon={<PersonPinIcon />}
          value={routerPaths.goodYoutubeChannels.path}
        />

        <Tab
          label="Guru People"
          icon={<HelpIcon />}
          value={routerPaths.guruPeople.path}
        />
      </Tabs>

      {children}
    </div>
  );
};
