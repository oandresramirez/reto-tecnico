import React from 'react';
import './external-api.component.scss';

class AppExternalApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list_data: []
        }
        this.listData();
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
                    <div className="col-md-12">
                        <h2>Comentarios</h2>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>E-mail</th>
                                <th>Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.list_data.map((data, index) =>
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.body}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    async listData() {
        await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((response) => {
                response.json().then(data => {
                    this.setState({ list_data: data })
                })
            })
            .then((json) => console.log(json));
    }

}

export default AppExternalApi;