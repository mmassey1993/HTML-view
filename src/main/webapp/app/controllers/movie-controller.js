(function() {

	var MovieController = function() {

		var vm = this;

		vm.isHidden = false;

		vm.movies = [ 
			{'id' : '1','name' : 'Rambo','genre' : 'Action','rating' : '18'	}, 
			{'id' : '2','name' : 'Forrest Gump','genre' : 'Comedy','rating' : '15'}, 
			{'id' : '3','name' : 'Inception','genre' : 'Sci-fi','rating' : '15'}, 
			{'id' : '4','name' : 'Pulpfiction',	'genre' : 'Action','rating' : '18'}, 
			{'id' : '5','name' : 'Breakfast Club','genre' : 'Drama','rating' : '15'}, 
			{'id' : '6','name' : 'The Incredibles',	'genre' : 'Animations',	'rating' : 'PG'}, 
			{'id' : '7','name' : 'Deadpool','genre' : 'Action','rating' : '18'}
			];

		vm.hideTable = function() {
			vm.isHidden = !vm.isHidden
		};
		
		
	}

	angular.module('accountApp').controller('movieController', [MovieController]);
}());
