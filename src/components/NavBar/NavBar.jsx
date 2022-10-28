import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return ( 
    <nav>
        <div  className='logo'>
         <FontAwesomeIcon icon={faMusic} size="4x"/>   
        </div>
        
        <h1> Music Library </h1>
        <div className='sign-in-logos'>
            <FontAwesomeIcon icon={faArrowRight} size="4x" className='before-signin'/>
            <FontAwesomeIcon icon={faRightFromBracket} size="4x" className='signin'/>
            
        </div>

    </nav>);
}
 
export default NavBar;