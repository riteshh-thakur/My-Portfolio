import * as React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { Avatar, Button, Card, Link, List, ListItem, Text, useTheme } from "stelios";


const Intropage = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8]
    const _primaryColor = useTheme().theme.colorPalette.primary.accentContrast;
    const [showResume, setShowResume] = React.useState(false);

    const onCloseModalHandler = () => {
        setShowResume(false);
    }

    return (
        <>
        <Card
        animate="fade-in"
        variant="neumorph"
        color="primary"
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "100%",
            flexWrap: "wrap"
        }}
        >
        <>
            <div
                style={{
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Avatar
                    size="xlarge"
                    type="image"
                    src={profileImage}
                    alt="Profile Image"
                />
                <Text
                    variant="h4"
                    color="primary"
                    size="large"
                    fontFamily='"Alegreya", serif;'
                    style={{ marginTop: "1rem", textAlign: "center" }}
                >
                    Ritesh Thakur
                </Text>
                </div>
            <div style={{ flex: "1 1 65%", padding: "1rem 0" }}>

            <List color="primary" title={<Text color="primary" size="large">Software Developer</Text>} style={{gap: "0.25rem"}}>
                <ListItem><Text preciseColor={_color} size="medium">I craft scalable, user-centric solutions by blending creativity with code, specializing in full-stack development and modern web technologies.</Text></ListItem>
                <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Passionate about solving complex problems and turning ideas into intuitive digital experiences that deliver real value.</Text></ListItem>
               
            </List>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", columnGap: "2rem", rowGap: "1rem", flexWrap: "wrap"}}>
               
                <Button variant="neumorph" color="primary" onClick={() => {window.open("https://drive.google.com/file/d/155V8zjNrEhXfMuLQPWh70C5EVyy1haVj/view?usp=drive_link")}}>View Resume</Button>
                <Button variant="neumorph" color="primary" onClick={() => {window.open("https://www.linkedin.com/in/ritesh-thakur-35ba71249/")}}>LinkedIn Profile</Button>
            </div>
            </div>
        </>
        </Card>
       
        </>
    );
};

export default Intropage;
