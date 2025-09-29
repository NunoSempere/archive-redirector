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

  const archive_org = checkArchiveOrg(strippedUrl)
  if (archive_org.archived){
    chrome.tabs.update(tab.id, { url: archive_org.url});
    return
  }

  const archiveUrl = `https://archive.ph/newest/${strippedUrl}`;
  if(!url.includes("https://archive.")){
    chrome.tabs.update(tab.id, { url: archiveUrl });
  }
});
