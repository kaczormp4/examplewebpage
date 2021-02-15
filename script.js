function slider(){
    var slider = document.getElementById("slider");
    var sliderButLeft = document.getElementById("sliderButLeft");
    var sliderButRight = document.getElementById("sliderButRight");
    var sliderH1 = document.getElementById("sliderH1");
    
    var info=["","painting walls & wallpapering",'paving & facades & gardens','plasterboard, ceilings & floors']

    var min = 0;
    var max = 3;
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