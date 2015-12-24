// replace resumeApp with module call for better practice.
var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('SkillCtrl', function ($scope) {
  $scope.skills = [

    {
      'skill': 'Git',
      'features': [
        'Initializing',
        'Branching',
        'Pull Requests',
        'Issues'
      ],
      'level': '9'
    },
    {
      'skill': 'AngularJS',
      'features': [
        'Controllers',
        'Expressions'
      ],
      'level': '4'
    },
    {
      'skill': 'Bootstrap',
      'features': [
        'CSS Components',
        'Grid System'
      ],
      'level': '6'
    },
    {
      'skill': 'Sass',
      'features': [
        'Variables',
        'Mixins',
      ],
      'level': '6'
    },
    {
      'skill': 'Javascript',
      'features': [
        'Learned from Code School and Code Academy'
      ],
      'level': '7'
    },
    {
      'skill': 'Public Speaking',
      'features': [
        'SUNY CIT Conference'
      ],
      'level': '6'
    },
    {
      'skill': 'Java',
      'features': [
        'Learned At SUNY Potsdam'
      ],
      'level': '8'
    }
  ];
});

resumeApp.controller('EduCtrl', function ($scope) {
  $scope.schools = [
    {
      'institution': 'SUNY Potsdam',
      'location': 'Potsdam NY',
      'degree': 'B.S. Computer Science/B.A. Mathematics',
      'attended': '2014 - Present',
      'gpa': '3.86'
    },
    {
      'institution': "Clinton Community College",
      'location': 'Plattsburgh NY',
      'degree': 'A.A.S. Computer Information Systems',
      'attended': '2012 - 2014',
      'gpa': '3.947'
    }
  ];
});

// window.onload = function onLoad() {
//   var circle = new ProgressBar.Circle('#op', {
//     color: '#FCB03C',
//     duration: 3000,
//     easing: 'easeInOut'
//   });
//
//   circle.animate(1);
// };
