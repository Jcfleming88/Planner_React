import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { pages } from "../../pages";

import arrow from "../../images/icons/forward.png";
import question from "../../images/icons/question.png";
import settings from "../../images/icons/settings.png";

export const Menu = ({handleToggle, isOpen}) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    
    return (
        <div className={!isOpen ? "menu-closed" : "menu-open"}>
            <div className="menu-pages">
                {pages.map((page, index) => {
                    if (page.isOnMenu && (!page.isProtected || (page.isProtected && isAuthenticated))) {
                    return (
                        <button key={index} className="button-nav" onClick={() => navigate(page.path)}>
                            <img className="icon" src={ !page.icon ? question : page.icon } alt={`${page.title} icon`} />
                            <div className="label">
                                {page.title}
                            </div>
                        </button>
                    )} else {
                        return null;
                    }
                })}
            </div>
            <div className="menu-settings">
                <button className="button-nav">
                    <img className="icon" src={settings} alt={`Setting icon`} />
                    <div className="label">
                        Settings
                    </div>
                </button>
                <button className="button-nav" onClick={() => handleToggle()}> 
                    <img className="icon" src={arrow} alt={`Arrow icon`} />
                    <div className="label">
                        Close
                    </div>
                </button>
            </div>
        </div>
    )
};