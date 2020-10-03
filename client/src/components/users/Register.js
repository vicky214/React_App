import React,{Component} from 'react';
import './login.css'


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            // @extends('layouts.app')

// @section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form method="POST">
                        {/* @csrf */}

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" required autocomplete="name" autofocus />

                                {/* @error('name') */}
                                    <span class="invalid-feedback" role="alert">
                                        {/* <strong>{{ $message }}</strong> */}
                                    </span>
                                {/* @enderror */}
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" required autocomplete="email" />
                                {/* @error('email') */}
                                    <span class="invalid-feedback" role="alert">
                                        {/* <strong>{{ $message }}</strong> */}
                                    </span>
                                {/* @enderror */}
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" />

                                {/* @error('password') */}
                                    <span class="invalid-feedback" role="alert">
                                        {/* <strong>{{ $message }}</strong> */}
                                    </span>
                                {/* @enderror */}
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" />
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {/* {{ __('Register') }} */}
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
} 

export default Login;