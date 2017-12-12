import React, { Component } from 'react';

const number = {
    hasTop: (num) => {
        switch (num) {
            case 1:
            case 4:
                return false
            default:
                return true
        }
    },

    hasMiddle: (num) => {
        switch (num) {
            case 1:
            case 7:
            case 0:
                return false
            default:
                return true
        }
    },

    hasBottom: (num) => {
        switch (num) {
            case 1:
            case 4:
            case 7:
                return false
            default:
                return true
        }
    },

    hasTopLeft: (num) => {
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 7:
                return false
            default:
                return true
        }
    },

    hasTopRight: (num) => {
        switch (num) {
            case 5:
            case 6:
                return false
            default:
                return true
        }
    },

    hasBottomLeft: (num) => {
        switch (num) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 7:
            case 9:
                return false
            default:
                return true
        }
    },

    hasBottomRight: (num) => {
        switch (num) {
            case 2:
                return false
            default:
                return true
        }
    }
}

export default class LCDView extends Component {

    renderLine_1(size, num) {
        return num.reduce((prev, next) => {
            var char = number.hasTop(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} `
        }, '')
    }

    renderLine_2(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = number.hasTopLeft(parseInt(next)) ? '|' : ' '
            var endChar = number.hasTopRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}`
        }, '')
    }

    renderLine_3(size, num) {
        return num.reduce((prev, next) => {
            var char = number.hasMiddle(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} `
        }, '')
    }

    renderLine_4(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = number.hasBottomLeft(parseInt(next)) ? '|' : ' '
            var endChar = number.hasBottomRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}`
        }, '')
    }

    renderLine_5(size, num) {
        return num.reduce((prev, next) => {
            var char = number.hasBottom(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} `
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