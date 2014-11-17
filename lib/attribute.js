orion.attributes.image = new SimpleSchema({
	link: {
		type: String,
		label: "Image",
		autoform: {
			type: 'orionImage'
		}
	}
});

orion.adminIndexAttributeViews.image = function(key, label) {
	return {
		key: key, 
		label: label,
		fn: function (value) {
			if (value) {
				return new Spacebars.SafeString('<img src="' + value.link + '" class="data-table-image">');
			}
		}
	}
}