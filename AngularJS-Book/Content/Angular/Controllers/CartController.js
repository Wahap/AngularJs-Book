app.controller("CartCntrl", function ($scope, angularService) {

    $scope.gerecler = [
        {
            title: 'ayakkabi',
            price: 11,
            quantity: 12
        },
        { title: 'Çorap', price: 13, quantity: 14 },
         { title: 'Panto', price: 15, quantity: 16 }

    ];

    $scope.isCollapsed = false;

    $scope.remove = function (index) {

        $scope.items.splice(index, 1);
       
    }




    $scope.bill = {};
    $scope.items = [
    { title: 'Paint pots', quantity: 8, price: 3.95 },
    { title: 'Polka dots', quantity: 17, price: 12.95 },
    { title: 'Pebbles', quantity: 5, price: 6.95 }
    ];
    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        console.log(total + "total");
        return total;
    }
    $scope.subtotal = function () {
        console.log($scope.totalCart() + " SUBTOTAL");
        console.log($scope.bill.discount + " discount");
        return $scope.totalCart() - $scope.discount;
    };
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }
    $scope.$watch($scope.totalCart, calculateDiscount);
    $scope.$watch($scope.subtotal);

    //---------------------------------------------------//

    $scope.myVar = 1;
    $scope.$watch('myVar', function () {
        alert('hey, myVar has changed! :' + $scope.myVar);
        console.log($scope.totalCart() + " totalCart vhp");
        console.log($scope.bill.discount + " discount vhp");
        $scope.subtotal2 = $scope.totalCart() - $scope.bill.discount;
    });

    $scope.buttonClicked = function () {
        $scope.myVar++; // This will trigger $watch expression to kick in
    };





});