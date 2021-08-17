import { Formik, Form, Field } from 'formik';
import { debounce } from 'throttle-debounce';
import { toast } from 'react-hot-toast';
import css from './FormItems.module.css';

export const FormItems = ({
  schema,
  onSubmit,
  children,
  initValues,
  inputTags,
}) => {
  const onError = debounce(500, error => {
    toast.error(error);
  });

  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          {inputTags.map(el => {
            return (
              <label className={css.label} htmlFor={el.id} key={el.id}>
                {el.label}
                <Field
                  type={el.type}
                  className={css.input}
                  id={el.id}
                  name={el.id}
                  placeholder={`Enter ${el.label}`}
                />
                {touched[el.id] && errors[el.id] && onError(errors[el.id])}
              </label>
            );
          })}
          {/* <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field
            className={css.input}
            id="name"
            name="name"
            placeholder="Enter name"
          />
          {touched.name && errors.name && onError(errors.name)} */}

          {/* <label className={css.label} htmlFor="tel">
            Phone
          </label>
          <Field
            className={css.input}
            id="tel"
            name="tel"
            placeholder="Enter phone number"
          />
          {touched.tel && errors.tel && onError(errors.tel)} */}
          {children}
        </Form>
      )}
    </Formik>
  );
};
