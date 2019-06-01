var arrayMin = [2,34,21,9,47];
var min = arrayMin[0];
for(var i=0; i<arrayMin.length;i++){
    if(arrayMin[i]<=min){
        min = arrayMin[i];
    }
}
console.log(min)