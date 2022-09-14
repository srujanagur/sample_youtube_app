import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'

import { searchForKeyword } from "../../redux/actions";
import SideBar from "../SideBar/SideBar";

import "./MenuBar.css";

export default function MenuBar() {
  const keyword = useSelector((state) => state.playlistReducer);

  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(searchForKeyword(evt.target.value));
  };
  return (
    <div className="menubarcontent">
      <SideBar />
      <div>
        <svg width="175px" height="43px" viewBox="0 0 175 43">
          <title>Artboard</title>
          <g
            id="Artboard"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              d="M21.4938816,3.60485629 C22.4844229,3.4748506 23.5416045,3.57256431 24.540295,3.57256431 C26.3708848,3.57256431 28.1986567,3.56578604 30.0238391,3.6457544 C30.2519584,3.6557314 30.4803489,3.65859693 30.7088752,3.65790673 L32.0805752,3.63954257 L32.0805752,3.63954257 L32.7656112,3.6516949 C35.6881879,3.77972043 38.6057381,3.88497401 41.5240498,4.09890839 C44.3621647,4.30697843 47.3718688,4.57026471 49.2406912,6.99977941 C50.8440185,9.08405932 50.7726563,12.0565211 51.0658736,14.5396526 C51.2734867,16.2984994 51.3487331,18.0996914 51.3487331,19.8708761 C51.3487331,23.370672 51.2525426,26.825381 50.9046422,30.3048421 C50.6013717,33.3381559 49.9840922,36.6016263 46.9314336,38.048825 C46.1315216,38.4280273 45.2872843,38.6019014 44.4181426,38.7360959 C40.9194891,39.276225 37.3556423,39.2165914 33.8318559,39.3708923 C27.7264626,39.6382912 21.579105,39.5619786 15.477215,39.2947319 C13.2607208,39.1977037 11.0617434,39.1377655 8.85126585,38.9239073 C6.98823172,38.7436357 5.09602819,38.5737982 3.52004236,37.4606387 C1.37995795,35.9489506 0.909473624,33.5990036 0.560059622,31.2087731 L0.480869961,30.6568295 L0.480869961,30.6568295 L0.441565441,30.3810024 C0.179726208,28.5523928 0.170510807,26.6642257 0.0898570117,24.8212979 C-0.0851594393,20.8245558 -0.0247642932,16.7607165 0.451923247,12.7879649 C0.783144546,10.0268481 1.17948293,7.31630177 3.5962027,5.56476637 C5.33722797,4.30301809 7.62858783,4.24330839 9.68902954,4.09890839 C12.6339974,3.89243772 15.5747003,3.78086283 18.5236285,3.6516949 C19.509067,3.60858815 20.5143835,3.7334911 21.4938816,3.60485629 Z M20.5799575,13.9303699 L20.5799575,29.1624371 C21.3360773,28.9441615 22.0334014,28.4102776 22.7124469,28.020032 C23.9054224,27.3344367 25.1054047,26.6614078 26.2919827,25.9645407 C27.9836561,24.970953 29.6879721,23.9922165 31.3947252,23.0257419 C32.2148958,22.5613923 33.1851785,22.1515735 33.9080162,21.5464035 C31.1577904,19.8628793 28.3045957,18.3462985 25.5303793,16.7023777 C24.4715222,16.0748927 23.4005556,15.4659146 22.3316452,14.855718 C21.7688204,14.5344737 21.205767,14.1110223 20.5799575,13.9303699 Z"
              id="Combined-Shape"
              fill="#FF0101"
              fill-rule="nonzero"
            ></path>
            <g
              id="WeTube"
              transform="translate(55.578840, 9.376000)"
              fill="#000000"
              fill-rule="nonzero"
            >
              <polygon
                id="Path"
                points="5.04 24.624 7.10542736e-15 2.34 4.5 2.34 7.596 17.784 11.556 2.916 15.696 2.916 19.584 17.64 22.68 2.34 27.216 2.34 22.14 24.624 17.928 24.624 13.572 9.936 9.288 24.624"
              ></polygon>
              <path
                d="M43.02,17.172 L32.256,17.172 C32.616,19.956 34.14,21.348 36.828,21.348 C38.268,21.348 39.6,20.844 40.824,19.836 L42.876,22.572 C41.148,24.156 39.024,24.948 36.504,24.948 C33.912,24.948 31.878,24.138 30.402,22.518 C28.926,20.898 28.188,18.672 28.188,15.84 C28.188,12.936 28.896,10.62 30.312,8.892 C31.728,7.164 33.636,6.3 36.036,6.3 C38.748,6.3 40.716,7.356 41.94,9.468 C42.756,10.86 43.164,12.744 43.164,15.12 C43.164,15.648 43.116,16.332 43.02,17.172 Z M32.256,13.932 L39.276,13.932 C39.276,12.612 39,11.628 38.448,10.98 C37.872,10.26 37.032,9.9 35.928,9.9 C33.84,9.9 32.616,11.244 32.256,13.932 Z"
                id="Shape"
              ></path>
              <polygon
                id="Path"
                points="52.92 5.94 52.92 24.624 48.852 24.624 48.852 5.94 43.092 5.94 43.092 2.34 59.148 2.34 58.14 5.94"
              ></polygon>
              <path
                d="M59.328,6.624 L63.288,6.624 L63.288,17.136 C63.288,19.896 64.404,21.276 66.636,21.276 C68.868,21.276 69.984,19.896 69.984,17.136 L69.984,6.624 L73.944,6.624 L73.944,17.136 C73.944,22.344 71.496,24.948 66.6,24.948 C61.752,24.948 59.328,22.344 59.328,17.136 L59.328,6.624 Z"
                id="Path"
              ></path>
              <path
                d="M81.648,8.208 C82.392,7.512 83.13,7.02 83.862,6.732 C84.594,6.444 85.512,6.3 86.616,6.3 C88.944,6.3 90.744,7.098 92.016,8.694 C93.288,10.29 93.924,12.54 93.924,15.444 C93.924,18.492 93.258,20.838 91.926,22.482 C90.594,24.126 88.692,24.948 86.22,24.948 C84.372,24.948 82.716,24.288 81.252,22.968 L81.252,24.624 L77.76,24.624 L77.76,-3.55271368e-15 L81.648,-3.55271368e-15 L81.648,8.208 Z M85.824,21.312 C87.24,21.312 88.278,20.868 88.938,19.98 C89.598,19.092 89.928,17.688 89.928,15.768 C89.928,13.776 89.598,12.306 88.938,11.358 C88.278,10.41 87.252,9.936 85.86,9.936 C83.052,9.936 81.648,11.856 81.648,15.696 C81.648,17.616 81.984,19.032 82.656,19.944 C83.328,20.856 84.384,21.312 85.824,21.312 Z"
                id="Shape"
              ></path>
              <path
                d="M111.276,17.172 L100.512,17.172 C100.872,19.956 102.396,21.348 105.084,21.348 C106.524,21.348 107.856,20.844 109.08,19.836 L111.132,22.572 C109.404,24.156 107.28,24.948 104.76,24.948 C102.168,24.948 100.134,24.138 98.658,22.518 C97.182,20.898 96.444,18.672 96.444,15.84 C96.444,12.936 97.152,10.62 98.568,8.892 C99.984,7.164 101.892,6.3 104.292,6.3 C107.004,6.3 108.972,7.356 110.196,9.468 C111.012,10.86 111.42,12.744 111.42,15.12 C111.42,15.648 111.372,16.332 111.276,17.172 Z M100.512,13.932 L107.532,13.932 C107.532,12.612 107.256,11.628 106.704,10.98 C106.128,10.26 105.288,9.9 104.184,9.9 C102.096,9.9 100.872,11.244 100.512,13.932 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div className="searchcontent">
        <p>Search</p>
        <input
          className="menubarsearch"
          type="text"
          placeholder="Search for video"
          onChange={handleChange}
          value={keyword}
        />
      </div>
    </div>
  );
}
