/**
 * Time 2022.03.12
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
 const dailyTemperatures = function(T) {
    const len = T.length
    // 初始化一个栈存储索引
    const stack = []
    // 初始化结果数组，因为一定与T的length相同，直接规定长度
    const res = (new Array(len)).fill(0)

    for(let i = 0; i < len; i++) {
        // 当遇到递增序列的时候
        // stack里面的最后一个元素就是T[i - 1]，当然这是指第一次打破递减序列的时候
        // 当然如果stack里面没有元素的话说明已经把所有的都对比完了，跳出循环
        while(T[i] > T[stack[stack.length - 1]] && stack.length) {
            // 开始进行对比
            // 由于上面我们已经对top和T[i]做过大小的判断，这里我们确定可以出栈
            const top = stack.pop()
            // 出栈之后应该干嘛呢，当然是确定top的值（也就是后面几步值会增大），并且将它放到res里面
            // 因为top是索引，所以直接top就可以定位到在res中的位置
            // 那么top的值又应该是什么呢？就是现在的i减去top
            res[top] = i - top

            // 到此位置，i索引前面所有比自己小的全部都计算出值并且放到res了
        }

        // 到这里，说明在i之前已经没有比自己小的了，那么我们就应该继续往后探索
        // 当然也有可能仅仅只是正处在递进序列中
        // 当然就是给stack最后添加索引
        stack.push(i)
    }

    return res
}