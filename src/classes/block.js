import { row, col, css, navbar, menu } from '../utils'

class Block {
    constructor(type, value, options) {
        this.type = type,
            this.value = value,
            this.options = options
    }

    toHTML() {
        throw new Error("Метод toHTML должен быть реализован")
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options)
    }

    toHTML() {
        const { tag = "h1", styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options)
    }

    toHTML() {
        const { style, alt, imageStyles } = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options)
    }

    toHTML() {
        const html = this.value.map(item => col(item))
        return row(html.join(''), css(this.options.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class Navbar extends Block {
    constructor (value, options) {
        super('navbar', value, options)
    }

    toHTML(){
        console.log("VALUE:",this.value)
        const html = this.value.map(item => menu(item))
        console.log("html is ", html)
        return navbar(html.join(''))
    }
}