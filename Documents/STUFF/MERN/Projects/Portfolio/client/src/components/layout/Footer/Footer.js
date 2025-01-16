import classes from './css/Footer.module.css';
import { List, ListItem, Text, useTheme } from 'stelios';
import { Link } from 'stelios';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
    const colorPalette = useTheme().theme.colorPalette;
    const _primaryBgColor = colorPalette.primary.accentScale[8];
    return (
        <div className={classes.footer} style={{backgroundColor: _primaryBgColor}}>
            <div className={classes.footerContent}>
                <Text variant="div" fontSize='2rem' preciseColor="white" style={{textAlign: "center", marginTop: "36px", lineHeight: "1.25"}}>Thank you for visiting!</Text>
                <div className={classes.footerMenuComplete} style={{marginTop: "24px"}}>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><Text variant="span" preciseColor='white'>Content</Text></div>
                        <List className={classes.footerMenuContent} style={{padding:"0 0 0 12px", margin: 0, display: "flex", flexDirection: "row", justifyContent: 'center', alignItems:"center"}}>
                            
                            <ListItem><Link preciseColor="white" href="/">Home</Link></ListItem>
                            <ListItem><Link preciseColor="white" href="/projects">Projects</Link></ListItem>
                            <ListItem><Link preciseColor="white" href="/certificates">Certificates</Link></ListItem>
                            <ListItem><Link preciseColor="white" href="/skills">Skills</Link></ListItem>
                        </List>
                    </div>
                    <div className={`${classes.footerMenu} ${classes.lastFooterMenu}`}>
                    <div className={classes.footerMenuHeader}><Text variant="span" preciseColor='white'>Socials</Text></div>
                        <ul className={classes.footerMenuContent}>
                            <Link preciseColor="white" size="large" href="https://www.linkedin.com/in/ritesh-thakur-35ba71249/" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><IconBrandLinkedin/></Link>
                            <Link preciseColor="white" size="large" href="https://github.com/riteshh-thakur" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><IconBrandGithub/></Link>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;