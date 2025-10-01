async function checkArchiveOrg(url) {
  try {
    const archiveApiUrl = `http://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
    const response = await fetch(archiveApiUrl);
    const data = await response.json();

    if (data?.archived_snapshots?.closest?.available) {
      const archivedUrl = data.archived_snapshots.closest.url;
      return { archived: true, url: archivedUrl };
    } else {
      return { archived: false, message: "URL has not been archived yet." };
    }
  } catch (error) {
    return { archived: false, message: "Error fetching from archive.org", error: error };
  }
  return { archived: false, message: "Should be an unreachable state :(" };
}

chrome.action.onClicked.addListener(async (tab) => {
  const url = tab.url;
  const strippedUrl = url.split('?')[0];

  if(!url.includes("https://archive.")){
    const archive_ph_url = `https://archive.ph/newest/${strippedUrl}`;
    chrome.tabs.create({ url: archive_ph_url, index: tab.index + 1});
    // previously: chrome.tabs.update(tab.id, { url: xyz });
  }

  const google_bot_view_url = `https://google-bot-view.nunosempere.com/${strippedUrl}`
  chrome.tabs.create({ url: google_bot_view_url, index: tab.index + 2});

  const archive_org = await checkArchiveOrg(strippedUrl)
  if (archive_org.archived){
    chrome.tabs.create({ url: archive_org.url, index: tab.index + 3});
  }

});

