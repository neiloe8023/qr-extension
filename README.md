# 网页二维码 Chrome扩展

一个简洁优雅的Chrome扩展，可以快速为当前网页生成带有网站favicon的二维码。采用macOS风格设计，提供流畅的用户体验。

## ✨ 主要特性

- 🎯 一键生成当前网页的二维码
- 🖼 自动集成网站favicon到二维码中心
- 📱 支持移动设备扫码访问
- 📋 一键复制网页链接
- 🎨 精美的macOS风格界面设计
- 🌓 支持浅色/深色模式自适应

## 🛠 技术栈

- Chrome Extension Manifest V3
- 原生JavaScript (ES6+)
- QRCode.js 生成二维码
- CSS3 现代特性 (Flexbox, Grid, 毛玻璃效果等)

## 📦 安装方法

1. 下载本项目代码
2. 打开Chrome浏览器，进入扩展管理页面 (`chrome://extensions/`)
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本项目所在文件夹

## 🎮 使用方法

1. 安装扩展后，点击Chrome工具栏中的扩展图标
2. 扩展会自动生成当前网页的二维码，并在中心显示网站图标
3. 使用手机扫描二维码即可访问当前网页
4. 点击"分享链接"按钮可以快速复制当前网页链接

## 🔒 隐私说明

本扩展仅需要以下必要权限：
- `activeTab`: 访问当前标签页信息
- `tabs`: 获取标签页URL和标题
- `clipboard-write`: 用于复制链接功能

我们不会收集任何用户数据，所有操作均在本地完成。

## 🤝 贡献

欢迎提交Issue和Pull Request来帮助改进这个项目。

## 📄 开源协议

[MIT License](LICENSE) 