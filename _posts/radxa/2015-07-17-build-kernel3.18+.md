---
layout: page
title: ROS在Ubuntu系统下的安装
category: 产品
tags: [产品, 配置]
keywords: 产品, 配置
description: 
---



* kernel v3.18:
https://www.kernel.org/pub/linux/kernel/v3.x/linux-3.18.11.tar.xz  
  同时还要获取配置文件  
  `wget http://rockchip.fr/radxa/linux/rockchip_defconfig -O arch/arm/configs/rockchip_defconfig`  
  `wget http://rockchip.fr/radxa/linux/rk3188-radxarock.dts -O arch/arm/boot/dts/rk3188-radxarock.dts`  

* Kernel v4.0:`git clone -b stable --depth 1 git://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git`  
  获取配置文件  
  `wget http://rockchip.fr/radxa/linux/rockchip_defconfig -O`  
  `wget http://rockchip.fr/radxa/linux/rk3188-radxarock.dts -O arch/arm/boot/dts/rk3188-radxarock.dts`  




--------------------------------------------------------------------
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
