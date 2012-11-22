gameCore.interactions.push(_.extend({
	name:"turn right if wall",
	template: [
		"touch",
		{types: ["user", "wall"]}
	],
	processor: function(relatedObjects) {
		var user = relatedObjects[0].type.typename == "wall" ? relatedObjects[1] :relatedObjects[0];
		user.direction = user.direction+1 % 4;

		return [wall, user];
	}
}, interactionBase))

gameCore.interactions.push(_.extend({
	name: "go forward if nothing",
	template: [
		{types: ["user"]}
	],
	handler: function(relatedObjects) {
		var user = relatedObjects[0];
		if (user.direction==0) {
			user.x++;
		}
		if (user.direction==0) {
			user.y++;
		}
		if (user.direction==0) {
			user.x--;
		}
		if (user.direction==0) {
			user.y--;
		}
		return [user];
	}
}, interactionBase));
