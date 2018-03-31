$('document').ready(() => {



  let index= document.URL.indexOf('?');
  let myFbToken=document.URL.substring(index + 1, document.URL.length);

  showFeed();//calling showFeed function on loading of document.

      function showFeed(){

        $.ajax('https://graph.facebook.com/me?fields=id,name,picture,cover,work,education,email,hometown,posts{message,full_picture}&access_token='+myFbToken,{

          success : function(response,status){  // success function to display the fetched data.
            let posts;
            for( feedPost of response.posts.data){
              if(feedPost.full_picture != undefined ){
                posts +=`<figure class="figure col-12 col-md-6">
                          <img src="${feedPost.full_picture}" class="figure-img img-fluid rounded" alt="No Image" style="color:white">
                          <figcaption class="figure-caption">${feedPost.message || "None"}</figcaption>
                        </figure>`
              }
            }
            $('.display-data .row').html(posts);
          }
          }//end argument list
        );// end ajax call
      }

});//end of document.ready function.
