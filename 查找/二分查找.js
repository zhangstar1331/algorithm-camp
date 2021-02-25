//有序数组
function binarySearch(arr, target){
    let max = arr.length - 1
    let min = 0
    while(min<max){
        let mid = Math.floor((max+min)/2)
        if(arr[mid]<target){
            min = mid + 1
        }else if(arr[mid]>target){
            max = mid - 1
        }else{
            return mid
        }
    }
    return -1
}