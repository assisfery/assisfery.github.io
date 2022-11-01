
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
    
            loadingPortfolio: false,
            portfolio: [],
            selectedProject: {},
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
                
            },

            getPortfolio: function() {

                app.loadingPortfolio = true;
                $.get("api/portfolio.json", function(data){
                    app.portfolio = data;

                    setTimeout(function(){
                        app.loadingPortfolio = false;
                    }, 500);
                });
                
            },

            selectProject: function(project) {

                app.selectedProject = project;
                $("#projectModal").modal("show");
                
            }

        },
    
    });

    app.getSkills();
    app.getWorkedWith();
    app.getPortfolio();

});
