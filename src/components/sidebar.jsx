
import React, { useState } from "react";
import{Link} from "react-router-dom"
import image from "../../images/arroy.jpg"


export default function SideBar(){
    

    return (        

        <>

            
        
               <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
            <img src={image} alt="hugenerd" width="150" height="150" className="rounded-circle"/>
               
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/home">HOME</Link>

                    </li>

                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/skill">SKILL</Link>

                    </li>

                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/about">ABOUT</Link>

                    </li>

                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/experience">EXPERIENCE</Link>

                    </li>

                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/interest">INTEREST</Link>

                    </li>

                    <li className="nav-item">
                        
                        <Link className="nav-link align-middle px-0" to="/award">AWARD</Link>

                    </li>

                    
                    

                </ul>
                <hr/>
              
            </div>
        </div>
        
        
        </>


    )


}


