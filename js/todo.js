let parentDiv = document.getElementById("todo");
// parent div where we will append the new Item
let button = document.getElementById("todo-button");
// get the button to add event listener

// this is the textarea we will be using :)
let title = document.getElementById("title");
let content = document.getElementById("content");

// on button press
button.addEventListener("click",function(){
    // creates the title and the content of the todo list
    let nTitle = document.createElement('p');
    let nContent = document.createElement('p');

    // sets the value from the textarea
    nTitle.innerText = title.value;
    nContent.innerText = content.value;

    // let it be editable :D
    nTitle.contentEditable = true;
    nContent.contentEditable = true;

    // add the CSS
    nTitle.classList.add("nTitle");
    nContent.classList.add("nContent");

    title.value = null;
    content.value = null;

    // its readyy
    parentDiv.appendChild(nTitle);
    parentDiv.appendChild(nContent);
});