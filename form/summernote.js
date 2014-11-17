Template.orionSummernote.events({
    
})

Template.orionSummernote.rendered = function () {
    var key = this.data.name;
    var element = $('.summernote[data-schema-key="' + key + '"]');
    element.summernote({
        height: 300,
        toolbar: [
            ['insert', ['picture', 'link', 'video', 'table', 'hr']],
            ['style', ['fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['layout', ['ul', 'ol', 'paragraph']],
            ['misc', ['fullscreen', 'codeview', 'undo', 'redo']]
        ],
        onImageUpload: function(files, editor, $editable) {
            element.parent().find('.progress').show();
            S3.upload(files,"/summernote-images",function(e,r){
                editor.insertImage($editable, r.url);
                element.parent().find('.progress').hide();
            });
        }
    });
    element.code(this.data.value);
};