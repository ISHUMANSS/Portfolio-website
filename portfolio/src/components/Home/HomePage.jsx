//home page will contain all the information needed in short easy details
//will have links to bigger sections so that the viewer can gain more information if they want to


import AboutSection from "../About/AboutSection";
import Aside from "../Aside/Aside";
import NavBar from "../Nav/NavBar";
import ProjectSection from "../Projects/ProjectSection";
import TechStackSection from "../TechStack/TechStackSection";

function HomePage(){

    return(
       <div className="content">
            <NavBar />
            <Aside />
            <AboutSection />
            <TechStackSection />
            <ProjectSection />
            


       </div>
    );
}

export default HomePage;