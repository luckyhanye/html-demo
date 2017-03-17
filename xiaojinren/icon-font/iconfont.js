;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shuangjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M899.903689 478.177684 498.564974 76.711126c-16.975299-16.903995-44.421496-16.903995-61.397818 0-16.976322 16.974603-16.976322 44.558845 0 61.534472l373.471922 373.455597L437.167157 885.300055c-16.976322 16.975627-16.976322 44.420699 0 61.396325 16.976322 16.974603 44.422519 16.974603 61.397818 0l401.338715-401.326365c9.338052-9.267061 13.085553-21.573341 12.309855-33.668821C912.989242 499.680417 909.241741 487.441675 899.903689 478.177684zM597.730478 511.701195c0.850402-12.021801-2.96771-24.260543-12.164539-33.523511L184.224153 76.711126c-16.975299-16.903995-44.418425-16.903995-61.536993 0-16.975299 16.974603-16.833053 44.558845 0 61.534472l373.614168 373.455597-373.614168 373.59886c-16.833053 16.975627-16.975299 44.420699 0 61.396325 17.118567 16.974603 44.560671 16.974603 61.536993 0l401.341785-401.326365C594.762768 536.103978 598.58088 523.797697 597.730478 511.701195z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
