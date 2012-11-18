var game = new eventCore();
game.registerPlugin({
	name: "game",
	entities: {
		"game.engine": {

			fires: {
				"start": "start of game",
				"step": "each step of game, when makes some desidions",
				"fail": "level failed",
				"win": "level finished"

			}
		}
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