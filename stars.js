const star = document.querySelector('.bi.bi-star-fill1');
const star2 = document.querySelector('.bi.bi-star-fill2');
const star3 = document.querySelector('.bi.bi-star-fill3');
const star4 = document.querySelector('.bi.bi-star-fill4');
const star5 = document.querySelector('.bi.bi-star-fill5');

starRating = 0;

/* First Star Highlight */
 turnGold = () => {
    star.onclick = function(){
        starRating = "You give a one star rating, this beer sucks!"; 
        star.style.color = "#FFD700";
        star2.style.color = "#000";
        star3.style.color = "#000";
        star4.style.color = "#000";
        star5.style.color = "#000";
        numOfStars = `<svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
    }
 }
/*Second Star Highlight */
twoStarsGold = () => {  
    star2.onclick = function(){
        starRating = "You give a two star rating, not great mate!"; 
        star.style.color = "#FFD700";
        star2.style.color = "#FFD700";
        star3.style.color = "#000";
        star4.style.color = "#000";
        star5.style.color = "#000";
        numOfStars = `<svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
    }
}

/*Third Star Highlight */
threeStarsGold = () => {  
    star3.onclick = function(){
        starRating = "You give a three star rating, it's decent!";
        star.style.color = "#FFD700";
        star2.style.color = "#FFD700";  
        star3.style.color = "#FFD700"; 
        star4.style.color = "#000";
        star5.style.color = "#000";
        numOfStars = `<svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
    }
}

/*Fourth Star Highlight */
fourStarsGold = () => {  
    star4.onclick = function(){
        starRating = "You give a four star rating, hey it's pretty good!";
        star.style.color = "#FFD700";
        star2.style.color = "#FFD700";  
        star3.style.color = "#FFD700";  
        star4.style.color = "#FFD700";  
        star5.style.color = "#000";
        numOfStars = `<svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg> `
    }
}

/*Five Star Highlight */
fiveStarsGold = () => {  
    star5.onclick = function(){
        starRating = `You give a <span style="color:#FFD700;">five star rating</span>, this beer kicks ass!` ;
        numOfStars = `<svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg class="bi bi-star-fill5" width="1em" height="1em" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    `
        star.style.color = "#FFD700";
        star2.style.color = "#FFD700";  
        star3.style.color = "#FFD700";  
        star4.style.color = "#FFD700";  
        star5.style.color = "#FFD700";
        
    }
}
/* One star Rating*/
star.addEventListener("mouseenter", turnGold);

/*Two Star Rating */
star2.addEventListener("mouseenter", twoStarsGold);
//star2.addEventListener("mouseleave", twoStarsBlack);

/*Three Star Rating*/
star3.addEventListener("mouseenter", threeStarsGold);
//star3.addEventListener("mouseleave", threeStarsBlack);

/* Four Star Rating */
star4.addEventListener("mouseenter", fourStarsGold);
//star4.addEventListener("mouseleave", fourStarsBlack);

/* Five Star Rating */
star5.addEventListener("mouseenter", fiveStarsGold);
//star5.addEventListener("mouseleave", fiveStarsBlack);