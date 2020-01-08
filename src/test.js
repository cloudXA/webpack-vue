// 这是node中向外暴露成员的形式
// module.exports = {}

// 在es6中，也可以通过规范的形式，规定了es6中如何导入和导出模块
// es6中导入模块，使用import 模块名称from '模块表示符' import '路径'

// 在es6中，使用export default和export 向外暴露成员
var info = {
    name: 'zs',
    age: 20
}

export default info

export default {
    address: '背景'
}

// 注意： export default 向外暴露的成员，可以使用任意的变量来接收
// 在一个模块中，export default 只允许向外暴露1此
// 在一个模块中，可以同时使用export default 和 export向外暴露成员

export var title = 'star'
export var content = '哈哈哈'

// 注意：使用export向外暴露的成员，只能使用{}的形式来接收，这种形式，叫做【按需导出】
// export 可以向外暴露多个成员，同时，如果某些成员，我们在import 的时候，不需要，则可以
// 不在{}中定义

// 使用export 导出的成员，必须严格按照导出时候的名称，来使用{}按需接受
// 使用export 导出的成员，如果换个名称来接收，可以时候用as来起别名

// 在node中，使用var fs = require('fs');进行成员暴露
// module.exports = {}
// exports = {}