import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="d-flex img-fluid home">
            <div className="col-lg-6 p-5">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header"><h1>COX'S BAZAR</h1></div>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sit nihil velit, perspiciatis reprehenderit, facere minima est, unde alias aliquam eius ut labore veniam illo! Minima eligendi doloremque voluptates ab!</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 bg-secondary p-5">
                <div className="input-group mt-3">
                    <label className="input-group-text w-50" for="inputGroupSelect01">Options</label>
                    <select className="form-select w-50" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group">
                    <label className="input-group-text w-50" for="inputGroupSelect01">Options</label>
                    <select className="form-select w-50" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Home;