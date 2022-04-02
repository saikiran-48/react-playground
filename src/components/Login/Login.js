import React from "react";
import { Field, Form } from "react-final-form";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const submit = (data) => {
    console.log(data);
    if (data.password === "007") {
      history.push("/navigator/githubfinder");
    } else {
      alert("Wrong Password! Hint : JamesBond!");
    }
  };

  return (
    <Form onSubmit={submit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="wrapper">
              <h1>React Final Form</h1>

              <Field name="name">
                {({ input }) => (
                  <input
                    className="text-field"
                    placeholder="Name"
                    type="text"
                    {...input}
                  />
                )}
              </Field>
              {/* <Field name="email">
                {({ input }) => (
                  <input
                    className="text-field"
                    placeholder="Email"
                    type="email"
                    {...input}
                  />
                )}
              </Field> */}
              <Field name="password">
                {({ input }) => (
                  <input
                    className="text-field"
                    placeholder="password"
                    type="password"
                    {...input}
                  />
                )}
              </Field>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Form>
  );
};

export default Login;
