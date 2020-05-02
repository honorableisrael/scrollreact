import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import { About } from './Components/Home/About/About';
import Faq from './Components/Home/FAQs/faq';
import OnboardingChat from './Components/Home/OnboardingChat/onboardingchat';
import { ClarityForTeams } from './Components/Home/ClarityForTeams/clarityforteams';
import { RecruitmentAnalysisForm } from './Components/Home/Forms/RecruitmentAnalysisForm';
import DashboardResults from './Components/Home/Dashboard/Results/DashboardResult';
import AssessmentFirstPhase   from './Components/Home/Assesment/AssessmentPhaseone';
import AssessmentFirstPhaseComplete   from './Components/Home/Assesment/AssessmentPhaseonecomplete';
import AssessmentSecondPhase from './Components/Home/Assesment/AssessmentPhaseTwo';
import AssessmentSecondPhaseComplete from './Components/Home/Assesment/AssessmentPhaseTWOcomplete';
import AssessmentThirdPhase from './Components/Home/Assesment/AssessmentPhaseThree';
import AssessmentThirdPhaseComplete from './Components/Home/Assesment/AssessmentPhaseTHREEComplete';
import Assessmentfourthphase from './Components/Home/Assesment/Assessmentstagefour/AssessmentPhaseFour';
import Assessmentfourthphase_1 from './Components/Home/Assesment/Assessmentstagefour/AssessmentPhaseFour_1';
import { SelectPaymentPlan } from './Components/Home/Assesment/SelectPaymentPlan';
import SignUp from './Components/Home/SignUp/SignUp';
import SignIn from './Components/Home/SignIn/SignIn';


const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/clientchat" component={OnboardingChat} />
              <Route exact path="/clarityforteams" component={ClarityForTeams} />
              <Route exact path="/recruitmentform" component={RecruitmentAnalysisForm} />
              <Route exact path="/dashboardresult" component={DashboardResults} />
              <Route exact path="/assessmentphaseone" component={AssessmentFirstPhase} /> 
              <Route exact path="/assessmentphasethree" component={AssessmentThirdPhase} /> 
              <Route exact path="/assessmentphasecomplete" component={AssessmentFirstPhaseComplete} />
              <Route exact path="/secondphasecomplete" component={AssessmentSecondPhaseComplete}/> 
              <Route exact path="/thirdphasecomplete" component={AssessmentThirdPhaseComplete}/> 
              <Route exact path="/assessmentphasefour" component={Assessmentfourthphase}/> 
              <Route exact path="/assessmentphasefour1" component={Assessmentfourthphase_1}/> 
              <Route exact path="/assessmentphasetwo" component={AssessmentSecondPhase} /> 
              <Route exact path="/paymentplan" component={SelectPaymentPlan} /> 
              <Route exact path="/signup" component={SignUp} /> 
              <Route exact path="/signin" component={SignIn} /> 
            </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
