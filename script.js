//carregando a biblioteca 
google.load('visualization','1',{'packages':['corechart']});
//metodo que espera o google.load carregar
google.setOnLoadCallback(desenhoGrafico);


function desenhoGrafico(){
	
	//graficos de gastos 
	//datatable responsavel por armazenar todas as informações da tabela
	var data = new google.visualization.DataTable();

	//adicionando colunas mes e gastos
	//mês é uma string e gasto do tipo numero 
	data.addColumn('string','Mês');
	data.addColumn('number','Gastos em R$');

	//adicionando linhas 
	data.addRows(12);


	//inserindo dados em janeiro
	data.setValue(0,0,'Janeiro');
	data.setValue(0,1,'20450.0');

	//inserindo dados em fevereiro
	data.setValue(1,0,'Fevereiro');
	data.setValue(1,1,'21870.0');

	//inserindo dados em fevereiro
	data.setValue(2,0,'Março');
	data.setValue(2,1,'30070.0');

	//inserindo dados em fevereiro
	data.setValue(3,0,'Abril');
	data.setValue(3,1,'40070.0');

	//inserindo dados em fevereiro
	data.setValue(4,0,'Maio');
	data.setValue(4,1,'50070.0');

	data.setValue(5,0,'Junho');
	data.setValue(5,1,'30000');

	data.setValue(6,0,'Julho');
	data.setValue(6,1,'19000');

	data.setValue(7,0,'Agosto');
	data.setValue(7,1,'14000');

	data.setValue(8,0,'Setembro');
	data.setValue(8,1,'16000');

	data.setValue(9,0,'Outubro');
	data.setValue(9,1,'20000');

	data.setValue(10,0,'Novembro');
	data.setValue(10,1,'90000');

	data.setValue(11,0,'Dezembro');
	data.setValue(11,1,'45530');	


	//criando o gráfico
	var grafico = new google.visualization.LineChart(document.getElementById('grafico'));

	grafico.draw(data,{width:550 , heigth:440, title:'Gráficos Linhas'});

}