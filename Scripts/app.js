var seconds = 0;
var currentNode;

function checkPage()
{
    currentNode = document.getElementById( "products" );
    currentNode.innerHTML =`<li id ="products"><a href="products.html"><i class="fa-solid fa-border-all"></i> Projects</a></li>`;
    var path = window.location.pathname
    var page = path.split("/").pop();

    if (page == "index.html")
    {
        indexPage();
    }
    else if (page == "products.html")
    {
        productsPage();
    }
    else if (page == "services.html")
    {
        servicesPage();
    }
    else if (page == "about.html")
    {
        aboutPage();
    }
    else if (page == "contact.html")
    {
        contactPage();
    }
    
}

//Builds the index page when page open
function indexPage()
{
    var indexMessage = document.getElementById( "indexMessage" );;
    indexMessage.innerHTML = "Welcome to our home page for WEBD-4202 Lab 1. This page was created by Tyler Henry and Tyler Osborne." + 
    " Please use the nav bar to get to the other pages.";
}

//Builds the index page when page open
function productsPage()
{

}

//Builds the index page when page open
function servicesPage()
{
    
}

//Builds the  page when page open
function aboutPage()
{
    
}

//Builds the contact page when page open
function contactPage()
{
    //Create button event listener
    var button = document.getElementById( "submit" );
    button.addEventListener( "click", displayContact, false );

}
function displayContact()
{
    //variables to contain value from input bozes
    var name = document.getElementById("name").value;
    var number = document.getElementById("contactNumber").value;
    var email = document.getElementById("emailAddress").value;
    var comments = document.getElementById("comments").value;

    //Messages variable to be outputed to console
    var consoleMessage = "Name: " + name + "\nContact Number: " + number
    + "\nEmail Address: " + email + "\nComments: " + comments;

    //Output message to console
    console.log(consoleMessage);

    //Start timer starting at 0 
    seconds = 0;
    window.setInterval( "updateTime()", 1000 );
}
function updateTime()
{
    //Increment timer
    ++seconds; 

    //When timer hits 3 sec, redirect to home page
    if (seconds == 3) 
    {
        window.location.href = "./index.html"; 
    }
                  
} 
function replaceCurrent()
{
   var newNode = createNewNode();
   currentNode.parentNode.replaceChild( newNode, currentNode );
   switchTo( newNode );
}
function createNewNode( )
{
   var newNode = document.createElement( "p" );
   var nodeId = "projects";
   newNode.setAttribute( "id", nodeId ); // set newNode's id
   var text = "Projects";
   newNode.appendChild( document.createTextNode( text ) );
   return newNode;
} 
function switchTo( newNode )
{
   
   currentNode = newNode;
   
   document.getElementById( "products" ).value = 
      currentNode.getAttribute( "id" );
}
//On launch check which page is the current page
window.addEventListener( "load", checkPage, false );