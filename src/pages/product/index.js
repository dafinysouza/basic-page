import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

import './style.css';

export default class Product extends Component {
    state = {
        product: {},
        loading: true,
    };

    async componentDidMount() {
        const { id } = this.props.match.params; // Pega id da url

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data, loading: false });
    }

    render() {
        const { product, loading } = this.state;

        return (
            loading ? <Loading /> : (
                <>
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>URL: <a href={product.url}>{product.url}</a></p>
                    </div>
                    <div className="back-home">
                        <Link to={`/`}>
                            <button>Voltar para a página inicial</button>
                        </Link>
                    </div>
                </>
            )
        );
    }
}