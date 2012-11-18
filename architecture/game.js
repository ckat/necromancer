var game = new eventCore();
game.registerPlugin({
	name: "game",
	entities: {
		"game.engine": {
			description: "this entity represents the hole engine",
			methods: {
				"initGameEngine": function() {

				}
			},
			fires: {
				"start": "start of game",
				"step": "each step of game, when makes some desidions",
				"fail": "level failed",
				"win": "level finished"
			}
		}
		"game.menu": {
			description: "game menu"
		},
		"game.level": {
			description: "this entity represents one of levels"
			
		},
		"game.map": {

		},
		"game.field": {
			
		}
	},
	methods: {
		init: function(canvas) {

		}
	},
	events: ['']


});