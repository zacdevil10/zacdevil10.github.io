angular.module('appView', []).controller('appController', function ($scope) {
  $scope.apps = [
    {
      'name': 'EasyBMI',
      'img': '../img/easybmi.png',
      'playlink': 'https://play.google.com/store/apps/details?id=uk.co.appsbystudio.easybmi',
      'gitlink': 'https://github.com/STUDIO-apps/EasyBMI',
      'website': '',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    },
    {
      'name': 'GeoShare',
      'img': '../img/geoshare.png',
      'playlink': '',
      'gitlink': 'https://github.com/STUDIO-apps/GeoShare_Android',
      'website': '',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    },
    {
      'name': 'Connect',
      'img': '../img/connect.png',
      'playlink': '',
      'gitlink': 'https://github.com/STUDIO-apps/Connect_Android',
      'website': '',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    },
    {
      'name': 'Message+',
      'img': '../img/message.png',
      'playlink': '',
      'gitlink': 'https://github.com/zacdevil10/Message-',
      'website': '',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'tags': [{"tag":'android', "tag":'Java', "tag":'android-studio'}]
    }
  ];

});
