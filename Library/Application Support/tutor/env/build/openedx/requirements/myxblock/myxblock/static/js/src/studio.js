function handleFormSubmission(runtime, element) {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');

    // Save Button Click Event Handling
    $(element).find('.save-button').on('click', function () {
        var jupyterliteUrl = $(element).find('input[name=jupyterlite_url]').val();

        // Save values in local storage
        localStorage.setItem('jupyterlite_url', jupyterliteUrl);
        localStorage.setItem('uploaded_file', uploaded_file);

        runtime.notify('save', { state: 'start' });

        // Prepare data for submission
        var formData = {
            jupyterlite_url: jupyterliteUrl,
            uploaded_file : uploaded_file
        };
        console.log("@@@@@@@@@@@@@@@@>>>>>>>>>>>>>>>>>>.url === ", )

        // Make an AJAX request to the handlerUrl
        $.ajax({
            url: handlerUrl,
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function (response) {
                if (response.errors && response.errors.length > 0) {
                    response.errors.forEach(function (error) {
                        runtime.notify('error', {
                            message: error,
                            title: 'Form submission error'
                        });
                    });
                } else {
                    runtime.notify('save', { state: 'end' });
                }
            },
            error: function () {
                runtime.notify('error', {
                    message: 'An error occurred during form submission.',
                    title: 'Form submission error'
                });
            }
        });
    });

    $(element).find('.cancel-button').on('click', function () {
        runtime.notify('cancel', {});
    });
}
