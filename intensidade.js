//carregando a biblioteca 
google.load('visualization','1',{'packages':['intensitymap']});
//metodo que espera o google.load carregar
google.setOnLoadCallback(graficoIntensidade);

function graficoIntensidade(){

	var intensidade = new google.visualization.DataTable();


		  intensidade.addColumn('string', '', 'País');
          intensidade.addColumn('number', 'Área (1000 km2)');
          intensidade.addColumn('number', 'População (mil)');
          intensidade.addRows(3);

          intensidade.setValue(0, 0, 'BR');//Brasil
          intensidade.setValue(0, 1, 8515);
          intensidade.setValue(0, 2, 190732);

          intensidade.setValue(1, 0, 'CO');//Colômbia
          intensidade.setValue(1, 1, 1138);
          intensidade.setValue(1, 2, 45986);

          intensidade.setValue(2, 0, 'CL');//Chile
          intensidade.setValue(2, 1, 1438);
          intensidade.setValue(2, 2, 60986);




var intensidadeGrafico = new google.visualization.IntensityMap(document.getElementById('intensidade'));

intensidadeGrafico.draw(intensidade,{region:'south_america' ,width:600 , heigth:500 , title:'Gráfico intensidade'});

}


