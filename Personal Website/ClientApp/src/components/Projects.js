import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export default class Projects extends Component {
    static displayName = Projects.name;

    render() {
        return (
            <div class="container-fluid text-center">
                <div class="row content">
                    <div class="col-sm-3 sidenav">
                        <p><a href="#">Link</a></p>
                        <p><a href="#">Link</a></p>
                        <p><a href="#">Link</a></p>
                    </div>
                    <div class="col-sm-9 text-left">
                        <h1>Welcome</h1>
                        <p></p>
                            <h3>Test</h3>
                            <p>Lorem ipsum...</p>
                    </div>
                </div>
            </div>
        );
    }
}