$(document).ready(function() {
	var log = function(str) { console.log(str) }
	
	// データーのサイズです
	var dataLimit = 100
	var data = []

	// create dummy data
	// サンプルデータベースからjsonフォーマットです
	var targetDataSize = 7
	for(var i = 1; i <= targetDataSize; i++) {
		data.push({ id: i, name: 'jeanepaul ' + i, message: generateRandomMessage() })
	}

	var counter = 5
	for(var i = 1; i < data.length; i++) {
                $('.infinite_items').append('<li class="item"> <p>'+ i + ' : '
                                                + data[i]['name'] + '</p>'
                                                + '<p>' + data[i]['message'] + '</p>'
                                                + '</li>'
                                                )
	}


	$('.fix_right p').html($('.item').length)
	
	$(window).scroll(function() {
		// windowがscrollの時にheightはかわります。その時にajax実行します、
		// 今のdataをアップデートするとかいろいろできます
		// controlはデーターのサイズです
		// dataLimit != data.length
		if($(window).scrollTop() >= ($(document).height() - $(window).height()) + 5 && (dataLimit != data.length - 1)) {
			// データーを作る
			// ここはajax callとか。今のデーターアップデートするために。
			data.push({
					id: data.length - 1, 
					name: 'jeanepaul',
					message : generateRandomMessage()
				})	

			// データーリストをアップデートして DOMにプッシュ	
			updateList()

			// 右のdiv (data.length)を表示する
			//　削除しても大丈夫です
			$('#value').html(data.length)
			$('.fix_right p').html($('.item').length)	
		}	
	})


	function updateList() {
		var id = data.length - 1
              	$('.infinite_items').append('<li class="item"> <p>'+ id + ' : ' 
						+ data[id]['name'] + '</p>' 
						+ '<p>' + data[id]['message'] + '</p>'
						+ '</li>'
						)
	}
	
	function generateRandomMessage() {
		return Math.random().toString(36).substring(7);
	}
})
