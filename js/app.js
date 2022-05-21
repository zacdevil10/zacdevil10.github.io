angular.module('appView', []).controller('appController', function ($scope) {

  $scope.apps = [
    {
      'id': 'spacex-launch-tracker',
      'name': 'SpaceX Launch Tracker',
      'img': '../img/spacex.png',
      'color': '#212121',
      'website': 'https://spacex.zac-h.co.uk/faq',
      'playlink': 'https://play.google.com/store/apps/details?id=uk.co.zac_h.spacex',
      'gitlink': 'https://github.com/zacdevil10/SpaceX-Launch-Tracker',
      'desc': 'An unofficial SpaceX app powered by the r/SpaceX API offering a comprehensive view of the latest SpaceX data.',
      'tags': [{"tag":'android', "tag":'kotlin', "tag":'xml'}]
    },
    {
      'id': 'mediarecyclerview',
      'name': 'Media Recycler View',
      'img': '../img/library.png',
      'color': '#607D8B',
      'gitlink': 'https://github.com/zacdevil10/MediaRecyclerView',
      'desc': 'A dynamic image grid for displaying upto 4 images.',
      'tags': [{"tag":'android', "tag":'kotlin', "tag":'xml', "tag":'library'}]
    },
    {
      'id': 'geoshare',
      'name': 'GeoShare [ARCHIVE]',
      'img': '../img/geoshare.png',
      'color': '#4caf50',
      'website': 'https://github.com/zacdevil10/GeoShare',
      'gitlink': 'https://github.com/zacdevil10/GeoShare_Android',
      'desc': 'GeoShare is a location sharing app.',
      'tags': [{"tag":'android', "tag":'kotlin', "tag":'xml'}]
    }
  ];
});
