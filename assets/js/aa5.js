function insureFile() {
	var param1 = document.getElementById('insureFile1').value;
    var param2 = document.getElementById('insureFile2').value;
	var res = contracts['Hnbc'].contract.chargeInsuranceMoney(param1,param2);
	if(res){
		alter("�۷ѳɹ�");
	}else{
		alter("�۷�ʧ��");
	}
}

function periodFile() {
	var param1 = document.getElementById('periodFile1').value;
    var param2 = document.getElementById('periodFile2').value;
	var res = contracts['Hnbc'].contract.chargeFinancingMoney(param1,param2);
	if(res){
		alter("�۷ѳɹ�");
	}else{
		alter("�۷�ʧ��");
	}
}
