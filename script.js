/*
	Acessando a API do "themoviedb.org" para pegar a coleção de filmes dentro de "discover/movie" (os filmes de lançamento) 
	além de conveter a lingua padrão para português. Depois ele imprime os resultados dentro da estrutura html do carrossel.
*/
$.ajax({
	url: "https://api.themoviedb.org/3/discover/movie?api_key=69f73fa9f2cf1229c9fde3a4184bec4b&language=pt-BR",
	method: "GET"
}).done(function(res) {
	for (var i = 0; i < 7; i++){
		var active = "";
		if (i == 0) {
			active = "active";
		}

		var dt = new Date(res["results"][i]["release_date"]);

		$("#lancamentos").html($("#lancamentos").html() + `
			<div class="carousel-item ${active}">
				<div class="container">
					<div class="row">
						<div class="col-xl-6">
							<img src="http://image.tmdb.org/t/p/w342${res["results"][i]["poster_path"]}">
						</div>
						<div class="col-xl-6" class="nome-filme">
							<h4>${res["results"][i]["title"]}</h4>
							<div class="row">
								<div class="col-12">
									<p>
										<strong>Sinopse:</strong> ${res["results"][i]["overview"]}
									</p>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<strong>Data de Lançamento: </strong> ${dt.toLocaleDateString()}
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<strong>Avaliação: </strong> ${res["results"][i]["vote_average"]}
									<i class="fas fa-star"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	}
	
});

// Calcula minha idade
$("#idade").text(getAge("1999-10-16"));

function getAge(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}