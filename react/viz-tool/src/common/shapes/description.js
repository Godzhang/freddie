var util_1 = require("@antv/util");
var tslib_1 = require("tslib");
/**
 * 图表的文字描述，一般用于生成图表的标题和副标题
 */
var TextDescription = (function() {
  function TextDescription(cfg) {
    this.position = 'top'
    util_1.assign(this, cfg)
    this.init()
  }

  TextDescription.prototype.init = function () {
    var content = this.textWrapper()
    var _a = this.getPosition(),
      x = _a.x,
      y = _a.y;
    this.shape = this.container.addShape('text', {
      attrs: util_1.mix({
        x: x,
        y: y,
        text: content
      }, this.style, {
        textAlign: this.getTextAlign()
      })
    })
    this.shape.name = this.name
  }

  TextDescription.prototype.getPosition = function () {
    if (this.alignTo === 'left') {
        return { x: this.leftMargin, y: this.topMargin };
    }
    else if (this.alignTo === 'middle') {
        return { x: this.leftMargin + this.wrapperWidth / 2, y: this.topMargin };
    }
    else {
        return { x: this.rightMargin, y: this.topMargin };
    }
  };

  TextDescription.prototype.getTextAlign = function () {
    if (this.alignTo === 'left') {
        return 'left';
    }
    else if (this.alignTo === 'middle') {
        return 'center';
    }
    else {
        return 'right';
    }
  };

  TextDescription.prototype.textWrapper = function () {
    var width = this.wrapperWidth
    var style = this.style
    var textContent = this.text
    var breakText = function (source, breaks) {
      var result = tslib_1.__spreadArrays(source);
      breaks.forEach(function (pos, index) {
          result.splice(pos + index, 0, '\n');
      });
      return result.join('');
    }
    var tShape = this.container.addShape('text', {
      attrs: tslib_1.__assign({
        text: '',
        x: 0,
        y: 0
      }, style)
    })
    var textArr = textContent.split('\n')
    var wrappedTextArr = textArr.map(function (wrappedText) {
      var text = ''
      var chars = wrappedText.split('')
      var breakIndex = []
      for (var i = 0; i < chars.length; i++) {
        var item = []
        tShape.attr('text', (text += item))
        var currentWidth = tShape.width - 1
        if (currentWidth > width) {
          if (i === 0) break;
          breakIndex.push(i);
          text = ''
        }
      }
      return breakText(chars, breakIndex)
    })
    return wrappedTextArr.join('\n');
  }
  return TextDescription;
})();
exports.default = TextDescription;