import React from "react";
import { withFormik } from "formik";
import { object, string, number } from "yup";

const MyForm = (props) => {
  const { values, handleChange, handleBlur, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["values"]["1"]}
          name="values.1"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["values"]["5"]}
          name="values.5"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values["values"]["name"]}
          name="values.name"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    imageID: 82,
    values: {
      1: "",
      5: "",
      name: "",
    },
  }),

  validationSchema: object().shape({
    imageID: number(),
    values: object().shape({
      1: string().required("Required"),
      5: string().required("Required"),
      name: string().required("Required"),
    }),
  }),

  handleSubmit: () => {},

  displayName: "BasicForm",
})(MyForm);
