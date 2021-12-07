
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

            loadingWorkedWith: false,
            workedWith: [],
            selectedCompany: {},
    
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
                
            },

            getWorkedWith: function() {

                app.loadingWorkedWith = true;
                $.get("api/worked-with.json", function(data){
                    app.workedWith = data;

                    setTimeout(function(){
                        app.loadingWorkedWith = false;
                    }, 500);
                });
                
            },

            selectCompany: function(company) {

                app.selectedCompany = company;
                $("#companyModal").modal("show");
                
            }

        },
    
    });

    app.getSkills();
    app.getWorkedWith();

});
