AutoForm.addInputType("orionImage", {
	template: "orionImageInput",
	valueOut: function() {
		return this.attr('src');
	}
});