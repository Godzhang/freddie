!(function (name, definition) {
  this[name] = definition()
})('EventProxy', function (debug) {
  debug = debug || function () {}
  
  const SLICE = Array.prototype.slice
  const CONCAT = Array.prototype.concat
  const ALL_EVENT = '__all__'

  const later = (typeof setImmediate !== 'undefined' && setImmediate) ||
                (typeof process !== 'undefined' && process.nextTick) ||
                function (fn) { setTimeout(fn, 0) }

  const EventProxy = function () {
    if (!(this instanceof EventProxy)) {
      return new EventProxy()
    }
    this._callbacks = {}
    this._fired = {}
  }

  EventProxy.prototype.addListener = function (ev, callback) {
    this._callbacks[ev] = this._callbacks[ev] || []
    this._callbacks[ev].push(callback)
    return this
  }
  
  EventProxy.prototype.bind = EventProxy.prototype.addListener
  EventProxy.prototype.on = EventProxy.prototype.addListener
  EventProxy.prototype.subscribe = EventProxy.prototype.addListener

  EventProxy.prototype.headbind = function (ev, callback) {
    this._callbacks[ev] = this._callbacks[ev] || []
    this._callbacks[ev].unshift(callback)
    return this
  }

  EventProxy.prototype.removeListener = function (eventname, callback) {
    let calls = this._callbacks
    if (!eventname) {
      this._callbacks = {}
    } else {
      if (!callback) {
        calls[eventname] = []
      } else {
        let list = calls[eventname]
        if (list) {
          for (let i = 0, l = list.length; i < l; i++) {
            if (callback === list[i]) {
              list[i] = null
            }
          }
        }
      }
    }
    return this
  }

  EventProxy.prototype.unbind = EventProxy.prototype.removeListener

  EventProxy.prototype.removeAllListeners = function (event) {
    return this.unbind(event)
  }

  EventProxy.prototype.bindForAll = function (callback) {
    this.bind(ALL_EVENT, callback)
  }

  EventProxy.prototype.unbindForAll = function (callback) {
    this.unbind(ALL_EVENT, callback)
  }

  EventProxy.prototype.trigger = function (eventname, data) {
    let list, ev, callback, i, l
    let both = 2
    let calls = this._callbacks

    while (both--) {
      ev = both ? eventname : ALL_EVENT
      list = calls[ev]
      if (list) {
        for (i = 0, l = list.length; i < l; i++) {
          if (!(callback = list[i])) {
            list.splice(i, 1)
            i--
            l--
          } else {
            let args = []
            let start = both ? 1 : 0
            for (let j = start; j < arguments.length; j++) {
              args.push(arguments[j])
            }
            callback.apply(this, args)
          }
        }
      }
    }
    return this
  }

  EventProxy.prototype.emit = EventProxy.prototype.trigger
  EventProxy.prototype.fire = EventProxy.prototype.trigger

  EventProxy.prototype.once = function (ev, callback) {
    let wrapper = (...args) => {
      callback.apply(this, args)
      this.unbind(ev, wrapper)
    }
    this.bind(ev, wrapper)
    return this
  }

  EventProxy.prototype.emitLater = function () {
    let args = arguments
    later(() => {
      this.trigger.apply(this, args)
    })
  }

  EventProxy.prototype.immediate = function (ev, callback, data) {
    this.bind(ev, callback)
    this.trigger(ev, data)
    return this
  }

  EventProxy.prototype.asap = EventProxy.prototype.immediate

  const _assign = function (eventname1, eventname2, cb, once) {
    let proxy = this
    let argsLength = arguments.length
    let times = 0
    let flag = {}

    if (argsLength < 3) {
      return this
    }

    let events = SLICE.call(arguments, 0, -2)
    let callback = arguments[argsLength - 2]
    let isOnce = arguments[argsLength - 1]

    if (typeof callback !== 'function') {
      return this
    }

    const bind = function (key) {
      let method = isOnce ? 'once' : 'bind'
      proxy[method](key, function (data) {
        proxy._fired[key] = proxy._fired[key] || {}
        proxy._fired[key].data = data
        if (!flag[key]) {
          flag[key] = true
          times++
        }
      })
    }

    let length = events.length
    for (let i = 0; i < length; i++) {
      bind(events[i])
    }

    const _all = function (event) {
      if (times < length) {
        return
      }
      if (!flag[event]) {
        return
      }
      let data = []
      for (let i = 0; i < length; i++) {
        data.push(proxy._fired[events[i]].data)
      }
      if (isOnce) {
        proxy.unbindForAll(_all)
      }
      callback.apply(null, data)
    }
    proxy.bindForAll(_all)
  }

  EventProxy.prototype.all = function (eventname1, eventname2, callback) {
    let args = CONCAT.apply([], arguments)
    args.push(true)
    _assign.apply(this, args)
    return this
  }

  EventProxy.prototype.assign = EventProxy.prototype.all

  EventProxy.prototype.tail = function () {
    let args = CONCAT.apply([], arguments)
    args.push(false)
    _assign.apply(this, args)
    return this
  }

  EventProxy.prototype.assignAll = EventProxy.prototype.tail
  EventProxy.prototype.assignAlways = EventProxy.prototype.tail

  EventProxy.prototype.fail = function (callback) {
    let self = this
    this.once('error', function () {
      self.unbind()
      callback.apply(null, arguments)
    })
    return this
  }

  EventProxy.prototype.throw = function () {
    this.emit.apply(this, ['error'].concat(SLICE.call(arguments)))
  }

  EventProxy.prototype.after = function (eventname, times, callback) {
    if (times === 0) {
      callback.call(null, [])
      return this
    }
    let proxy = this
    let firedData = []
    let group = `${ eventname }_group`
    this._after = this._after || {}
    this._after[group] = {
      index: 0,
      results: []
    }

    const all = function (name, data) {
      if (name === eventname) {
        times--
        firedData.push(data)
        if (times < 1) {
          proxy.unbindForAll(all)
          callback.call(null, firedData)
        }
      }
      if (name === group) {
        times--
        proxy._after[group].results[data.index] = data.result
        if (times < 1) {
          proxy.unbindForAll(all)
          callback.call(null, proxy._after[group].results)
        }
      }
    }
    proxy.bindForAll(all)
    return this
  }

  EventProxy.prototype.group = function (eventname, callback) {
    let group = `${ eventname }_group`
    let index = this._after[group].index
    this._after[group].index++
    return (err, data) => {
      if (err) {
        return this.emit.apply(this, ['error'].concat(SLICE.call(arguments)))
      }
      this.emit(group, {
        index,
        result: callback ? callback.apply(null, SLICE.call(arguments, 1)) : data
      })
    }
  }

  EventProxy.prototype.any = function () {
    let proxy = this
    let callback = arguments[arguments.length - 1]
    let events = SLICE.call(arguments, 0, -1)
    let _eventname = events.join('_')

    proxy.once(_eventname, callback)

    const _bind = key => {
      this.bind(key, data => {
        proxy.trigger(_eventname, { data, eventName: key })
      })
    }

    for (let i = 0, len = events.length; i < len; i++) {
      _bind(events[i])
    }
  }

  EventProxy.prototype.not = function (eventname, callback) {
    this.bindForAll((name, data) => {
      if (name !== eventname) {
        callback(data)
      }
    })
  }

  EventProxy.prototype.done = function () {}

  EventProxy.prototype.doneLater = function (handler, callback) {}

  EventProxy.prototype.create = function () {}

  return EventProxy
})