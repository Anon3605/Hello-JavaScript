function forwardPrint(arr,length){
    if(length==0){
        return 0;
    }
    indx=forwardPrint(arr,length-1);
    console.log(indx,"th index is",arr[indx]);
    return indx +1;
}

function backwardPrint(arr,length){
    indx=length-1;
    console.log(indx,"th index is",arr[indx]);
    if(length==1){
        return;
    }
    return backwardPrint(arr,length-1);
}

var array01=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
forwardPrint(array01,array01.length);
console.log("======================================================");
backwardPrint(array01,array01.length);

//Think yourself ?!?!?!!