---
lang: zh-CN
title: Homebrew国内如何自动安装（国内地址）
---

# Homebrew国内如何自动安装（国内地址）

自动脚本(全部国内地址)（在终端中复制粘贴回车下面脚本)

苹果电脑 常规安装脚本（推荐 完全体 几分钟安装完成）：
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

苹果电脑 极速安装脚本（精简版 几秒钟安装完成）：
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed

苹果电脑 卸载脚本：
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"

常见错误去下方地址查看
https://gitee.com/cunkai/HomebrewCN/blob/master/error.md

Linux电脑 安装脚本：
rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh

Linux电脑 卸载脚本：
rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
