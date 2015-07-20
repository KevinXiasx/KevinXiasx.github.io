---
layout: page
title: 关于bootloader和U-boot
category: 产品
tags: [产品, 配置]
keywords: 产品, 配置
description:
---


# bootloader  

目前绝大多数的基于RK3188的设备，包括Radxa Rock，都是使用Rockchip自身的bootloader。不幸的是，Rockchip并不提供bootloader的源代码。  

少数RK3188的设备使用U-boot。  

bootloader的主要任务是  

* 导入并且校验parameter文件  
* 导入并且运行misc分区的命令  
* 导入，校验，启动内核，randisk，boot等各个分区,或者是recovery分区刷机  
* 连接PC主机，下载镜像、固件用以升级  

下载用于Radxa Rock的bootloader可以从这个地址  

http://dl.radxa.com/rock/images/loader/  

假如你感兴趣的话，你可以从这个地方查看一些别人对它的分析  

https://gist.github.com/sarg/5028505  

或者说是下面的国内的地址  

http://blog.csdn.net/faithsws/article/details/17245699  



# U-boot for rockchip  



=
=


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
