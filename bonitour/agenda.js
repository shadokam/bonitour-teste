function iniciaTabela(){
	var tabela = document.getElementById("myTable");
	var tbody = document.getElementById("myTbody");
	var horas = document.getElementById("horas").value;
	var dias = document.getElementById("dias").value;
	var cont;
	var cont2;

	
	document.getElementById("myDiv").appendChild(tabela);
	tabela.appendChild(tbody);

	for(var cont = 0; cont < horas; cont++){
		var trhoras = document.createElement("TR");
		tabela.appendChild(trhoras);
		tbody.appendChild(trhoras);
		
		for (var cont2 = 0; cont2 < dias; cont2++){
			var tddias = document.createElement("TD");
			tddias.id = "td_" + cont2;
			var checkbox = document.createElement('input');
			checkbox.className = "check";
			checkbox.type = "checkbox";
			tddias.appendChild(checkbox);	
			trhoras.appendChild(tddias);	
		}	
	}
}

function marcarTudo(){
	$('.check').each(
        function(){
            if ($(this).prop( "checked", false))
                $(this).prop("checked", true);
        }
    );
}

function desmarcarTudo(){
    $('.check').each(
        function(){
            if ($(this).prop( "checked"))
                $(this).prop("checked", false);
        }
    );
}


function desabilitaTd(){
	var paraRemover = $('table td input:checkbox:checked').map(
		function () {
		$(this).remove();
    });
}

function preencheTd(){
	var texto = " <b>Célula preenchida! </b> "
	texto.className = "texto";
	var paraPreencher = $('table td input:checkbox:checked').map(
		function () {
		$(this).replaceWith(texto);
	}); 
}

function limpaTd(texto){
	$("#myTable tr").remove(".texto"); // Problemas
}

