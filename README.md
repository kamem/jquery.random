jquery.random
=============

一つの画像などをランダムの配置・大きさ・なるべく重ならないように領域を指定して生成する。


仕様
---
1. 生成したい親要素をしていbodyの下に生成したい場合$('body')（※ appendされます。）
2. 画像を中身に入れたい場合は画像を指定（必要がない場合は空）
3. 生成したオブジェクトが重なっている場合は指定の数分ランダムをやり直す。


使い方
---
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.random.js"></script>
	<script type="text/javascript">
		$(function(){
			$('body').random('<img src="img/img.png">');
		});
	</script>



オプション
------

### 初期設定 ###
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

* tagName {String} 生成したいタグの名前
* className {String} タグに付けるクラス名（randomContent + 連番）
* content {String} タグの中身（画像など入れ込みたい場合など）
* num {Number} 生成したいタグの個数
* stageWidth {Number} 領域の横幅
* stageHeight {Number} 領域の縦幅
* width {Number} 画像の横幅最大値 （widthとheightが同じ値の場合縦横比を保ってランダムにします。）
* height {Number}	画像の縦幅最大値
* min {Number} 画像の最小値
* isSize {Boolean} サイズをランダムにするか
* tryCount {Number} 配置が重なっていた時に再度ランダムをやり直す回数
* adjustment {Number} 重なり具合をどのぐらい許容するか