function memApply() {
	var param = document.getElementById('memApply').value;
	var res = contracts['Hnbc'].contract.createCommonUser(param);
	if(res){
		alter("�ɹ�");
	}else{
		alter("����ʧ�ܣ�������");
	}
}

function inPay() {
	var param = document.getElementById('inPay').value;
	var res = contracts['Hnbc'].contract.payTicket(param);
	if(res){
		alter("�ɷѳɹ�");
	}else{
		alter("�ɷ�ʧ��");
	}
}

function monthPay() {
	var param = document.getElementById('monthPay').value;
	var res = contracts['Hnbc'].contract.payFee(param);
   	if(res){
		alter("�ɷѳɹ�");
	}else{
		alter("�ɷ�ʧ��");
	}
}

function insureApply() {
	var param = document.getElementById('insureApply').value;
	var res = contracts['Hnbc'].contract.applyInsurance(param);
    alter(res);
}

function periodApply(){
	var param = document.getElementById('periodApply').value;
	var res = contracts['Hnbc'].contract.applyFinancing(param);
    alter(res);
}

function memInsure(){
	var param1 = document.getElementById('memInsure1').value;
	var param2 = document.getElementById('memInsure2').value;
	var res = contracts['Hnbc'].contract.financingAssure(param1��param2);
    if(res){
		alter("�����ɹ�");
	}else{
		alter("����ʧ��");
	}
}

function memRepay(){
	var param1 = document.getElementById('memRepay1').value;
	var param2 = document.getElementById('memRepay2').value;
	var res = contracts['Hnbc'].contract.returnFinancingMoney(param1��param2);
    if(res){
		alter("����ɹ�");
	}else{
		alter("����ʧ��");
	}
}

function myMoney(){
	var param = document.getElementById('myMoney').value;
	var res = contracts['Hnbc'].contract.showUserAllMoney(param);
    alter(res);
}

function myMoney1(){
	var param = document.getElementById('myMoney1').value;
	var res = contracts['Hnbc'].contract.showUserInsuranceMoney(param);
    alter(res);
}

function myMoney2(){
	var param = document.getElementById('myMoney3').value;
	var res = contracts['Hnbc'].contract.showUserFinancingMoney(param);
    alter(res);
}

function myMoney3(){
	var param = document.getElementById('myMoney3').value;
	var res = contracts['Hnbc'].contract.showUserLeftMoney(param);
    alter(res);
}