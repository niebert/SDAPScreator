//#################################################################
//# Javascript Library: QNode Loader
//#
//#       Imported in all QNode html-Files from /qnodes
//#   Filename: qnodeloader.js
//#                
//# Author of Class:      Engelbert Niehaus                    
//# email:                niehaus@uni-landau.de                 
//# created               4.2.2013             
//# last modifications    4.9.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

function importQNodeAlert()
//###### removes Comments beginning with "#" in the column of line
{
    importQNode();
	alert('Import QNode "'+vQNodeType+'" done!');
}	

function importQNode()
//###### removes Comments beginning with "#" in the column of line
{
    var vIDarray = new Array("HTMLTemplate","HTMLOption","XMLTemplate","XMLOption");
    var vQNode = Array();
	var vQ_Title    = top.vSDAPScreator.aFileLoader.get_Q_TITLE();      
	var vQ_Variables = top.vSDAPScreator.aFileLoader.get_VARIABLES();
	var vQ_Options  = top.vSDAPScreator.aFileLoader.get_OPTIONS();
	if (vQ_Title != "") {
		vQNode["Q_TITLE"] = vQ_Title;
	}
	vQNode["QNodeType"]     = document.fInputForm.QNodeType.value;
	vQNode["Variables"]     = document.fInputForm.tVariables.value;
	if (vQ_Variables != "") {
		//alert("qnodeloader.js:36 - vQ_Variables=\n"+vQ_Variables);
		//vQNode["Variables"] = vQ_Variables;
	};	
	vQNode["Options"]       = document.fInputForm.tOptions.value;
	if (vQ_Variables != "") {
		//alert("qnodeloader.js:42 - vQ_Options=\n"+vQ_Options);
		//vQNode["Options"] = vQ_Variables;
	};	
	vQNode["HTMLTemplate"]  = document.fInputForm.tHTMLTemplate.value;
	vQNode["HTMLOption"]    = document.fInputForm.tHTMLOption.value;
	vQNode["LatexTemplate"] = document.fInputForm.tLatexTemplate.value;
	vQNode["LatexOption"]   = document.fInputForm.tLatexOption.value;
	vQNode["XMLTemplate"]   = document.fInputForm.tXMLTemplate.value;
	vQNode["XMLOption"]     = document.fInputForm.tXMLOption.value;
	//alert("load qnode....html:23 - importQNode()\nvQNodeType="+vQNode["QNodeType"]);
	top.vSDAPScreator.importQNode(vQNode);
	top.vSDAPScreator.aFileLoader.set_loaded(extractName(document.location.href));
	//alert('qnodeloader.js:39 - Import QNode "'+vQNode["QNodeType"]+'" done!');
}	


function replaceString(pString,pSearch,pReplace)
//###### replaces in the string "pString" multiple substrings "pSearch" by "pReplace"
{
	//alert("cstring.js - replaceString() "+pString);
	if (pString != '') {
		var vHelpString = '';
        var vN = pString.indexOf(pSearch);
		var vReturnString = '';
		while (vN >= 0)
		{
			if (vN > 0)
				vReturnString += pString.substring(0, vN);
			vReturnString += pReplace;
            if (vN + pSearch.length < pString.length) {
				pString = pString.substring(vN+pSearch.length, pString.length);
			} else {
				pString = ''
			}
			vN = pString.indexOf(pSearch);
		};
	};
	return vReturnString + pString;
}

function getDate() {
	var vNow = new Date();
	var vMonth = vNow.getMonth()+1;
	return vNow.getDate()+"."+vMonth+"."+vNow.getFullYear();
}


function replaceTextarea(pString)
//###### removes Comments beginning with "#" in the column of line
{
	pString = replaceString(pString,"___TEXTAREA___","TEXTAREA");
	return replaceString(pString,"___FORM___","FORM");
}


function checkTextareas()
//###### removes Comments beginning with "#" in the column of line
{
    var vIDarray = new Array("HTMLTemplate","HTMLOption","XMLTemplate","XMLOption");
    var vCall = "";
    var vString = "";
    for (var i=0; i<vIDarray.length; i++) {
    	 vCall = "vString = document.fInputForm.t"+vIDarray[i]+".value;";
    	 eval(vCall);
    	 //alert("qnodeloader.js:83 - BEFORE="+vString);
    	 vCall = "vString = replaceTextarea(vString);";
    	 eval(vCall);    	 
    	 //alert("qnodeloader.js:85 - AFTER="+vString);
    	 //alert("qnodefile:86 - eval("+vCall+")");
    	 vCall = "document.fInputForm.t"+vIDarray[i]+".value = vString;";
    	 eval(vCall);    	 
    }
}	

function postprocessQNode()
//###### removes Comments beginning with "#" in the column of line
{
	//----------------------------------------------------	
	document.fInputForm.QNodeType.value = extractName(document.location.href).toUpperCase();
	var vQNodeType  = document.fInputForm.QNodeType.value;
	var vFilename = "../frames/empty.html";
	checkTextareas();
	if (top.vSDAPScreator) {
	   if (top.vSDAPScreator.aFileLoader.preload_index <= top.vSDAPScreator.aFileLoader.rows) {
		  //alert("qnodeloader.js:110 - Load File: '"+extractName(document.location.href)+".html'");
		  importQNode();
		  vFilename = top.vSDAPScreator.aFileLoader.get_next_filename();
		  //alert("qnodeloader.js:113 - Load NEXT File: '"+vFilename+"'");
		  //top.setTimeout("top.vSDAPScreator.aFileLoader.preload()",3000);
		  top.setTimeout("top.main.document.location='"+vFilename+"'",200);
	   } else {
		  //alert(extractName(document.location.href)+".html:163 - No preload");
		  importQNode();
		  vFilename = "frames/editstructure.html";
		  //alert("qnodeloader.js:113 - Load NEXT File: '"+vFilename+"'");
		  //top.setTimeout("top.vSDAPScreator.aFileLoader.preload()",3000);
		  top.setTimeout("top.main.document.location='"+vFilename+"'",200);	   }
	}
	//----------------------------------------------------	
}

function getQNode_Filename() 
//##### extract Foldername of QNode-File
{
	var vFolder = extractName(extractPath(document.location.href));
	if (top.vSDAPScreator) {
		vFolder = top.vSDAPScreator.aFileLoader.folder;
	}
	var vName = extractName(document.location.href);
	var vReturn = "<font  face='Arial,Helvetica'><b>File:</b> <tt>";
	vReturn += vFolder +  vName + ".html";
	vReturn +=  "</tt><br/>";
	
	return vReturn;
  
}

function removeParameters(pURL)
//######### if the URL "pURL" contains a parameter, then the parameter after the "?"
//######### will be removed, e.g. "mypath/navigator.html?objectset=documentation/object_set.html"
//######### was converted into "mypath/navigator.html"
//######### IE 4.0 problem local variables are internally handle as global variables
//######### Problems appear, when calling two different functions recursive
{
        var vN = pURL.lastIndexOf("?");
        var lvURL = pURL;
        if (vN >= 0)
                lvURL = pURL.substring(0, vN);
	return lvURL;
}

function extractParameters(pURL)
//######### if the URL "pURL" contains a parameter, then the parameters after the "?"
//######### will be extracte, e.g. "mypath/navigator.html?objectset=documentation/object_set.html"
//######### will return into "?objectset=documentation/object_set.html"
//######### IE 4.0 problem local variables are internally handle as global variables
//######### Problems appear, when calling two different functions recursive
{
        var vN = pURL.lastIndexOf("?");
        var lvParameter = "";
        if (vN >= 0) {
                lvParameter = pURL.substring(vN,pURL.length);
        		//alert("lvParameter="+lvParameter);
        };
		return lvParameter;
}

function extractPath(pURL)
//###### "documentation/technischedoc/startnavigator.html?parameters..."
//###### "documentation/technischedoc/startnavigator.html"  remove parameters
//###### "documentation/technischedoc"                      extract path
{
	//###### pURL conatins a last symbol which is NOT the Slash "/"
        var vN=0;
        top.vDomainPrefix = '';
		var lvURL = removeParameters(pURL);
        vN = lvURL.lastIndexOf("/");
        if (vN >= 0)
                lvURL = lvURL.substring(0, vN);
        if (navigator.appName.indexOf("pera")>0) {
        	vN = lvURL.lastIndexOf("ile://localhost");
        	if (vN >= 0) {
                lvURL = lvURL.substring(16, lvURL.length);
                top.vDomainPrefix = "file://localhost";
        	};
        	vN = lvURL.lastIndexOf("ile://");
        	if (vN >= 0) {
            	    lvURL = lvURL.substring(7, lvURL.length);
                	top.vDomainPrefix = "file://";
        	}
        };
    //alert("cstring.js:116 - extractPath() = "+lvURL);
	return lvURL;
}

function extractName(pURL)
//###### "documentation/technischedoc/startnavigator.html?parameters..."
//###### "documentation/technischedoc/startnavigator.html"  remove parameters
//###### "documentation/technischedoc"                      extract path
{
	//###### pURL conatins a last symbol which is NOT the Slash "/"
        var vN=0;
        top.vDomainPrefix = '';
		var lvURL = removeParameters(pURL);
        vN = lvURL.lastIndexOf("/");
        if (vN >= 0) {
                pURL = lvURL.substring(vN+1,lvURL.length);
        };
        var vNameArray = pURL.split(".");
    //alert("string.js:224 - extractPath() = "+lvURL);
	return vNameArray[0];
}
