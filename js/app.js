angular.module('appView', []).controller('appController', function ($scope) {

  $scope.apps = [
    {
      'id': 'spacex-launch-tracker',
      'name': 'SpaceX Launch Tracker',
      'img': '../img/spacex.png',
      'color': '#212121',
      'website': 'https://spacex.zac-h.co.uk',
      'gitlink': 'https://github.com/zacdevil10/SpaceX-Launch-Tracker',
      'desc': 'An unofficial SpaceX app powered by the r/SpaceX API offering a comprehensive view of the latest SpaceX data.',
      'tags': [{"tag":'android', "tag":'kotlin', "tag":'xml'}]
    },
    {
      'id': 'geoshare',
      'name': 'GeoShare',
      'img': '../img/geoshare.png',
      'color': '#4caf50',
      'website': 'https://studio-apps.github.io/GeoShare',
      'playlink': 'https://play.google.com/store/apps/details?id=uk.co.appsbystudio.geoshare&hl=en',
      'gitlink': 'https://github.com/STUDIO-apps/GeoShare_Android',
      'desc': 'Now out on Android and the web, GeoShare is a location sharing app. More features are planned for the future including Groups, Messaging and Android Wear support.',
      'tags': [{"tag":'android', "tag":'kotlin', "tag":'xml'}]
    },
    {
      'id': 'easybmi',
      'name': 'EasyBMI',
      'img': '../img/easybmi.png',
      'color': '#009688',
      'playlink': 'https://play.google.com/store/apps/details?id=uk.co.appsbystudio.easybmi',
      'gitlink': 'https://github.com/STUDIO-apps/EasyBMI',
      'desc': 'EasyBMI is a simple to use BMI calculator.',
      'tags': [{"tag":'android', "tag":'java'}]
    },
    {
      'id': 'leaptouch',
      'name': 'Leap Motion Touch Screen [WIP]',
      'img': '../img/leaptouch.png',
      'color': '#616161',
      'gitlink': 'https://github.com/zacdevil10/LeapMotionTouchScreen',
      'desc': 'Control your mouse with the Leap Motion.',
      'tags': [{"tag":'java', "tag":'javafx', "tag":'leap-motion'}]
    },
    {
      'id': 'connect',
      'name': 'Connect [WIP]',
      'img': '../img/connect.png',
      'color': '#009688',
      'website': '',
      'playlink': '',
      'gitlink': 'https://github.com/STUDIO-apps/Connect_Android',
      'desc': 'Currently in the early stages of development, Connect will allow you to make and receive calls from your PC using your computers audio devices, sync and send text messages and get all notifications on your computer.',
      'tags': [{"tag":'android', "tag":'java'}]
    },
    {
      'id': 'messageplus',
      'name': 'Message+ [WIP]',
      'img': '../img/message.png',
      'color': '#9c27b0',
      'playlink': '',
      'gitlink': 'https://github.com/zacdevil10/Message-',
      'desc': 'Currently in development, Message+ will be a more feature rich messaging app with features such as a backup and restore option.',
      'tags': [{"tag":'android', "tag":'java'}]
    }
  ];
});
