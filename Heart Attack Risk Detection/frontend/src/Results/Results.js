import React from "react";
import "./Results.css"
function Results(){

    let result = sessionStorage.getItem("Result_of_prediction")
    result=parseInt(result)
    console.log("The Value of Result is",result);
    if (result === 0 ){
        return (
            <div class="warning-border">
                <img src="https://i.pinimg.com/564x/7e/69/bc/7e69bc4d8905d89edce1eda0313853c9.jpg" class="im"/>
                <h1 class="content">Oops! YOU HAVE CHANCES OF HEART ATTACK.</h1>
            </div>
        )
    }else{
        return (
            <div class="success-border">
                <img src="https://t4.ftcdn.net/jpg/00/27/24/01/240_F_27240141_7ae50jtwe7zyP7WZTQPAuIw2ZzMEElFB.jpg" class="im"/>
                <h1 class="conten">Great! YOU DON'T HAVE CHANCES OF HEART ATTACK.</h1>
            </div>
        )
    }
}
export default Results;