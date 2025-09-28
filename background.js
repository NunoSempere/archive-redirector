chrome.action.onClicked.addListener(async (tab) => {
  const url = tab.url;
  const strippedUrl = url.split('?')[0];
  const archiveUrl = `https://archive.is/newest/${strippedUrl}`;
  
  chrome.tabs.update(tab.id, { url: archiveUrl });
});