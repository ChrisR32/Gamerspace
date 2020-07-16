import React from "react";
import "./Button.css";

export default function ({children, type}) {
    return (
        <button className="btn" type={type}>
            {children}
        </button>
    )
}