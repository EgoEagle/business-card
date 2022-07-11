import React from "react";
import photo from "../images/pic.jpg";
import About from './About.js';
import Interest from './Interest.js';



export default function Info(){
     return(
          <div className="info">
               <img src={photo} className="pic"/>
               <h1 className="name"> Tony Lin</h1>
               <h2 className="title"> Software Engineer</h2>
               <div className ="webdiv">
                    <a href="https://egoeagle.github.io/intro/"> <button className="gitlink">My Page</button></a>
                    
                    <a href="https://www.linkedin.com/in/tony-lin-b5742420a/"> <button className="linkedin">LinkedIn</button></a>
                    
               </div>
               <div className="text">

                    <About />
               </div>
               <div className="text">

                    <Interest />
               </div>
               
               


          </div>




     )




}