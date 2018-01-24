//carregando a biblioteca 
google.load('visualization','1',{'packages':['corechart']});
//metodo que espera o google.load carregar
google.setOnLoadCallback(graficoBarra);

function graficoBarra(){

//
var barra = new google.visualization.DataTable();

//adiciona a coluna 
barra.addColumn('string','Mês'); 
barra.addColumn('number','Gastos');

//adiciona a linha 
barra.addRows(12);

//setando os valores 
barra.setValue(0,0,'Janeiro');
barra.setValue(0,1,'14530');

barra.setValue(1,0,'Fevereiro');
barra.setValue(1,1,'14530');

barra.setValue(2,0,'Março');
barra.setValue(2,1,'14000');

barra.setValue(3,0,'Abril');
barra.setValue(3,1,'16000');

barra.setValue(4,0,'Maio');
barra.setValue(4,1,'14530');

barra.setValue(5,0,'Junho');
barra.setValue(5,1,'45530');

barra.setValue(6,0,'Julho');
barra.setValue(6,1,'21530');

barra.setValue(7,0,'Agosto');
barra.setValue(7,1,'14530');

barra.setValue(8,0,'Setembro');
barra.setValue(8,1,'54530');

barra.setValue(9,0,'Outubro');
barra.setValue(9,1,'10000');

barra.setValue(10,0,'Novembro');
barra.setValue(10,1,'5000');

barra.setValue(11,0,'Dezembro');
barra.setValue(11,1,'60000');

var barraGrafico = new google.visualization.ColumnChart(document.getElementById('barra'));

barraGrafico.draw(barra,{width:550 , heigth:440 , title:'Gráficos Barras'});

}