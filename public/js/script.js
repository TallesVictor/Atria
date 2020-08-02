listarCarro();

function status(data) {
    $.ajax({
        type: "GET",
        headers: {
            "token": "617f09431faac7ecaa51ee5941bd43a1"
        },
        url: " http://api.atrialub.com.br/exemplo/status",
        // dataType: "json",
        success: function(response) {
            inicio(data, response);
        },
        error: function(response) {
            alert("erro")
        }
    });

}


function carro(id) {
    $.ajax({
        type: "GET",
        headers: {
            "token": "617f09431faac7ecaa51ee5941bd43a1"
        },
        url: " http://api.atrialub.com.br/exemplo/detalhes/" + id,
        // dataType: "json",
        success: function(data) {
            verCarro(data);
        },
        error: function(response) {
            alert("erro")
        }
    });

}

function inicio(data, status) {

    html = "";
    placa = $("#textPlaca").val();

    if (!placa) {
        $("#titulo").text("Carro");
        html += '<div class="container">' +
            '<div class="row justify-content-end">' +
            '   <div class="col-sm-3 text-right pr-0" id="placa">' +
            '       <input type="search" id="textPlaca" placeholder="Digite a Placa" class="form-control mt-2 mb-2 ">' +
            '   </div>' +
            '   <div class="col-sm-2 text-right pl-1">' +
            '       <btn class="btn btn-primary text-white mt-2 mb-2 w-100" id="buscar" onclick="buscar()" title="Buscar a Placa" >Placa &nbsp;<i class="fas fa-search"></i></btn>' +
            '   </div>' +
            '   <div class="col-sm-2 text-right">' +
            '       <btn class="btn btn-success text-white mt-2 mb-2  w-100" onclick="marcas()" title="Marcas associadas a oficina">Marcas &nbsp;<i class="fas fa-building"></i></btn>' +
            '   </div>' +
            '</div></div>';
    }
    html += '<div class="table-responsive" id="divTable">' +
        '<table id="tableCarro" class="table table-striped table-bordered" style="width:100%">' +
        '<thead>' +
        '    <tr>' +
        '        <th>Carro</th>' +
        '        <th>Cliente</th>' +
        '        <th>Status</th>' +
        '        <th>Placa</th>' +
        '        <th>Ano</th>' +
        '        <th></th>' +
        '    </tr>' +
        '</thead> <tbody>';

    for (i = 0; i < data.length; i++) {
        html += '<tr>' +
            '<td>' + data[i].modelo + '</td>' +
            '<td>' + data[i].nome + '</td>' +
            '<td> <div class="bg-' + status[data[i].status].setorCor + ' rounded text-white text-center shadow-sm">' + status[data[i].status].setor + '</div></td>' +
            '<td>' + data[i].placa.toUpperCase() + '</td>' +
            '<td>' + data[i].ano + '</td>' +
            '<td  class="mouse" onclick="carro(' + data[i].codCheckList + ')"><i class="fas fa-eye"></i></td>' +
            '</tr>';
    }
    html += '</tbody></table></div>';
    if (!placa) {
        $("#conteudo").html(html);
        $("#placa").hide();
    } else {
        $("#divTable").html(html);
    }
    datTable('tableCarro');


}

function marcas(data) {
    $.ajax({
        type: "GET",
        headers: {
            "token": "617f09431faac7ecaa51ee5941bd43a1"
        },
        url: " http://api.atrialub.com.br/exemplo/marcas",
        success: function(response) {
            listarMarcas(response);
        },
        error: function(response) {
            alert("erro")
        }
    });

}

function listarMarcas(data) {
    $("#modalMarcas").remove();

    table = '<table id="tableMarcas" class="table table-striped table-bordered" style="width:100%">' +
        '<thead>' +
        '    <tr>' +
        '        <th class="w-25">Marca</th>' +
        '        <th>Nome</th>' +
        '    </tr>' +
        '</thead> <tbody>';

    for (i = 0; i < data.length; i++) {
        table += '<tr>' +
            '<td><img class="w-100" src="' + data[i].logomarca + '"></img></td>' +
            '<td>' + data[i].nome + '</td>' +
            '</tr>';
    }
    table += '</tbody> </table>'

    html = '<div class="modal fade" id="modalMarcas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '   <div class="modal-dialog" role="document">' +
        '     <div class="modal-content">' +
        '       <div class="modal-header">' +
        '         <h5 class="modal-title" id="exampleModalLabel">Marcas </h5>' +
        '         <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '           <span aria-hidden="true">&times;</span>' +
        '         </button>' +
        '       </div>' +
        '       <div class="modal-body">' +
        '         <div class="container" style="max-height:450px; overflow:auto;">' +
        table +
        '        </div>' +
        '       <div class="modal-footer">' +
        '         <button type="button" class="btn btn-primary"  data-dismiss="modal">Fechar</button>' +
        '       </div>' +
        '     </div>' +
        '   </div>' +
        '</div>';
    $("#conteudo").append(html);

    $("#modalMarcas").modal('show')
}

function verCarro(data) {
    $("#modalMarcas").remove();

    html = '<div class="modal fade bd-example-modal-lg" id="modalMarcas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '   <div class="modal-dialog modal-lg" role="document">' +
        '     <div class="modal-content">' +
        '       <div class="modal-header">' +
        '         <h5 class="modal-title" id="exampleModalLabel">Informações do Carro </h5>' +
        '         <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '           <span aria-hidden="true">&times;</span>' +
        '         </button>' +
        '       </div>' +
        '       <div class="modal-body">' +
        '         <div class="container">' +
        '               <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>Nome</span>' +
        '                       <input type="text" id="nome" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm-3">' +
        '                       <span>Telefone</span>' +
        '                       <input type="text" id="telefone" class="form-control">' +
        '                   </div>' +
        '               </div>' +
        '               <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>CEP</span>' +
        '                       <input type="text" id="cep" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Cidade</span>' +
        '                       <input type="text" id="cidade" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Bairro</span>' +
        '                       <input type="text" id="bairro" class="form-control">' +
        '                   </div>' +
        '               </div>' +
        '               <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>Endereço</span>' +
        '                       <input type="text" id="endereco" class="form-control">' +
        '                   </div>' +
        '               </div>' +
        '               <h4 class="separator text-dark pt-2 font-weight-normal">Carro</h4>' +
        '               <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>Modelo</span>' +
        '                       <input type="text" id="modelo" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Marca</span>' +
        '                       <input type="text" id="marca" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm-2">' +
        '                       <span>Ano</span>' +
        '                       <input type="number" id="ano" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Placa</span>' +
        '                       <input type="text" id="placaCarro" class="form-control">' +
        '                   </div>' +
        '               </div>' +
        '                <div class="row pt-2">' +
        '                   <div class="col-sm-3">' +
        '                       <span>KM</span>' +
        '                       <input type="number" id="km" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Marca dos pneus</span>' +
        '                       <input type="text" id="marca_pneus" class="form-control">' +
        '                   </div>' +
        '                   <div class="col-sm">' +
        '                       <span>Data de cadastro</span>' +
        '                       <input type="text" id="data_cadastro" class="form-control">' +
        '                   </div>' +
        '               </div>' +
        '                <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>Email</span>' +
        '                       <input type="email" id="email" class="form-control">' +
        '                   </div>' +
        '                </div>' +
        '                <div class="row pt-2">' +
        '                   <div class="col-sm">' +
        '                       <span>Assinatura de Cliente</span>' +
        '                       <br>' +
        '                       <div style="border: 1px solid #ced4da;text-align:center">' +
        '                           <img  style="max-width:100%; max-height:200px"  id="assinatura_cliente"></div>' +
        '                           <div style="margin-top: -50px;color: black;position: absolute;border: 1px solid black;width: 95%;text-align: center;"></div>' +
        '                       </div>' +
        '                   </div>' +
        '                </div>' +
        '                <div class="row pt-2">' +
        '                   <div class="col-sm text-center">' +
        '                       <span>Aspectos</span>' +
        '                       <br>' +
        '                       <img id="aspectos_externos" style="border-bottom: 1px solid;"></img>' +
        '                   </div>' +
        '                </div>' +
        '          </div>' +
        '       <div class="modal-footer">' +
        '         <button type="button" class="btn btn-primary"  data-dismiss="modal">Fechar</button>' +
        '       </div>' +
        '     </div>' +
        '   </div>' +
        '</div>';
    $("#conteudo").append(html);
    $("#modalMarcas").modal('show');

    $("#ano").val(data[0].ano);
    if (data[0].aspectos_externos)
        $("#aspectos_externos").prop('src', data[0].aspectos_externos);
    if (data[0].assinatura_cliente)
        $("#assinatura_cliente").prop('src', data[0].assinatura_cliente);
    $("#bairro").val(data[0].bairro);
    $("#cep").val(data[0].cep);
    $("#cidade").val(data[0].cidade);
    $("#data_cadastro").val(data[0].data_cadastro);
    $("#email").val(data[0].email);
    $("#endereco").val(data[0].endereco);
    $("#km").val(data[0].km);
    $("#marca").val(data[0].marca);
    $("#marca_pneus").val(data[0].marca_pneus);
    $("#modelo").val(data[0].modelo);
    $("#nome").val(data[0].nome);
    $("#placaCarro").val(data[0].placa.toUpperCase());
    $("#status").val(data[0].status);
    $("#telefone").val(data[0].telefone);
}

function buscar() {
    ocultarCampo();
    placa = $("#textPlaca").val();
    if (placa) {
        $.ajax({
            type: "GET",
            headers: {
                "token": "617f09431faac7ecaa51ee5941bd43a1"
            },
            url: " http://api.atrialub.com.br/exemplo/carros/" + placa,
            // dataType: "json",
            success: function(response) {
                status(response);
            },
            error: function(response) {
                aviso("Placa não encontrada", 1)
            }
        });
    } else {

    }

}

function listarCarro() {

    $.ajax({
        type: "GET",
        headers: {
            "token": "617f09431faac7ecaa51ee5941bd43a1"
        },
        url: " http://api.atrialub.com.br/exemplo/carros",
        // dataType: "json",
        success: function(response) {
            status(response);
        },
        error: function(response) {
            alert("erro")
        }
    });

}