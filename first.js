var departure = [0.4, 1];
var destination = [0.9, 3];

function perfectCity(departure,destination) {
    var result = [];
    if(destination[1] == departure[1]){
        result[0] = Math.abs(destination[0] - departure[0])
    }
    else if (destination[0] + departure[0] > Math.ceil(departure[0])){
        result[0] = Math.abs((1 - destination[0]) + (1 - departure[0]));
    }
    else if(destination[0] + departure[0] <= Math.ceil(departure[0])){
        result[0] = Math.abs(destination[0] + departure[0]);
    }
    result[1] = Math.abs( destination[1] - departure[1]);
    return result[0] + result[1]
}

console.log(perfectCity(departure,destination));

//
// var departure = [0.4, 1];
// var destination = [0.9, 3];
//
// function perfectCity(departure,destination) {
//     var result = [];
//     result[0] = Math.abs((1 - destination[0]) + (1 - departure[0]));
//     result[1] = Math.abs((1 - destination[1]) + (1 - departure[1]));
//     return result[0]+result[1]
// }
//
// console.log(perfectCity(departure,destination));