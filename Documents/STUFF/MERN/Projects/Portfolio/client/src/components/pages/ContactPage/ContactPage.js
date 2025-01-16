



import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./css/ContactPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text } from "stelios";
import Loader from '../../Loader/Loader'; // Import the Loader component

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  // Simulate a loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else if (mobile === "") {
      toast.error("Mobile number is required");
    } else {
      try {
        const res = await fetch("http://localhost:7002/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fname, lname, email, mobile, message }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data.status === 201) {
          toast.success("Your Response Submitted");
          setInputvalue({
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            message: "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch:", error);
        toast.error("Failed to submit the form. Please try again later.");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader />
        {/* <p>Loading Contact Page...</p> */}
      </div>
    );
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'><Text>Contact Me</Text></h2>
        <div className="container mt-2">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name='lname' value={inputvalue.lname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={inputvalue.email} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name='mobile' value={inputvalue.mobile} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={getvalue} value={inputvalue.message} name="message" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sentUserdata}>
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
