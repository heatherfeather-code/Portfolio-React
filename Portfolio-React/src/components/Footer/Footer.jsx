import "./Footer.css";
import githubLogo from '../../assets/github-white.png';
import linkedinLogo from '../../assets/linkedinb.png';
import emailLogo from '../../assets/email-white.png';

export default function Footer(){
    return(
        <footer className="footer">
            <div className= "footer-content">
        <div className="footer-icons">
            <a href="https://github.com/heatherfeather-code">
            <img src={githubLogo} alt="github Logo"/></a>
            <a href="mailto:heatherfeather.code@gmail.com">
            <img src={emailLogo} alt="white email"/></a>
            <a href="https://www.linkedin.com/in/heather-boden/" target="_blank">
            <img src={linkedinLogo} alt="blue linkedin logo"/></a>
        </div>
            <p>&copy; Copyright Heather Boden, 2025.</p>
        </div>
        </footer>
    );
}