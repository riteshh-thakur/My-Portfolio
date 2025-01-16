import { Route, Routes } from "react-router-dom";
import colorTokens from "./tokens/color/color-tokens.json";

import Homepage from "./components/pages/homepage/Homepage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import classes from "./App.module.css";
import CookieOverlay from "./components/overlays/Cookies/CookieOverlay";

import ProjectsPage from "./components/pages/projectspage/ProjectsPage";
import CertificatePage from "./components/pages/certificatespage/CertificateBody";
import SkillsPage from "./components/pages/skillspage/SkillsPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";

import { ThemeProvider, useTheme } from "stelios";
import VariantProvider from "./components/VariantProvider/VariantProvider";


const AppContent = () => {
  const theme = useTheme().theme;
  const colorPalette = theme.colorPalette;
  const appearance = colorPalette.primary.appearance;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appearance === "light" ? "white" : "#202124",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/projects/" element={<ProjectsPage />} />
         <Route path="/certificates/" element={<CertificatePage />} />
        <Route path="/skills/" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      
        
      </Routes>
    </div>
  );
};

function App() {
  return (
    <div className={classes.app}>
      <VariantProvider variant="neumorph">
        <ThemeProvider
          accents={{
            primary: colorTokens.accent.primary,
            black: colorTokens.accent.black,
          }}
          appearance={colorTokens.appearance}
        >
          <Header />
          <AppContent />
          <Footer />
          <CookieOverlay />
        </ThemeProvider>
      </VariantProvider>
    </div>
  );
}

export default App;
