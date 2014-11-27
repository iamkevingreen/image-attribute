orion.attributes.image = new SimpleSchema({
	fileId: {
		type: String,
		autoform: {
			type: 'hidden',
			label: false,
		},
		optional: true,
	},
	link: {
		type: String,
		label: "Image",
		autoform: {
			type: 'orionImage',
			label: false,
		},
		optional: true,
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