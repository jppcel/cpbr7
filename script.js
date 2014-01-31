$(function () {
	atualizar();
});

$('#atualizar').click(function(){
	atualizar();
});

function atualizar () {
	$('#mensagem, #nome, #temperatura, #ruido, #luminosidade, #humidade, #botao').empty();
	$.ajax({
		url: 'http://dca.telefonicabeta.com/m2m/v2/services/7ttrxsqhdxc1/assets/7ttrxsqhdxc1/',
		type: 'GET',
		success: function (ret) {
			var temperatura = ret.data.sensorData[1].ms.v;
			var humidade = ret.data.sensorData[2].ms.v;
			var ruido = ret.data.sensorData[3].ms.v;
			var luminosidade = ret.data.sensorData[4].ms.v;
			var mensagem = "";

			//$('#nome').val(ret.data.asset.UserProps[0].value);
			//$('#botao').val(ret.data.sensorData[0].ms.v + ' ' + ret.data.sensorData[0].ms.u);
			$('#temperatura').val(temperatura); // + ' ' + ret.data.sensorData[1].ms.u);
			$('#humidade').val(humidade); // + ' ' + ret.data.sensorData[2].ms.u);
			$('#ruido').val(ruido); // + ' ' + ret.data.sensorData[3].ms.u);
			$('#luminosidade').val(luminosidade); // + ' ' + ret.data.sensorData[4].ms.u);

			// configura a mensagem
			if (temperatura < 5) {
				mensagem = "Quem ligou o ar condicionado no modo pólo norte???";
			} else if (temperatura >= 5 && temperatura < 15) {
				mensagem = "Nossa, que frio!! Não esqueça seu agasalho!!!";
			} else if (temperatura >= 15 && temperatura < 23) {
				mensagem = "Isto é que eu chamo de uma temperatura agradável!!!";
			} else if (temperatura >= 23 && temperatura <= 30) {
				mensagem = "Tá ficando quente, né? Melhor ligar o ar condicionado";
			} else {
				mensagem = "Me mudei pra um deserto e não sabia??? Que calor!!!";
			}

			// TODO: colocar outras mensagens...

			$('#mensagem').text(mensagem).css('margin-bottom', '20px');
		}
	});
}