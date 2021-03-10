/**
 * 传入参数为一级路径，数组返回e.js和o.js的深度，结果为[3,5]，用递归处理
 * --a
 * -----b
 * --------e.js
 * --------c
 * -----------d
 * --------------o.js
 */
function getDepth(path, count = 1, arr = []) {
    //path为当前目录，child判断是否有子目录
    if(path.child){
        count++
        for(let i = 0; i < path.child.length; i++){
            getDepth(path.child[i],count,arr)
        }
    }else{
        if(path=='e.js'||path=='o.js'){
            arr.push(count)
        }
    }
    return arr
}