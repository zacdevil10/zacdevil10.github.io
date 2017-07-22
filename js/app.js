angular.module('appView', []).controller('appController', function ($scope) {
  $scope.apps = [
    {
      'name': 'GeoShare',
      'img': '../img/geoshare.png',
      'playlink': 'https://play.google.com/store/apps/details?id=uk.co.appsbystudio.geoshare&hl=en',
      'gitlink': 'https://github.com/STUDIO-apps/GeoShare_Android',
      'desc': 'Geoshare is an app. Put the google play description here?',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    },
    {
      'name': 'Connect',
      'img': '../img/geoshare.png',
      'playlink': '',
      'gitlink': 'https://github.com/STUDIO-apps/Connect_Android',
      'desc': 'Connect is an app. Put the google play description here?',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    },
    {
      'name': 'Message+',
      'img': '../img/message+ logo.png',
      'playlink': '',
      'gitlink': 'https://github.com/zacdevil10/Message-',
      'desc': 'Message+ is an app. Put the google play description here?',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    }
  ];

});
