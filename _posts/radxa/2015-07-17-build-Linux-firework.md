---
layout: post
title: Linux系统固件制作
category: 产品
tags: [产品]
keywords: radxa
description: 
---

# 1.制作Linux系统的固件

本篇文章将详细介绍如何制作Rock lite/pro上运行的Linux固件，你需要的，就是一台能上网的Ubuntu的电脑  

## 编译环境  

#### 下载交叉编译工具链  

##### 64bit 主机  
  `git clone -b kitkat-release --depth 1 https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-eabi-4.6`  
  
或者这里下载http://dl.radxa.com/rock/source/x86_64_arm-eabi-4.6.zip   

##### 32bit 主机  
  `git clone -b jb-release --depth 1 https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/arm/arm-eabi-4.6`  
  
或者在这里下载http://dl.radxa.com/rock/source/x86_32_arm-eabi-4.6.zip  

#### 设置环境变量  

  `export ARCH=arm`  
  `export CROSS_COMPILE=`pwd`/arm-eabi-4.6/bin/arm-eabi-`
  
  **需要注意的是，上面CROSS_COMPILE是表示编译器的路经，make的时候，会从该路经寻找编译器，可能需要改变，因为也许你已经安装过該编译器，或者说你想使用你其他编译器，这时候，就需要特别注意该变量的值。**  
  
## 2.获取Linux内核源码  

* Kernel v3.0:
`git clone -b radxa-stable-3.0 https://github.com/radxa/linux-rockchip.git`  
* kernel v3.18:
https://www.kernel.org/pub/linux/kernel/v3.x/linux-3.18.11.tar.xz  
同时还要获取配置文件  
`wget http://rockchip.fr/radxa/linux/rockchip_defconfig -O arch/arm/configs/rockchip_defconfig`  
`wget http://rockchip.fr/radxa/linux/rk3188-radxarock.dts -O arch/arm/boot/dts/rk3188-radxarock.dts`  

* Kernel v4.0:`git clone -b stable --depth 1 git://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git`  
  获取配置文件  
  `wget http://rockchip.fr/radxa/linux/rockchip_defconfig -O`  
  `wget http://rockchip.fr/radxa/linux/rk3188-radxarock.dts -O arch/arm/boot/dts/rk3188-radxarock.dts`  

