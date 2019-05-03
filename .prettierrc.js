//https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80,
     tabWidth: 2,
     useTabs:false,
    semi: true,
    singleQuote: true,
    quoteProps:"as-needed",
    jsxSingleQuote: true,
    trailingComma: "all",
    bracketSpacing: true, //Print spaces between brackets in object literals.
    jsxBracketSameLine: false, //Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
    arrowParens: "always",
    //parser:
    requirePragma:false,
    insertPragma:false,
    proseWrap:'never',
    endOfLine:"auto"
  }
