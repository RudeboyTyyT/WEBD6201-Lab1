var seconds = 0;
var currentNode;

function checkPage()
{
    //Changes product link to projects using DOM
    currentNode = document.getElementById( "products" );
    currentNode.innerHTML =`<li id ="products"><a href="products.html">
    <i class="fa-solid fa-border-all"></i> Projects</a></li>`;

    //Gets current url pathname to determine current page
    var path = window.location.pathname;
    var page = path.split("/").pop();

    //Builds the index page when page open
    if (page == "index.html")
    {
        indexPage();
    }

    //Builds the products page when page open
    else if (page == "products.html")
    {
        productsPage();
    }

    //Builds the services page when page open
    else if (page == "services.html")
    {
        servicesPage();
    }

    //Builds the about page when page open
    else if (page == "about.html")
    {
        aboutPage();
    }

    //Builds the contact page when page open
    else if (page == "contact.html")
    {
        contactPage();
    }
    
}

//Builds the index page when page open
function indexPage()
{
    //Creates and outputs index message
    var indexMessage = document.getElementById( "indexMessage" );
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
    //Creates message variable for Tyler Henry about section
    var henryMessage = document.getElementById("henryMessage");
    henryMessage.innerHTML ="My name is Tyler Henry and I am currently a second year student in the Computer Programming and Analysis program"+
    " at Durham college. While partaking in school I also work part time at Lowe's Canada as a lumber associate. After I gradute this course I am"+
    " hoping to be able to travel to Japan for a few week vacation before I do my best to try and find a career."+
    `<br><a href="https://www.linkedin.com/in/tyler-henry-271711227/">Linkdin Profile</a>`;

    //Creates message variable for Tyler Osborne about section
    var osborneMessage = document.getElementById("osborneMessage");
    osborneMessage.innerHTML ="Placeholder"
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

//On launch check which page is the current page
window.addEventListener( "load", checkPage, false );