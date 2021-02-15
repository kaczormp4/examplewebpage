function slider(){
    var slider = document.getElementById("slider");
    var sliderButLeft = document.getElementById("sliderButLeft");
    var sliderButRight = document.getElementById("sliderButRight");

    var min = 0;
    var max = 3;
    const goLeft = () =>{
        if(min == 0){
            min=max;
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            min--;
        }else{
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            min--;
        }       
    }
    const goRight = () =>{
        if(min == 0){
            min=2;
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            min++;
        }else if(min==max){         
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            min = 1;
        }
        else{
            slider.style.backgroundImage =`url("img/s${min}.png")`;
            min++;
        }
    }

    sliderButLeft.addEventListener('click',goLeft);
    sliderButRight.addEventListener('click',goRight);
}

slider();