import { useState } from "react";
import Logo from "../../assets/logo.png";
import ConnectWithGoogle from "./ConnectWithGoogle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-[50vh] bg-[#00710F]">
        <div className="flex flex-col justify-center items-center gap-y-4 pt-20">
          <img className="w-20 h-20" src={Logo} alt="company logo" />
          <h1 className="text-4xl text-white tracking-wide font-medium">
            Family Budget
          </h1>
        </div>
      </div>
      <div className="w-full min-h-[50vh] bg-[#EBEBEB] relative">
        <div className="w-full max-w-2xl rounded-md bg-white shadow-md absolute -top-20 left-1/2 transform -translate-x-1/2 h-[420px]">
          <h2 className="text-center mt-6 font-bold text-3xl tracking-wide text-gray-900">
            Login
          </h2>
          <div className="flex mt-12">
            <div className="flex flex-col w-6/12 ">
              <span className="text-center text-sm text-gray-500 tracking-wider">
                Using social networking accounts
              </span>
              <ConnectWithGoogle />
            </div>
            <div className="flex flex-col w-6/12 gap-y-4 border-l-2">
              <span className="text-center text-sm text-gray-500 tracking-wider">
                Using Family Budget account
              </span>
              <input
                className="w-10/12 h-12 mx-auto bg-gray-100 pl-3 rounded-lg hover:border-2 hover:border-light-green focus:outline-light-green placeholder:tracking-wide"
                placeholder="Email"
              />
              <div className="w-10/12 h-12 mx-auto relative">
                <input
                  className="w-full h-12 bg-gray-100 hover:border-2 pl-3 rounded-lg hover:border-light-green focus:outline-light-green placeholder:tracking-wide"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {!showPassword && (
                  <svg
                    onClick={() => setShowPassword(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-5 h-5 absolute top-3 right-3 cursor-pointer stroke-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                )}

                {showPassword && (
                  <svg
                    onClick={() => setShowPassword(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    className="w-5 h-5 absolute top-3 right-3 cursor-pointer stroke-light-green"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                )}
              </div>
              <button className="mt-4 w-10/12 h-12 mx-auto bg-light-green text-white tracking-wider font-semibold pl-3 rounded-lg hover:opacity-95">
                Login
              </button>
              <p className="mt-4 w-full text-center text-sm">
                Don't have account?
                <span className="text-light-green pl-2 underline cursor-pointer hover:opacity-70">
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
