import React from 'react'
import style from './appStyle.module.css'
import {Link} from 'react-router-dom'

const arrow={
    fontSize:'20px',
    opacity:'0.9',
    position:'relative',
    top:'2.5px'
}
 function FeedbackHead() {
    return (
    
        <div>
            <div class="container">
             <div class={`"row" ${style.websiteMyacTitle}`}>
                 
            <Link to="/accounts/">
            <p id={style.backtoaccount}><i class='fa fa-angle-left' style={arrow} ></i>&nbsp;Back to Home Page</p>
            </Link> 
             <div class={style.websiteMyacTitle}>
             < div class="">
                 <div class={`${style.WebAccHeading} "h-50 d-inline-block"`}>
                 <div>Feedback & Suggestions</div>
                 <hr></hr>
                 </div>  
             </div>
         </div>
         </div>
     </div>
     </div>
       
    )
}
export default FeedbackHead