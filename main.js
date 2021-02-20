function slider(){
    let slider = document.getElementById("slider");
    let sliderButLeft = document.getElementById("sliderButLeft");
    let sliderButRight = document.getElementById("sliderButRight");
    let sliderH1 = document.getElementById("sliderH1");
    
    let info=["","painting walls & wallpapering",'paving & facades & gardens','plasterboard, ceilings & floors']

    let min = 0;
    let max = 3;
    const goLeft = () =>{
        if(min == 0){
            min=max;
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            sliderH1.innerText = info[min];
            min--;
        }else{
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            sliderH1.innerText = info[min];
            min--;
        }       
    }
    const goRight = () =>{
        if(min == 0){
            min=2;
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            sliderH1.innerText = info[min];
            min++;
        }else if(min==max){         
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            sliderH1.innerText = info[min];
            min = 1;
        }
        else{
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            sliderH1.innerText = info[min];
            min++;
        }
    }

    sliderButLeft.addEventListener('click',goLeft);
    sliderButRight.addEventListener('click',goRight);
}

slider();

// function slider() {
//     let slider = document.getElementById("slider");
//     let sliderButLeft = document.getElementById("sliderButLeft");
//     let sliderButRight = document.getElementById("sliderButRight");
//     let sliderH1 = document.getElementById("sliderH1");

//     let sliderItems = [
//         {
//             img: 's1.png',
//             content: 'painting walls & wallpapering'
//         },
//         {
//             img: 's2.png',
//             content: 'paving & facades & gardens'
//         },
//         {
//             img: 's3.png',
//             content: 'plasterboard, ceilings & floors'
//         }
//     ]

//     let min = 0;
//     let max = sliderItems.length - 1;
//     const goLeft = () => {
//         //slider.style.backgroundImage = url(`img/${sliderItems[min].img}`);
//         console.log(sliderItems[min].img)
//         sliderH1.innerText = sliderItems[min].content;
//         if (min == 0) {
//             min = max;
//         } else {
//             min--;
//         }
//     }
//     const goRight = () => {
//         if (min == sliderItems.length) {
//             min = 0;
//         }
//         slider.style.backgroundImage = url(`img/${sliderItems[min].img}`);
//         sliderH1.innerText = sliderItems[min].content;
//         min++;
//     }

//     sliderButLeft.addEventListener('click', goLeft);
//     sliderButRight.addEventListener('click', goRight);
// }

// slider();
