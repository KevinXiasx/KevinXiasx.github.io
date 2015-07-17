---
layout: page
title: 使用ADB调试android Rock
category: 产品
tags: [产品, 配置]
keywords: 产品, 配置
description:
---

# 使用ADB调试android Rock  

我们首先需要一个
* 运行android平台的rock  
* PC机  
* USB转OTG线  

## Linux  

* 我们首先要安装adb工具  
	`sudo apt-get install android-tools-adb`  

* 然后修改udev规则文件，填入以下内容  
	`sudo gedit /etc/udev/rules.d/51-android.rules`  
	> SUBSYSTEM=="usb", ATTR{idVendor}=="2207", MODE="0666", GROUP="plugdev"  

* 现在我们需要让之前的设置马上生效  
	`sudo udevadm control --reload-rules`  
	`sudo udevadm trigger`  

* 如果.android文件夹没有存在你的home目录下的话，我们需要创建它，然后在里面添加一个文件  
	`mkidr -p ~/.android`  
	`echo 0x2207 >> ~/.android/adb_usb.ini`  

* 然后确认你的android设备开启了debugging的选项  

* 重启一次adb工具  
	`sudo adb kill-server`  
	`sudo adb start-server`  

* 现在，我们使用以下命令就可以看到类似这样的一些连接信息  
	`sudo adb devices`  
	> 16EM8TBH0Z  device

连接成功 ！ 

## Windows  

### 安装adb usb驱动  

有两种方法做这件工作  

##### 1.使用工具RK_DriverAssitant tools安装  

-------------------------------------------------------------------
* 如果需要更详细更全面的信息，请登陆  
	http://radxa.com  						官方网站  
	339567728         						QQ讨论群  
	http://cn.radxa.com/forum.php					中文论坛  
* 另外，本手册所使用的所有源码、固件、工具，都可以登陆以下地址下载  
	http://dl.radxa.com/                             	      国外服务器  
	http://pan.baidu.com/share/home?uk=3108273493#category/type=0	 百度云  
* 手册内容经小编实际操作，均可正常使用，但因系统以及整理文档等原因，若出现错误，请谅解，并使用以下邮箱联系我们  
	kevin@radxa.com  

## Radxa团队  

### 2015年7月  
--------------------------------------------------------------------
