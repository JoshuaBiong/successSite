images_array = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG',
    '8.JPG',
    '9.JPG',
    '10.JPG',
    '11.JPG',
    '12.JPG',
    '13.JPG',
    '14.JPG',
    '15.JPG',
    '16.JPG',
    '17.JPG',
    '18.JPG',
    '19.JPG',
    '20.JPG',
    '21.JPG',
    '22.JPG',

]



let imge = document.getElementById('imagess')
    // const btn = document.querySelector('button')
let tit = document.querySelector('.title')

function getImage() {
    random = Math.floor(Math.random() * images_array.length)
    let gen_image = images_array[random]


    setTimeout(() =>
        imge.src = `./assets/${gen_image}`, 1500)
}

function sureUy() {

    const popup_btns = document.querySelectorAll(".pop-button")
    const popup_el = document.getElementById('main-target')

    if (popup_el != null) {
        popup_el.classList.toggle('is-active')
    }
    console.log("click")




}