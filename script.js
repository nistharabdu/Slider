var sliderContainer = document.querySelector('.slider-wrapper');
var slider = document.querySelector('.each-slider');
var leftNav = document.querySelector('.slider-nav__left');
var rightNav = document.querySelector('.slider-nav__right');
var sliderLength = document.querySelectorAll('.each-slider').length;
var sliderDots = document.querySelector('.slider-dots');
var index = 1;
sliderContainer.dataset.index = index;

//left arrow
rightNav.addEventListener('click', function(){
    if(index < sliderLength){
        sliderContainer.style.transform = 'translateX(-'+ (index)*100 +'%)';
        index++;
        sliderContainer.dataset.index = index;
        setActiveDots(index);
    }
    else{
        sliderContainer.style.transform = 'translateX(0%)';
        index = 1;
        setActiveDots(index);
    }
    
});

//Right arrow
leftNav.addEventListener('click', function(){
    if(index <= 1 ){
        sliderContainer.style.transform = 'translateX(0%)';
        index = 1;
        setActiveDots(index);
    }
    else{
        --index;
        sliderContainer.dataset.index = index;
        sliderContainer.style.transform = 'translateX(-'+ (index-1)*100 +'%)';
        setActiveDots(index);
    }
});

// Create dots
for (i=0; i < sliderLength; i++){
    var divDots = document.createElement('div'); 
    divDots.classList.add('slider-dots__each');
    if(i == 0){
        divDots.classList.add("active");
    }
    sliderDots.append(divDots);
}

// Dots click event
var sliderDotAll = document.querySelectorAll('.slider-dots__each');
sliderDotAll.forEach(function(ele,ind){
    ele.addEventListener('click',function(){
        var dotIndex = ind + 1;
        setActiveDots(dotIndex);
        sliderContainer.style.transform = 'translateX(-'+ (dotIndex-1)*100 +'%)';
        sliderContainer.dataset.index = dotIndex;
        index = dotIndex;
    })
})

// setting up the active dot
function setActiveDots(index){
    var sliderDotAll = document.querySelectorAll('.slider-dots__each');
    sliderDotAll.forEach(function(eachEle,eachIndex){
        eachEle.classList.remove('active');
        if(index == eachIndex + 1 ){
            eachEle.classList.add('active');
        }
    });
}
