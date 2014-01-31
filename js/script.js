$(function () {
	atualizar();
});

$('#btn-dca-dashboard').click(function(){
	atualizar();
});

function atualizar () {
	$('#mensagem, #nome, #temperatura, #ruido, #luminosidade, #umidade, #botao, #imagem, .temp_imagem').empty();
	$('#imagem, #temp-imagem').css("display", "block");
	$.ajax({
		url: 'http://dca.telefonicabeta.com/m2m/v2/services/7ttrxsqhdxc1/assets/7ttrxsqhdxc1/',
		type: 'GET',
		success: function (ret) {
			var temperatura = ret.data.sensorData[1].ms.v;
			var umidade = ret.data.sensorData[2].ms.v;
			var ruido = ret.data.sensorData[3].ms.v;
			var luminosidade = ret.data.sensorData[4].ms.v;
			var mensagem = "";

			// configura a mensagem da temperatura
			if (temperatura < 5) {
				mensagem = "Quem ligou o ar condicionado no modo pólo norte???";
				imagem = "term-azcl.png";
			} else if (temperatura >= 5 && temperatura < 15) {
				mensagem = "Nossa, que frio!! Não esqueça seu agasalho!!!";
				imagem = "term-azro.png";
			} else if (temperatura >= 15 && temperatura < 23) {
				mensagem = "Isto é que eu chamo de uma temperatura agradável!!!";
				imagem = "term-verd.png";
			} else if (temperatura >= 23 && temperatura <= 30) {
				mensagem = "Tá ficando quente, né? Melhor ligar o ar condicionado";
				imagem = "term-lar.png";
			} else {
				//Hahaha... se eu estivesse no tocantins seria isso o tempo todo... 
				mensagem = "Me mudei pra um deserto e não sabia??? Que calor!!!";
				imagem = "term-verm.png";
			}			

			$('article header:eq(0) h2').text(mensagem);
			$('p:eq(0) img').attr('src', "images/" + imagem);
			$('p:eq(0) span.valor').html(temperatura);


			// configura a mensagem do ruído
			if (ruido < 480) {
				mensagem = "O que foi que você disse mesmo???";
				imagem = "som-azcl.png";
			} else if (ruido >= 480 && ruido < 600) {
				mensagem = "Ôpa, parece que tá rolando uma festa!!!";
				imagem = "som-azro.png";
			} else if (ruido >= 600 && ruido < 900) {
				mensagem = "Ah, o adorável som do trânsito de São Paulo... Ou da CPBR, né??";
				imagem = "som-verd.png";
			} else if (ruido >= 900 && ruido <= 1024) {
				mensagem = "Tá quieto né? Acho que vou ligar um sonzinho...";
				imagem = "som-lar.png";
			} else {
				mensagem = "Nossa! Tá tão quieto que dá pra ouvir uma agulha caindo!!!";
				imagem = "som-verm.png";
			}			

			$('article header:eq(1) h2').text(mensagem);
			$('p:eq(1) img').attr('src', "images/" + imagem);
			$('p:eq(1) span.valor').html(ruido);


			// configura a mensagem da umidade
			if (umidade < 12) {
				mensagem = "Perigo! Perigo! Perigo!";
				imagem = "umid-azcl.png";
			} else if (umidade >= 12 && umidade < 20) {
				mensagem = "Eita!!! Desse jeito o mar vira sertão!!!";
				imagem = "umid-azro.png";
			} else if (umidade >= 20 && umidade < 50) {
				mensagem = "Caramba, como está seco!!! Alguém me arruma um copo d'água???";
				imagem = "umid-verd.png";
			} else if (umidade >= 50 && umidade <= 70) {
				mensagem = "Olha! Núvens no céu!!! Aquela ali parece um cachorro... XD";
				imagem = "umid-lar.png";
			} else {
				mensagem = "É... acho que vai chover... Aquele barulho foi um trovão???";
				imagem = "umid-verm.png";
			}			

			$('article header:eq(2) h2').text(mensagem);
			$('p:eq(2) img').attr('src', "images/" + imagem);
			$('p:eq(2) span.valor').html(umidade);

			// configura a mensagem da luminosidade
			if (luminosidade < 100) {
				mensagem = "Quem apagou a luz??? Alguém trouxe uma vela???";
				imagem = "luz-azcl.png";
			} else if (luminosidade >= 100 && luminosidade < 300) {
				mensagem = "Acho que está anoitecendo... Já tá na hora da janta???";
				imagem = "luz-azro.png";
			} else if (luminosidade >= 300 && luminosidade < 500) {
				mensagem = "É, até que tá bem clarinho, né???";
				imagem = "luz-verd.png";
			} else if (luminosidade >= 500 && luminosidade <= 800) {
				mensagem = "Ei, você aí!!! Desliga o farol alto, por favor!!!";
				imagem = "luz-lar.png";
			} else { 
				mensagem = "A luz!!! Não vá para a luz!!!";
				imagem = "luz-verm.png";
			}			

			$('article header:eq(3) h2').text(mensagem);
			$('p:eq(3) img').attr('src', "images/" + imagem);
			$('p:eq(3) span.valor').html(luminosidade);
		}
	});
}