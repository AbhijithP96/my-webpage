document.addEventListener("DOMContentLoaded",function() {
    const nav_links = document.querySelectorAll("nav a");

    nav_links.forEach(function(link){
        link.addEventListener('click',function(e){
           e.preventDefault();
           
           const nav_target_id = this.getAttribute("href");
           const nav_target = document.getElementById(nav_target_id.substring(1));

           if(nav_target){
            window.scrollTo({
                top: nav_target.offsetTop,
                behavior:"smooth"
            });
           }
        });
    });
});
