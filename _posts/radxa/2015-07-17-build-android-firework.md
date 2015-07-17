---
layout: post
title: 编译安卓固件
category: 资源
tags: android
keywords: firework
---


# Android固件的编译  

这篇文章将详细介绍安卓固件的编译步骤,不过给radxa rock编译AOSP(Android Open Source Project)整个安卓系统源码是一项大工程，**会很耗费时间和硬盘空间**。推荐的编译主机是Ubuntu 12.04 64位。在我们的测试编译机器上一次完整编译总共花费了35分钟和30G的硬盘空间，我们的配置为Intel 4770处理器(第四代i7，四核八线程，3.4Ghz)，16G内存和256G固态硬盘(友情提示: 固态硬盘可以极大提高编译速度).  

## 1.初始化编译环境  

* 安装JDK  
	`sudo add-apt-repository ppa:webupd8team/java`  
	`sudo apt-get update`  
	`sudo apt-get install oracle-java6-installer`  

* 安装所需要的包  
	`#  sudo apt-get install git gnupg flex bison gperf build-essential zip curl libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-glx:i386 g++-multilib mingw32 tofrodos gcc-multilib ia32-libs python-markdown libxml2-utils xsltproc zlib1g-dev:i386`  
	**（注意: 在Ubuntu 13.10上，已经没有ia32-libs这个包，不需要安装这个包。 ）**  

* 安装ARM交叉编译器和编译内核相关依赖  
	`sudo apt-get install gcc-arm-linux-gnueabihf`  
	`sudo apt-get install lzop libncurses5-dev`  

下面两步需要注意，arm是将要编译的目标平台，配置时，会根据此环境变量去arch/$ARCH/configs中寻找配置文件，如果编译时报错，有时会提示找不到配置文件，你需要检查该环境变量是否错误，或者说，该目录下是否有相对应的配置文件。  
arm-linux-gnueabihf-则是编译器名字的前面部分，有时你的电脑中已经有该交叉编译工具，但是不在环境变量中，你需要在该环境变量中加入路径名，如CROSS_COMPILE=/user/local/arm-linux-gnueabihf-。  

	`export ARCH=arm`  
	`export CROSS_COMPILE=arm-linux-gnueabihf-`  
	
* 安装其他所需要的运行库  
	`sudo apt-get install libssl1.0.0 libssl-dev`  

## 2.获取Android源码  

* For android 4.2.2 Jelly Bean  
	`git clone -b radxa/radxa-dev git://git.us.linux-rockchip.org/rk3188_r-box_android4.2.2_sdk.git`  
* For android 4.4.2 KitKat   
	`git clone -b radxa/rock2014 git://git.us.linux-rockchip.org/rk3188_rk3066_r-box_android4.4.2_sdk.git`  

或者从百度云下载 http://pan.baidu.com/s/1hqorKva (China)  

注： 国内客户建议从百度云下载，速度较快; rock,rock_pro,rock_lite可以用同一份代码(android 4.4版本), 编译时使用不同的配置即可   

## 3.编译内核  

* 进入内核文件夹  
	`cd kernel`  
* 配置内核，配置文件存放于/arch/arm/configs/目录下，可以根据需求，修改里面的选项  
	`make rk3188_box_radxa_rock_pro_hdmi_defconfig `  
* 开始编译  
	`make kernel.img`  
* 进入安卓目录  
	`cd  ..`  
* 配置安卓  
	`lunch radxa_rock_pro-eng`  
* 开始编译  
	`make -j4`  
* 编译结束后，打包镜像  
	`./mkimage.sh ota`  

最后，你会在rockdev/Image文件夹下得到boot.img recovery.img system.img分区镜像文件, 和 rockdev文件夹下的 update.img整个固件.  


--------------------------------------------------------------------
* 如果需要更详细更全面的信息，请登陆  
	http://radxa.com  						官方网站  
	339567728         						QQ讨论群  
	http://cn.radxa.com/forum.php					中文论坛  
* 另外，本手册所使用的所有源码、固件、工具，都可以登陆以下地址下载  
	http://dl.radxa.com/                             	      国外服务器  
	http://pan.baidu.com/share/home?uk=3108273493#category/type=0
												 百度云  
* 手册内容经小编实际操作，均可正常使用，但因系统以及整理文档等原因，若出现错误，请谅解，并使用以下邮箱联系我们  
	kevin@radxa.com  

## Radxa团队  
#### 2015年7月  
--------------------------------------------------------------------












