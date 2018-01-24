//carregando a biblioteca 
google.load('visualization','1',{'packages':['corechart']});
//metodo que espera o google.load carregar
google.setOnLoadCallback(graficoPizza);

function graficoPizza(){

	var pizza = new google.visualization.DataTable();

//adiciona a coluna 
pizza.addColumn('string','Mês'); 
pizza.addColumn('number','Gastos');

//adiciona a linha 
pizza.addRows(12);

//setando os valores 
pizza.setValue(0,0,'Janeiro');
pizza.setValue(0,1,'14530');

pizza.setValue(1,0,'Fevereiro');
pizza.setValue(1,1,'14530');

pizza.setValue(2,0,'Março');
pizza.setValue(2,1,'14000');

pizza.setValue(3,0,'Abril');
pizza.setValue(3,1,'16000');

pizza.setValue(4,0,'Maio');
pizza.setValue(4,1,'14530');

pizza.setValue(5,0,'Junho');
pizza.setValue(5,1,'45530');
/*
pizza.setValue(6,0,'Julho');
pizza.setValue(6,1,'21530');

pizza.setValue(7,0,'Agosto');
pizza.setValue(7,1,'14530');

pizza.setValue(8,0,'Setembro');
pizza.setValue(8,1,'54530');

pizza.setValue(9,0,'Outubro');
pizza.setValue(9,1,'10000');

pizza.setValue(10,0,'Novembro');
pizza.setValue(10,1,'5000');

pizza.setValue(11,0,'Dezembro');
pizza.setValue(11,1,'60000');*/

var pizzaGrafico = new google.visualization.PieChart(document.getElementById('pizza'));

pizzaGrafico.draw(pizza,{width:600 , heigth:600 , title:'Gráfico Pizza'});

}


