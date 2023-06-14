import React, { Component } from 'react';

export class Projects extends Component {
    static displayName = Projects.name;

    constructor(props) {
        super(props);
        this.state = {  };
    }

    getStatisGoat() {
        return (<Project />)
    }

    render() {
        return (
            <div class="container-fluid text-center">
                <div className="row content">
                    <div class="col-sm-3 sidenav">
                        <p><a onClick=getStatisGoat>StatisGoat</a></p>
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