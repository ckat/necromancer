gameCore.projectionClass = function(map, block){
	this.block = block;
	this.show = function(objects) {
		var resultArray = [];
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		resultArray.push("______________________________________________\n".split(""));
		for(var i = 0; i < objects.length; i++) {
			var object = objects[i];
			resultArray[object.y][object.x] = object.type.symbol
		};
		var result = "";
		for (var i = 0; i < resultArray.length; i++) {
			result += "".concat.apply("", resultArray[i]);
		};
		this.block.html(result)
		console.log(objects);
	}
};