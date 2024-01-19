import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ThreeDots } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify'; // Import the ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import Gmail from '../assets/gmail.webp';
const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [errorsFlag, setErrorsFlag] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const objFlag = { name: false, email: false, message: false };
    const obj = { name: '', email: '', message: '' };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (values?.name?.trim().length === 0) {
      objFlag.name = true;
      obj.name = '*Name cannot be empty !';
    } else if (values?.name.replace(/\s+/g, '').length <= 2) {
      objFlag.name = true;
      obj.name = '*Name cannot be less than 3 characters !';
    } else if (values?.name.replace(/\s+/g, '').length > 20) {
      objFlag.name = true;
      obj.name = '*Name cannot be greater than 20 characters !';
    } else if (!values?.name.match(lettersregex)) {
      objFlag.name = true;
      obj.name = '*Name can only contain alphabets';
    } else {
      objFlag.name = false;
      obj.name = '';
    }

    if (values?.email?.trim().length === 0) {
      objFlag.email = true;
      obj.email = '*Email cannot be empty !';
    } else if (values?.email.length > 40) {
      objFlag.email = true;
      obj.email = '*Email should be less than 40 characters !';
    } else if (!values?.email.match(mailregex)) {
      objFlag.email = true;
      obj.email = '*Please enter valid Email !';
    } else {
      objFlag.email = false;
      obj.email = '';
    }

    if (values?.message?.trim().length === 0) {
      objFlag.message = true;
      obj.message = '*Message cannot be empty !';
    } else if (values?.message.length > 200) {
      objFlag.message = true;
      obj.message = '*Please write a short message(Max 200 Characters) !';
    } else {
      objFlag.message = false;
      obj.message = '';
    }

    setErrorsFlag((errorsFlag) => ({ ...errorsFlag, ...objFlag }));
    setErrors({ ...errors, ...obj });

    if (!objFlag.name && !objFlag.email && !objFlag.message) {
      setValues({ name: '', email: '', message: '' });
      setLoading(true);

      try {
        const response = await emailjs.sendForm(
          'service_dfys7rl',
          'template_83ebogm',
          form.current,
          'ubbUxmXY-55P1PyyH'
        );

        if (response.status === 200) {
          setLoading(false);
          toast.success('Form Submitted !');
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error('Form Submission Failed. Please send me an email !');
      }
    }
  };

  return (
    <>
      <h1 className="contact_heading">Contact Me</h1>
      
      <div data-aos="zoom-out-right" className="contact_email">
        <img data-aos="fade-up" data-aos-anchor-placement="bottom-center" src={Gmail} alt="" /> jobforakash9770@gmail.com
      </div>
      {!loading ? (
        <form className="contact_form" autoComplete="off" ref={form}>
          <div data-aos="flip-right" className="contact_form_formcontrol">
            <label data-aos="zoom-out-right"  htmlFor="name" className="contact_form_formcontrol_label">
              Name 
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="name"
              name="name"
              type="text"
              value={values?.name ?? ''}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">{errorsFlag?.name && errors?.name}</p>
          </div>
          <div data-aos="flip-up" className="contact_form_formcontrol">
            <label data-aos="zoom-out-down" htmlFor="email" className="contact_form_formcontrol_label">
              Email 
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="email"
              name="email"
              type="email"
              value={values?.email ?? ''}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">{errorsFlag?.email && errors?.email}</p>
          </div>
          <div data-aos="flip-left" className="contact_form_formcontrol">
            <label data-aos="zoom-out-left" htmlFor="message" className="contact_form_formcontrol_label">
              Message 
            </label>
            <textarea
              className="contact_form_formcontrol_input"
              id="message"
              name="message"
              value={values?.message ?? ''}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {errorsFlag?.message && errors?.message}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <button data-aos="zoom-out" className="mb-20 contact_form_formcontrol_submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="contact_submission">
          <div className="contact_submission_head">Submitting Form Details</div>
          <ThreeDots ariaLabel="loading-indicator"  />
          <div className="contact_submission_text">Please wait...</div>
        </div>
      )}
      <ToastContainer />
  
    </>
  );
};

export default Contact;
