


export  default function css(el, styles) {
  for (var property in styles)
    el.style[property] = styles[property];
}
