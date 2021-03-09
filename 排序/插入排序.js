//插入排序，获取当前位置的元素，依次与其前面的元素进行比较，移动到对应的位置
function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

//优化，使用二分法的方式插入
function binaryInsertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i], left = 0, right = i - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (arr[mid] < key) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        for (let j = i - 1; j >= left; j--) {
            arr[j - 1] = arr[j]
        }
        arr[left] = key
    }
    return arr
}


let arr = [4, 2, 1, 5, 7, 3, 4]
console.log(binaryInsertSort(arr))