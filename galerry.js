function gallerySlider(max){
    let slider = document.getElementById("g-sliderBox-Content");
    let sliderButLeft = document.getElementById("g-sliderBox-butoons-Left");
    let sliderButRight = document.getElementById("g-sliderBox-butoons-Right");
    let images = document.getElementById("g-ImagesBox")
    
    let min = 0;

    const show = (e) =>{
        let cyfra = parseInt(e.target.id.replace("gis-id-",""));
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

    const goLeft = () =>{

        let currentImg = slider.style.backgroundImage ;
        let newstr = currentImg.replace('url("img/s', '');
        newstr = newstr.replace('.png")', '');
        newstr = parseInt(newstr);

        if(newstr<=1){
            slider.style.backgroundImage =`url("img/s${max}.png")`;
        }
        else{
            slider.style.backgroundImage =`url("img/s${newstr-1}.png")`;
        }   
    }
    
    const goRight = () =>{

        if(min == 0){
            min=1;
            slider.style.backgroundImage =`url("img/s${min}.png")`;           
            min++;
        }
        
        let currentImg = slider.style.backgroundImage ;
        let newstr = currentImg.replace('url("img/s', '');
        newstr = newstr.replace('.png")', '');
        newstr = parseInt(newstr);

        
        if(newstr>=max){
            slider.style.backgroundImage =`url("img/s${1}.png")`;
        }
        else{
            slider.style.backgroundImage =`url("img/s${newstr+1}.png")`;
        }
    }

    sliderButLeft.addEventListener('click',goLeft);
    sliderButRight.addEventListener('click',goRight);
}
//arg "gallerySlider()" = number of images
//images must be in img folder ..example of name "s2.png"
gallerySlider(6);