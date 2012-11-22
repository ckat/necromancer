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
		var objects = this.generateObjects(map); 
		var projection = new this.projectionClass(map, container);
		return {
			objects: objects, 
			projection: projection,
			interactions: this.interactions,
			startGame: function() {
				(function() {
					var newObjects = _.reduce(this.interactions, 
						function(newObjects, interaction) {
							var proceeded = interaction.proceed(this.objects);
							this.objects = _.without(this.objects, proceeded);
							return newObjects.concat(proceeded);
						},[]);
					this.objects = this.objects.concat(newObjects);
					this.projection.show(this.objects);
					setTimeout(_.bind(arguments.callee, this), 20000);
				}).apply(this);
			},
		}
	},
	generateObjects: function(map) {
		var result = [];
		var rows = map.split("\n");
		for (var rowNumber = 0; rowNumber<rows.length; rowNumber++) {
			var row = rows[rowNumber];
			var symbols = row.split("");
			for (var symbolNumber = 0; symbolNumber< symbols.length; symbolNumber++) {
				var symbol = symbols[symbolNumber];
				if (symbol!==' ') {
					var objectType = this.getTypeFor(symbol);
					result.push({
						type: objectType, 
						direction : (Math.random()*4)%4,
						x: symbolNumber, 
						y: rowNumber
					})
				}
			}
		}

		return result;
	},
	getTypeFor: function(symbol) {
		var types = _.where(this.objectDefinitions, {symbol: symbol});
		return _.first(types);

	}
};
/**
 * base object for interactions
 */
var interactionBase = {
	name: undefined,
	template:[],
	handler:undefined,
	proceed: function(objects) {
		
	}
};