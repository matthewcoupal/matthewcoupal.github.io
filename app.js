// replace resumeApp with module call for better practice.
var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('SkillCtrl', function ($scope) {
  $scope.skills = [

    {
      'skill': 'Git',
      'features': [
        'Branches',
        'Pull Requests',
        'Issues',
        'BitBucket'
      ],
      'level': '9'
    },
    {
      'skill': 'Organization',
      'features': [
        'Secretary-ACM',
        'President-PTK'
      ],
      'level': '7.5'
    },
    {
      'skill': 'AngularJS v1',
      'features': [
        'Controllers',
        'Expressions'
      ],
      'level': '4'
    },
    {
      'skill': 'Front End Framworks',
      'features': [
        'Bootstrap',
        'Foundation',
        'Toast.css',
        'Skeleton'
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
        'Code School',
        'Code Academy'
      ],
      'level': '6'
    },
    {
      'skill': 'Public Speaking',
      'features': [
        'SUNY CIT',
        'Hack Upstate',
        'ACM Chapter Meetings'
      ],
      'level': '7'
    },
    {
      'skill': 'Java',
      'features': [
        'Learned At SUNY Potsdam'
      ],
      'level': '8'
    },
    {
      'skill': 'Artificial Intelligence',
      'features': [
        'Agents',
        'Particle Swarm',
        'Genetic Algorithm',
        'A*',
        'Ant Colony',
        'Simulated Annealing'
      ],
      'level': '5'
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
      'gpa': '3.85'
    },
    {
      'institution': "Clinton Community College",
      'location': 'Plattsburgh NY',
      'degree': 'A.A.S. Computer Information Systems',
      'attended': '2012 - 2014',
      'gpa': '3.951'
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
