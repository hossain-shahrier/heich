/* eslint-disable react/no-unknown-property */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-5 w-full bg-gray-100">
      <div className="mb-8 lg:mb-0">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/about">
              <a>
                About <span className="font-black tracking-widest">HEICH</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/store">
              <a>
                <span className="font-black tracking-widest">HEICH</span> Store
              </a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>Browse Categories</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Shopping</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/career">
              <a>
                <span className="font-black tracking-widest">HEICH</span> Career
              </a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/refund">
              <a>Refund Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms & Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/orders">
              <a>Orders & Shipping</a>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <a>Help & FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              <a>Payment Methods</a>
            </Link>
          </li>
          <li>
            <Link href="/appointment">
              <a> Book Appointment</a>
            </Link>
          </li>
          <li className="flex flex-col gap-1">
            <span>Connect with us</span>
            <div className="flex gap-2">
              <div>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="5 0 48 48"
                      width="40px"
                      height="40px"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="5 0 48 48"
                      width="40px"
                      height="40px"
                    >
                      <linearGradient
                        id="awSgIinfw5_FS5MLHI~A9a"
                        x1="6.228"
                        x2="42.077"
                        y1="4.896"
                        y2="43.432"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#0d61a9"></stop>
                        <stop offset="1" stop-color="#16528c"></stop>
                      </linearGradient>
                      <path
                        fill="url(#awSgIinfw5_FS5MLHI~A9a)"
                        d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32 c1.105,0,2,0.895,2,2V40z"
                      ></path>
                      <path
                        d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208 l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204 l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4 h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="5 0 48 48"
                      width="40px"
                      height="40px"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fd5"></stop>
                        <stop offset=".328" stop-color="#ff543f"></stop>
                        <stop offset=".348" stop-color="#fc5245"></stop>
                        <stop offset=".504" stop-color="#e64771"></stop>
                        <stop offset=".643" stop-color="#d53e91"></stop>
                        <stop offset=".761" stop-color="#cc39a4"></stop>
                        <stop offset=".841" stop-color="#c837ab"></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4168c9"></stop>
                        <stop
                          offset=".999"
                          stop-color="#4168c9"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      ></path>
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="5 0 48 48"
                      width="40px"
                      height="40px"
                    >
                      <linearGradient
                        id="PgB_UHa29h0TpFV_moJI9a"
                        x1="9.816"
                        x2="41.246"
                        y1="9.871"
                        y2="41.301"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f44f5a"></stop>
                        <stop offset=".443" stop-color="#ee3d4a"></stop>
                        <stop offset="1" stop-color="#e52030"></stop>
                      </linearGradient>
                      <path
                        fill="url(#PgB_UHa29h0TpFV_moJI9a)"
                        d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40 c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56 c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267 C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                      ></path>
                      <path
                        d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376 v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624 c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334 c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549 l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="5 0 48 48"
                      width="40px"
                      height="40px"
                    >
                      <linearGradient
                        id="3gvvizWQ9RZhriH82V06da"
                        x1="30.574"
                        x2="17.439"
                        y1="3.695"
                        y2="45.444"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33bef0"></stop>
                        <stop offset="1" stop-color="#0a85d9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#3gvvizWQ9RZhriH82V06da)"
                        d="M24.5,5C13.73,5,5,13.059,5,23c0,5.386,2.566,10.215,6.627,13.514 c0.233,0.19,0.373,0.47,0.373,0.77v5.098c0,0.743,0.782,1.227,1.447,0.894l5.555-2.777c0.208-0.104,0.443-0.129,0.669-0.075 C21.217,40.79,22.83,41,24.5,41C35.27,41,44,32.941,44,23C44,13.059,35.27,5,24.5,5z"
                      ></path>
                      <path
                        d="M36.721,19.262c-0.162-0.369-0.521-0.607-0.913-0.607c-0.156,0-0.308,0.037-0.453,0.109l-6.933,3.467 c-0.192,0.096-0.425,0.059-0.577-0.094l-4.12-4.12c-0.189-0.189-0.44-0.293-0.707-0.293c-0.281,0-0.551,0.119-0.74,0.327 l-7.601,8.362c-0.271,0.298-0.339,0.708-0.179,1.07c0.163,0.369,0.522,0.607,0.914,0.607c0.17,0,0.335-0.044,0.491-0.13l5.618-3.121 c0.21-0.117,0.473-0.068,0.627,0.117l4.104,4.925c0.191,0.229,0.471,0.36,0.768,0.36c0.279,0,0.548-0.118,0.737-0.324l8.784-9.582 C36.811,20.037,36.881,19.626,36.721,19.262z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M15.046,26.75l7.601-8.362c0.192-0.211,0.522-0.219,0.724-0.017 l4.374,4.374c0.152,0.152,0.385,0.19,0.577,0.094l7.256-3.628c0.496-0.248,0.967,0.376,0.592,0.785l-8.784,9.582 c-0.205,0.223-0.559,0.215-0.753-0.018l-4.369-5.243c-0.154-0.185-0.417-0.234-0.627-0.117l-5.979,3.322 C15.164,27.798,14.665,27.168,15.046,26.75z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        d="M23.017,17.724c0.267,0,0.518,0.104,0.707,0.293l4.12,4.12c0.152,0.152,0.385,0.19,0.577,0.094 l6.933-3.467c0.145-0.073,0.298-0.109,0.453-0.109c0.392,0,0.751,0.238,0.913,0.607c0.16,0.364,0.091,0.775-0.182,1.072 l-8.784,9.582c-0.189,0.206-0.458,0.324-0.737,0.324c-0.298,0-0.578-0.131-0.768-0.36l-4.104-4.925 c-0.154-0.185-0.417-0.234-0.627-0.117l-5.618,3.121c-0.156,0.086-0.321,0.13-0.491,0.13c-0.392,0-0.751-0.238-0.914-0.607 c-0.16-0.362-0.092-0.773,0.179-1.07l7.601-8.362C22.466,17.844,22.736,17.724,23.017,17.724 M23.017,17.224 c-0.422,0-0.826,0.179-1.11,0.491l-7.601,8.362c-0.406,0.446-0.508,1.063-0.266,1.609c0.243,0.549,0.781,0.904,1.371,0.904 c0.256,0,0.503-0.065,0.734-0.193l5.256-2.92c0.21-0.117,0.473-0.068,0.627,0.117l3.839,4.606c0.286,0.343,0.706,0.54,1.152,0.54 c0.419,0,0.822-0.177,1.106-0.486l8.784-9.582c0.408-0.446,0.512-1.063,0.271-1.611c-0.242-0.55-0.78-0.906-1.371-0.906 c-0.234,0-0.462,0.055-0.677,0.162l-6.611,3.306c-0.192,0.096-0.425,0.059-0.577-0.094l-3.865-3.865 C23.794,17.38,23.418,17.224,23.017,17.224L23.017,17.224z"
                        opacity=".05"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-8 lg:mb-0">
        <div className="hidden lg:flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d116834.13669278496!2d90.4193257!3d23.7806365!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661119114043!5m2!1sen!2sbd"
            width="350"
            height="200"
            className="rounded-xl mb-5"
            allowfullscreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold">Location</span>
          <h3 className="  mb-5">
            <span className="font-bold">Main Office</span>: Bashundhara R/A,
            Vatara, Dhaka-1229
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
