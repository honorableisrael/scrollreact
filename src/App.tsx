import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import { About } from "./Components/Home/About/About";
import { RecruitmentAnalysisForm } from "./Components/Home/Forms/RecruitmentAnalysisForm";
import AssessmentFirstPhase from "./Components/Home/Assesment/AssessmentPhaseone";
import AssessmentFirstPhaseComplete from "./Components/Home/Assesment/AssessmentPhaseonecomplete";
import AssessmentSecondPhase from "./Components/Home/Assesment/AssessmentPhaseTwo";
import AssessmentSecondPhaseComplete from "./Components/Home/Assesment/AssessmentPhaseTWOcomplete";
import AssessmentThirdPhase from "./Components/Home/Assesment/AssessmentPhaseThree";
import AssessmentThirdPhaseComplete from "./Components/Home/Assesment/AssessmentPhaseTHREEComplete";
import Assessmentfourthphase from "./Components/Home/Assesment/Assessmentstagefour/AssessmentPhaseFour";
import Assessmentfourthphase_1 from "./Components/Home/Assesment/Assessmentstagefour/AssessmentPhaseFour_1";
import { SelectPaymentPlan } from "./Components/Home/Assesment/SelectPaymentPlan";
import AssessmentFifthPhase from "./Components/Home/Assesment/AssessmentPhaseFive";
import AssessmentSixthPhase from "./Components/Home/Assesment/AssessmentPhaseSix";
import AssessmentSeventhPhase from "./Components/Home/Assesment/AssessmentPhaseSeven";
import AssessmentFourthPhaseComplete from "./Components/Home/Assesment/AssessmentPhaseFOURCOMPLETE";
import AssessmentFifthPhaseComplete from "./Components/Home/Assesment/Assessmentphasefivecomplete";
import AssessmentSixthPhaseComplete from "./Components/Home/Assesment/Assessmentsixthphasecomplete";
import AssessmentSeventhPhaseComplete from "./Components/Home/Assesment/Assessmentphasesevencompleted";
import SignUpKigenni from "./Components/Home/SignUp Kigenni/SignUpKigenni";
import KigenniDashboard from "./Components/KigenniDashboard/KigenniDashoard";
import KigenniFullResultPage from "./Components/KigenniDashboard/KigenniFullResultPage";
import SignInKigenni from "./Components/Home/SignIn/SignIn";
import Home from "./Components/Home/Home/Home";
import ForgotPassword from "./Components/Home/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/Home/ResetPassword/ResetPassword";
import EmailVerification from "./Components/Home/SignUpEmailVerification/SignUpEmailVerification";
import PaymentSummary from "./Components/KigenniDashboard/paymentsummary";
import Testing from "./Components/KigenniDashboard/Testing";
import OverPaid from "./Components/KigenniDashboard/Overpaid";
import Pending from "./Components/KigenniDashboard/Pending";
import CouncellorPaymentSummary from "./Components/KigenniDashboard/counsellorpaymentsummary";
import CouncellorDates from './Components/KigenniDashboard/CouncellorDates';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/thirdparty/signup" component={SignUpKigenni} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/faq"
              component={() => <Redirect to="/thirdparty/signup" />}
            />
            <Route
              exact
              path="/clientchat"
              component={() => <Redirect to="/thirdparty/signup" />}
            />
            <Route
              exact
              path="/clarityforteams"
              component={() => <Redirect to="/thirdparty/signup" />}
            />
            <Route
              exact
              path="/recruitmentform"
              component={RecruitmentAnalysisForm}
            />
            <Route
              exact
              path="/dashboard/personality"
              component={() => <Redirect to="/thirdparty/signup" />}
            />
            <Route
              exact
              path="/dashboard/careerfitness"
              component={() => <Redirect to="/signup/thirdpary" />}
            />
            <Route
              exact
              path="/assessmentphaseone"
              component={AssessmentFirstPhase}
            />
            <Route
              exact
              path="/assessmentphasefive"
              component={AssessmentFifthPhase}
            />
            <Route
              exact
              path="/assessmentphasefivecomplete"
              component={AssessmentFifthPhaseComplete}
            />
            <Route
              exact
              path="/assessmentphasesix"
              component={AssessmentSixthPhase}
            />
            <Route
              exact
              path="/assessmentphasesixcomplete"
              component={AssessmentSixthPhaseComplete}
            />
            <Route
              exact
              path="/assessmentphaseseven"
              component={AssessmentSeventhPhase}
            />
            <Route
              exact
              path="/assessmentphasesevencomplete"
              component={AssessmentSeventhPhaseComplete}
            />
            <Route
              exact
              path="/assessmentphasethree"
              component={AssessmentThirdPhase}
            />
            <Route
              exact
              path="/assessmentphasecomplete"
              component={AssessmentFirstPhaseComplete}
            />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/secondphasecomplete"
              component={AssessmentSecondPhaseComplete}
            />
            <Route
              exact
              path="/thirdphasecomplete"
              component={AssessmentThirdPhaseComplete}
            />
            <Route
              exact
              path="/assessmentphasefour"
              component={Assessmentfourthphase}
            />
            <Route
              exact
              path="/assessmentphasefour1"
              component={Assessmentfourthphase_1}
            />
            <Route
              exact
              path="/assessmentphasefourcomplete"
              component={AssessmentFourthPhaseComplete}
            />
            <Route
              exact
              path="/assessmentphasetwo"
              component={AssessmentSecondPhase}
            />
            <Route exact path="/paymentplan" component={SelectPaymentPlan} />
            <Route
              exact
              path="/signup"
              component={() => <Redirect to="/signup/thirdpary" />}
            />
            <Route exact path="/signin" component={SignInKigenni} />
            {/* Kegenni starts here */}
            <Route exact path="/signup/thirdpary" component={SignUpKigenni} />
            <Route
              exact
              path="/thirdpary/dashboard"
              component={KigenniDashboard}
            />
            <Route
              exact
              path="/thirdpary/fullresult"
              component={KigenniFullResultPage}
            />
            <Route exact path="/thirdparty/overpaid" component={OverPaid} />
            <Route exact path="/thirdparty/pending" component={Pending} />
            <Route exact path="/testing" component={Testing} />
            <Route exact path="/paymentsummary" component={PaymentSummary} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route
              exact
              path="/resetpassword/:userid/:token"
              component={ResetPassword}
            />
            <Route
              exact
              path="/verifyemail/:userid/:token"
              component={EmailVerification}
            />
            <Route
              exact
              path="/councellorfee"
              component={CouncellorPaymentSummary}
            />
            <Route
              exact
              path="/councellordates"
              component={CouncellorDates}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
