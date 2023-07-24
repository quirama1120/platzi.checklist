import React from "react";

function EmptyResults(props) {
    return(
        <p> No se ha encontrado {props.searchText} </p>
    )
}

export { EmptyResults }