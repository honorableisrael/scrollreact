import * as React from "react";
import "./kegennidashboard.css";
import briefcase from "../../assets/briefcase.png";
import mappin from "../../assets/mappin.png";
import mail from "../../assets/mail.png";
import link from "../../assets/link.png";
import iphone from "../../assets/phone.png";
import edit from "../../assets/edit.png";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";

const DashboardInfoArea = () => {
  const [state, setStates] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone: "",
    job_description: "",
    website_link: "",
    errorMessage: "",
    isLoading: false,
  });
  const {
    first_name,
    last_name,
    email,
    address,
    phone,
    job_description,
    website_link,
  } = state;
  useEffect(() => {
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    const data = {};
    axios
      .get<any, AxiosResponse<any>>(`${API}/dashboard/profile`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setStates({
            ...response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.data) {
          setStates({
            ...state,
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        setStates({
          ...state,
          errorMessage: "failed",
          isLoading: false,
        });
      });
  }, []);
  return (
    <>
      <div className="liee">
        <div className="duis">
          {" "}
          {job_description && (
            <img src={briefcase} className="briefcase" alt="briefcase" />
          )}
          {job_description}
        </div>
        <div className="duis">
          {address && <img src={mappin} className="briefcase" alt="mappin" />}{" "}
          {address}
        </div>
        <div className="duis">
          {email && <img src={mail} className="briefcase" alt="mail" />} {email}
        </div>
        <div className="duis">
          {website_link && <img src={link} className="briefcase" alt="link" />}
          {website_link}
        </div>
        <div className="duis">
          {phone && <img src={iphone} className="briefcase" alt="phone" />}
          {phone}
        </div>
      </div>
    </>
  );
};

export default DashboardInfoArea;
