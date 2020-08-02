@extends('template.template')

@section('content')

<div class=" container shadow p-3 mb-5 bg-white rounded">

    <div class="row">
        <div class="col-sm text-center">
            <label class="display-4" id="titulo"></label>
        </div>
    </div>
    <div class="row " id="aviso">

    </div>
    <div class="row">
        <div class="col-sm" id="conteudo">
        </div>
    </div>
</div>

<script src="{{url("js/script.js")}}"></script>
<script src="{{url("js/funcoes.js")}}"></script>

@endsection