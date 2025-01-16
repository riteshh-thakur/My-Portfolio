




import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CertificateData from './CertificateData';
import "./css/CertificateBody.css";
import { Text } from "stelios";
import Loader from '../../Loader/Loader'; // Import the Loader component

const Certificate = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  return (
    <>
      {spin ? (
        <div className="loader-container">
          {/* Use the Loader component */}
          <Loader />
          {/* <p>Loading Certificates...</p> */}
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-2">
            <Text>Certificates</Text>
          </h2>
          <div className="card_div">
            <div className="row d-flex justify-content-center">
              {CertificateData.map((el, index) => (
                <div
                  className="col-md-4 col-lg-3 col-sm-6 col-12 mb-4"
                  key={index}
                >
                  <Card className="custom-card">
                    <Card.Img variant="top" src={el.imgsrc} />
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <Card.Title className="text-center">
                        {el.projectName}
                      </Card.Title>
                      <Button variant="primary">
                        <a
                          href={el.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none text-light"
                        >
                          View
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;
