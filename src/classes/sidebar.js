import { block, select, navbarMenu } from '../utils'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock, MenuBlock } from '../classes/block'

export class Sidebar {
    constructor(selector, updateContent) {
        this.el = document.querySelector(selector)
        this.chooser = document.querySelector('#selectList')
        this.updateContent = updateContent
        this.init()
    }
    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.chooser.addEventListener('change', () => {
                if (!document.querySelector("#" + this.selectBlock())) {
                    this.el.insertAdjacentHTML('beforeend', this.selectBlock() === "Menu" ? navbarMenu(this.selectBlock()) : block(this.selectBlock()))
                }
            })
            this.el.addEventListener('submit', this.addBlock.bind(this))
        })
    }

    addBlock(event) {
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        let styles = ''
        let newBlock = ''
        if (type != 'Menu') {
            styles = event.target.styles.value
        }

        if (type === 'Menu') {
            newBlock = new MenuBlock(value)
        }
        else if (type === 'Text') {
            newBlock = new TextBlock(value, { styles: styles })
        }
        else {
            newBlock = new TitleBlock(value, { styles })
        }
        this.updateContent(newBlock)

        event.target.value.value = ""
        event.target.styles.value = ""
    }

    selectBlock() {
        let select = document.getElementById('inputGroupSelect02').value
        return select
    }
}