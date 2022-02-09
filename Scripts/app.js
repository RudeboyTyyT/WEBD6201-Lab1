function checkPage()
{

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
function productsPage();
{

}
function servicesPage();
{
    
}
function aboutPage();
{
    
}
function contactPage();
{
    var name = document.getElementById( "name" );

}

window.addEventListener( "load", checkPage, false );