import React from "react";
import { Route, Switch } from "react-router";
import { SignUp, SignIn, Reset, ProductEdit, ProductList } from "./templates";
import Auth from "./Auth";
import { TestTemplate } from "./practiceOfAtomicDesign/templates/TestTemplate";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signin/reset" component={Reset} />
      {/* testはAtomic Designの学習で作成したコンポーネント */}
      <Route exact path="/test" component={TestTemplate} />
      <Auth>
        <Route exact path="(/)?" component={ProductList} />
        <Route path="/product/edit(/:id)?" component={ProductEdit} />
      </Auth>
    </Switch>
  );
};

export default Router;
