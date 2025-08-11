import React, { useEffect, useState } from "react";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 20% of the page height
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowButton(scrollPercentage > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        className="footer-main-con wed-hom-footer w-100 float-left"
        id="page-end"
      >
        <div className="container">
          <div className="footer-inner-con wed-foot-link">
            <div className="footer-box">
              <h6>Our Services</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Shared Hosting</a>
                </li>
                <li>
                  <a href="#!">Reseller Hosting</a>
                </li>
                <li>
                  <a href="#!">Virtual Private Servers</a>
                </li>
                <li>
                  <a href="#!">Dedicated Hosting</a>
                </li>
                <li>
                  <a href="#!">Domain Registration</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Useful Links</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Plans and Pricing</a>
                </li>
                <li>
                  <a href="#!">Benefits</a>
                </li>
                <li>
                  <a href="#!">More Options</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Policies</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Portal Policies</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Term And Condition</a>
                </li>
                <li>
                  <a href="#!">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Account</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Login to Ernet</a>
                </li>
                <li>
                  <a href="#!">Renewals &amp; Billing</a>
                </li>
                <li>
                  <a href="#!">Create Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row wed-foot-link-1">
            <div className="col-md-5 foot-tc-mar-t-o ">
              <div className="d-flex align-items-center gap-4">
                <img src="images/ernetlogo-white.png" />
                <div>
                  <h4>Headquarters</h4>
                  <p className="mb-0">
                    5th Floor, Block-I, A Wing, DMRC IT Park, <br />
                    Shastri Park, New Delhi-110053
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Connect with us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 foot-tc-mar-t-o text-right ">
              <h4>Website Last Updated on:</h4>
              <p className="mb-0">
                {" "}
                <span className="text-white">23-May-2025 11:16 am </span>
              </p>
              <h4 className="pb-0">
                Visitors: <span className="text-white">31048414</span>
              </h4>
              <ul className="web-check-cert">
                <li>
                  <a href="#">
                    <img src="images/wcag2AA.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/vcss.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/wqc-img.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright-con">
          <div className="container">
            <div className="footer-copyright-inner-con">
              <div className="copyright-logo-con justify-content-center">
                <p>Copyright @2025 ERNET India, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        id="button"
        className={showButton ? "show" : ""}
        onClick={scrollToTop}
      ></a>
    </>
  );
}

export default Footer;
