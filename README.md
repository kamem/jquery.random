jquery.random
=============

Placing a random one image, so as not to overlap as much as possible.

* 日本語 : [タグをランダム配置＆サイズにしてなるべく重ならないように配置するjQueryプラグイン][http://develo.org/jquery.random]

Specification
---
1. Specifies the parent element you want to generate.
if "$ ('body')" to be generated under the body.
2. Specifies the image if you want to put in the image contents.
Empty if there is no need.
3. To redo the placement If the tag is overlap.


Usage
---
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.random.js"></script>
	<script type="text/javascript">
		$(function(){
			$('body').random('<img src="img/img.png">');
		});
	</script>



Options
------

### initialization ###
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

* tagName {String} The name of the tag that you want to produce.
* className {String} Class name for the tag. ex) randomContent + num.
* content {String} The contents of the tag.If you want to put image.
* num {Number} The number of tags you want to generate.
* stageWidth {Number} The width of the area.
* stageHeight {Number} Vertical width of the area.
* width {Number} Width maximum value of the image.width and height is the case of the same value. You randomly while maintaining the aspect ratio.
* height {Number}	Height maximum value of the image
* min {Number} The minimum value of the image
* isSize {Boolean} Whether or not to random size
* tryCount {Number} The number of times to repeat the random again when the arrangement was overlapped.
* adjustment {Number} Whether or not to allow how much the degree of overlap.