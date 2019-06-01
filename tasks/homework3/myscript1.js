var arrayMax = [2,34,21,9,47];
var max = 0;
for(var i=0; i<arrayMax.length;i++){
    if(arrayMax[i]>max){
        max = arrayMax[i];
    }
}
console.log(max)