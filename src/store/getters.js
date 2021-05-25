// vuex的计算属性
export default{
    categorysArr(state){
        let categorysArr=[] //一级数据存放
        let minArr=[]  //二级数据存放数组
        const n=8 //控制二级数组存放数量
        //遍历所有数据
        state.categorys.forEach((item,index) => {
            //将数据存放到二级数组中
           minArr.push(item)

           if(minArr.length === n){
               //当存放数据达到n位数 就将二级数组放入一级数组
                categorysArr.push(minArr)

                //清空二级数组
                minArr = []
           }
           //当循环到最后一个数据后，判断二级数组中数据是否达到n位，没有就再次添加到一级数组中
           if(state.categorys.length-1 === index &&  minArr.length!==0){
                categorysArr.push(minArr)
           }
        });
        //返回最终数组
        return categorysArr
    }
}