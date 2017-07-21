angular.module('blogView', []).controller('blogController', function ($scope) {
  $scope.blog = [
    {
      'title': 'IPv6',
      'link': 'posts/IPv6',
      'desc': 'Why do so few people make use of IPv6? IPv6 has so many advantages over IPv4..............'
    },
    {
      'title': 'IPv4',
      'link': 'posts/IPv4',
      'desc': 'Why do so many people make use of IPv4? IPv4 has so many disadvantages over IPv6..............'
    }
  ];
});
