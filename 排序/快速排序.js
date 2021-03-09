//快速排序，分而治之，递归
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let midVal = arr.splice(mid,1)[0]
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<midVal){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), midVal,...quickSort(right)]
}

let arr = [3,2,1,65,2,46,6]
console.log(quickSort(arr))