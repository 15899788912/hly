# Environment 
准备：
1.Git-1.9.5-preview20150319或以上 
2.node-v0.12.2-x64或以上
备注：百度搜索git、nodejs下载。

安装：
先安装nodejs 直接点击下载下来的msi文件，下一步下一步安装好。
检测：打开nodejs命令行窗口(开始--》Node.js--》第一个命令) node -v ,npm -v 查看安装版本

然后安装git工具，下一步。。。完成。

命令安装：
1.打开nodejs命令行窗口，使用下边命令安装npm,若node自带npm可忽略
node cli.js install npm 
检测版本：npm -v 查看安装版本

2.SVN项目下载
https://192.168.10.245:800/svn/02Development/01Code/04Mobile/live1

3.切换到我们的项目，安装grunt 执行
例如：我的项目在d盘，打开git工具执行：cd d:live1 
然后执行 npm install -g grunt-cli

4.安装grunt相关插件
打开git工具执行 npm install
安装过程时会在项目中产生一个node_modules文件夹
（切记）这个文件夹不用上传到SVN。

5.代码安装检测
grunt serve 等待运行完成

6.查看效果
http://localhost:9000/index.html

## Build & development

运行项目使用grunt命令
 `grunt serve` 本地调试
 'grunt serve:dist' 上线命令


## Testing

 'grunt test'  代码单元测试命令


##  代码结构
app ---主目录

app--ads  --->外链banner图片目录
app--common  -->公共js目录
app--images  -->图片目录
app--score   -->比分目录
app--scripts   -->angularjs controllers目录
app--styles   -->样式
app--video   -->声音文件
app--views   -->angularjs 模版
app--404.html 错误页面
app--index.html 首页
app--....各页面不解释

node_modules  ---grunt 插件目录（不要上传SVN）

dist---本地调式目录，也是上线目录
（在打测试环境、线上包的时候注意修改压缩包名字--app+日期，
例如：dist-->app0318,同时把压缩包里面的dist文件夹也改为app）


test---单元测试目录

abc.json,bower.json,package.json，gruntfile 配置文件 不用管，有需要可与我联系！

## 替换内容
1.IMGURL
将相对路径中的images修改为@@IMGURL，避免打包图片问题。
@@IMGURL='http://m.13322.com/images';

2.TIMESTAMP
时间戳，避免缓存文件，使用：@@TIMESTAMP

3.VERSION
版本号，使用：@@VERSION

4.MINEXT
min压缩后缀，在自定义文件后可加上该标示。
例如：styles/wapcss@@MINEXT.css


##############框架大事件##############

20160721_v2.0
1、配置文件：新增MD5戳，有效解决缓存问题
2、主目录新增：model模块，主要存储各业务模块HTML文件，其他文件请不要放里面
說明：对接PC业务模块，也使主目录结构更清晰明了。

修改：
	1.各模块调用样式文件，JS文件改为 link,script方式引用，
	  小于100行代码可以使用@import 方式引入,可参考已修改的文件。
	  例如：
	  css:
	  <style type="text/css">
	  	 @import '/styles/download@@MINEXT.css';
	  </style>
	  改为--->
	  <link rel="stylesheet" type="text/css" href="/styles/download@@MINEXT.css">
	  JS 类似。
	 2.内部@@IMGURL 修改
	   样式文件，JS文件内使用了@@IMGURL 请修改为 /images 相对路径，HTML文件可不修改
	   例如：
	   background: url(@@IMGURL/livetv/livetv_bg.png) ----> background: url(/images/livetv/livetv_bg.png);

	 3.img ng-src命令的使用
	   现加入了MD5戳，若使用ng-src命令 会导致替换文件失败情况，请使用src命令
	   例如：
	   <img ng-src="/images/icon_01.png" alt="{{'HONGKONG_LOTTERY' | translate}}" />
		--->
	   <img src="/images/icon_01.png" alt="{{'HONGKONG_LOTTERY' | translate}}" />

备注：以上修改可参考已修改文件，不明白可随时咨询ME。
