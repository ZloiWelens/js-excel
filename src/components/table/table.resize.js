import {$} from '@core/dom'

export function resize($root, e) {
  const $target = $(e.target)
  const $parent = $target.closest('[data-type="resize"]')
  const coords = $parent.getCoords()
  const type = $target.data.resize
  const line = type === 'col' ? 'bottom' : 'right'

  let value


  $target.styleCss({
    opacity: 1,
    [line]: '-5000px',
  })

  document.onmousemove = event => {
    if (type === 'col') {
      const delta = event.pageX - coords.right | 0
      value = coords.width + delta
      $target.styleCss({right: -delta + 'px'})
    } else {
      const delta = event.pageY - coords.bottom | 0
      value = coords.height + delta
      $target.styleCss({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'col') {
      $parent.styleCss({width: value + 'px'})
      $root.queryAll(`[data-col="${$parent.data.col}"]`).
          forEach(el => el.style.width = value + 'px')
    } else {
      $parent.styleCss({height: value + 'px'})
    }


    $target.styleCss({
      opacity: 0,
      bottom: '-5000px',
      right: 0,
    })
  }
}
