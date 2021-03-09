function bubbleSort(arr) {
    const len = arr.length
    //查找轮数
    for (let i = 0; i < len; i++) {
        //前后交换位置，大的回后面，每次排出一个最大值
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

//改进1：设置一标志性变量pos，用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位，故在进行下一趟排序时只要扫描到pos位置即可
function bubbleSort2(arr) {
    let i = arr.length - 1
    while (i > 0) {
        let pos = 0
        for (let j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                pos = j
                let tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
            }
        i = pos
    }
    return arr
}

//改进2：传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值，可以考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值（最大值和最小值），从而使排序趟数几乎减少一半。
function bubbleSort3(arr) {
    let low = 0
    let high = arr.length - 1
    let tmp, j
    while (low < high) {
        for (j = low; j < high; ++j)
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        --high
        for (j = high; j > low; --j)
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = tmp
            }
        ++low
    }
    return arr
}

const arr = [2, 5, 1, 7, 3, 5, 8, 3]
console.log(bubbleSort5(arr))