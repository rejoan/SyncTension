import axios from "axios";
const api = "https://sweepstxn.icu/api/ledgers";
const updateAPI = "https://sweepstxn.icu/api/ledgers/update";
$('.loading,.errors').hide();

window.onload = async function() { 
	$('.loading').slideDown();
	const tab = await getCurrentTab();
	const url = tab.url;
	if(url.search('https://ht.juwa777.com/userManagement') < 0){
		$('#result-container').html('<p class="text-info">Please open juwa777 user manager first</p>');
		$('.loading').slideUp();
		return;
	}
	
	const data = {juser: 'reset'};
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['jquery-3.7.1.min.js','content.js'],
	},function() {
			chrome.tabs.sendMessage(tab.id, data);
	});
	
	axios.get(api, {
	  }).then(function (response) {
		localStorage.setItem('ledgerObj',JSON.stringify(response.data));
		var ledgerG = localStorage.getItem('ledgerObj');
		var aData = JSON.parse(ledgerG);
		var table = '<table id="sweepstable" class="table table-bordered mt-2"><thead><tr><th scope="col">Type</th><th scope="col">User</th><th scope="col">Amount</th><th scope="col">Sweeps</th><th scope="col">Time</th><th scope="col">Action</th></tr></thead><tbody>';
		for (var i=0 ; i < aData.length; i++){
			var username = aData[i].user;
			const date = new Date(aData[i].timestamp);
			var thedate = date.toLocaleDateString();
			var thefulldate = date.toLocaleString();
			var thetype = aData[i].type;
			var buttontext = "";
			var typeclass = "";
			if (aData[i].type==1) { thetype = "Deposit"; typeclass = "deposit"; buttontext = "Recharge"; }
			if (aData[i].type==2) { thetype = "Redeem"; typeclass = "redeem";  buttontext = "Redeem"; }
			var thesweeps = aData[i].sweepstakes;
			if (aData[i].sweepstakes==5) { thesweeps = "Juwa"; }
			
			table += '<tr id="user_'+aData[i].id+'" class="'+typeclass+'"><td>'+thetype+'</td><td>'+username+'</td><td>'+aData[i].amount+'</td><td>'+thesweeps+'</td><td title="'+thefulldate+'">'+thedate+'</td><td><a class="btn btn-sm btn-info text-white rusername" href="#" data-username="'+username+'" data-userid="'+aData[i].id+'">'+buttontext+'</a></td></tr>';
		}
		
		table += '</tbody></table>';
		$('#result-container').html(table);
		$('.loading').slideUp();
		return true;
	  }).catch(function (error) {
		console.log(error);
		$('.loading').slideUp();
	});
  
	return true;
}


async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}


$('body').on('click','.rusername', async function(){
	$('.loading').slideDown();
	$(this).addClass('disabled');
	const todo = $(this).closest('tr').attr('class');
	const userid = $(this).attr('data-userid');
	const tab = await getCurrentTab();
	const data = {juser: $(this).attr('data-username'), todo:todo, userid:userid};
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['jquery-3.7.1.min.js','content.js'],
	  },function() {
			chrome.tabs.sendMessage(tab.id, data);
			axios.post(updateAPI+'/'+userid, {
				id:userid
			  }).then(function (resp) {
				if(resp.data.message == 'updated'){
					$('#user_'+userid).remove();
					$('.loading').slideUp();
					//window.close();
				}
				return true;
			  }).catch(function (error) {
				console.log(error);
				$('.loading').slideUp();
			});
			
		});
		return true;
});
