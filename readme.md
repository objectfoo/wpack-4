Try out webpack 4 with some code splitting and look at getting rid of Symbol and it's attendant Map/Set requires when using babel-preset-env.

* babelrc excludes symbol transform from babel-preset-env
* delete(window.Symbol) in index.js (Symbol === undefined in dev tools)
