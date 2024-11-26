$(document).ready(function() {
    // Função para adicionar uma nova tarefa
    $('#task-form').submit(function(event) {
        event.preventDefault();  // Evita o envio do formulário

        // Pega o valor do campo de tarefa
        var taskName = $('#task-name').val();

        if (taskName) {
            // Cria um novo item de lista <li>
            var newTask = $('<li>').text(taskName);

            // Adiciona o item à lista ordenada
            $('#task-list').append(newTask);

            // Limpa o campo de entrada
            $('#task-name').val('');
        }
    });

    // Função para marcar a tarefa como concluída (com riscado)
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');  // Adiciona ou remove a classe 'completed'
    });
});