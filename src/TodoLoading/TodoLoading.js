import React from "react";
import { Skeleton } from "../Skeleton";
function TodoLoading () {
    
    return(
       [1,2,3,4].map((n) => <Skeleton key={n} />)
    )
}


export {TodoLoading}