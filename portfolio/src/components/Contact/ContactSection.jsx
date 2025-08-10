//contact section included on each page

/*
 -name
 -pronouns
 -degree
 -email
 -phonenumber perhaps
 -github
 -cv link
 -linked in link
*/

import "./ContactSection.css";
import pfp from "./pfp.jpg"

function ContactSection(){

    return(
       <div className="contactSection">
            <img src={pfp} alt="Profile" className="profilePic"/>
            <p className="name">Alister Faid</p>
            <p className="pronouns">any/all</p>
            <p className="blurb">November 2025 Graduate - Bachelor of Computer and Information Sciences from AUT, Specialising in Software Development, Networking & Cyber Security and Creative Technologies.</p>
            <div className="horizontal-line"></div>
            <ul>
                <li>
                    <a href="#" className="email">alister@faid.co.nz</a>
                </li>
                <li>
                     <a href="#" className="github">github</a>
                </li>
                <li>
                    <a href="#" className="cv">CV link</a>
                </li>
                <li>
                    <a href="#" className="cv">Transcript link</a>
                </li>
                <li>
                    <a href="#" className="linkedin">Linkedin</a>
                </li>
            </ul>
           

       </div>
    );
}

export default ContactSection;
