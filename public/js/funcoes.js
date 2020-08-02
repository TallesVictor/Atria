function datTable(tabela) {
    $('#' + tabela).dataTable({
        "ordering": true,
        lengthMenu: [
            [10, 50, 100, -1],
            [10, 50, 100, "Tudo"]
        ],
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "Resultados _MENU_ ",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "<i class='fas fa-step-forward'></i>",
                "sPrevious": "<i class='fas fa-step-backward'></i>",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },

        }
    });
}

function maskDate(dateStr) {
    if (dateStr) {
        dArr = dateStr.split("-"); // ex input "2010-01-18"
        return dArr[2] + "/" + dArr[1] + "/" + dArr[0]; //ex out: "18/01/10"
    }
}

function ocultarCampo() {
    if ($("#textPlaca").val().length == 0) {
        if ($("#placa").css('display') == 'block') {    
            $("#placa").fadeOut();     //Parâmetro com a duração em ms do efeito
                
            $("#placa").fadeOut(600);     //Parâmetro slow: o efeito é executado em 600ms
                
            $("#placa").fadeOut("slow");     //Parâmetro fast: o efeito é executado em 200ms
                
            $("#placa").fadeOut("fast");     //Informada duração e função de callback
                
            $("#placa").fadeOut("fast",         function() {            
                // alert("fade concluido");        
            }    );
            listarCarro();
        } else {
            //Sem parâmetros: o efeito é executado em 400ms
            $("#placa").fadeIn();
            //Parâmetro com a duração em ms do efeito
            $("#placa").fadeIn(600);
            //Parâmetro slow: o efeito é executado em 600ms
            $("#placa").fadeIn("slow");
            //Parâmetro fast: o efeito é executado em 200ms
            $("#placa").fadeIn("fast");
            //Informada duração e função de callback
            $("#placa").fadeIn("fast",
                function() {
                    // alert("fade concluido");
                }
            );
        }
    }
}

function aviso(mensagem, aviso) {
    $("#aviso").html(mensagem);
    if (aviso == 1) {
        $("#aviso").addClass("bg-danger shadow form-control text-white w-100 pt-1 text-center m-auto");
        setTimeout(function() {
            $("#aviso").html("");
            $("#aviso").removeClass("bg-danger shadow form-control text-white w-100 pt-1 text-center m-auto");
        }, 4000);
    } else {
        $("#aviso").addClass("bg-success shadow form-control text-white w-100 pt-1 text-center m-auto");
        setTimeout(function() {
            $("#aviso").html("");
            $("#aviso").removeClass("bg-success shadow form-control text-white w-100 pt-1 text-center m-auto");
        }, 4000);
    }
}