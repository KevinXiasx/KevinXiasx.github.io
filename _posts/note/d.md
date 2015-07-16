---
layout: post
title: 7月16日
category: 学习笔记
tags: android
keywords: firework
---

# ADB使用  

##安装ADB  

* 下载安装包  
	`sudo apt-get install android-tools-adb`  

* 创建udev规则  
	`sudo gedit /etc/udev/rules.d/51-android.rules`  

* 在该规则中添加文本  
	`SUBSYSTEM=="usb", ATTR{idVendor}=="2207", MODE="0666", GROUP="plugdev"`  　

	
