import GoBack from "../components/GoBack";
import Layout from "../components/Layout";
import { useState } from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { COGNITO_USER_POOL } from "../services/cognito.service";
import { toastNotify } from "../utils/notification";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e: any) {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const details = new AuthenticationDetails({
      Username: formdata.email,
      Password: formdata.password,
    });

    const user = new CognitoUser({
      Username: formdata.email,
      Pool: COGNITO_USER_POOL,
      Storage: sessionStorage,
    });

    user.authenticateUser(details, {
      onSuccess: (data) => {
        toastNotify("success", "Login success");
        setTimeout(() => {
          navigate("/");
        }, 500);
      },
      onFailure: (err) => {
        toastNotify("error", err.message);
      },
    });
  }
  return (
    <Layout>
      <div className="xl:w-6/12 md:w-8/12 w-full mx-auto p-2">
        <GoBack />
        <div className="w-full bg-white mt-10 rounded-xl p-5">
          <h5 className="font-bold text-blue-900 text-xl text-center">Login</h5>
          <section>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="mt-1 mb-1 font-bold text-blue-900"
                >
                  Email
                </label>

                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="border-[1px] rounded w-full p-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mt-1 mb-1 font-bold text-blue-900"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="border-[1px] rounded w-full p-1"
                />
              </div>
              <button
                type="submit"
                className="pl-3 pr-3 pt-2 pb-2 rounded bg-blue-900 text-white font-bold w-full mt-3"
              >
                Login
              </button>
            </form>
          </section>
          <section>
            {/* {isLoading && (
          <p className="text-center mt-2 mb-2">
            Validating your identity...
          </p>
        )} */}
          </section>
        </div>
      </div>
    </Layout>
  );
}
export default Login;
