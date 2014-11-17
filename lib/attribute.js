orion.attributes.summernote = new SimpleSchema({
	content: {
		type: String,
		autoform: {
			type: 'orionSummernote'
		}
	}
});

orion.adminIndexAttributeViews.summernote = function(key, label) {
	return {
		key: key, 
		label: label,
		fn: function (value) {
			var tmp = document.createElement("DIV");
			var content = value.content.replace(/<(?:.|\n)*?>/gm, ' ');
			if(content.length > 50) content = content.substring(0, 47).trim() + '...';
			return content;
		}
	}
}