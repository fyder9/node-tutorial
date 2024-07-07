//manual approach (create package.json in  the root, crearte properties etc)
//npm init (step by step)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)