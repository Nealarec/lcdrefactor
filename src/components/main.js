import React, { Component } from 'react';

import LCDView from './LCDView'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lines: [],
            end: false
        };
    }

    onChange({ target: { value } }) {
        if (/^(([0-9]|10)|([0-9]|10),[0-9]*)$/.test(value) || value === '') {
            this.setState({ value });
        }
    }

    addLine(e) {
        e.preventDefault()
        e.stopPropagation()

        var { lines, value } = this.state

        if (/^0.0*$/.test(value)) {
            if (this.state.lines.length) {
                return this.setState({ end: true })
            } else {
                return alert('debe ingresar al menos una linea antes de cerrar el programa')
            }
        }

        lines.push(value)
        this.setState({ lines, value: '' })
    }

    render() {
        var { value, lines, end } = this.state;
        return end ? (
            <div className="main-app">
                <LCDView lines={lines} />
                <input type='button' onClick={() => this.setState({ end: false, lines: [], value: '' })} value='back' />
            </div>
        ) : (
                <div className="main-app">
                    <div style={{ paddingBottom: '2rem' }}>
                        Ingrese las lineas en convencion [tamaño(0-10)],[numero] submit <br />
                        Ingrese 0,0 submit para terminar
                    </div>
                    {
                        lines.map((line, i) => (<div key={i}>
                            <div>{line}</div>
                        </div>))
                    }
                    <form onSubmit={e => this.addLine(e)}>
                        <input value={value} type="text" onChange={e => this.onChange(e)} />
                        <input type="submit" />
                    </form>
                </div>
            );
    }
}