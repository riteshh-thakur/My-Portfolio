import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCalendar } from "@fortawesome/free-solid-svg-icons";

import classes from './css/Education.module.css';
import { Card, List, ListItem, Tag, Text, useTheme } from "stelios";
import styled from "styled-components";

const StyledItemCircle = styled.div`
  background-color: ${props => props.$circleColor};
`;
const StyledTimeline = styled.div`
  background-color: ${props => props.$timelineColor};
`;
const StyledCard = styled(Card)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 85%;
  }
`;

const Education = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];

    return (
        <div>
        <Text color="primary" size="large">Education</Text>
        <div id="educational-timeline" className={classes.timeline}>
            <StyledTimeline $timelineColor={_primaryBgColor} className={classes["time-line"]}>&nbsp;</StyledTimeline >
            <div className={`${classes["timeline-row"]} ${classes["timeline-row-first"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                    <Text preciseColor={_color}>B.Tech (Computer Science)</Text>
                    <div className={classes["timeline-location"]}>
                        <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Atal Bihari Vajpayee Government Institute Of Engineering & Technology</Text>
                        <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Sep 2022 - Present&nbsp;&nbsp;</Text>
                    </div>
                    <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem><Text size="small" preciseColor={_color}>1st Year: Programming Languages</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt C, C++ and Java</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt basics of Data Structures from UDEMY</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 7.67</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>2nd Year: Web Development</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Dived into MERN Stack to understand how to create websites</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt MERN and Git/GitHub using 30dayscoding</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 7.20</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>3rd Year: Blockchain</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Developed and deployed smart contracts using Solidity on Ethereum and other blockchain platforms</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Designed and implemented decentralized applications (DApps) with web3.js, ethers.js, and frontend frameworks like React</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA:7.17</Text></ListItem>
                        </List>
                        
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>CGPA: 7.12</Text></ListItem> 
                    </List>
                    <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>MERN</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Blockchain</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Solidity</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C++</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Java</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Ether.js</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>DApps</Text></Tag></ListItem>
                    </List>
                    </>
                </StyledCard>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
            <div className={`${classes["timeline-row"]}`}>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                <div className={classes["timeline-circle"]}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>CBSE (XI and XII)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;DAV Public School</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2020 - Jul 2022&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Learnt basics of C++ and JAVA</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 85%</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Scored 100 out of 100 in Computer Applications</Text></ListItem>
                        </List>
                        
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C++</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>JAVA</Text></Tag></ListItem>
                        </List>
                    </>
                </StyledCard>
            </div>
            <div className={`${classes["timeline-row"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <StyledCard style={{padding: "1.25rem", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>CBSE (X)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;DAVM Public School</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Learnt basics of HTML and CSS</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 91.2%</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Scored 100 out of 100 in Maths</Text></ListItem>
                        </List>
                    </>
                </StyledCard>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
        </div>
        </div>
    );
};

export default Education;