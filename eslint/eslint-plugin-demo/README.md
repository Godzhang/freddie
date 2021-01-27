# eslint-plugin-mercury

this is my eslint custom plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mercury`:

```
$ npm install eslint-plugin-mercury --save-dev
```


## Usage

Add `mercury` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mercury"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mercury/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





