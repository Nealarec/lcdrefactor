import React, { Component } from 'react';

import Number from '../logic/number'

export default class LCDView extends Component {

    renderLine_1(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasTop(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    renderLine_2(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = Number.hasTopLeft(parseInt(next)) ? '|' : ' '
            var endChar = Number.hasTopRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}` + ' '
        }, '')
    }

    renderLine_3(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasMiddle(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    renderLine_4(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = Number.hasBottomLeft(parseInt(next)) ? '|' : ' '
            var endChar = Number.hasBottomRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}` + ' '
        }, '')
    }

    renderLine_5(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasBottom(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    getText() {
        var { lines } = this.props

        var holeText = [];
        lines.forEach(line => {
            line = line.split(',');
            var size = parseInt(line[0])
            var number = line[1].split('');

            var text = [
                this.renderLine_1(size, number),
                ...[...Array(size)].map(() => this.renderLine_2(size, number)),
                this.renderLine_3(size, number),
                ...[...Array(size)].map(() => this.renderLine_4(size, number)),
                this.renderLine_5(size, number),
                ''
            ]

            holeText = [
                ...holeText,
                ...text
            ]
        });

        return holeText.join('\n')
    }

    render() {
        return (
            <pre>{this.getText()}</pre>
        );
    }
}