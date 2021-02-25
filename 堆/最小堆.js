/**
 * 最小堆：父节点(i)的关键码小于等于它的左右子女(2i+1,2i+2)的关键码
 * 最大堆：父节点(i)的关键码大于等于它的左右子女(2i+1,2i+2)的关键码
 */
function MinHeap(size) {
    var heap = new Array(size) // 数组
    var curr_size = 0 //当前堆的大小
    var max_size = size //堆最大容量

    //局部调整
    var shif_down = function (start, m) {
        //从start这个位置开始向下下滑调整
        //start为当前局部的父节点
        var parent_index = start
        //一定有左子节点
        var min_child_index = parent_index * 2 + 1
        //比较交换位置处理
        while (min_child_index <= m) {
            //左节点大于右节点
            if (min_child_index < m && heap[min_child_index] > heap[min_child_index + 1]) {
                //确保min_child_index永远指向值小的节点
                min_child_index = min_child_index + 1
            }
            //父节点的值小于等于两个子节点的最小值,不处理
            if (heap[parent_index] <= heap[min_child_index]) {
                break
            } else {
                //值交换
                var tmp = heap[parent_index]
                heap[parent_index] = heap[min_child_index]
                heap[min_child_index] = tmp
                parent_index = min_child_index
                //接着向下调整
                min_child_index = 2 * min_child_index + 1
            }
        }
    }

    //传入一个数组，然后调整为最小堆
    this.init = function (arr) {
        max_size = arr.length
        //自下而上调整
        curr_size = max_size
        heap = new Array(arr.length)
        //填充heap
        for (var i = 0; i < curr_size; i++) {
            heap[i] = arr[i]
        }
        //获取堆的最后一个分支节点
        var curr_pos = Math.floor((curr_size - 2) / 2)
        //循环向上处理
        while (curr_pos >= 0) {
            //局部自上向下下滑调整
            shif_down(curr_pos, curr_size - 1)
            //调整下一个分支节点
            curr_pos -= 1
        }
    }
}