var injections = 0;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	injections++;
	var todo = request.todo;
	if(todo  == 'deposit'){
		todo = 'Recharge';
	}else{
		todo = 'Redeem';
	}

	if(injections == 1){
		if(request.juser == 'reset'){
			if($('body').find('.el-dialog label:contains("'+todo+' Amount")').parents('.el-form-item').find('input').length > 0){
				$('body').find('.el-dialog label:contains("'+todo+' Amount")').parents('.el-form-item').find('input').val('');
			}
			$('body').find('.el-dialog__wrapper:visible .el-dialog button.el-dialog__headerbtn').click();
			$('body').find('form.el-form div.el-form-item div.el-form-item__content button:contains("Reset")').click();		
			return true;
		}
		
		openPopup(request).then(() => {
			var crd = request.credit;
			if(crd.trim().length == 0){
				crd = 1;
			}
			var modInterval;
			modInterval = setInterval(function(){
				var inputV = $('body').find('.el-dialog label:contains("'+todo+' Amount")').parents('.el-form-item').find('input');
				if(typeof(inputV) !== 'undefined'){
					if(inputV.length > 0){
						inputV.val(crd);
						inputV[0].dispatchEvent(new CustomEvent('input'));
						$('body').find('.el-dialog__wrapper:visible .el-dialog .el-dialog__footer button span:contains("Confirm")').click();
						clearInterval(modInterval);
					}
				}			
			}, 2000);
		});
	}
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
		var todo = request.todo;
		if(todo  == 'deposit'){
			todo = 'Recharge';
		}else{
			todo = 'Redeem';
		}
		
		var uIDinterval;
		
		uIDinterval = setInterval(function(){
			var dropLink2 = $('body').find('td:contains("'+request.juser+'")').parents('tr').find('.el-dropdown-link');
			var ulID = dropLink2.attr('aria-controls');
			if(typeof(ulID) !== 'undefined'){
				$('body').find('ul#'+ulID+' li:contains("'+todo+'")').click();
				clearInterval(uIDinterval);
			}			
		}, 1000);
	}
	return true;
}

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
	return true;
});

var checkTime = setInterval(function(){
  checkTimeout();
}, 120000);

	
async function checkTimeout() {
	var loginDialogBox = $('body').find('.el-message__content:visible');
	var timeoutDialogBox = $('body').find('.el-message-box__wrapper:visible');
	console.log('checkTimeout start '+checkTime);
	if(loginDialogBox.length > 0 || timeoutDialogBox.length > 0){
	  const url = 'https://sweepstxn.icu/api/accessories/send';
	  try {
		const response = await fetch(url,{
		  method: 'POST',
		  headers: {
			"Content-Type": "text/plain",
		  }
		});
		if (!response.ok) {
		  throw new Error(response);
		}
		console.log('checkTimeout done');
		clearTimeout(checkTime);
		const json = await response.json();
		console.log(json);
	  } catch (error) {
		console.log(error);
	  }
	}
	return true;
}