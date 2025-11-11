import { useState } from "react"

export const SideCard = ({children, isOpen = false}) => {
    return (
        <div className={ isOpen ? "side-pane-open": "side-pane-closed" }>
                {children}
        </div>
    )
}