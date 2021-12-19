import "./App.scss";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core";
import { MainLayout } from "./MainLayout/MainLayout";
import { allData } from "../allData";
import { IntermittentFasting } from "./routes/IntermittentFasting/IntermittentFasting";
import { KetogenicDiet } from "./routes/KetogenicDiet/KetogenicDiet";
import { BreadIsPoison } from "./routes/BreadIsPoison/BreadIsPoison";
import { SugarIsPoison } from "./routes/SugarIsPoison/SugarIsPoison";
import { OilsThatArePoison } from "./routes/OilsThatArePoison/OilsThatArePoison";
import { Acne } from "./routes/Acne/Acne";
import { GoodYoutubeChannels } from "./routes/GoodYoutubeChannels/GoodYoutubeChannels";
import { GuruPeople } from "./routes/GuruPeople/GuruPeople";

const muiTheme = responsiveFontSizes(createTheme({}), {
  factor: 1.5,
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          <BrowserRouter>
            <MainLayout>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Redirect to={allData.intermittentFasting.path} />
                  )}
                />

                <Route path={allData.intermittentFasting.path}>
                  <IntermittentFasting />
                </Route>

                <Route path={allData.ketogenicDiet.path}>
                  <KetogenicDiet />
                </Route>

                <Route path={allData.breadIsPoison.path}>
                  <BreadIsPoison />
                </Route>

                <Route path={allData.sugarIsPoison.path}>
                  <SugarIsPoison />
                </Route>

                <Route path={allData.oilsThatArePoison.path}>
                  <OilsThatArePoison />
                </Route>

                <Route path={allData.acne.path}>
                  <Acne />
                </Route>

                <Route path={allData.goodYoutubeChannels.path}>
                  <GoodYoutubeChannels />
                </Route>

                <Route path={allData.guruPeople.path}>
                  <GuruPeople />
                </Route>

                <Route path="/admin-control-panel">admin control panel</Route>

                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </MainLayout>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
