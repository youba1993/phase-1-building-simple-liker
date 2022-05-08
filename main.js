// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const divSelect = document.querySelector("#modal");
divSelect.setAttribute("class","hidden");

function heartClicked(){
  document.querySelectorAll(".like-glyph").forEach(action => {  //get access to heart class
    action.addEventListener("click", (event) => {
         event.preventDefault();
          mimicServerCall().then( ()=>{           //  simulate making a server request
            if (action.innerHTML === EMPTY_HEART){
               action.innerHTML = FULL_HEART;     // Change the heart to a full heart
               action.setAttribute("class","activated-heart")
              }else {
                action.innerHTML = EMPTY_HEART;   //Change the heart back to an empty heart
                action.removeAttribute("class");
              }
          }).catch((err)=>{      
               divSelect.removeAttribute("class");          //Display the error modal
               divSelect.lastElementChild.innerHTML = err;  //Display the server error message in the modal 
               setTimeout( () => {divSelect.setAttribute("class","hidden")}, 3000 )  // hide the modal after 3 seconds
          })

       })
  })
} 
heartClicked()

  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
