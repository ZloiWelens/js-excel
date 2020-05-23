import {DomLisneter} from './DomLisneter'

export class ExcelComponent extends DomLisneter {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }


  // Возвращает шаблон компонента
  toHtml() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
