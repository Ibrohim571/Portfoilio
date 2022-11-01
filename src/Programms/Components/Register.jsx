import { useState } from "react";
import useFetch from "../hooks/useFetch";
// styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/register.css";

function Register() {
  const request = useFetch();
  // Use Statelar
  const [isLogin, setIslogin] = useState(false);
  // register state
  const [R_name, set_R_name] = useState("");
  const [R_phoneNumber, set_R_phoneNumber] = useState("");
  const [R_username, set_R_username] = useState("");
  const [R_password, set_R_password] = useState("");
  const [R_Rpassword, set_R_Rpassword] = useState("");
  // login state
  const [L_password, set_L_password] = useState("");
  const [L_username, set_L_username] = useState("");

  const register_login_send = () => {
    if (isLogin) {
      // Login send object
      if (L_username.length && L_password.length) {
        const send_user_login = {
          password: L_password,
          username: L_username,
        };

        request("users/login", "POST", JSON.stringify(send_user_login))
          .then((res) => {
            if (res.token) {
              localStorage.setItem("user", JSON.stringify(res));
            } else {
              toast.error(res.errMsg);
            }
          })
          .catch((e) => {
            toast.error(e);
          });
      } else {
        toast.error("Malumotlarni to'ldiring");
      }
    } else {
      // Register send object
      if (
        R_name.length &&
        R_phoneNumber.length &&
        R_username.length &&
        R_password.length &&
        R_Rpassword.length
      ) {
        const regex =
          /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        const send_user = {
          name: R_name,
          phoneNumber: R_phoneNumber.replace(regex, ""),
          username: R_username.replace(regex, ""),
          password: R_password.replace(regex, ""),
          Rpassword: R_Rpassword.replace(regex, ""),
        };
        request("users/register", "POST", JSON.stringify(send_user))
          .then((res) => {
            if (res.sucsMsg) {
              toast.success(res.sucsMsg);
              setIslogin(true);
            } else {
              toast.error(res.errMsg);
            }
          })
          .catch((e) => {
            toast.error(e);
          });
      } else {
        toast.error("Malumotlarni to'ldiring");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      {/* toast conatiner */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {/* the end */}
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0" />
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-3xl xl:text-4xl font-bold leading-tight mb-6">
              Welcome our social media application. Enjoy your time with myGramm
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </div>
          </div>
          {/*-remove custom style*/}
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className=" p-4 md:flex md:items-center md:justify-center md:w-1/2 md:h-full md:p-10 sm:w-full sm:p-1  xl:w-2/5 lg:p-14 bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h3 className="mt-2 text-2xl font-bold text-gray-700">
                {isLogin
                  ? "Sign in to your account"
                  : "Sign up and create your profile"}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {isLogin ? "Please sign in to your account" : undefined}
              </p>
            </div>
            {/* Login form */}
            {isLogin ? (
              <div className="mt-3 space-y-6">
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Username
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="text"
                    placeholder="Enter your username"
                    onChange={(e) => set_L_username(e.target.value)}
                    value={L_username}
                  />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => set_L_password(e.target.value)}
                    value={L_password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded hover:cursor-pointer"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900 hover:cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-indigo-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => register_login_send()}
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="#"
                    onClick={() => setIslogin(false)}
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            ) : (
              // Login form end
              // Register
              <div className="mt-3 space-y-6">
                {/* name */}
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Name
                  </label>
                  <input
                    onChange={(e) => set_R_name(e.target.value)}
                    value={R_name}
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="text"
                    placeholder="Enter your name"
                    minLength="3"
                    maxLength="15"
                  />
                </div>
                {/* username */}
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Username
                  </label>
                  <input
                    onChange={(e) => set_R_username(e.target.value)}
                    value={R_username}
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="text"
                    placeholder="Enter your username"
                    minLength="3"
                    maxLength="15"
                  />
                </div>
                {/* phone number */}
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Phone number
                  </label>
                  <input
                    onChange={(e) => set_R_phoneNumber(e.target.value)}
                    value={R_phoneNumber}
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="tel"
                    placeholder="+998915625677"
                  />
                </div>
                {/* password */}
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    onChange={(e) => set_R_password(e.target.value)}
                    value={R_password}
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Password is min 5 max 10"
                  />
                </div>
                {/* Repeat password */}
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Repeat Password
                  </label>
                  <input
                    onChange={(e) => set_R_Rpassword(e.target.value)}
                    value={R_Rpassword}
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Repeat your password"
                  />
                </div>
                {/* the end */}
                <div>
                  <button
                    onClick={() => register_login_send()}
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Do you have an account ?</span>

                  <a
                    href="#"
                    onClick={() => setIslogin(true)}
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            )}
            {/* the end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

// https://tailwindcomponents.com/search?query=Login
