this.top.location !== this.location && (this.top.location = this.location);

$(function()
{
    $('[data-bs-toggle="leftsidebar"]').on('click', function() 
    {
        $('.leftsidebar-collapse').toggleClass('open')
    })
    $('[data-bs-toggle="collapseall"]').on('click', function() 
    {
        $('.leftsidebar-collapse').removeClass('open')
    })
});

$(function()
{
    $(".nav-item").click(function() 
    {
        $(".nav-item").removeClass("active"); 
        $(this).addClass("active");
    });
});

function thisdate()
{
    const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dt = new Date()
    var date =  day[dt.getDay()]+", "+months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();
    document.getElementById("displaydate").innerHTML = date;
    return date;
}

$(document).ready(function() 
{
    $('body').bind('cut copy paste', function(e) 
    {
        e.preventDefault();
    });
    $("body").on("contextmenu",function(e)
    {
        return false;
    });
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-200633578-1');