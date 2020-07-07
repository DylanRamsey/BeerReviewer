
submitReview = () => {

      
      /* Grabs the selected Beer Type***********************************************/
      const selectBeerElement = document.querySelector('#beer-select'); 
      const beerOutput = selectBeerElement.options[selectBeerElement.selectedIndex].value; 
      const selectCountryElement = document.querySelector('#country-select'); 
      /*****************************************************************************/

      /* Grabs the selected Country of Origin***************************************/
      const countryOutput = selectCountryElement.options[selectCountryElement.selectedIndex].value; 
      const reviewBox = document.querySelector(".textBox").value;
      const beerName = document.querySelector(".beerName").value;
      document.querySelector('.newBeerReview').style.display = "block";
      /*****************************************************************************/
      
      /* Grabs and Formats the current Coordinated Universal Time (UTC) ************/
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1; 
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const newdate = month + "/" + day + "/" + year ;
       /****************************************************************************/
      document.querySelector(".newBeerReview").innerHTML = `
      ${newdate} <hr>
      ${reviewBox} <hr>
      Beer Name : ${beerName}<br>
      Beer Type : ${beerOutput} <br>
      Country of Origin: ${countryOutput} <br>
      <span style="padding:10px; margin-top:10px;" >${starRating} </span> <br>
      ${numOfStars} <br>
      <button onclick="deleteReview()" class="submitButton">Remove Review</button>
      `  
      /*Condition Checking to make sure every field is filled out  */
      if(reviewBox == ""){
      document.querySelector(".newBeerReview").innerHTML = `Please enter a review`;
      }
      if(beerName == ""){
      document.querySelector(".newBeerReview").innerHTML = `Please enter beer name`;
      }
      if(beerOutput == ""){
            document.querySelector(".newBeerReview").innerHTML = `Please select a beer type`;
      }
      if(countryOutput == ""){
            document.querySelector(".newBeerReview").innerHTML = `Please select a country of origin`;
      }
      if(starRating == 0){
            document.querySelector(".newBeerReview").innerHTML = `Please leave a star review`;
      
      }
      /****************************************************************************/
}

