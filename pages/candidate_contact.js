import React from "react";
import { useEffect, useState } from "react";
import Layout1 from "../components/layout/Layout1";
import dynamic from "next/dynamic";
import { stringifyQuery } from "next/dist/server/server-route-utils";
import axios from "axios";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Link from "next/link";
// const initValues = {
//     candidateName: "",
//     contactNumber: "",
//     alternateNumber: "",
//     emailID: "",
//     currentLocation: "",
//     landmark: "",
//     qualification:"",
//     // solution: "",
//     // requirment: "",
//     currentCompany:"",

// }

// const initState = { values: initValues }

function Contact() {
  const [state, setstate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //     console.log(state)
  // }, [state])

  const handleChange = ({ target }) => {
    setstate((prevState) => ({
      ...prevState,
      [target.name]: target.value, // Assuming target.fullName is the name of the input field and target.state is the value
    }));
  };

  const onsubmit = async () => {
    console.log("I am value :  ", state);
    setstate((prev) => ({
      ...prev,
      // isLoading: true
    }));

    // await sendContactForm(state);

    try {
      const response = await axios.post("/api/hello2", state);
      console.log("Response:", response.data);

      if (response.status === 200) {
        setstate(null);
        setIsLoading(true);
      }

      // Handle response as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  // const makeApiCall= async() =>{
  //     await fetch("/api/hello", {
  //         method:"POST",
  //         body:JSON>stringify({state}),
  //     })
  // }

  return (
    <>
      <Layout1>
        {!isLoading && (
          <>
            <section className="section-box" style={{ marginBottom: "150px" }}>
              <div className="container mb-20 mt-50">
                <div
                  className="bdrd-58 box-gray-100 "
                  style={{ backgroundColor: "rgb(190, 225, 230)" }}
                >
                  <div className="row">
                    <div className="col-lg-12 mb-60">
                      <h1
                        className="mb-80 col-md-12 colsm-12 text-heading-1 color-gray-900"
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          // marginTop: "-30px",
                        }}
                      >
                        Apply Now
                      </h1>
                      <span className="text-body-capitalized text-uppercase">
                        Start your talent journey today.
                      </span>
                      <h2 className="text-heading-4 color-gray-900 mt-10">
                        Ready to build your dream team?<br></br>
                        How can HBR elevate your recruitment experience today?
                      </h2>
                      <p className="text-body-text color-gray-600 mt-20">
                        Let&#39;s craft your dream team together.
                        <br className="d-lg-block d-none" />
                        Share your needs, and our expert recruiters will connect
                        you with top talent.<br></br> Fill out our quick inquiry
                        form, and we&#39;ll be in touch soon!
                      </p>
                    </div>
                    {/* <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Human Before Resource</h4>
                                    <p className="text-body-text color-gray-600">8th Floor, DN-2 Signet Tower<br />College More Dn Block Unit 804</p>
                                    <p className="text-body-text color-gray-600">Sector V, Saltlake, Kolkata</p>
                                    <p className="text-body-text color-gray-600">West Bengal 700091</p>
                                    <p className="text-body-text color-gray-600">09674757948</p>
                                </div> */}
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="candidateName"
                              value={state.candidateName}
                              placeholder="Name"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="contactNumber"
                              value={state.contactNumber}
                              placeholder="Contact Number"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="alternateNumber"
                              value={state.alternateNumber}
                              placeholder="Alternative Number"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="email"
                              name="emailID"
                              value={state.emailID}
                              placeholder="Email Address"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="currentLocation"
                              value={state.currentLocation}
                              placeholder="Current Location"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="landmark"
                              value={state.landmark}
                              placeholder=" Landmark"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="qualification"
                              value={state.qualification}
                              placeholder=" Qualification"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="currentCompany"
                              value={state.currentCompany}
                              placeholder="Current Company"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        {/* <div className="col-lg-12">
                                            <div className="form-group">
                                                <select className="form-select" name="solution" value={state.solution}
                                                    onChange={handleChange} required>
                                                    <option selected disabled value="">Solutions...</option>
                                                    <option>Permanent Staffing</option>
                                                    <option>Temporary Staffing</option>
                                                    <option>In-house Staffing</option>
                                                    <option>Payroll Process</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="requirment" value={state.requirment} placeholder="Your Requirement"
                                                    onChange={handleChange} />
                                            </div>
                                        </div> */}

                        <div
                          className="col-lg-12 mt-15"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <button
                            className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                            type="submit"
                            disabled={
                              !state.candidateName ||
                              !state.contactNumber ||
                              !state.emailID ||
                              !state.currentLocation ||
                              !state.qualification
                            }
                            onClick={onsubmit}
                            // isLoading={state}
                          >
                            Submit
                          </button>
                          {/* <br className="d-lg-none d-block" />
                                            <span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {isLoading && (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="alert alert-info"
                  role="alert"
                  style={{ marginTop: "50px" }}
                >
                  <h4 className="alert-heading">Thank you!</h4>
                  <p>
                    Your inquiry has been submitted successfully. Our team will
                    get back to you shortly.
                  </p>
                  <hr />
                  <p className="mb-0">
                    <Link href="/" className="alert-link">
                      Go back to the home page
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout1>
    </>
  );
}

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
