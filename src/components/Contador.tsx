import React, { Component } from 'react';
import logRender from '../decorators/logRender';
import './Contador.css';
import ContadorValor from './ContadorValor';

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState {
    valor: number
}

@logRender
export default class Contador
    extends Component<IContadorProps, IContadorState> {

    public state = { valor: this.props.valorInicial || 0 };

    private setValor = (delta: number) => {
        let newState = this.state.valor + delta;
        if(newState >= 0) {
            this.setState({
                valor: this.state.valor + delta
            });
        } else {
            this.setState({
                valor: 0
            });
        }
    }

    render() {
        return(
            <div>
                <ContadorValor contador={this.state.valor} />
                <button onClick={() => this.setValor(10)}>+</button>
                <button onClick={() => this.setValor(-10)}>-</button>
            </div>
        )
    }
}
