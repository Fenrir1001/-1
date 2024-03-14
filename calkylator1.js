$(document).ready(function(){


	$('input').keydown(function(){
	    $(this).val($(this).val().replace (/\D/, '')); //Если в input ввели не цифрц, то удаляем ее.
	});

	$('.input_number').click(function(){ //Клик по кнопкам, производящим ввод данных
		var number=$(this).text(); //Берем значение кнопки
		var value=$('input').val()+number;  //Берем значение input и прибавляем к нему новое
		$('input').val(value); //Новое значение вставляем обратно в input
	});

	$('.clear_input').click(function(){ //Клик по кнопке "Очистить"
		$('input').val(''); //Очищаем данные в input
	});

	var first_number; //Создаем переменную для первого числа
	

	$('.action').click(function(){  //Клике по кнопке с действием "+,-,*,/"
		first_number=parseFloat($('input').val()); //Заносим значение из input в первую перменную
		type_action=$(this).text(); //Запоминаем тип действия
		$('input').val(''); //Очищаем input, чтобы ввести следующее число
	});

	$('.get_result').click(function(){  //Клик по кнопке "="
		var second_number=parseFloat($('input').val()); //Получаем значение второго числа

		//Взависимости от типа действия, совершаем с переменными манипуляции
		if(type_action=='-'){
			var result=first_number-second_number;
		}
		if(type_action=='+'){
			var result=first_number+second_number;
		}
		if(type_action=='*'){
			var result=first_number*second_number;
		}
		if(type_action=='/'){
			var result=first_number/second_number;
		}
		result=result.toFixed(2); //Сокращаем количество символов после запятой

		$('input').val(result); //Заносим значение в input

	});

});