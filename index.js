/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var jpdbBaseURL ="http://api.login2explore.com:5577";
var jpdbIRL="/api/irl";
var jpdbIML="/api/iml";
var studDbname="SCHOOL-DB";
var studRelationName="STUDENT-TABLE";
var connToken ="90935011|-31949211282380124|90959319";

$("StudId").focus();

function saveRecNo2LS(jsonObj){
    var lvData=JSON.parse(jsonObj.data);
    localStorage.setltem("recno",lvData.rec_no);
}

function getStudIdasJsonObj(){
    var studid=$("#studid").val();
    var jsonstr={
        id:studid
    };
    return Json.stringify(jsonStr);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonOnj);
    var data =JSON.parse(jsonOnj.data).record;
    $("#studname").val(data.name);
    $("#studclass").val(data.class);
    $("#studdate").val(data.date);
    $("#studaddress").val(data.address);
    $("#studedate").val(data.edate);
}

function resetForm(){
    $("#studid").val("");
    $("#studname").val("");
    $("#studclass").val("");
    $("#studdate").val("");
    $("#studaddress").val("");
    $("#studedate").val("");
    $("#studid").prop("disabled",false);
    $("#save").prop("disabled",true);
    $("#change").prop("disabled",true);
    $("#reset").prop("disabled",true);
    $("#studid").focus();
}
function validateData(){
    var studid,studname,studclass,studdate,studaddress,studedate;
    studid=$("#studid").val();
    studname=$("#studname").val();
    studclass=$("#studclass").val();
    studdate=$("#studdate").val();
    studaddress=$("#studaddress").val();
    studedate=$("#studedate").val();
    
    if(studid===""){
        alert("Student Roll Number is Missing");
        $("#studid").focus();
        return;
    }
     if(studname===""){
        $("#studname").focus();
        return;
    }
    if(studclass===""){
        $("#studclass").focus();
        return;
    }
    if(studdate===""){
        $("#studdate").focus();
        return;
    }
    if(studaddress===""){
        $("#studaddress").focus();
        return;
    }
    if(studedate===""){
        $("#studedate").focus();
        return;
    }
    var jsonStrObj={
        id:studid,
        name:studname,
        class:studclass,
        date:studdate,
        address:studaddress,
        edate:studedate
    };
    return JSON.stringify(jsonStrObj);
}

function getStud(){
    var studIdJsonObj=getStudIdAsJsonObj();
    var getResquest=createGET_BY_KEYRequest(connToken,studDBName,studrelationName,studIdJsonObj);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=excuteCommandAtivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajexSetup({async:true});
    if (resJsonObj.status===400){
        $("#save").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#studname").focus();
    }else if(resJsonObj.status===200){
        $("#studid"),prop("disabled", true);
        fillData(res.JsonObj);
        
        $("#change").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#studname").focus();
    }
}

function saveData() {
    var jsonStrobj = validateData();
    if(jsonStrObj===""){
        return "";
    }
    var putRequest = createPUTRequest(connToken,jsonStrObj,studDBName,studRelationName);
    jQuery.ajaxSetuo({async:false});
    var resJsonObj=excuteCommandGivenBaseUrl(putRequest,jpdbURl,jpdbIML);
    jQuery.ajaxSetuo({async:true});
    if(resJsonObj.status===400){
        $("#studid"),prop("disabled", true);
        fillData(res.JsonObj);
    }else if (resJsonObj.status===200){
        $("#studid"),prop("disabled", true);
        fillData(res.JsonObj);
        
        $("#change").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#studname").focus();
    }
    }
    