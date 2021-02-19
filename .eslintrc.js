module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        "vue",
        // "flow-vars"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        // eslint:recommended 中已定义相同值：
        // "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
        // "eol-last": 0, // 文件以单一的换行符结束
        // "semi": 0, // 语句可以不需要分号结尾
        // "eqeqeq": 0, // 必须使用全等
        // "one-var": 0, // 连续声明
        // "generator-star-spacing": 0,
        // "indent": 0,
        // "camelcase": 0,
        // "quotes": 0,
        // "complexity": 0, // 循环复杂度
        // "no-else-return": 0, // 如果if语句里面有return,后面可以跟else语句
        // "no-multi-spaces": 0, // 不能用多余的空格
        // "no-multiple-empty-lines": 0, // 禁止出现多行空行
        // "space-before-blocks": 0, // 强制在块之前使用一致的空格
        // "spaced-comment": 0, // 强制在注释中 // 或 /* 使用一致的空格
        // "consistent-return": 0, // return 后面允许省略
        // "no-empty": 1, // 块语句中的内容不能为空
        // "no-extra-boolean-cast": 1, // 不必要的bool转换

        // 因错误太多，暂时禁用：
        // Possible Errors
        "no-console": 0, // 禁止使用 console
        "no-debugger": 0, // 禁止使用 debugger
        "no-extra-semi": 0, // 可以多余的冒号
        "no-extra-parens": 0, // 非必要的括号
        "no-irregular-whitespace": 0,
        // Best Practices
        "curly": 0, // 必须使用 if(){} 中的{}
        "no-useless-escape": 0,
        // Variables
        "no-undef": 0, // 可以有未定义的变量
        "no-unused-vars": 0, // 不能有声明后未被使用的变量或参数
        // Stylistic Issues
        "comma-dangle": 0, // 对象字面量项尾不能有逗号
        "no-mixed-spaces-and-tabs": 0,

        // 警告
        "no-use-before-define": [1, "nofunc"], // 未定义前不能使用

        // flow-vars
        // "flow-vars/define-flow-type": 1,
        // "flow-vars/use-flow-type": 1,

        // 错误
        "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        "no-dupe-args": 2, // 函数参数不能重复
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
        "no-invalid-regexp": 2, // 禁止无效的正则表达式
        "no-func-assign": 2, // 禁止重复的函数声明
        "valid-typeof": 2, // 必须使用合法的typeof的值
        "no-unreachable": 2, // 不能有无法执行的代码
        "no-unexpected-multiline": 2, // 避免多行表达式
        "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
        "no-shadow-restricted-names": 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
        "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
        "no-native-reassign": 2, // 不能重写native对象

        // common js
        "no-duplicate-imports": 1,

        // 代码风格
        "key-spacing": [1, { // 对象字面量中冒号的前后空格
            "beforeColon": false,
            "afterColon": true
        }],
        "comma-spacing": 1, // 强制在逗号前后使用一致的空格
        "block-scoped-var": 2, // 块语句中使用var
        "accessor-pairs": 2, // 在对象中使用getter/setter
        "dot-location": [2, "property"], // 对象访问符的位置，换行的时候在行首还是行尾
        "no-lone-blocks": 2, // 禁止不必要的嵌套块
        "no-labels": 2, // 禁止标签声明
        "no-extend-native": 2, // 禁止扩展native对象
        "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
        "no-loop-func": 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "no-new-func": 2, // 禁止使用new Function
        "no-self-compare": 2, // 不能比较自身
        "no-sequences": 2, // 禁止使用逗号运算符
        "no-throw-literal": 2, // 禁止抛出字面量错误 throw "error";
        "no-return-assign": [2, "always"], // return 语句中不能有赋值表达式
        "no-redeclare": [2, { // 禁止重复声明变量
            "builtinGlobals": true // 禁止重复声明内建全局对象
        }],
        "no-unused-expressions": [2, { // 禁止无用的表达式
            "allowShortCircuit": true,
            "allowTernary": true
        }],
        "no-useless-call": 2, // 禁止不必要的call和apply
        "no-useless-concat": 2,
        "no-void": 2, // 禁用void操作符
        "no-with": 2, // 禁用with
        "space-infix-ops": 2, // 中缀操作符周围要不要有空格
        "valid-jsdoc": [2, { // jsdoc规则
            "requireParamDescription": true,
            "requireReturnDescription": true
        }],
        "no-warning-comments": [2, { // 不能有警告备注
            "terms": ["todo", "fixme", "any other term"],
            "location": "anywhere"
        }],

        // vue
        // 因错误太多，暂时禁用：
        // Priority A: Essential
        "vue/no-dupe-keys": 0,
        "vue/return-in-computed-property": 0,
        "vue/require-valid-default-prop": 0,
        // Priority B: Strongly Recommended
        "vue/attribute-hyphenation": 0,
        "vue/html-indent": 0,
        "vue/html-quotes": 0,
        "vue/html-self-closing": 0,
        "vue/max-attributes-per-line": 0,
        "vue/mustache-interpolation-spacing": 0,
        "vue/name-property-casing": 0,
        "vue/no-multi-spaces": 0,
        "vue/require-default-prop": 0,
        "vue/require-prop-types": 0,
        "vue/v-bind-style": 0,
        // Priority C: Recommended
        "vue/attributes-order": 0,
        "vue/order-in-components": 0,
        "vue/this-in-template": 0
    }
};