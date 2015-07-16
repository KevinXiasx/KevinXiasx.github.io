---
layout: post
title: 编译安卓固件
category: 资源
tags: android
keywords: firework
---


#Android固件的编译  

这篇文章将详细介绍安卓固件的编译步骤,不过给radxa rock编译AOSP(Android Open Source Project)整个安卓系统源码是一项大工程，**会很耗费时间和硬盘空间**。推荐的编译主机是Ubuntu 12.04 64位。在我们的测试编译机器上一次完整编译总共花费了35分钟和30G的硬盘空间，我们的配置为Intel 4770处理器(第四代i7，四核八线程，3.4Ghz)，16G内存和256G固态硬盘(友情提示: 固态硬盘可以极大提高编译速度).
##初始化编译环境  
	安装JDK  
`#  sudo add-apt-repository ppa:webupd8team/java`  
`#  sudo apt-get update`  
`#  sudo apt-get install oracle-java6-installer`  

	安装所需要的包  
`#  sudo apt-get install git gnupg flex bison gperf build-essential zip curl libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-glx:i386 g++-multilib mingw32 tofrodos gcc-multilib ia32-libs python-markdown libxml2-utils xsltproc zlib1g-dev:i386`


