import React,{Component} from 'react';
import './welcome.css';
import {Link} from 'react-router-dom';
class Welcome extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div class="flex-center position-ref full-height welcome">
            {/* @if (Route::has('login')) */}
                <div class="top-right links">
                    {/* @auth */}
                        <Link to="/">Home</Link>
                        {/* <a href="{{ url('/home') }}">Home</a> */}
                    {/* @else */}
                        {/* <a href="{{ route('login') }}">Login</a> */}
                        <Link to="/login">Login</Link>

                        {/* @if (Route::has('register')) */}
                            {/* <a href="{{ route('register') }}">Register</a> */}
                            <Link to="/register">Register</Link>

                        {/* @endif */}
                    {/* @endauth */}
                </div>
            {/* @endif */}
            <div class="content">
                <div class="title m-b-md">
                    Activity Bot
                </div>

                <div class="links">

                </div>
            </div>
        </div>
        )
    }
}
export default Welcome;