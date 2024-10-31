import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faGraduationCap, faUser, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import '../sideBar/SideBar.scss'
import { icon } from '@fortawesome/fontawesome-svg-core';


type IconName = 'house' | 'graduationCap' | 'user' | 'envelope' | 'gear';
export default function SideBar() {
 
  const [activeIcon, setActiveIcon] = useState<IconName | null> (null);
  function onClick(iconName: IconName){
      setActiveIcon(iconName)
  }
  return (
   
  
    <div className='sidebar-div'>
      <div className='logo-div'>
        <h1 className='logo'>F.</h1>
        <FontAwesomeIcon  onClick={() => onClick('house')}
        className={activeIcon === 'house' ? 'icon-active' : 'icon'} icon={faHouse} />
        <FontAwesomeIcon onClick={() => onClick('graduationCap')}
        className={activeIcon === 'graduationCap' ? 'icon-active' : 'icon'} icon={faGraduationCap} />
        <FontAwesomeIcon onClick={() => onClick('user')}
        className={activeIcon === 'user' ? 'icon-active' : 'icon'}  icon={faUser} />
        <FontAwesomeIcon  onClick={() => onClick('envelope')}
        className={activeIcon === 'envelope' ? 'icon-active' : 'icon'}  icon={faEnvelope} />
        <FontAwesomeIcon onClick={() => onClick('gear')}
        className={activeIcon === 'gear' ? 'icon-active' : 'icon'}  icon={faGear} />
        </div>
       
        <div >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>


    </div>
   
   
  )
}

