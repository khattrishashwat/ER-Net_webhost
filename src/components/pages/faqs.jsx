import React from 'react'

function faqs() {
  return (
    <>
      <section className="faq-main-con w-100 float-left padding-top last-section ">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>
              Do you have any Dedicated Server questions? We have your answers!
              Below you'll find answers to the most commonly asked Dedicated
              Server questions.
            </p>
          </div>
          <div
            className="faq-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is web hosting and how does it work?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is shared hosting the right type of web hosting for my
                      site?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What content management systems are compatible with Ernet
                      web hosting?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingfour">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefour"
                      aria-expanded="true"
                      aria-controls="collapsefour"
                    >
                      When do you choose shared or dedicated vCPU and RAM
                      resources?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapsefour"
                  className="collapse"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header" id="headingfive">
                  <h3 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefive"
                      aria-expanded="true"
                      aria-controls="collapsefive"
                    >
                      What is cPanel Hosting and what are its benefits?
                    </button>
                  </h3>
                </div>
                <div
                  id="collapsefive"
                  className="collapse"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default faqs
