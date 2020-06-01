import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom'
class Book extends Component {
    render() {
        const { id, title, description, image } = this.props;
        return (
                    <div className="card cardStyle">
                        <img className="card-img-top" src={image} height="200px" alt="Book cover"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/book/${id}`}>{title}</Link>
                                </h5>
                                <p className="card-text">{`${description}`.substring(0,35).concat(' ...')}</p>
                                <a href="#" className="btn btn-primary">Add to cart</a>
                            </div>
                    </div>
        )
    }
}

export default Book
