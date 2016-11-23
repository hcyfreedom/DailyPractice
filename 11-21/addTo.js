/**
 * Created by Acer on 2016/11/21.
 */
// 从数组中选择任意两个数，相加等于一个固定值
window.onload = function () {
    var source = document.getElementById('source');
    var submit = document.getElementById('submit');
    var target = document.getElementById('target');

    submit.onclick = function () {

        var sourceItem = source.value.split(",").map(function(val) {
            return parseInt(val);
        });//把字符串转为数字，然后遍历整个函数

        var targetItem = parseInt(target.value);


        for (var i = 0;i<sourceItem.length-1;i++){
          var  leftValue = targetItem - sourceItem[i];

            for (var j = 0;j<sourceItem.length-1;j++){
                if (j!= i){
                    if (leftValue == sourceItem[j]){
                        console.log(sourceItem[i] +"+"+ sourceItem[j]+ "=" +targetItem);
                    }

                }
            }
            // var index = sourceItem.indexOf(leftValue);
            // if (index !== -1&&index!=i){
            //     console.log(sourceItem[i] +"+"+ sourceItem[index]+ "=" +targetItem);
            //
            //     break;
            // }
        }
    }
}

// for(var i in nums) {
//     for(var j in nums) {
//         if(nums[i] + nums[j] === target && i !== j) {
//             return [parseInt(i), parseInt(j)];
//         }
//     }
// }