'use strict';

app.controller('trainingController',
	function trainingController($scope){
		$scope.trainings = {
			date: '23-09-2015',
			place: 'Fitness world, Viby',
			bodyparts: {
				part1: 'Legs',
				part2: 'Stomach'
			},
			comments: 'No additional comments'
		}
	}
);

