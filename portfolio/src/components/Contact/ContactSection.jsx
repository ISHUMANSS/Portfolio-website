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

function ContactSection(){

    return(
       <div className="contactSection">
            <h1>contact section</h1>
            <p className="name">Alister Faid</p>
            <p className="pronouns">any/all</p>
            <p className="degree"></p>
            <a href="#" className="email">alister@faid.co.nz</a>
            <a href="#" className="github">github</a>
            <a href="#" className="cv">CV link</a>
            <a href="#" className="linkedin">my linked in</a>

       </div>
    );
}

export default ContactSection;
