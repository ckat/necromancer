/**
 * declaretion of our game
 */
var gameCore = {
	/**
	 * this params must be declared later
	 */
	objectDefinitions: [],
	templates: {},
	interactions: [],
	projectionClass: undefined,

	/**
	 * method returns object, that represents level
	 */
	generateGame: function(map, container) {
		return {
			objects: this.generateObjects(map), 
			projection: new projectionClass(container),
			interactions: this.interactions,
			startGame: function() {
				(function() {
					var newObjects = _.reduce(
						this.interactions, 
						function(newObjects, interaction) {
							var proceeded = interaction.proceed(this.objects);
							this.objects = _.without(this.objects, proceeded);
							return newObjects.concat(proceeded);
						}, 
						[]
					);
					this.objects = this.objects.concat(newObjects);
					this.projection.show(this.objects);
					setTimeout(_.bind(arguments.callee, this), 200);
				}).apply(this);
				
			},
		}
	}
};