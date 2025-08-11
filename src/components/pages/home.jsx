import React from "react";

function home() {
  return (
    <>
      <section>
        <div className="top-webhost">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="left-box">
                  <img src="images/saas-concept-collage.jpg" className="main" />
                  <div className="overlay-card">
                    <img
                      src="https://via.placeholder.com/60x60.png?text=↻"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-box">
                  <small>Web Hosting as low as ₹89.00/mo</small>
                  <h2>
                    Get fast and reliable
                    <br />
                    hosting with a free SSL³
                  </h2>
                  <p>
                    From personal sites to high-performance sites, get hosting
                    you can trust.
                  </p>
                  <ul>
                    <li className="trigger-hover">99.9% uptime — guaranteed</li>
                    <li>Free SSL certificate for all your sites</li>
                    <li>Up to 2x faster performance</li>
                  </ul>
                  <div className="primary-btn">
                    <a href="#">See Plans and Pricing</a>
                  </div>
                  <p className="small-text-p">
                    Our Web Hosting experts are happy to help you.
                  </p>
                  <div className="rating">
                    <i className="fa-solid fa-star" />{" "}
                    <i className="fa-solid fa-star" />{" "}
                    <i className="fa-solid fa-star" />{" "}
                    <i className="fa-solid fa-star" />{" "}
                    <i className="fa-solid fa-star-half-stroke" />
                    4.6 out of 5 stars based on 122,654 reviews{" "}
                    <a href="">View All</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing domain-types-con w-100 float-left padding-top padding-bottom bg-style1">
        <div className="tab">
          <button
            className="tablinks active"
            onclick="openCity(event, 'London')"
          >
            <h6>Standard Performance </h6>
            <p>Ideal for getting started with simple websites.</p>
          </button>
          <button className="tablinks" onclick="openCity(event, 'Paris')">
            <h6>High Performance</h6>
            <p>Great for multi-site, high traffic or resource-heavy sites.</p>
          </button>
        </div>
        <div id="London" className="tabcontent" style={{ display: "block" }}>
          <div className="owl-carousel destination-slider-2 nav-center owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1561px, 0px, 0px)",
                  transition: "all",
                  width: 4684,
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Starter</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 70%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 80.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              800.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Starter</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 70%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 80.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              800.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Starter</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 70%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 80.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              800.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "375.286px", marginRight: 15 }}
                >
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
        <div id="Paris" className="tabcontent">
          <div className="owl-carousel destination-slider nav-center owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all",
                }}
              >
                <div className="owl-item">
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Starter</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 70%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 80.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              800.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="destination-item">
                    <div>
                      <div className="domain-types-box text-left">
                        <h5>Web Hosting Economy</h5>
                        <div className="core-p1o4l2n5">
                          <p className="tag-element core-t1x9s37j">
                            <span className="ux-tag ux-tag-warning core-s1dmdw2a ux-tag--size-lg ux-tag--design-filled">
                              Save 63%
                            </span>
                          </p>
                          <p className="ux-text text-uppercase core-o1gpbe75 ux-text-size-1">
                            <del>₹ 599.00</del>
                          </p>
                        </div>
                        <div className="domain-type-bottom-con">
                          <div className="hosting-price-box">
                            <span className="dollar">₹</span>
                            <span id="price_val2" className="numeric1">
                              219.
                            </span>
                            <span id="point_val2" className="numeric2">
                              00
                            </span>
                            <small className="d-inline-block">/mo</small>
                            <p className="pricing-text">
                              With a 3-yr term. You pay ₹ 3,204.00 today.
                              Auto-renews Jul. 2028 at ₹ 10,764.00. Cancel
                              anytime in Account Settings.
                            </p>
                          </div>
                          <div className="primary-btn">
                            <a href="">Buy Now</a>
                          </div>
                        </div>
                        <div className="pl-p1oz5326 mt-4">
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              1 website
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              fill="#000000"
                              width={18}
                              height={18}
                              viewBox="0 0 128 128"
                              id="Layer_1"
                              version="1.1"
                              xmlSpace="preserve"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
                                <rect height={8} width={8} x={17} y={17} />
                                <rect height={8} width={8} x={33} y={17} />
                                <rect height={8} width={42} x={69} y={17} />
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              10 GB NVMe storage
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1zm-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231z"
                                fill="#0D0D0D"
                              />
                              <path
                                d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              cPanel
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free domain
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#0D0D0D"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free email
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
                                fill="#000000"
                              />
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              Free SSL Certificate, 1 year3
                            </span>
                          </p>
                          <p className="core-lzrpui8">
                            <svg
                              width={18}
                              height={18}
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <rect
                                    x="211.478"
                                    y="478.609"
                                    width="89.043"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="144.696"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="300.522"
                                    y="445.217"
                                    width="66.783"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="111.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="367.304"
                                    y="411.826"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="400.696"
                                    y="378.435"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="11.13"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="467.478"
                                    y="66.783"
                                    width="33.391"
                                    height="244.87"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="311.652"
                                    width="33.391"
                                    height="66.783"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="77.913"
                                    width="356.174"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="44.522"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <rect
                                    x="434.087"
                                    y="33.391"
                                    width="33.391"
                                    height="33.391"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <polygon
                                    points="333.913,122.435 333.913,155.826 300.522,155.826 300.522,189.217 267.13,189.217 267.13,222.609 
      			233.739,222.609 233.739,256 189.217,256 189.217,222.609 122.435,222.609 122.435,289.391 155.826,289.391 155.826,322.783 
      			189.217,322.783 189.217,356.174 233.739,356.174 233.739,322.783 267.13,322.783 267.13,289.391 300.522,289.391 300.522,256 
      			333.913,256 333.913,222.609 367.304,222.609 367.304,189.217 400.696,189.217 400.696,122.435 		"
                                  />
                                </g>
                              </g>
                            </svg>
                            <span className="ux-text ux-text-size1 ux-text-paragraph">
                              30-day, money-back guarantee+
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
    </>
  );
}

export default home;
