import React from "react";
import { Field, Form } from "react-final-form";
import "./Login.css";
const Login = () => {
  return (
    <Form
      onSubmit={(data) => {
        console.log(data);
      }}
    >
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
