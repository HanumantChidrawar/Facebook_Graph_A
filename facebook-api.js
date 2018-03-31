// main document ready function to check if dom is loaded fully or not
 $( document ).ready(function() {

    function getFacebookInfo(){       // function to get the facebook data using access token.

      let myFacebookToken = $("#token").val();
      $("#token").val("");        // resetting the input field after taking the value.

      $.ajax('https://graph.facebook.com/me?fields=id,name,picture,cover,work,education,email,hometown,posts{message,full_picture}&access_token='+myFacebookToken,{

        success : (response,status) => {  // success function to display the fetched data.

          $("#cover").html(`<img src="${response.cover.source}" class="img-thumbnail" alt="FB Cover" >`);
          response.picture.data.url= `http://graph.facebook.com/${response.id}/picture?height=240&width=240`
          $("#profile_photo").html(`<img src="${response.picture.data.url}"class="img-thumbnail" alt="FB Cover" >`);
          $('.display-data .card').css('display','block');
          $('.about').html(`<div class="head-text col-12 col-md-4">Name: </div>
                            <div class="val-text col-12 col-md-8">${response.name || "None"}</div>
                            <div class="head-text col-12 col-md-4">ID: </div>
                            <div class="val-text col-12 col-md-8">${response.id || "None"}</div>
                            <div class="head-text col-12 col-md-4">Email: </div>
                            <div class="val-text col-12 col-md-8">${response.email || "None"}</div>
                            <div class="head-text col-12 col-md-4">Home Town: </div>
                            <div class="val-text col-12 col-md-8">${response.hometown.name || "None"}</div>
                            <div class="head-text col-12 col-md-4">Studied At: </div>
                            <div class="val-text col-12 col-md-8">${response.education[0].school.name || "None"}</div>
                            <div class="head-text col-12 col-md-4">Work: </div>
                            <div class="val-text col-12 col-md-8">${response.work[0].employer.name || "None"}</div>`);
          $('.feed').html(`<a href="facebook-feed.html?${myFacebookToken}" class="btn btn-primary" id="myFeed" target="_blank">Click to see My Feed</a>`);
        },// end of success function
        error: (response,status) => {// error function begins
           alert("Invalid or Expired Access Token");
        }//end of error function

      }//end argument list
    );// end ajax call
  }// end get facebook info

    $("#go").on('click',getFacebookInfo);

 });//end of document.ready function.
