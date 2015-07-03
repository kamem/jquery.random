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
 * Placing a random one image, so as not to overlap as much as possible.
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

	//Generate tags in random.
	for(var i = 0;i < num;i++) {
		var contentRandomNum = Math.floor(Math.random() * content.length);

		$content.append('<' + tagName + ' class="' + className + i + '">' + content[contentRandomNum] +  '</' + tagName + '>');
		randomTry(i,tryCount);

		$('.' + className + i).css(info[i]);
	};

	/**
	 *	Random location.
	 *
	 *	@method random
	 *	@param num {Number} info[num]
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
	 *	Processing to check whether repeated, at the time of the random placement.
	 *	If there is overlap. Run "random (num)" the number of "maxCount".
	 *
	 *	@method randomTry
	 *	@param num {Number} info[num]
	 *	@param maxCount {Number}
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
	 *	process to check whether the position is overlap.True if there is no problem.
	 *
	 *	@method psitionCheck
	 *	@param num {Number} info[num]
	 *	@return {Boolean}
	 */
	function positionCheck(num) {
		var isCheck = true;

		for(var i = 0;i  < $('[class*=' + className + ']').size();i++) {
			if(i !== num) {
				var range = ((info[i].top - info[num].height + adjustment) < info[num].top && info[num].top < (info[i].top + info[i].height - adjustment)),
					range2 = ((info[i].left - info[num].width + adjustment) < info[num].left && info[num].left < (info[i].left + info[i].width - adjustment));

				isCheck = !(range && range2);

				if(!isCheck) break;
			}
		};

		return isCheck;
	}
};

}(jQuery,this));