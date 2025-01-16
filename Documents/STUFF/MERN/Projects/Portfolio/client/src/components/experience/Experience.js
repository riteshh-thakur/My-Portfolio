import { Fragment } from 'react';
import classes from './css/Experience.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, ListItem, Tag, Text, useTheme } from 'stelios';
import styled from 'styled-components';

const StyledTimeline = styled.div`
  background-color: ${props => props.$timelineColor};
`;
const StyledTimelineItemCircle = styled.div`
  background-color: ${props => props.$circleColor};
`;
const StyledCard = styled(Card)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 85%;
  }
`;


const Experience = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];
    
    return (
        <div>
            <Text size="large" color="primary" className={`${classes.experienceTitle} title`}>Experience</Text>
            <div className={classes.timeline}>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-first"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}></StyledTimelineItemCircle></div>
                    <StyledCard  className={classes["timeline-item"]} style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                        <Text preciseColor={_color}>Full Stack Developer</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;ThinkNEXT Technologies</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;June 2024 - July 2024&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Developed and optimized responsive user interfaces to ensure seamless experiences across devices</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Implemented RESTful APIs and integrated third-party services to enhance application functionality and performance</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Applied version control practices using Git and collaborated with teams via GitHub</Text></ListItem> 
                        </List>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>MongoDB</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>React</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Express</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                        </List>
                        </>
                    </StyledCard>
                </div>
                <div className={`${classes["timeline-row"]}`}>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary" className={classes["timeline-item"]}>
                        <>
                            <Text preciseColor={_color}>Web Developer</Text>
                            <div className={classes["timeline-location"]}>
                                <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Sabeena Digital Media Services</Text>
                                <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2024 - July 2024&nbsp;&nbsp;</Text>
                            </div>
                            <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Managed the complete flow (Back-End. Front-End and APIs) of websites</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Worked with experienced testers to find performance bottlenecks thus improving page loading time by 19%</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Built and deployed applications on cloud platforms like AWS, Azure, or Heroku, ensuring scalability and reliability</Text></ListItem> 
                               
                            </List>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>SEO</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Next.js</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Postman</Text></Tag></ListItem>
                            </List>
                        </>
                    </StyledCard>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                </div>
                <div className={`${classes["timeline-row"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary" className={classes["timeline-item"]}>
                        <>
                            <Text preciseColor={_color}>Contributor at GSSOC'24</Text>
                            <div className={classes["timeline-location"]}>
                                <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;GirlScript Summer Of Code</Text>
                                <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2024 - Jul 2024&nbsp;&nbsp;</Text>
                            </div>
                            <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Refactored existing codebases to enhance performance and maintainability</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Developed a deep understanding of database structures and optimization techniques using NoSQL databases</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Built a strong portfolio of open-source contributions showcasing technical expertise and collaborative skills</Text></ListItem> 
                            </List>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>OOPs</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>MERN</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>NoSQL</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Testing</Text></Tag></ListItem>
                            </List>
                        </>
                    </StyledCard>
                </div>
               
                <StyledTimeline $timelineColor={_primaryBgColor} className={classes["time-line"]}>&nbsp;</StyledTimeline >
            </div>
        </div>
  );
}

export default Experience;