/**
 *	jQuery random.
 *	jQuery required.
 *	
 *	* Copyright 2014 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *	
 *	Date: 2014.06.07
 *
 * タグをランダム配置＆サイズにしてなるべく重ならないように配置する
 *	
 *	@class random
 */

(function($,global){

$.fn.random = function (content,options) {
	var $content = this;

	var c = $.extend({
		tagName: 'p',
		className: 'randomContent',
		content: '',
		num: 30,
		stageWidth: $content.width(),
		stageHeight: $content.height(),
		width: 100,
		height: 100,
		min: 10,
		isSize: true,
		tryCount: 10,
		adjustment: 0
	},options),
	
	tagName = c.tagName,
	className = c.className,
	num = c.num,
	width = c.width,
	height = c.height,
	stageWidth = c.stageWidth,
	stageHeight = c.stageHeight,
	min = c.min,
	adjustment = c.adjustment,
	
	isSize = c.isSize,
	isRatio = width === height ? true : false,
	tryCount = c.tryCount,
	
	info = [];

	//ランダムオブジェクトを生成
	for(var i = 0;i < num;i++) {
		$content.append('<' + tagName + ' class="' + className + i + '">' + content +  '</' + tagName + '>');
		randomTry(i,tryCount);
		
		$('.' + className + i).css(info[i]);
	};
	
	/**
	 *	ランダム配置 設定
	 *	
	 *	@method random
	 *	@param num {Number} info[num] に入る数字
	 */
	function random(num) {
		var random = {
			width: Math.random() * (width - min) + min,
			height: Math.random() * (height - min) + min
		};
		random.left = Math.random() * (stageWidth - random.width),
		random.top = Math.random() * (stageHeight - (isRatio ? random.width : random.height));
		
		info[num] = {
			left: random.left,
			top: random.top,
			width: isSize ? random.width : width,
			height: isSize ? (isRatio ? random.width : random.height) : height
		};
	};
	
	/**
	 *	ランダム配置で重なってるかをチェックして、重なりがあった場合にはmaxCountの数分random(num)を繰り返す
	 *	
	 *	@method randomTry
	 *	@param num {Number} info[num] に入る数字
	 *	@param maxCount {Number} random(num)を繰り返す回数
	 */
	function randomTry(num,maxCount) {
		var count = 0;

		random(num);
		test();
		function test() {
			if(positionCheck(num) === true) {count = 0; return false;}
		
			if(count <= maxCount) {
				random(num);
				count++;
				test();
			}
		}
	};


	/**
	 *	positionが重なっていないかをチェック 問題なければtrue
	 *	
	 *	@method psitionCheck
	 *	@param num {Number} info[num] に入る数字
	 *	@return {Boolean}
	 */
	function positionCheck(num) {
		var isCheck = true;
		
		for(var i = 0;i  < $('[class*=' + className + ']').size();i++) {
			if(i !== num) {
				var hani = ((info[i].top - info[num].height + adjustment) < info[num].top && info[num].top < (info[i].top + info[i].height - adjustment));
				var hani2 = ((info[i].left - info[num].width + adjustment) < info[num].left && info[num].left < (info[i].left + info[i].width - adjustment));
				
				isCheck = !(hani && hani2);
				
				if(!isCheck) break;
			}
		};
		
		return isCheck;
	}
};

}(jQuery,this));