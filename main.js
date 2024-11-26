$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskName = $('#task-name').val();

        if (taskName) {
            var newTask = $('<li>').text(taskName);

            $('#task-list').append(newTask);

            $('#task-name').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});