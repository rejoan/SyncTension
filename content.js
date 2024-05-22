chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	openPopup(request).then((res) => {
		var inputV = $('body').find('.el-dialog label:contains("Recharge Amount")').parents('.el-form-item').find('input');
		inputV.val('1');
		inputV[0].dispatchEvent(new CustomEvent('input'));
		$('body').find('.el-dialog__wrapper:visible .el-dialog .el-dialog__footer button span:contains("Confirm")').click();
    });
	return true; 
	
});
async function openPopup(request) {
	if(!$('body').find('.el-dialog__wrapper').is(':visible')){
		var inputF = $('body').find('*[placeholder="Please enter your search content"]');
		inputF.val(request.juser);
		inputF[0].dispatchEvent(new CustomEvent('input'));
		$('body').find('button:contains("search")').click();
		var dropLink = $('body').find('td:contains("'+request.juser+'")').parents('tr').find('.el-dropdown-link');
		dropLink.click();
		var ulID = dropLink.attr('aria-controls');
		$('body').find('ul#'+ulID+' li:contains("Recharge")').click();	
	}
	return true; 
}