(function(){

    var app = angular.module('myApp', []);
    app.controller("FunController", function(){
        this.zone = funzones;

    });

    var funzones = [
        {
            name: "Fun Blast",
            price: 200,
            description: "fun Blast is a fun zone"
    },
        {
            name: "Fun Explosion",
            price: 400,
            description: "fun Explosion is a fun zone"
        }

    ]


    app.controller('formCtrl', function($scope) {
        $scope.progressLevel = false;
        $scope.rightcount = 0;
        $scope.finalresult = "";
        $scope.user = {firstName: "", lastName: "", Gender: "", Appearance: "", Personality:""};
        $scope.list = [];
        $scope.text = 'hello';
        $scope.submit = function() {
            if ($scope.text) {
                $scope.list.push(this.text);
                $scope.text = '';
            }};
        $scope.results = function() {
            if ($scope.user.firstName == "Alex") {
                $scope.rightcount = $scope.rightcount + 1;
                $scope.finalresult = $scope.finalresult + $scope.user.firstName;
            }

            if ($scope.user.lastName == "Grant") {
                $scope.rightcount = $scope.rightcount + 1;
                $scope.finalresult = $scope.finalresult + $scope.user.lastName;
            }

            if ($scope.user.Gender == "Male") {
                $scope.rightcount = $scope.rightcount + 1;
                $scope.finalresult = $scope.finalresult + " is a " + $scope.user.Gender + ".";
            }

            if ($scope.user.Appearance == "Healthy") {
                $scope.rightcount = $scope.rightcount + 1;
                $scope.finalresult = "He is " + $scope.finalresult + " is a " + $scope.user.Gender + ".";
            }

            if ($scope.user.Personality == "Nice") {
                $scope.rightcount = $scope.rightcount + 1;
                $scope.finalresult = $scope.user.firstName + " " + $scope.user.lastName + "RIGHT";
            }

            $scope.percentright = 100 * $scope.rightcount/5;

            if ($scope.rightcount == 5) {
                $scope.finalresult = "Wow, you got " + $scope.rightcount + "/5 categories correct. You know " + $scope.percentright + " percent of " +
                    "Alex. You are ready to meet him.";

            } else {
                $scope.finalresult = "You got " + $scope.rightcount + "/5 categories correct. You only know " + $scope.percentright + " percent of " +
                    "Alex...Not good enough.";
            }



            $scope.progressLevel = true;



        };

           <!-- $scope.user = angular.copy($scope.master); -->

    });
})();


