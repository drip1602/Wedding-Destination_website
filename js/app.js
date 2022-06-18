// // document.write(`hello world`);
        
var app = angular.module('angularApp', ["ngRoute"])

                 .config(function($routeProvider) {
                     $routeProvider
                        .when("/", {
                            templateUrl : "pages/home.html"
                        })
                        .when("/vendor", {
                            templateUrl : "pages/vendor.html"
                        })
                        .when("/client", {
                            templateUrl : "pages/client.html"
                        })
                        .when("/team", {
                            templateUrl : "pages/team.html"
                        })
                        .when("/contact", {
                            templateUrl : "pages/contact.html"
                        })
                        .when("/blog", {
                            templateUrl : "pages/blog.html"
                        });
                 });
