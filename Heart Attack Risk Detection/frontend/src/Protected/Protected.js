import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./protected.css";
import { BsFillInfoCircleFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function Protected() {
  let navigate = useNavigate();
  let { register, handleSubmit, formstate: error } = useForm();
  let [userName, setUserName] = useState("");
  const token = sessionStorage.getItem("jwttoken");
  const params = {
    params1: sessionStorage.getItem("UserName"),
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: params,
  };
  let [userObj, setuserObj] = useState({});
  useEffect(() => {
    setUserName(sessionStorage.getItem("UserName"));
    axios
      .get("http://localhost:4500/userApi/get-users", config)
      .then((res) => {
        setuserObj(res.data.payload);
        console.log(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let submitform = (userdata) => {
    userdata.username = userName;
    console.log(userdata);
    axios
      .post("http://localhost:4500/userApi/predict", userdata)
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("RESULT IS : ", res.data.payload);
          sessionStorage.setItem("Result_of_prediction", res.data.payload);
          navigate("/results");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("error is :", err);
      });
  };
  return (
    <div
      id="body"
      className="heartbeat-bg d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 70px)", marginTop: "0px" }}
    >
      <div
        id="body"
        className="transparent-card card shadow p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h4>Please Click <BsFillInfoCircleFill /> For More Information</h4>
        <form onSubmit={handleSubmit(submitform)}>
          <div className="form-group">
            <label htmlFor="age">
              <b>Age</b>
            </label>
            <input
              type="number"
              className="form-control"
              name="age"
              id="age"
              placeholder="Enter your age"
              {...register("age")}
            />
          </div>

          <div className="form-group">
            <label>
              <b>Gender</b>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="male"
                value="1"
                {...register("sex")}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sex"
                id="female"
                value="0"
                {...register("sex")}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cp">
              <b>Chest Pain Type</b>
            </label>
            <select
              className="form-control"
              id="cp"
              name="cp"
              {...register("cp")}
            >
              <option value="">Select</option>
              <option value="0">
                Typical Angina ( Chest pain that occurs during physical activity
                or stress)
              </option>
              <option value="1">
                Atypical Angina (Pain or discomfort that comes on without
                physical activity or unusual fatigue)
              </option>
              <option value="2">
                Non-anginal Pain ( Sharp pain that feels more like a muscle pull
                or digestive issue)
              </option>
              <option value="3">
                Asymptomatic (No chest pain or No noticeable symptoms)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="trestbps">
              <b>Resting Blood Pressure (mm Hg)</b>
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                name="trestbps"
                id="trestbps"
                placeholder="Enter your resting blood pressure"
                {...register("trestbps")}
              />
              <br />
              <a
                href="https://medlineplus.gov/lab-tests/measuring-blood-pressure/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-icon"
                title="Learn more about blood pressure"
              >
                <i className="fa fa-info-circle">
                  <BsFillInfoCircleFill />
                </i>
              </a>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="chol">
              <b>Cholesterol Level (mg/dl)</b>
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                name="chol"
                id="chol"
                placeholder="Enter your cholesterol level"
                {...register("chol")}
              />
              <a
                href="https://medlineplus.gov/cholesterollevelswhatyouneedtoknow.html"
                target="_blank"
                rel="noopener noreferrer"
                className="info-icon"
                title="Learn more about blood pressure"
              >
                <i className="fa fa-info-circle">
                  <BsFillInfoCircleFill />
                </i>
              </a>
            </div>
          </div>

          <div className="form-group">
<div>
<div className="input-group">             

            <label>
              <b>Fasting Blood Sugar</b>
             {/* <div className="input-group">               </div>   */}
  
            <a
              href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/2380"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a>
              <br />
            </label>
            </div>  
            <div className="form-check">

              <input
                className="form-check-input"
                type="radio"
                name="fbs"
                id="fbs-high"
                value="1"
                {...register("fbs")}
              />
              <label className="form-check-label" htmlFor="fbs-high">
                Greater than 120 mg/dl
              </label>
            </div>
            <div className="form-check">
                
              <input
                className="form-check-input"
                type="radio"
                name="fbs"
                id="fbs-low"
                value="0"
                {...register("fbs")}
              />
              <label className="form-check-label" htmlFor="fbs-low">
                Less than 120 mg/dl
              </label>
            </div>
        
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="restecg">
              <b>Resting ECG Results</b>
            </label>
            <select
              className="form-control"
              name="restecg"
              id="restecg"
              {...register("restecg")}  
            >
              <option value="">Select</option>
              <option value="0">Normal  ( The heartbeats are regular, Normal Ranges (P wave, QRS complex, and T wave) )</option>
              <option value="1">Having ST-T wave abnormality  (Can indicate heart ischemia or infarction, leading to chest pain and shortness of breath.)</option>
              <option value="2">
                Probable or definite left ventricular hypertrophy  (increased heart workload, causing shortness of breath,fatigue.)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="thalach">
              <b>Max Heart Rate</b>
            </label>
            <div className="input-group">             

            <input
              type="number"
              className="form-control"
              name="thalach"
              id="thalach"
              placeholder="A number in range [71-202] bpm"
              {...register("thalach")}
            />
            <a
              href="https://my.clevelandclinic.org/health/articles/24649-heart-rate-reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a>
          </div>
          </div>

          <div className="form-group">
          <div className="input-group">             

            <label>
              <b>Exercise-induced Angina (chest pain or discomfort triggered by physical activity)</b>
            </label>
            
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exang"
                id="exang-yes"
                value="1"
                {...register("exang")}
              />
              <label className="form-check-label" htmlFor="exang-yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exang"
                id="exang-no"
                value="0"
                {...register("exang")}
              />
              <label className="form-check-label" htmlFor="exang-no">
                No
              </label>
            </div>
            
          </div>
          

          <div className="form-group">
            <label htmlFor="oldpeak">
              <b>ST depression</b>
            </label>
            <div className="input-group">             

            <input
              type="text"
              className="form-control"
              name="oldpeak"
              id="oldpeak"
              placeholder="ST depression, typically in [0-6.2]"
              {...register("oldpeak")}
            />
            <a
              href="https://ecgwaves.com/st-segment-normal-abnormal-depression-elevation-causes/"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a>
          </div>
          </div>

          <div className="form-group">
            <label htmlFor="slope">
              <b>Slope of the peak exercise ST segment</b>
            </label>
            <div className="input-group">             

            <select
              className="form-control"
              name="slope"
              id="slope"
              {...register("slope")}
            >
              <option value="">Select</option>
              <option value="0">Upsloping (ST segment gradually rises above the baseline)</option>
              <option value="1">Flat (ST segment is flat or horizontal)</option>
              <option value="2">Downsloping (ST segment drops below the baseline,High chances)</option>
            </select>
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1123032/"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a>
          </div>
          </div>

          <div className="form-group">
            <label htmlFor="ca">
              <b>No of Major vessels Blocked(Coronary Angiography)</b>
            </label>
            <div className="input-group">             

            <input
              type="number"
              className="form-control"
              name="ca"
              id="ca"
              placeholder="Typically in [0-4]"
              {...register("ca")}
            />
            <a
              href="https://www.mayoclinic.org/tests-procedures/coronary-angiogram/about/pac-20384904"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="thal">
              <b>Thalassemia</b>
            </label>
            <div className="input-group">             

            <select
              className="form-control"
              name="thal"
              id="thal"
              {...register("thal")}
            >
              <option value="">Select</option>
              <option value="0">Normal (No significant abnormalities in blood flow to the heart)</option>
              <option value="1">Fixed Defect (Indicates an area of the heart that has permanent damage)</option>
              <option value="2">Reversible Defect (An area of Muscle Recieves Irregular blood flow )</option>
            </select>
            {/* <a
              href="https://medlineplus.gov/lab-tests/measuring-blood-pressure/"
              target="_blank"
              rel="noopener noreferrer"
              className="info-icon"
              title="Learn more about blood pressure"
            >
              <i className="fa fa-info-circle">
                <BsFillInfoCircleFill />
              </i>
            </a> */}
          </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Protected;
