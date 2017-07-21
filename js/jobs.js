angular.module('jobsView', []).controller('jobController', function ($scope) {
  $scope.jobs = [
    {
      'name': 'STUDI/O',
      'link': 'https://appsbystudio.co.uk',
      'desc': 'STUDI/O is a small web-based software development company founded in 2016 by Zac Hadjineophytou and Joshua Tyler-Jones. Its current aim is to develop user friendly android apps that make every day tasks easier.'
    }
  ];
});
