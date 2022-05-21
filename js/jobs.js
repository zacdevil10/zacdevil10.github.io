angular.module('jobsView', []).controller('jobController', function ($scope) {
  $scope.jobs = [
    {
      'name': 'Atom bank',
      'link': 'https://atombank.co.uk/',
      'desc': 'Android engineer at Atom bank from 2021 to present.'
    }
  ];
});
