
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];
  const camera = [
    <svg 
    xmlns="http://www.w3.org/2000/svg"  fill="#000000" height="20px" width="20px" version="1.1" viewBox="0 0 74.207 74.207" >
      <path d="M57.746,14.658h-2.757l-1.021-3.363c-0.965-3.178-3.844-5.313-7.164-5.313H28.801c-3.321,0-6.201,2.135-7.165,5.313   l-1.021,3.363h-4.153C7.385,14.658,0,22.043,0,31.121v20.642c0,9.077,7.385,16.462,16.462,16.462h41.283   c9.077,0,16.462-7.385,16.462-16.462V31.121C74.208,22.043,66.823,14.658,57.746,14.658z M68.208,51.762   c0,5.769-4.693,10.462-10.462,10.462H16.462C10.693,62.223,6,57.53,6,51.762V31.121c0-5.769,4.693-10.462,10.462-10.462h8.603   l2.313-7.621c0.192-0.631,0.764-1.055,1.423-1.055h18.003c0.659,0,1.23,0.424,1.423,1.057l2.314,7.619h7.204   c5.769,0,10.462,4.693,10.462,10.462L68.208,51.762L68.208,51.762z"/>
  
      <path d="M37.228,25.406c-8.844,0-16.04,7.195-16.04,16.04c0,8.844,7.195,16.039,16.04,16.039s16.041-7.195,16.041-16.039   C53.269,32.601,46.073,25.406,37.228,25.406z M37.228,51.486c-5.536,0-10.04-4.504-10.04-10.039c0-5.536,4.504-10.04,10.04-10.04   c5.537,0,10.041,4.504,10.041,10.04C47.269,46.982,42.765,51.486,37.228,51.486z"/>
  
    </svg>
  ]
  
  const smartView = [
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="20"
    height="20"
    fill="none"
     viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet">
  
  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M1106 1985 c-200 -42 -418 -151 -608 -306 -154 -126 -368 -358 -368 -399 0 -28 100 -147 222 -266 327 -317 647 -466 973 -451 225 10 448 100 682 276 172 129 423 392 423 443 0 47 -254 311 -419 436 -158 119 -311 198 -476 247 -113 34 -319 43 -429 20z m342 -81 c201 -41 424 -163 634 -348 91 -81 258 -259 258 -276 0 -17 -167 -195 -258 -276 -272 -240 -544 -363 -800 -364 -259 0 -530 123 -804 364 -91 81 -258 259 -258 276 0 17 167 195 258 276 211 186 422 302 636 349 85 18 242 18 334 -1z"/>
  <path d="M1166 1754 c-242 -59 -408 -305 -368 -546 44 -265 290 -448 549 -411 264 38 454 289 416 550 -41 284 -320 474 -597 407z m196 -75 c162 -34 288 -166 319 -333 50 -272 -205 -521 -477 -466 -217 44 -364 255 -325 466 42 231 258 380 483 333z"/>
  <path d="M1148 1487 c-7 -8 -40 -100 -72 -205 -63 -205 -64 -222 -10 -222 19 0 26 8 37 46 l13 47 69 1 69 1 14 -47 c11 -40 17 -48 36 -48 54 0 53 18 -9 223 -32 106 -63 198 -68 205 -13 16 -62 15 -79 -1z m82 -258 c0 -13 -10 -16 -47 -15 -27 0 -47 6 -46 11 1 6 12 46 24 90 l23 80 23 -75 c13 -41 23 -82 23 -91z"/>
  <path d="M1462 1478 c-12 -35 -7 -397 5 -409 6 -6 21 -9 34 -7 l24 3 3 209 c3 219 1 225 -41 226 -10 0 -21 -10 -25 -22z"/>
  </g>
  </svg>
  ]
  
  const rtl = [
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="20"
    height="20"
    fill="none"
     viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet">
  
  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M1106 1985 c-200 -42 -418 -151 -608 -306 -154 -126 -368 -358 -368 -399 0 -28 100 -147 222 -266 327 -317 647 -466 973 -451 225 10 448 100 682 276 172 129 423 392 423 443 0 47 -254 311 -419 436 -158 119 -311 198 -476 247 -113 34 -319 43 -429 20z m342 -81 c201 -41 424 -163 634 -348 91 -81 258 -259 258 -276 0 -17 -167 -195 -258 -276 -272 -240 -544 -363 -800 -364 -259 0 -530 123 -804 364 -91 81 -258 259 -258 276 0 17 167 195 258 276 211 186 422 302 636 349 85 18 242 18 334 -1z"/>
  <path d="M1166 1754 c-242 -59 -408 -305 -368 -546 44 -265 290 -448 549 -411 264 38 454 289 416 550 -41 284 -320 474 -597 407z m196 -75 c162 -34 288 -166 319 -333 50 -272 -205 -521 -477 -466 -217 44 -364 255 -325 466 42 231 258 380 483 333z"/>
  <path d="M1148 1487 c-7 -8 -40 -100 -72 -205 -63 -205 -64 -222 -10 -222 19 0 26 8 37 46 l13 47 69 1 69 1 14 -47 c11 -40 17 -48 36 -48 54 0 53 18 -9 223 -32 106 -63 198 -68 205 -13 16 -62 15 -79 -1z m82 -258 c0 -13 -10 -16 -47 -15 -27 0 -47 6 -46 11 1 6 12 46 24 90 l23 80 23 -75 c13 -41 23 -82 23 -91z"/>
  <path d="M1462 1478 c-12 -35 -7 -397 5 -409 6 -6 21 -9 34 -7 l24 3 3 209 c3 219 1 225 -41 226 -10 0 -21 -10 -25 -22z"/>
  </g>
  </svg>
  ]
  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const settingsIcon=[
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 50 50">
        <path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path>
      </svg>
        ]

  return (
    <>
      <div className="brand">
        <img src="https://aivolved.in/wp-content/uploads/2022/11/ai-logo.png" alt="" />
        <span>Aivolved</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label"          style={{
                color: page === "dashboard" ? color : "",
              }}>Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/reports">
            <span
              className="icon"
              style={{
                background: page === "Reports" ? color : "",
              }}
            >
              {tables}
            </span>
            <span className="label"       style={{
                color: page === "Reports" ? color : "",
              }}>Reports</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/ai-smart-view">
            <span
              className="icon"
              style={{
                background: page === "ai-smart-view" ? color : "",
              }}
            >
              {smartView}
            </span>
            <span className="label"   style={{
                color: page === "ai-smart-view" ? color : "",
              }}>AI Smart View</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="4">
          <NavLink to="/machines-parameter">
            <span
              className="icon"
              style={{
                background: page === "machines-parameter" ? color : "",
              }}
            >
              {billing}
            </span>
            <span className="label"      style={{
                color: page === "machines-parameter" ? color : "",
              }}>Machines Parameter</span>
          </NavLink>
        </Menu.Item>


        <Menu.Item key="5">
          <NavLink to="/camera">
            <span
              className="icon"
              style={{
                background: page === "camera" ? color : "",
              }}
            >
              {camera}
            </span>
            <span className="label"       style={{
                color: page === "camera" ? color : "",
              }}>Camera</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6">
          <NavLink to="/settings">
            <span
              className="icon"
              style={{
                background: page === "settings" ? color : "",
              }}
            >
              {settingsIcon}
            </span>
            <span className="label"           style={{
                color: page === "settings" ? color : "",
              }} >Settings</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="4">
          <NavLink to="/organization">
            <span
              className="icon"
              style={{
                background: page === "organization" ? color : "",
              }}
            >
              {rtl}
            </span>
            <span className="label">Organization</span>
          </NavLink>
        </Menu.Item> */}
        {/* <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item> */}
        {/* <Menu.Item key="6">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {profile}
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="icon">{signin}</span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon">{signup}</span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item> */}
      </Menu>
    </>
  );
}

export default Sidenav;
