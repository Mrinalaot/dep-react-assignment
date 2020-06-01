import React, { Component } from 'react';
import Header from '../shared/Header';
import axios from 'axios';
import { BOOK_URL } from '../../constants';
import './BookDescription.css'

export class BookDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:  this.props.match.params.id,
            book: {}
        }
    }

    
    componentDidMount() {
        axios.get(`${BOOK_URL}/${this.state.id}`)
        .then(res => {
            const book = res.data;
            this.setState({ book });
            console.log(this.state.book);
        })
        .catch((err)=> console.log(err))
    }
    
    render() {
       
        return (
            <div>
                <Header display={this.state.book.title}/>
                <div className="row">
                    <div className="col">
                        <img src={this.state.book.image} alt="book cover" />
                    </div>
                    <div className="col">
                        <h2> {this.state.book.title} </h2>
                        <h4> Book Price: {this.state.book.price}</h4>
                        <h4> Auther: {this.state.book.author} </h4>
                        <h4> Page Count: {this.state.book.page_count} </h4>
                        <div className="btn-div">
                            <button className="btn btn-primary"> Add to Cart </button>
                            <button className="btn btn-success"> Buy Now </button>
                        </div>
                        <p> {this.state.book.description}</p>
                    </div>  
                </div>
            </div>
        )
    }
}

export default BookDescription
