/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);

/*
const api = "https://sandbox8.trackableresponse.dev/api/ledgers";
$('.loading,.errors').hide();

const form = document.querySelector(".form-data");
const form2 = document.querySelector(".redeem-form");

const search = document.querySelector(".search");
/*
window.onload = function() {
   axios.get(api, {
  }).then(function (response) {
	//if (localStorage.getItem('ledgerObj') === null) {
	  localStorage.setItem('ledgerObj',JSON.stringify(response.data));
	//}
  }).catch(function (error) {
    console.log(error);
  });
}

// declare a method to search for API data
const searchForBusiness = async (e) => {
	$('.loading').slideDown();
	$('.errors,#balance-form').hide();
	var results = [];
	var searchField = "user";
	var searchVal = search.value;
	var ledgerG = localStorage.getItem('ledgerObj');
	var aData = JSON.parse(ledgerG);
	var table = '<table class="table table-bordered mt-2"><thead><tr><th scope="col">User</th><th scope="col">Balance</th><th scope="col">GameRoom</th></tr></thead><tbody>';
	for (var i=0 ; i < aData.length; i++){
		var username = aData[i].user;
		var addCondition = true;
		if(e.submitter.defaultValue == 'Search'){
			addCondition = (aData[i][searchField] == searchVal);
			username = '<a class="redeem-user" href="#" data-userid="'+aData[i].id+'" data-username="'+username+'" data-amount="'+aData[i].amount+'">'+username+'</a>';
		}
		if(e.submitter.defaultValue == 'Show All'){
			$('.search').val('');
		}
		if (addCondition) {
			table += '<tr><td>'+username+'</td><td>'+aData[i].amount+'</td><td>'+aData[i].gameroom+'</td></tr>';
		}
	}
	
	table += '</tbody></table>';
	$('#result-container').html(table);
	$('.loading').slideUp();
	$('td:empty').remove();
	if($('tbody tr').length < 1){
		$('tbody').html('<tr><td colspan="3">No Data</td></tr>');
	}
};

$('body').on('click','a.redeem-user',function(){
	var username = $(this).attr('data-username');
	var amount = $(this).attr('data-amount');
	var userID = $(this).attr('data-userid');
	$('#result-container').empty();
	$('#balance-form').removeClass('d-none').slideDown();
	$('#username').val(username);
	$('#amount').val(amount);
	$('#userID').val(userID);
});

const redeemForm = async (e) => {
	$('#balance-form .update-btn').attr('disabled',true);
	$('#balance-form .updating').removeClass('d-none');
  try {
		var userID = $('#userID').val();
		var redeem = $('#redeem').val();
		let config = {
			timeout:7000,
			//headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			//params: {'r': redeem	}
		}
		const response = await axios.post(api+'/update/'+userID+'/'+redeem,config);
		if(response.data.message == 'updated'){
			var ledgerG = localStorage.getItem('ledgerObj');
			var aData = JSON.parse(ledgerG);
			aData = aData.filter(function(obj) {
				return obj.id !== response.data.id;
			});
			localStorage.setItem('ledgerObj',JSON.stringify(aData));
			$('#balance-form').addClass('d-none');
			$('#result-container').html('<p class="text-success">Update Done</p>');
		}else{
			$('#result-container').append('<p class="text-info">'+response.data.message+'</p>');
			return false;
		}
		$('#balance-form .update-btn').attr('disabled',false);
		$('#balance-form .updating').addClass('d-none');
		
  } catch (error) {
	if(error.response.data.message){
		error = error.response.data.message;
	}	
	$('#balance-form .update-btn').attr('disabled',false);
	$('#balance-form .updating').addClass('d-none');
    $('#result-container').append('<p class="text-info">'+error+'</p>');
  }
};

const handleSubmit = async e => {
  e.preventDefault();
  searchForBusiness(e);
};

form.addEventListener("submit", e => handleSubmit(e));

const handleSubmit2 = async e => {
  e.preventDefault();
  redeemForm(e);
};

form2.addEventListener("submit", e => handleSubmit2(e));
*/
/******/ })()
;
//# sourceMappingURL=main.js.map