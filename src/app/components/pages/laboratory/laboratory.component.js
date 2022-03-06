import React from 'react';
import './laboratory.component.scss';
import { stoneDisease, listStoneDisease } from "../../../services/laboratory/laboratory";

class AppLaboratory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            identity: '',
            names: '',
            sugarPercentage: 0,
            fatPercentage: 0,
            oxygenPercentage: 0,
            listStoneDisease: listStoneDisease() ? listStoneDisease() : []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                {this.Main()}
            </div>
        );
    }

    Main() {
        return (
            <div>
                {this.Navbar()}
                <div className='container'>
                    <div className='row'>
                        {this.Content()} </div>
                </div>
            </div>
        );
    }

    Navbar() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active " href="/">Reto Técnico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Estudio de sangre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/servicio-externo">Servicio externo(Api)</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mb-3"></div>
            </div>
        );
    }

    Content() {
        return (
            <div>
                <div className="shadow p-3 mb-5 bg-white rounded row">
                    <h2>Estudio de sangre</h2>
                    <div className="col-md-6 mb-2">
                        <input type="text" className="form-control" name="identity" placeholder="Identificación"
                            checked={this.state.identity}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" className="form-control" name="names" placeholder="Nombre completo"
                            checked={this.state.names}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" className="form-control" name="sugarPercentage" placeholder="Porcentaje de azúcar"
                            checked={this.state.sugarPercentage}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" className="form-control" name="fatPercentage" placeholder="Porcentaje de grasa"
                            checked={this.state.fatPercentage}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-12 mb-2">
                        <input type="text" className="form-control" name="oxygenPercentage" placeholder="Porcentaje de oxígeno"
                            checked={this.state.oxygenPercentage}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-12 mb-2 text-center">
                        <button type="button" className="btn btn-primary" onClick={() => { stoneDisease(this.state); this.showListStone() }}>EXAMINAR</button>
                    </div>
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Identificación</th>
                                <th>Nombre completo</th>
                                <th>Porcentaje de azúcar</th>
                                <th>Porcentaje de grasa</th>
                                <th>Porcentaje de oxígeno</th>
                                <th>Examen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listStoneDisease.map((data, index) =>
                                    <tr key={index}>
                                        <td>{data.identity}</td>
                                        <td>{data.names}</td>
                                        <td>{data.sugarPercentage}</td>
                                        <td>{data.fatPercentage}</td>
                                        <td>{data.oxygenPercentage}</td>
                                        <td>{data.msj}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    showListStone() {
        this.setState({
            listStoneDisease: listStoneDisease() ? listStoneDisease() : []
        })
    }

}

export default AppLaboratory;