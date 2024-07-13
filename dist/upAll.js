check_url();
function check_url(){
	let url = window.location.href;
	if(url.search('https://ht.juwa777.com/userManagement') < 0){
		return false;
	}
}
fetch('https://sweepstxn.icu/api/ledgers',{
	method: 'GET'
	}).then(response => response.json())
	.then(async function(jsonResponse){
		if(jsonResponse.length < 1){
			console.log('No new Data');
			return;
		}
	  for (let i=0 ; i < jsonResponse.length; i++){
		let ledgerID = jsonResponse[i].id;
		let todo = '';
		if (jsonResponse[i].type == 1) {
		   todo = "Recharge"; 
		}
		if (jsonResponse[i].type == 2) {
		  todo = "Redeem"; 
		}
		const data = {juser: jsonResponse[i].user, todo:todo};
		
		if(i == 0){
			openPopup(data).then(async () => {
				let inputV = $('body').find('.el-dialog label:contains("'+todo+' Amount")').parents('.el-form-item').find('input');
				inputV.val('1');
				inputV[0].dispatchEvent(new CustomEvent('input'));
				$('body').find('.el-dialog__wrapper:visible .el-dialog .el-dialog__footer button span:contains("Confirm")').click();
				fetch('https://sweepstxn.icu/api/ledgers/update/'+ledgerID,{
				method: 'POST'
				}).then(response => response.json());
			});
		}else{
			setTimeout(function timer() {
				openPopup(data).then(async () => {
					let inputV = $('body').find('.el-dialog label:contains("'+todo+' Amount")').parents('.el-form-item').find('input');
					inputV.val('1');
					inputV[0].dispatchEvent(new CustomEvent('input'));
					$('body').find('.el-dialog__wrapper:visible .el-dialog .el-dialog__footer button span:contains("Confirm")').click();
					fetch('https://sweepstxn.icu/api/ledgers/update/'+ledgerID,{
					method: 'POST'
					}).then(response => response.json());
				});
			}, i * 5000);
		}
	  }
});


$('body').on('click', '.el-dialog__wrapper:visible .el-dialog .el-dialog__footer button span:contains("Confirm")', function(e){
	var interval;
	interval = setInterval(function(){
	  var zindex = $('.el-dialog__wrapper:visible').css('z-index');
		if(zindex >= 2004){
			if(e.originalEvent){
				var fm = e.originalEvent.pointerType;
				if( fm.length > 0){
					return;
				}
			}
			$('.el-dialog__wrapper:visible .el-dialog[aria-label="dialog"] button.el-dialog__headerbtn').click();
			$('body').find('form.el-form div.el-form-item div.el-form-item__content button:contains("Reset")').click();
			clearInterval(interval);
		}
	}, 1000);
});
				
async function openPopup(request) {
	if(!$('body').find('.el-dialog__wrapper').is(':visible')){
		let inputF = $('body').find('*[placeholder="Please enter your search content"]');
		inputF.trigger('input').val(request.juser);
		$('body').find('button:contains("search")').trigger('click');
		let dropLink = $('body').find('td:contains("'+request.juser+'")').parents('tr').find('.el-dropdown-link');
		dropLink.click();
		let ulID = dropLink.attr('aria-controls');
		$('body').find('ul#'+ulID+' li:contains("'+request.todo+'")').click();	
	}
	return true;
}