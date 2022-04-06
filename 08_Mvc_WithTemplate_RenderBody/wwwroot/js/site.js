// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*const aktif = document.querySelector("#li");
aktif.addEventListener("fullscreenchange", e => {
    e.preventDefault();

    )
*/
/*$(document).ready("onClick", (e) => {
    {
        e.preventDefault();

       $("li").click(function () {
    $("li").css("background-color", "red");
})
      
    }
})*/

/*$("li").click(function () {
    $("li").css("background-color", "red");
})*/



/*Hoca ile yapıldı ama forech sorun çıkardı. alttaki örnek çalışıyor 
 * css yerine addclass kullanabiliriz içine oluşturacağımız yeni classı ekleyebilirz*/
/*$(document).ready(function () {
    $("li a").toArray().forEach(eleman => {
        if (eleman.attr("href") == window.location.pathname)
            $(this).addClass("active-link");
    })
})*/


$(document).ready(function () {
    $("li a").each(function () {
        if ($(this).attr("href") == window.location.pathname)
            $(this).css("background-color", "red");
    })
})