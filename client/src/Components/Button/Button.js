import React from "react";
import "./Button.css"

export default function ({children}) {
    return (
        <div className="btn">
            {children}
        </div>
    )
}