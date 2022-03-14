import React, { Component } from 'react'
import style from './appStyle.module.css'
import axios from 'axios'

export class FeedbackBody extends Component {
    constructor(props){
        super(props)

        this.state  = {
            queryType:'',
            feedback : ''

        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3001/feedbackdetails/feed',this.state)
            .then(response => {
                console.log(response)
            }) 
            .catch(error => {
                console.log(error)
            })
    }    

    render() {
        
        return (
            <div class="">
                <div class="col-12 col-lg-7">
                    <span class={style.feedbackdata}>
                    Whether it is about our products or our app or you just have some ideas, we would love to hear your feedback and suggestions.
                    </span>

                    <form  onSubmit={this.submitHandler}>
                        <select class={style.feedbackselect} style={{width:"100%",padding:"13px 13px ",marginTop:"20px",lineHeight:"normal",verticalAlign:"middle",
                        fontFamily:"montserrat-reg",borderRadius:"2px"}} name="queryType" onChange={this.changeHandler}>
                            <option>Select a category</option>
                            <option>Query/Issue</option>
                            <option>Product & Quality</option>
                            <option>Designs</option>
                            <option>Customization problem</option>
                            <option>App & Website</option>
                            <option>General</option>

                        </select>

                        <textarea placeholder="Share your feedback here" name="feedback" class={style.feedbacktextarea} onChange={this.changeHandler}></textarea>
                        <button type="submit" onClick={()=> this.submitHandler} class={style.feedbacksubmit}>Submit Feedback</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FeedbackBody
