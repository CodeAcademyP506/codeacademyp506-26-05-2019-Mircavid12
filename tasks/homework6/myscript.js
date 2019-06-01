var arr = [2,34,21,9,47];
var index = 0;
var total = 0;
var max2 = arr[0];
var iteration_count = 0;
while(iteration_count<2){

    var maxx= arr[0];

    for(var i=0; i<arr.length;i++){
        if(arr[i]>maxx){
            max = arr[i];
            index = i;
        }
    }
    total+=maxx;
    arr.splice(index,1);
    iteration_count++;
}

console.log(total)