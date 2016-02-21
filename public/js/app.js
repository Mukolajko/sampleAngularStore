(function(){
    //angular logic
    var app = angular.module("store", []);

    //store controller
    app.controller("StoreController", function(){
        this.products = gems;
    });

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

        this.show = function()  {
            return !(Object.keys(this.review).length === 0);
        }
    });

    app.directive('productTitle', function(){
       return {
           restrict: "A",
           templateUrl: "product-title.html"
       };
    });

    app.directive('productGallery', function(){
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });


    var gems = [
        {
            name: "Good gem",
            price: 3.3,
            description: "Some good gem that can be found in hole",
            images: [
                {
                    full: "public/img/gem.png",
                    thumb: "public/img/gem.png"
                },
                {
                    full: "public/img/gem.png",
                    thumb: "public/img/gem.png"
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "Nice one",
                    author: "Test@gmail.com",
                    createdOn: 1397490980837
                },
                {
                    stars: 2,
                    body: "Boooo",
                    author: "Booo@gmail.com",
                    createdOn: 1397490980837
                }
            ],
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Excellent gem",
            price: 12.1,
            description: "Excellent green gem",
            images: [
                {
                    full: "public/img/gem.png",
                    thumb: "public/img/gem.png"
                },
                {
                    full: "public/img/gem.png",
                    thumb: "public/img/gem.png"
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this awesome stuff",
                    author: "Test@gmail.com",
                    createdOn: 1397490980837
                },
                {
                    stars: 2,
                    body: "Boooo",
                    author: "Booo@gmail.com",
                    createdOn: 1397490980837
                }
            ],
            canPurchase: false,
            soldOut: true
        }
    ]
})();
