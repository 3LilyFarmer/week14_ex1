// one event listener for both buttons
document.body.addEventListener("click", handleClick);

function handleClick(event)
{
    // let's explore event object (which is passed to this function automatically)
    // console.log(event.target.innerText);
    // how do we find out which button was clicked? we decide to use event target innerText
    if(event.target.innerText === 'Change Background Color'){ 
        // change background if the background button is clicked
        changeBG();
    }
    else if (event.target.innerText === 'Submit'){
        // save the data from the form
        alert('SUBMIT')
    }
}

function changeBG(){
    //1. define a "class" CSS rule to change background color
    //2. get access to body element
    //3. toggle that class name on the body
    document.body.classList.toggle("lighterBackground");
}