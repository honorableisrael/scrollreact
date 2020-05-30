import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import Navbar from "../Home/HomeComponents/navbar";
import Footer from "../Home/HomeComponents/footer";
import vector from "../../assets/Vector.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import vector5 from "../../assets/Vector5.png";
import vector6 from "../../assets/Vector6.png";
import vector7 from "../../assets/Vector7.png";
import KigenniPartResult from "./KigenniPartResult";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

interface State {
  successMsg: boolean;
  errorMessage: string;
  user:any;
  isLoading: boolean;
}

declare global {
  interface Window {
    MonnifySDK:any;
  }
}

const KigenniDashboard: React.FunctionComponent = (props: any) => {
  const [state, setFormState] = React.useState<State>({
    errorMessage: "",
    user:"",
    successMsg: false,
    isLoading: false,
  });
  const { errorMessage, successMsg, isLoading } = state;

  const payWithMonnify = (reference) => {
    console.log("function is running");
    try {
      window.MonnifySDK.initialize({
        amount: 5000,
        currency: "NGN",
        reference,
        customerFullName: "John Doe",
        customerEmail: "monnify@monnify.com",
        customerMobileNumber: "08121281921",
        apiKey: "MK_TEST_WQZNXHV9FY",
        contractCode: "4978848198",
        paymentDescription: "Test Pay",
        isTestMode: true,
        metadata: {
          name: "Damilare",
          age: 45,
        },
        onComplete: function(response) {
          //Implement what happens when transaction is completed.
          console.log(response);
        },
        onClose: function(data) {
          //Implement what should happen when the modal is closed here
          console.log(data);
        },
      });
    } catch (error) {
      console.log("Failed to initailize payment" + error);
    }
  };

  useEffect(() => {
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : props.history.push("/signin");
    const data = {};
    axios
      .get<any, AxiosResponse<any>>(`${API}/freedashboard`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setFormState({
            ...state,
            successMsg: true,
            isLoading: false,
          });
          // setInterval(props.history.push("/signin"), 5000);
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          setFormState({
            ...state,
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        setFormState({
          ...state,
          errorMessage: "failed to load",
          isLoading: false,
        });
      });
  }, []);

  const requestForPayref = () => {
    setFormState({
      ...state,
      isLoading:true
    });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : props.history.push("/signin");
    axios.get(`${API}/monnifypaymentreference`, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(response=>{
      console.log(response);
      setFormState({
        ...state,
        user:response?.data[0]?.payment_reference,
        isLoading:false
      });
      setTimeout(()=>{
        payWithMonnify(response?.data[0]?.payment_reference)
      },1000);
    })
    .catch(error=>{
      console.log(error);
      setFormState({
        ...state,
        isLoading:false
      });
    });
    
  };
  const notify = (message: string) => {
    toast(message, { containerId: "B" });
    setTimeout(() => {
      props.history.push("");
    }, 3000);
  };
  const checkIfUserHasAccessToViewAll = () => {
    // notify("You have to pay to view the complete result")
    requestForPayref();
  };
  return (
    <>
      <Navbar />
      <Container fluid={true}>
        <Row className="kli6 bcbv">
          <KigenniPartResult />
          <Col md={10}>
            <div className="text-center">
              <div
                className="fullresult"
                onClick={() => checkIfUserHasAccessToViewAll()}
              >
                {isLoading?"Processing":"See Full Result"} <span>&#8594;</span>
              </div>
            </div>
            <div className="kigennidisabled">
              <div className="kiconrow">
                <div className="kitemwrapper">
                  <img src={vector} alt="vector" />
                  <div className="v1strength">Strength</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector1} alt="vector" />
                  <div className="v1strength">Weaknesses</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector2} alt="vector" />
                  <div className="v1strength">Strong Career Competencies</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector2} alt="vector" />
                  <div className="v1strength">Average Career Competencies</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector7} alt="vector" />
                  <div className="v1strength">Weak Career Competencies</div>
                </div>
              </div>
              <div className="kiconrow mncb">
                <div className="kitemwrapper">
                  <img src={vector3} alt="vector" />
                  <div className="v1strength">Career Matches</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector4} alt="vector" />
                  <div className="v1strength">Career Motivators</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector5} alt="vector" />
                  <div className="v1strength">Work Style</div>
                </div>
                <div className="kitemwrapper">
                  <img src={vector6} alt="vector" />
                  <div className="v1strength">Job Function Fit</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
      <ToastContainer
        enableMultiContainer
        containerId={"B"}
        toastClassName="bg-info text-white"
        hideProgressBar={true}
        position={toast.POSITION.TOP_CENTER}
      />
    </>
  );
};

export default KigenniDashboard;
