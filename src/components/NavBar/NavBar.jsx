import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return ( 
    <nav>
        <FontAwesomeIcon icon={faMusic} size="4x"/>
        <h1> Music Library </h1>
        <FontAwesomeIcon icon={faArrowRight} size="4x"/>
        <FontAwesomeIcon icon={faRightFromBracket} size="4x"/>
    </nav>);
}
 
export default NavBar;