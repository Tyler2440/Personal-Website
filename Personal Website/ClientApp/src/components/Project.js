import React, { Component } from 'react';

export class Project extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { name: "", imgPath: "", summary: "", technologies: [], github: "" };
    }

    static renderForecastsTable(forecasts) {
        return (
            //<table className='table table-striped' aria-labelledby="tabelLabel">
            //    <thead>
            //        <tr>
            //            <th>Date</th>
            //            <th>Temp. (C)</th>
            //            <th>Temp. (F)</th>
            //            <th>Summary</th>
            //        </tr>
            //    </thead>
            //    <tbody>
            //        {forecasts.map(forecast =>
            //            <tr key={forecast.date}>
            //                <td>{forecast.date}</td>
            //                <td>{forecast.temperatureC}</td>
            //                <td>{forecast.temperatureF}</td>
            //                <td>{forecast.summary}</td>
            //            </tr>
            //        )}
            //    </tbody>
            //</table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div className="project">
                <div className="projImage">
                    <img src="../../public/images/${imgPath}" width="100px" height="100px"></img>
                </div>
                <div className="summary" color="light-gray">
                    <h1></h1>
                </div>
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
