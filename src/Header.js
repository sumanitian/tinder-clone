import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img className="header__logo" src="https://www.seekpng.com/png/detail/55-558244_tinder-icon-logo-png-transparent-logo-tinder.png" alt="">
            </img>
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header
