import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={s.Form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <label className={s.label} htmlFor="number">
          Number
        </label>

        <Field type="text" name="number" />
        <ErrorMessage name="number" />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
