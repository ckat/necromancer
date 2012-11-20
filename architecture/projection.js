gameCore.projectionClass = function($block){
	this.$block = $block;
	this.show = function(objects) {
		this.$block.html(json2.stringify(objects));
	}
};