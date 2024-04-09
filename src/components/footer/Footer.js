import React from 'react'
import './footer.css';
import igImage from "../../nba-images/ig.png";
export default function Footer() {
  return (
    <div id="footerContainer">
         <p style={{paddingTop:'5px'}}>© 2023-2024 NBA Stats</p>
         <footer id="footer">
         <div id="igLink">
         <a href="https://www.instagram.com/nba/">
            <div id="ig">
                <img id='igImage' src={igImage} alt="igImage"/>
                <p style={{marginTop:"3px"}}>NBA instagram</p>
            </div>
        </a>
         </div>

        </footer>

    </div>
  )
}
