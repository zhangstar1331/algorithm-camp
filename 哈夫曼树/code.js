/**
 * 哈夫曼算法
 * 1、根据给定的n个权值{W1,...Wn}，构造具有n棵扩充二叉树的森林F={T1,...Tn}，对于每棵扩充二叉树Ti只有一个带权值的Wi的根节点，左右子树都为空
 * 2、重复以下步骤，直到F中只剩下一棵树为止
 * (1)在F中选取两棵根节点的权值最小的扩充二叉树（可以用最小堆去找出最小值），把这棵树作为左右子树构造一颗新的二叉树，这个新的二叉树的根节点的权值为左右两棵子树根节点的权值之和
 * (2)在F中删除第一步中选取的两棵二叉树
 * (3)将第一步中构造的新的二叉树加入到F中
 */
//定义权值类
var CodeNode = function (code, rate) {
    this.code = code
    this.rate = rate
}
//定义树节点
var TreeNode = function (data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
    this.parent = null
}
//准备数据
var code_dict = {
    "a": 0.12,
    "b": 0.4,
    "c": 0.15,
    "d": 0.08,
    "e": 0.25
}
var forest = []
for (var key in code_dict) {
    var item = new CodeNode(key, code_dict[key])
    forest.push(new TreeNode(item))
}
//哈夫曼树类
function HuffmanTree() {
    var root = null
    this.init_tree = function (arr) {
        //初始化最小堆
        var min_heap = new MinHeap()
        min_heap.init(arr)
        for (var i = 0; i < arr.length - 1; i++) {
            //获取两个最小权值
            var first = min_heap.remove_min()
            var second = min_heap.remove_min()

            var new_item = new CodeNode("", first.data.rate + second.data.rate)
            var new_node = new TreeNode(new_item)
            //新节点塞回最小堆中，方便下次比较
            min_heap.insert(new_node)

            new_node.leftChild = first
            new_node.rightChild = second
            first.parent = new_node
            second.parent = new_node

            root = new_node
        }
    }
    
    var get_code_from_tree = function(node, dict, code_str){
        if(!node.leftChild&&!node.rightChild){
            dict[node.data.code] = code_str
            return
        }
        //左节点存0，右节点存1
        if(node.leftChild){
            get_code_from_tree(node.leftChild, dict, code_str+"0")
        }
        if(node.rightChild){
            get_code_from_tree(node.rightChild, dict, code_str+"1")
        }
    }

    this.get_code = function(){
        //获得最终的变长编码                                                                                                                                                                                                                   
        var code_dict = {}
        get_code_from_tree(root, code_dict, "")
        return code_dict
    }

    this.print = function(){
        console.log(root)
    }
}