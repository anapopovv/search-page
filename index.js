var resultList = [
    { title: "Pagina 2", url: "index2.html#result1" },
    { title: "Pagina 3", url: "index3.html#result2" }
];

function search() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase(); 
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    var filteredResults = resultList.filter(function(result) {
        return result.title.toLowerCase().includes(searchTerm);
    });

    if (filteredResults.length > 0) {
        resultsDiv.innerHTML = 'Resultados para ' + searchTerm + ':' + '<br>';
        // exibindo resultados
        filteredResults.forEach(function(result) {
            resultsDiv.innerHTML += '<a href="' + result.url + '">' + result.title + '</a>';
        });
    } else {
        var similarResults = resultList.filter(function(result) {
            return result.title.toLowerCase().indexOf(searchTerm) !== -1;
        });

        if (similarResults.length > 0) {
            resultsDiv.innerHTML = 'Nenhum resultado encontrado para: ' + searchTerm + '<br>';
            resultsDiv.innerHTML += 'Mas temos:<br>';
            // Similares
            similarResults.forEach(function(result) {
                resultsDiv.innerHTML += '<a href="' + result.url + '">' + result.title + '</a>';
            });
        } else {
            resultsDiv.innerHTML = 'Nenhum resultado encontrado para: ' + searchTerm + '<br>';
        }
    }
}