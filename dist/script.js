const injectUser = document.getElementById('juwa_user');

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

injectUser.addEventListener('change', async () => {
  const tab = await getCurrentTab();
  const data = {juser: injectUser.value};
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['jquery-3.7.1.min.js','content.js'],
  },
  function() {
		chrome.tabs.sendMessage(tab.id, data);
	}
  );
});