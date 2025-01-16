




import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';
import "./css/ProjectPage.css";
import { Drawer, IconButton, List, ListItem, Text, Link } from "stelios";
import Loader from '../../Loader/Loader';

const Playlist = () => {

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        spin ? (
          <div className="loader-container">
            {/* Use the Loader component */}
            <Loader />
            
          </div>
        )
        
        : 
        <div className="container">
          <h2 className='text-center mt-2'><Text>Projects</Text></h2>
          <div className="card_div">
            <div className="row d-flex justify-content-center">
              {
                projectData.map((el, index) => {
                  return (
                    <div className="col-md-4 col-lg-3 col-sm-6 col-12 mb-4" key={index}>
                      <Card className="custom-card">
                        <Card.Img variant="top" src={el.imgsrc} />
                        <Card.Body className='d-flex justify-content-center flex-column'>
                          <Card.Title className='text-center'>{el.projectName}</Card.Title>
                          <Button variant="primary">
                            <a href={el.demo} target="_blank" className='text-decoration-none text-light'>View</a>
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Playlist;




