// 1

var arr = [10, 20, 30, 50, 235, 3000]
for (var i in arr) {
    if (String(arr[i])[0]=== "1"||String(arr[i])[0]=== "2"||String(arr[i])[0]=== "5"){
        console.log(arr[i])
    }
}
// 2

for (var i = 20;i>=0;i--){
    console.log(i)
}
// 3
var colors = prompt("выбери цвет: (красный, зеленный, желтый)")

switch (colors){
    case "красный":
        alert("СТОП!")
        break
    case "желтый":
        alert("жди!")
        break
    case "зеленый":
        alert("иди!")
        break
    default:
        alert("выбери цвет!")
        break
}

