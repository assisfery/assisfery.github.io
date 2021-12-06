
// function hideMobileMenu()
// {
//     setTimeout(function(){
//         $('#mobile-menu').offcanvas('hide');
//     }, 500);
// }

var app = null;

$(document).ready(function(){

    app = new Vue({
        el: '#app',
    
        data: {
    
            message: 'Hello Vue!',

            loadingSkills: false,
            skills: [],
    
        },
    
        methods: {

            getSkills: function() {

                app.loadingSkills = true;
                $.get("api/skills.json", function(data){
                    app.skills = data;

                    setTimeout(function(){
                        app.loadingSkills = false;
                    }, 500);
                });
                
            }

        },
    
    });

    app.getSkills();

});
