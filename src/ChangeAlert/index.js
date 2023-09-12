import React from 'react'
import { WithStorageListener } from './withStorageListener'
import "./index.css"
function ChangeAlert ({show, toggleShow, loading}) {

    if (show){
    return (
        <div>
            <p>han habido cambios en nuestro localStorage</p>
            <button className='actualizeButton' onClick= {()=> toggleShow(false)}
            >Recargar</button>
        </div>
    )} else {
        return null
    }
}
const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export { ChangeAlertWithStorageListener } 