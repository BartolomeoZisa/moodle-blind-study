const hideCSS = `
  .outcome, .feedback, .generalfeedback, .rightanswer, 
  .icon.fa-circle-check, .icon.fa-circle-xmark, .fa-check, .fa-remove,
  .info .state, .specificfeedback {
      display: none !important;
  }
  .que .correct, .que .incorrect {
      background-color: transparent !important;
  }
`;

// Helper to check if we can actually script on this page
const isRestrictedPage = (url) => !url || url.startsWith('chrome://') || url.startsWith('edge://');

// 1. Toggle when icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
  if (isRestrictedPage(tab.url)) return;

  const data = await chrome.storage.local.get("isHidden");
  const newState = !data.isHidden;

  await chrome.storage.local.set({ isHidden: newState });
  applyStateToTab(tab.id, newState);
});

// 2. Re-apply when page reloads
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && !isRestrictedPage(tab.url)) {
    chrome.storage.local.get("isHidden", (data) => {
      if (data.isHidden) {
        applyStateToTab(tabId, true);
      }
    });
  }
});

async function applyStateToTab(tabId, isHidden) {
  if (isHidden) {
    try {
      await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        css: hideCSS
      });
      chrome.action.setBadgeText({ text: "ON", tabId: tabId });
      chrome.action.setBadgeBackgroundColor({ color: "#4CAF50", tabId: tabId });
    } catch (err) {
      console.error("Failed to inject CSS:", err);
    }
  } else {
    chrome.action.setBadgeText({ text: "", tabId: tabId });
    chrome.tabs.reload(tabId);
  }
}