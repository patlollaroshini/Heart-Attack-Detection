import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import logo from "../assest/logo.avif"
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitForm = (userCred) => {
    console.log(userCred);
    axios
      .post("http://localhost:4500/userApi/login", userCred)
      .then((res) => {
        if (res.data.message === "LOGIN SUCCESS") {
          sessionStorage.setItem("jwttoken", res.data.token);
          sessionStorage.setItem("UserName", res.data.user.username);
          console.log(res.data.user);
          navigate("/protected");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log("error is :", err);
      });
  };

  return (
    <section id="id1" class="h-90 gradient-form">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-90">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-2 mx-md-3">
                    <div class="text-center">
                      <img
                        src={logo}
                        className="wdd"
                        alt="logo"
                      ></img>
                      <h4 class="mt-1 mb-5 pb-1"></h4>
                    </div>

                    <form className="m-2" onSubmit={handleSubmit(submitForm)}>
                      <h6>Please login to your account</h6>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Username"
                          {...register("username")}
                        />
                       
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder="Password"
                          {...register("password")}
                        />
                       
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary  "
                          type="submit"
                        >
                          Log in
                        </button>
                        {/* <br />
                        <a class="text-muted" href="#!">
                          Forgot password?
                        </a> */}
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-outline-danger"
                        onClick={() => navigate("/register")}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id="gradient-custom-2"
                  class="col-lg-6 d-flex align-items-center gradient-custom-2"
                >
                  <div class="text-white px-4 py- p-md- mx-md-2">
                    <h4 class="mb-4">Heart Facts</h4>
                    <p class="p33">
                       The right side of your heart pumps blood into your lungs.
                      The left side of your heart pumps blood back through your
                      body.
                    </p>
                    <br />
                    <p class="p33">Your heart beats over 100,000 times per day.</p>
                    <br />
                    <p class="p33">
                      Your heart pumps about 1.5 gallons of blood every minute.
                      Over the course of a day, that adds up to over 2,000
                      gallons.
                    </p>
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

export default Login
