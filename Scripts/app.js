var app = angular.module("MyApp", []);
    app.config(function($routeProvider, $locationProvider) {
        $locationProvider.hasPrefix('!');
        $routeProvider
            when("/products", {
                templateUrl: "partials/products_list.html"
            })
            when("/products/:id", {
                templateUrl: "partials/product_details.html",
                controller: "ProdCtrl"
            });
            otherwise ({ redirectTo: "/products"});

    });