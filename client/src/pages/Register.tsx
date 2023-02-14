import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useState } from "react";
import GoBack from "../components/GoBack";
import Layout from "../components/Layout";
import { COGNITO_USER_POOL } from "../services/cognito.service";
import { toastNotify } from "../utils/notification";
function Register() {
  const [form, formData] = useState({
    username: "",
    email: "",
    password: "",
    verificationCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  function handleChange(e: any) {
    formData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    let attributeList = [];
    let emailData = {
      Name: "email",
      Value: form.email,
    };
    let attributeEmail = new CognitoUserAttribute(emailData);
    attributeList.push(attributeEmail);

    COGNITO_USER_POOL.signUp(
      form.username,
      form.password,
      attributeList,
      null as any,
      (err, data) => {
        if (err) {
          console.log(err.message);
          toastNotify("error", err.message);
        }
        if (data) {
          console.log("data is here ", data);
          setShowVerification(true);
        }
      }
    );
  }

  // Verify code needed
  // Redirect on success needed

  return (
    <Layout>
      <div className="xl:w-6/12 md:w-8/12 w-full mx-auto p-2">
        <GoBack />
        <div className="w-full bg-white mt-10 rounded-xl p-5">
          <h5 className="font-bold text-blue-900 text-xl text-center">
            Register
          </h5>
          <section>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="mt-1 mb-1 font-bold text-blue-900"
                >
                  Username
                </label>
                <p className="text-xs mb-1 text-gray-400">
                  Enter a unique username
                </p>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="border-[1px] rounded w-full p-1"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="mt-1 mb-1 font-bold text-blue-900"
                >
                  Email
                </label>
                <p className="text-xs mb-1 text-gray-400">
                  Enter an email used for primary communications
                </p>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="border-[1px] rounded w-full p-1"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="mt-1 mb-1 font-bold text-blue-900"
                >
                  Password
                </label>
                <p className="text-xs mb-1 text-gray-400">
                  Enter a 6 digit, alphanumeric password
                </p>
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
                Register
              </button>
            </form>
          </section>
          <section>
            {isLoading && (
              <p className="text-center mt-2 mb-2">
                Validating your identity...
              </p>
            )}
          </section>
          <section>
            {showVerification && (
              <>
                <form>
                  <div className="mt-3 text-center">
                    <label
                      htmlFor="verificationCode"
                      className="mt-1 mb-1 font-bold text-blue-900"
                    >
                      Verification Code
                    </label>
                    <p className="text-sm text-gray-500">
                      Enter your verification code sent to{" "}
                      <span className="italic">{form.email}</span>
                    </p>
                    <input
                      type="number"
                      className="w-full mt-2 mb-2 border-[1px] rounded p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="pl-3 pr-3 pt-2 pb-2 rounded bg-blue-900 text-white font-bold w-full mt-3"
                  >
                    Verify Account
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
export default Register;
