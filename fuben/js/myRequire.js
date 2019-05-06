(function () {
  let moduleCache = {}
  let baseUrl = './js/'
  let require = function (deps, callback) {
    if (typeof deps === 'function') {
      callback = deps
      deps = []
    }
    let params = []
    let depCount = 0
    let isEmpty = false
    let modName

    modName = document.currentScript && document.currentScript.id || 'REQUIRE_MAIN'

    if (deps.length) {
      for (let i = 0, len = deps.length; i < len; i++) {
        depCount++
        loadMod(deps[i], param => {
          params[i] = param
          depCount--
          if (depCount === 0) {
            saveModule(modName, params, callback)
          }
        })
      }
    } else {
      isEmpty = true
    }

    if (isEmpty) {
      setTimeout(() => {
        saveModule(modName, null, callback)
      }, 0)
    }
  }

  function _getPathUrl (modName) {
    let url = modName
    url = baseUrl + url
    if (url.indexOf('.js') === -1) url += '.js'
    return url
  }

  function loadMod (modName, callback) {
    let url = _getPathUrl(modName)
    let fs, mod

    if (moduleCache[modName]) {
      mod = moduleCache[modName]
      if (mod.status === 'loaded') {
        setTimeout(callback(this.params), 0)
      } else {
        mod.onload.push(callback)
      }
    } else {
      mod = moduleCache[modName] = {
        modName,
        status: 'loadng',
        export: null,
        onload: [callback]
      }
      let _script = document.createElement('script')
      _script.id = modName
      _script.type = 'text/javascript'
      _script.charset = 'utf-8'
      _script.async = true
      _script.src = url

      fs = document.getElementsByTagName('script')[0]
      fs.parentNode.insertBefore(_script, fs)
    }
  }

  function saveModule (modName, params, callback) {
    let mod, fn
    if (moduleCache.hasOwnProperty(modName)) {
      mod = moduleCache[modName]
      mod.status = 'loaded'

      mod.export = callback ? callback(params) : null

      while (fn = mod.onload.shift()) {
        fn(mod.export)
      }
    } else {
      callback && callback.apply(window, params)
    }
  }

  window.require = require
  window.define = require

})()