var random_num=[1018876, 1532372, 1866288, 1836205, 288897, 1626672, 183936, 790511, 680804, 1690029, 906535, 1332491, 203368, 1701965, 551198, 641507, 184324, 785518, 1798229, 413608, 1337256, 1627683, 279364, 948195, 782992, 1924053, 1591504, 725061, 220623, 13158, 669245, 705996, 1235131, 932843, 254979, 2419, 1448467, 27387, 1168726, 1754109, 1565926, 108019, 340110, 75349, 1027905, 211328, 89172, 1946513, 1850822, 1303208, 1945199, 1148906, 940741, 1618489, 313949, 1407577, 1693377, 183071, 704892, 1031493, 843003, 1788304, 435142, 302780, 1709266, 1511817, 1185943, 491257, 1958266, 42667, 782702, 421047, 1868627, 423495, 870028, 570177, 1010559, 185987, 706053, 1311353, 125928, 247066, 1629630, 683124, 1081325, 1402305, 1180497, 308466, 175235, 850371, 808995, 397661, 954534, 1256659, 973620, 175403, 578773, 1848616, 1155263, 1078198]

console.log("finding even numbers in a random array using 'for' loop")
var total_even=0
var total_odd=0
for(var i=0; i<random_num.length; i++){
    if (random_num[i]%2==0){
        console.log(random_num[i]);
        total_even+=1;
    }
}

console.log("finding odd numbers in a random array using 'while' loop")
i=0
while(i<random_num.length){
    if (random_num[i]%2!=0){
        console.log(random_num[i])
        total_odd+=1;
    }
    i++;
}

console.log("Total even Numbers are" ,total_even);
console.log("Total odd numbers are" ,total_odd);
console.log("length of the array is ", total_even+total_odd);