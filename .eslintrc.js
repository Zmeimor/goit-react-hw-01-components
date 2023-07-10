// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:react/jsx-runtime"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// }

module.exports = {
    "extends": ["react-app"],
    "rules": {
    },
    "overrides": [
      {
        "files": ["**/*.js?(x)"],
        "rules": {
  // ******** add ignore rules here *********
          "react/no-unescaped-entities": "off",
        //   "react/display-name": "off",
        //   "react/prop-types": "off",
        }
      }
    ]
  }