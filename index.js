const canvas = document.getElementsByClassName("card-header")[0];
const img = canvas.getElementsByTagName("img")[0];
const ButtonLeft = document.getElementsByClassName("button-left")[0];
const bottonL = ButtonLeft.getElementsByTagName("button")[0];
const ButtonRight = document.getElementsByClassName("button-right")[0];
const bottonR = ButtonRight.getElementsByTagName("button")[0];
const arr = ["ImgOne.jpeg", "ImgTwo.jpeg", "ImgThree.jpeg", "ImgFour.jpeg", "ImgFive.jpeg"];

let arrIndex = 0;

bottonL.addEventListener("click", () => {
    if (arrIndex === 0){
        arrIndex = 0
    }else {
        arrIndex--
    }
    img.src = arr[arrIndex];
    console.log(arrIndex);
})
bottonR.addEventListener("click", () => {
    arrIndex++
    if (arrIndex > arr.length - 1) {
        arrIndex = arr.length - 1
    }
    img.src = arr[arrIndex];
    console.log(arrIndex);
})