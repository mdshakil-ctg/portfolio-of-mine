import React from "react";
import { FaLinkedin ,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="footer p-10  text-neutral-content">

<div>
  <span className="footer-title">Social</span> 
  <div className="grid grid-flow-col gap-4">
    <a href="https://www.linkedin.com/in/mdshakil-ctg/"><FaLinkedin style={{"fontSize":'25px'}}></FaLinkedin></a>
    <a href="https://github.com/mdshakil-ctg"><FaGithub style={{"fontSize":'25px'}}></FaGithub></a>
    
    <a href="https://web.facebook.com/profile.php?id=100007255800641"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    
  </div>
  <div className="mt-10">

  <p>Copyright © 2022 <br/>All right reserved by Mohammed Shakil</p>
</div> 
</div>
</footer>
    
  );
};

export default Footer;
