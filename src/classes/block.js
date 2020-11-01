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
        super('Title', value, options)
    }

    toHTML() {
        const { tag = "h1", styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('Image', value, options)
    }

    toHTML() {
        const { style, alt, imageStyles } = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('Columns', value, options)
    }

    toHTML() {
        const html = this.value.map(item => col(item))
        return row(html.join(''), css(this.options.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('Text', value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class MenuBlock extends Block {
    constructor (value, options) {
        super('Menu', value, options)
    }

    toHTML(){
        const array = this.value.split(" ")
        let html = array.map(item => menu(item, item))
        return navbar(html)
    }
}