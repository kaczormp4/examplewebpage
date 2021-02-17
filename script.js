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
function gallerySlider(){
    let slider = document.getElementById("g-sliderBox-Content");
    let sliderButLeft = document.getElementById("g-sliderBox-butoons-Left");
    let sliderButRight = document.getElementById("g-sliderBox-butoons-Right");
    let images = document.getElementById("g-ImagesBox")
    
    let min = 0;
    let max = 6;

    const show = (e) =>{
       // console.log(e.target.id)
        let cyfra =parseInt(e.target.id[7]) ;
        console.log()////////////tylko do 9 
        slider.style.backgroundImage = `url("img/s${cyfra}.png")`
    }

    for(let i=1 ; i<=max ; i++){
        let imgBox = document.createElement("div");
        imgBox.setAttribute("class", "g-ImagesBox-smallBoxes");
        imgBox.setAttribute("id", `gis-id-${i}`);
        imgBox.style.backgroundImage = `url("img/s${i}.png")`;
        imgBox.addEventListener("click",show)
        images.appendChild(imgBox)
        
    }
    
    // let childrenBoxMom = document.getElementById("g-ImagesBox").children
    // let childrenBox = document.getElementById(childrenBoxMom[1].id)
    // console.log( childrenBox)






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


//slider();
gallerySlider();