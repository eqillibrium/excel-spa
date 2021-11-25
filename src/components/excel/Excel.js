import {$} from '../../core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getTemplate() {
        const $template = $.create('div', 'excel')
        this.components.forEach((Component) => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $template.append($el)
        })
        return $template
    }

    render() {
        this.$el.append(this.getTemplate())
    }
}
