Template.orionImageInput.events({
    "change input.filebag": function(event, template){
    	var name = this.name;
    	var imageView = $('[data-schema-key="' + name + '"]')
        var fileInput = $('input[attr-name="' + name + '"]');
        var parent = fileInput.closest(".panel-body");
        var fileIdInput = parent.find('input[name="' + name.replace("link", "fileId") + '"]');

    	imageView.parent().addClass('is-loading');
        if (fileInput[0].files.length > 0) {
            var uploadingFile = fileInput[0].files[0];
            orion.filesystem.upload({
                fileList: fileInput[0].files,
                name: uploadingFile.name,
                folder: 'images',
                canRemove: true
            }, function(file, error) {
                if (!error) {
                    fileIdInput.val(file._id);
                    imageView.attr('src', file.url);
                } else {
                    console.log(error, "error uploading file")
                }
                imageView.parent().removeClass('is-loading');
            });
        }
    },
    "click .image-attribute-container": function() {
        var imageView = $('[data-schema-key="' + this.name + '"]');
        var parent = imageView.closest(".panel-body");
        var fileId = parent.find('input[name="' + this.name.replace("link", "fileId") + '"]').val();
        try {
            orion.filesystem.remove(fileId);
        } catch (e) {

        }
      imageView.attr('src', '');
        parent.find('input[name="' + name.replace("link", "fileId") + '"]').val("");
        parent.closest("form").submit();
    },
    "mouseenter .image-input": function() {
        var imageView = $('[data-schema-key="' + this.name + '"]');
        imageView.parent().addClass('remove');
    },
    "mouseleave .image-input": function() {
        var imageView = $('[data-schema-key="' + this.name + '"]');
        imageView.parent().removeClass('remove');
    }
})
