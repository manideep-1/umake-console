import React, { Component } from "react";
import axios from 'axios'
import AdminDesignCard from "./AdminDesignCard";


export class AdminDesigns extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total:null

        };
    }



    componentDidMount = () => {
        axios.post(`http://localhost:3001/adminDesigns`)
            .then(response => {
                this.setState({
                    total:response.data
                })
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {


        return (


            <>
            {this.state.total==null?
            <h3>Loading</h3>:this.state.total=="Empty"?<h3>Empty</h3>:
                <div className="row ">
                {this.state.total.map((order_total,index)=> (
                   <AdminDesignCard order_info={order_total} 
                   arrayFimg={order_total.arrayFImg}
                   arrayBimg={order_total.arrayBImg}
                   arrayF={order_total.arrayF} 
                   arrayB={order_total.arrayB} 
                   image={order_total.imageColor} 
                   draftId={order_total.draftId}
                   frontString={order_total.frontString}
                   backString={order_total.backString}></AdminDesignCard>
                 ))} 
                </div>
            }
            </>
        );
    }
}

export default AdminDesigns;
