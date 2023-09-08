import React from "react";
import {Link} from "react-router-dom";


 function Navlinks (props) {

    const Links = [
        {name: "HomePage",
         link : "/"
        },
       {name: "Reminder List",
       link : "/list"
      },
       
    ]
    return(
        <>
       
            {
                Links.map((link,i) => (
                     
                     <div key={i}>
                          <li key={i} className={`"font-semibold font-montserat md:hover:border-b-2 hover:border-[#1a456e] hover:border-b-2 border-[#1a456e] pb-1 sm:pb-2 text-xs tracking-wide
                           ${props.alternative ? "" :"" }`} onClick={props.handleClick} >
                       <Link to={link.link} onClick={props.handleClick} >{link.name} </Link>
                          </li>
                    </div>

                    
                ))
            }
             
        </> 
    )
 }

  export default Navlinks