import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  let navigate = useNavigate();
  let { register, handleSubmit, formstate: error } = useForm();
  let submitForm = (userdata) => {
    axios
      .post("http://localhost:4500/userApi/post-user", userdata)
      .then((res) => {
        if (res.data.message === "User INserted") {
          navigate("/Login");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("error is :", err);
      });
  };
  return (
    <section  className="vh-100" style={{ backgroundColor: "#eee" }} onSubmit={handleSubmit(submitForm)}>
      <div  id="main"className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-10">
          <div className="col-lg-7 col-xl-7">
            <div id="box"className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p id="head"className="text-center row justify-content-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registration
                    </p>

                    <form className="mx-1 mx-md-2">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            placeholder="Username...."
                            type="text"
                            id="username"
                            class="form-control"
                            {...register("username")}
                          />
                          {/* <label id="txt"className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            {...register("password")}
                          />
                          {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            placeholder="Email...."
                            type="email"
                            id="email"
                            class="form-control"
                            {...register("email")}
                          />
                          {/* <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            class="form-control"
                            name="phn"
                            id="phn"
                            placeholder="Phone Number"
                            {...register("phn")}
                          />
                          {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div id="txt" className="form-outline flex-fill mb-0">
                          <label>
                            <b>Gender</b>
                          </label>
                          <div id="txtt" class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sex"
                              id="sex"
                              value="male"
                              {...register("sex")}
                            />
                            <label class="form-check-label" for="sex">
                              Male
                            </label>
                          </div>
                          <div id="txtt" class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="sex"
                              id="sex"
                              value="female"
                              {...register("sex")}
                            />
                            <label class="form-check-label" for="sex">
                              Female
                            </label>
                          </div>{" "}
                          {/* <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label> */}
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2" type="checkbox" id="form2Example3c" />
                                        <label className="form-check-label" htmlFor="form2Example3c">
                                            I agree to all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-m"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
