import React, { Component } from 'react'
import Header from '../shared/Header'
import Book from './Book'
import './Home.css';
import axios from 'axios';
import { BOOK_URL } from '../../constants';


class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            booklist: []
        }
    }

    componentDidMount() {
        axios.get(BOOK_URL)
        .then(res => {
            const booklist = res.data;
            this.setState({ booklist });
        })
        .catch((err)=> console.log(err))
    }

    render() {
        

        return (
            <div>
                <Header display=""/>
                <div className="cards">
                    {
                        this.state.booklist.map(
                            (book, index) => <Book key={index} id={book.id}  title={book.title} description={book.description} image={book.image} /> 
                        )
                    }
                   
                </div>
            </div>
        )
    }
}

export default Home
