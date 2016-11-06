app.controller('listCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../json/liste.json'
    }).then(function (response) {
            $scope.listData = response.data.records;

        },
        function errorCallback(response) {
            console.log("Failure");
            console.error(response);
        });
});

app.controller("listInputCtrl", function ($scope) {

    $scope.addList = function (lists) {
        $scope.listData.push(lists);
        $scope.lists = {};
    };

    $scope.removeTodo = function (index) {
        listData.splice(listData.indexOf(index), 1);
    };

    $scope.markAll = function (completed) {
        listData.forEach(function (todo) {
            listData.completed = !completed;
        });
    };
});