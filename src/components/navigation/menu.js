import React from "react";
import { pages } from "../../pages";
import settings from "../../images/icons/settings.png";

export const Menu = (isOpen) => {
    return (
        <div className={isOpen ? "menu-closed" : "menu-open"}>
            <div className="menu-pages">
                {pages.map((page, index) => (
                    <button key={index} className="button-nav">
                        <img className="icon" src={settings} alt={`${page.name} icon`} />
                        <p>
                            {page.name}
                        </p>
                    </button>
                ))}
            </div>
            <div className="menu-settings">
                <button className="button-nav">
                    <img className="icon" src={settings} alt={`Setting icon`} />
                    <p>
                        Settings
                    </p>
                </button>
                <button className="button-nav">
                    <img className="icon" src={settings} alt={`Arrow icon`} />
                    <p>
                        Close
                    </p>
                </button>
            </div>
        </div>
    )
};