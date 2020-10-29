import { block } from '../utils'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from '../classes/block'

export class Sidebar {
    constructor(selector, updateContent) {
        this.el = document.querySelector(selector)
        this.updateContent = updateContent
        this.init()
    }
    init() {
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.addBlock.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    addBlock(event){
        event.preventDefault()
        console.log("event is ", event.target)
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text'
        ? new TextBlock(value, {styles: styles})
        : new TitleBlock(value, {styles})

        this.updateContent(newBlock)

        event.target.value.value = ""
        event.target.styles.value = ""
    }
}