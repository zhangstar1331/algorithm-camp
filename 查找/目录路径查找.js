/**
 * 描述：var a = {a: {b: {c: 1}, d: [1,2]}, e: 's'} 
 * 输出 [{key: 'abc', value: 1}, {key: 'ad', value: [1,2]}, {key: 'e', value: 's'}]
 */
var obj = { a: { b: { c: 1 }, d: [1, 2] }, e: 's' }
function getVal(obj, k = '', arr = []) {
    for (let key in obj) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]' && obj[key] !== null) {
            getVal(obj[key], k + key, arr)
        } else {
            arr.push({
                key: k + key,
                value: obj[key]
            })
        }
    }
    return arr
}

function getVal1(obj, key = '') {
    //entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
    return Object.entries(obj).map(item => {
        return Object.prototype.toString.call(item[1]) === '[object Object]'
            ? getVal1(item[1], key + item[0])
            : { key: key + item[0], value: item[1] }
    }).flat()
    //flat（）方法创建一个新数组，其中所有子数组元素递归地连接到指定的深度。
}

//利用树的遍历实现
function getVal2(obj) {
    //非plain对象视为叶子节点
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return [{
            key: '',
            value: obj
        }]
    }
    const result = []
    Object.keys(obj).forEach(key => {
        const childList = getVal2(obj[key])
        childList.forEach(child => {
            child.key = key + child.key
            result.push(child)
        })
    })
    return result
}

console.log(getVal2(obj))