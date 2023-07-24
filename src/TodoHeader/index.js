import React, { cloneElement } from "react";

function TodoHeader({children, loading}) {
    return(
        <header>
            {React.Children.toArray(children).map(child => cloneElement(child, {loading}))}
        </header>
    )
}

export {TodoHeader}