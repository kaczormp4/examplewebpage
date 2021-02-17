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
