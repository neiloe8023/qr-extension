document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    const url = currentTab.url;
    const favicon = currentTab.favIconUrl || '../icons/icon48.png';
    const siteName = new URL(url).hostname;

    // 设置网站名称
    document.getElementById('site-name').textContent = siteName;
    
    // 设置favicon
    document.getElementById('favicon').src = favicon;

    // 清除已有的二维码
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = '';

    // 生成新的二维码
    new QRCode(qrcodeDiv, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    // 添加分享按钮功能
    document.getElementById('shareButton').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(url);
        const button = document.getElementById('shareButton');
        button.textContent = '已复制';
        setTimeout(() => {
          button.textContent = '分享链接';
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });

    // Github按钮点击事件
    document.getElementById('githubButton').addEventListener('click', (e) => {
      e.preventDefault();
      chrome.tabs.create({ url: 'https://github.com/username/qr-extension' });
    });
  });
}); 