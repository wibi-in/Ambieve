import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeZero from "./home/homeZero";
import Team from "./pages/team";
import TeamSingle from "./pages/teamSingle";
import Faq from "./pages/faq";
import Error404 from "./pages/error404";
import ComingSoon from "./pages/comingSoon";
import Accordion from "./pages/element/accordion";
import BlogPost from "./pages/element/blogPost";
import Counter from "./pages/element/counter";
import FeatureBox from "./pages/element/featureBox";
import PricingTable from "./pages/element/pricingTable";
import TeamElement from "./pages/element/team";
import Testimonial from "./pages/element/testimonial";
import AboutOne from "./about/aboutOne";
import ServiceOne from "./services/serviceOne";
import ContactOne from "./contact/contactOne";
import Privacy from "./policy/privacy";
import Terms from "./policy/terms";

function MainNavigation() {
  return (
    <Router>
      <Switch>
        {/** Home */}
        <Route path="/" exact={true} component={HomeZero} />
        {/** Pages */}
        {/* <Route path="/team" exact={true} component={Team} />
        <Route path="/teamsingle" exact={true} component={TeamSingle} />
        <Route path="/faq" exact={true} component={Faq} />
        <Route path="/comingsoon" exact={true} component={ComingSoon} />
        <Route path="/loginsuccess" exact={true} component={LoginSuccess} />
        <Route path="/signupsuccess" exact={true} component={SignupSuccess} />
        <Route path="/error404" exact={true} component={Error404} /> */}
        {/** Elements */}
        {/* <Route path="/accordion" exact={true} component={Accordion} />
        <Route path="/blogpost" exact={true} component={BlogPost} />
        <Route path="/counter" exact={true} component={Counter} />
        <Route path="/featurebox" exact={true} component={FeatureBox} />
        <Route path="/pricing" exact={true} component={PricingTable} />
        <Route path="/teamelement" exact={true} component={TeamElement} />
        <Route path="/testimonial" exact={true} component={Testimonial} /> */}
        {/** About Services & Contact */}
        <Route path="/about" exact={true} component={AboutOne} />
        <Route path="/service" exact={true} component={ServiceOne} />
        <Route path="/contact" exact={true} component={ContactOne} />
        {/** Login & Policy */}
        {/* <Route path="/privacy" exact={true} component={Privacy} />
        <Route path="/terms" exact={true} component={Terms} /> */}
        {/** invalid routes redirection */}
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default MainNavigation;
