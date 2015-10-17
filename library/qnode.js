//#################################################################
//# Javascript Class: QNode()
//#       SuperClass: Matrix
//#   Class Filename: qnode.js
//#                
//# Author of Class:      Engelbert Niehaus                    
//# email:                niehaus@uni-landau.de                 
//# created               25.8.2014             
//# last modifications    25.8.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class QNode() 
// Call the constructor for creating an instance of class QNode
// by the following command in HTML-file that imports this class
// var vMyInstance = new QNode();
//---------------------------------------------------------------------
//Format ID HTML  = 1;
//Format ID LaTeX = 2;
//Format ID XML   = 3;
//---------------------------------------------
//--this.aTemplates Matrix Structure------------
    //---Row 1=HTML Display/Export
    //---Row 2=Latex Export
    //---Row 3=XML Export
    //---rows=MaxFormat
    //---Col 1=HeaderTemplate 
    //---Col 2=HeaderReplaced
    //---Col 3=TailTemplate
    //---Col 4=TailReplaced
    //---Col 5=OptionTemplate
    //---Col 6=OptionReplaced
//---------------------------------------------

function QNode () {
	//--------------------------------------
	//---Super Class------------------------
	this.SuperClass = Matrix;
	this.SuperClass();
	//--------------------------------------
	
	//---Attributes-------------------------
	this.ID			 = 0;  // >0 for Childnodes
	this.active			 = 1;
	this.loaded       	 = 0;
	this.aParent       	 = null;
	this.aType         	 = "UNDEFINED";
	this.aVariables   	 = new Array(); //associative Array
	this.aOptions      = "Yes|Y\nNo|N\nNot Sure|0";
	this.aOptionVariables = new Array("OPTION_TEXT","OPTION_VALUE","OPTION_NO");
	this.aExcludeVariables = new Array("Q_TYPE","SECTION_NO","SUBSECTION_NO","QUESTION_NO","QNODE_TITLE","QNODE_VARIABLES");
	this.aTemplateID   = new Array("HTMLOption","HTMLTemplate","LatexOption","LatexTemplate","XMLOption","XMLTemplate","HTML4NoChildOption","HTML4NoChildTemplate");
	//this.aTemplates    = new Matrix(); //"Templates with Variables like ###VARIABLE1###";
	this.aTemplates    = new QTemplates(); //"Templates with Variables like ###VARIABLE1###";
	this.aChildNodes   = new QNodeList();
	this.aFormat       = 1; //HTML=1 Latex=2 XML=3
	this.aMaxFormat    = 4;
	this.aVariableMark = "###";
	this.textareaHeight = "3";
	this.textareaWidth  = "55";

	//---Methods----------------------------
	this.init			  = init_QNode;
	this.init_form		  = init_form_QNode;
	this.init_parent	  = init_parent_QNode;
	this.getHTML	 	  = getHTML_QNode;
	this.getEdit_Structure_HTML = getEdit_Structure_HTML_QNode;
	this.getEdit_Title_HTML	    = getEdit_Title_HTML_QNode;
	this.getEditHTML	        = getEditHTML_QNode;
	this.getEdit_Template_HTML   = getEdit_Template_HTML_QNode;
	this.getChildText	  = getChildText_QNode;
	this.getSelectBox	  = getSelectBox_QNode;
	this.getEditButtons	  = getEditButtons_QNode;
	this.getSaveQNodeHash = getSaveQNodeHash_QNode;
	this.expandQNodeHash  = expandQNodeHash_QNode;
	this.showVariables	  = showVariables_QNode;
	this.editVariables	  = editVariables_QNode;
    this.updateVariable	  = updateVariable_QNode;
    this.updateOptions	  = updateOptions_QNode;
    this.set_formvalue	  = set_formvalue_QNode;
	this.get_formvalue	  = get_formvalue_QNode;
	this.replaceVariables = replaceVariables_QNode;
	this.replaceSearchIDs = replaceSearchIDs_QNode;
	this.replaceOptions   = replaceOptions_QNode;
	this.editOptions      = editOptions_QNode;
	this.createOptionArray		= createOptionArray_QNode;
	this.createOptionString		= createOptionString_QNode;
	this.createVariableString	= createVariableString_QNode;
	this.createVariableXML		= createVariableXML_QNode;
	this.createNoChildTemplate  = createNoChildTemplate_QNode;
	this.addVariable	  = addVariable_QNode;
	this.replaceString	  = replaceString_QNode;
	this.importQNode	  = importQNode_QNode;
	this.loadQNode	 	  = loadQNode_QNode;
	this.overwriteVariables	 = overwriteVariables_QNode;
	this.exportVariables  = exportVariables_QNode;
	this.exportText		  = exportText_QNode;
	this.exportHTML		  = exportHTML_QNode;
	this.exportXML		  = exportXML_QNode;
	this.exportLatex	  = exportLatex_QNode;
	this.addChildNode	  = addChildNode_QNode;
	this.removeChildNode  = removeChildNode_QNode;
	this.update			  = update_QNode;
	//--------------------------------------
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of QNode, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'QNode'
// the function name is extended with '_QNode'.
// This is done to avoid name space conflicts, if you overwrite a 
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       QNode.my_method()
// The method definitions are as follows
//   function my_method_QNode(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "QNode()" defined as JS functions 
//---------------------------------------------------------------------

						
//#################################################################
//# Method: init  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################
function init_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:init()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.init();
	//-------------------------------------------------------
    this.loaded = 0;
    this.aVariables = new Array();
    this.aOptions = "";
    //-------------------------------------------------------
    var vRows = this.aTemplateID.length;
    this.aTemplates.create(vRows,2);
    this.aTemplates.init_ID(this.aTemplateID);
    this.aTemplates.init_content();
    this.aChildNodes.removeall();
    this.aChildNodes.init_form(this.formPath+"C",this.objectPath+".aChildNodes");
    this.aChildNodes.init_name("aChildNodes");
}
//----End of Method init Definition
						
//#################################################################
//# Method: init_form  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function init_form_QNode(pFormPath,pObjectPath) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:158 - init_form("+pFormPath+","+pObjectPath+")-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.init_form(pFormPath,pObjectPath);
	//-------------------------------------------------------
	this.formPath       = pFormPath;
	this.objectPath     = pObjectPath;
	this.aTemplates.init_form(pFormPath,pObjectPath+".aTemplates");
	this.aChildNodes.init_form(pFormPath,pObjectPath+".aChildNodes");
    //this.aChildNodes.init_form(this.formPath+"C",this.objectPath+".aChildNodes");
	//alert("init_form_QNode():166 - this.aTemplates.objectPath="+this.aTemplates.objectPath);
	//this.aVariables.init_form(pFormPath,pObjectPath+".aVariables");

}
//----End of Method init_form Definition

//#################################################################
//# Method: init_parent  
//#    used in Class: QNode
//#                
//# Comment:  pParent is null as Root Node or a QNodeList                      
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function init_parent_QNode(pParent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:220 - init_parent()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.init_parent(pParent);
	//-------------------------------------------------------
	this.aParent = pParent;
    this.aChildNodes.init_parent(this);

}
//----End of Method init_parent Definition
				
//#################################################################
//# Method: importQNode  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.9.2014             
//# last modifications    28.9.2014             
//#################################################################

function importQNode_QNode(pQNode) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:197 - importQNode(pQNode)-Call MAIN-Import\n"+pQNode["Variables"]);
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.importQNode(pQNode);
	//-------------------------------------------------------
	
	if (this.loaded == 0) {
		//alert("qnode.js:199 - not loaded - importQNode(pQNode)-Call")
		this.loadQNode(pQNode);
		this.loaded = 1;
		//alert("qnode.js:205 - importQNode(pQNode)-Call- VARIABLES=\n"+pQNode["Variables"]);
	} else {
		this.aChildNodes.appendQNode(pQNode);
	}
}
//----End of Method importQNode Definition

//#################################################################
//# Method: getSelectBox  
//#    used in Class: QNode
//#                
//# Comment:  pCount is null as Root Node or a QNodeList                      
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function getSelectBox_QNode(pName,pCount,pDefault,pCall) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:220 - getSelectBox()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getSelectBox(pCount);
	//-------------------------------------------------------
    //var vReturn = "<select name='"+pName+"' size='1' onchange='"+pCall+"'>\n";
    var vReturn = "<select name='"+pName+"' size='1' onchange=\""+pCall+"this.value)\">\n";
    //vReturn += "<option>-?-</option>\n";
    var vSelected = "";
	for (var i=1; i<=pCount; i++) {
	    if (pDefault == i) {
	        vSelected = " selected";
	    } else {
	        vSelected = "";
	    }
        vReturn += "<option"+vSelected+">"+i+"</option>\n";
    } 
    vReturn += "</select>\n";
    return vReturn;

}
//----End of Method getSelectBox Definition

				
//#################################################################
//# Method: getSaveQNodeHash(pSaveHash)  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.9.2014             
//# last modifications    28.9.2014             
//#################################################################

function getSaveQNodeHash_QNode(pSaveHash) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:197 - getSaveQNodeHash(pSaveHash)-Call MAIN-Import\n"+pQNode["Variables"]);
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getSaveQNodeHash(pSaveHash);
	//-------------------------------------------------------	
	var iMax = this.aTemplateID.length - 2;
	var vID = "";
	if (this.loaded > 0) {
		for (var i=0; i<iMax; i++) {
			vID = this.aTemplateID[i];
			pSaveHash[vID.toUpperCase()] = this.aTemplates[i+1][1].replace(/TEXTAREA/g,"___TEXTAREA___");
		};
		this.expandQNodeHash(pSaveHash);
		//alert("qnode.js:302 - getSaveQNodeHash(pSaveHash)(pQNode)-Call");
	} else {
		alert("ERROR: QNode not loaded!\n"+this.objectPath+"\nqnode.js:304 - getSaveQNodeHash(pSaveHash)(pQNode)-Call");
	}
}
//----End of Method getSaveQNodeHash(pSaveHash) Definition

//#################################################################
//# Method: expandQNodeHash(pSourceHash)  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.9.2014             
//# last modifications    28.9.2014             
//#################################################################

function expandQNodeHash_QNode(pSourceHash) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:197 - expandQNodeHash(pSourceHash)-Call MAIN-Import\n"+pQNode["Variables"]);
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.expandQNodeHash(pSourceHash);
	//-------------------------------------------------------	
	if (this.loaded > 0) {
		pSourceHash["QNODE_TITLE"]     = this.aVariables["Q_TITLE"];
		pSourceHash["QNODE_TYPE"]      = this.aType;
		pSourceHash["QNODE_VARIABLES"] = this.createVariableString();
		pSourceHash["XML_VARIABLES"]   = this.createVariableXML();
		pSourceHash["QNODE_OPTIONS"]   = this.aOptions;
		pSourceHash["FILENAME"]        = this.aType.toLowerCase()+".html";
		//alert("qnode.js:302 - expandQNodeHash(pSourceHash)(pQNode)-Call");
	} else {
		alert("ERROR: QNode not loaded!\n"+this.objectPath+"\nqnode.js:343 - expandQNodeHash(pSourceHash)(pQNode)-Call");
	}
}
//----End of Method expandQNodeHash(pSourceHash) Definition

						
//#################################################################
//# Method: loadQNode  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.10.2014             
//# last modifications    8.10.2014             
//#################################################################

function loadQNode_QNode(pQNode) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:loadQNode(pQNode)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.loadQNode(pQNode);
	//-------------------------------------------------------
    //pQNode = Array();
	//pQNode["Q_TITLE"] = top.vSDAPScreator.aFileLoader.get_Q_TITLE();      
	//pQNode["QNodeType"]     = document.fInputForm.QNodeType.value;
	//pQNode["Variables"]     = document.fInputForm.tVariables.value;
	//pQNode["Options"]       = document.fInputForm.tOptions.value;
	//pQNode["HTMLTemplate"]  = document.fInputForm.tHTMLTemplate.value;
	//pQNode["HTMLOption"]    = document.fInputForm.tHTMLOption.value;
	//pQNode["LatexTemplate"] = document.fInputForm.tLatexTemplate.value;
	//pQNode["LatexOption"]   = document.fInputForm.tLatexOption.value;
	//pQNode["XMLTemplate"]   = document.fInputForm.tXMLTemplate.value;
	//pQNode["XMLOption"]     = document.fInputForm.tXMLOption.value;
	var vString = "";
	var vSearch = "";
	this.aVariables = new Array();
    this.overwriteVariables(pQNode["Variables"]);
    this.aVariables["Q_TYPE"]  = pQNode["QNodeType"];
    if (pQNode["Q_TITLE"]) {
    	this.aVariables["Q_TITLE"] = pQNode["Q_TITLE"]; //defined by Fileloader
    };
    this.aType = pQNode["QNodeType"].toUpperCase();
    this.aOptions = pQNode["Options"];
    var iMax = this.aTemplateID.length - 2;
    //alert("qnode.js:loadQNode(pQNode)-Call\n" + this.aTemplateID[1] +"='"+pQNode[this.aTemplateID[1]]+"'");
	for (var i=0; i<iMax; i++) {
		this.aTemplates[i+1][1] = pQNode[this.aTemplateID[i]];
	};
	for (var i=iMax; i<this.aTemplateID.length; i++) {
	    vString = pQNode[this.aTemplateID[i-iMax]];
	    vSearch       = this.aVariableMark + "Q_CHILDNODES" + this.aVariableMark;
		this.aTemplates[i+1][1] = this.replaceString(vString,vSearch,"");;
	};
	this.replaceVariables();
}
//----End of Method loadQNode Definition


						
//#################################################################
//# Method: overwriteVariables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               7.10.2014             
//# last modifications    7.10.2014             
//#################################################################

function overwriteVariables_QNode(pVariableString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:overwriteVariables(pVariableString)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.overwriteVariables(pVariableString);
	//-------------------------------------------------------
    var vVarLineArray = pVariableString.split("\n");
	for (var i=0; i<vVarLineArray.length; i++) {
	   var vTestString = vVarLineArray[i].replace(/\s/g,"");
	   if (vTestString == "") {
	       vVarLineArray[i] = "";
	   };
       if (vVarLineArray[i].length>2) {
           var vVarPair = vVarLineArray[i].split("|");
           if (vVarPair.length>=2) {
                this.aVariables[vVarPair[0]] = vVarPair[1];
           } else {
               alert("qnode.js:233 - importQNode(pQNode)-Call-Error - Variable Def='"+vVarLineArray[i]+"'");
           }
       }
    }

}
//----End of Method overwriteVariables Definition

						
//#################################################################
//# Method: createOptionArray  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function createOptionArray_QNode(pOptionString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:createOptionArray(pOptionString)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.createOptionArray(pOptionString);
	//-------------------------------------------------------
	var vOptionArray = new Array();
	if (pOptionString) {
		var vLineSplit = pOptionString.split("\n");
		var vOptNumber = 0;
		for (var i=0; i<vLineSplit.length; i++) {
			var vOptionRecord = vLineSplit[i].split("|");
			//check if vOptionRecord has length>0
			vTestString = vOptionRecord[0].replace(/\s/g,"");
			if (vTestString.length > 0) {
				vOptNumber = i+1;
				if (vOptionRecord.length == 1) {
					//vOptionRecord.push(vOptionRecord[0]);
					vOptionRecord.push("Opt"+vOptNumber);
				};
				vOptionRecord.push(vOptNumber); 
				vOptionArray.push(vOptionRecord);
			}
		}
	} else {
		vOptionArray.push(new Array("Undefined OPTION_TEXT","Undefined OPTION_VALUE"));
	}
	return vOptionArray;
}
//----End of Method createOptionArray Definition

//#################################################################
//# Method: createOptionString  
//#    used in Class: QNode
//#                
//# Comment: Creates an Option from the 2D-Array pOptionArray                      
//#          pOptionArray[0] = Option Text 
//#          pOptionArray[1] = Option ID 
//#          
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function createOptionString_QNode(pOptionArray) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:createOptionString(pOptionArray)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.createOptionString(pOptionArray);
	//-------------------------------------------------------
	var vReturn = "";
	var vCR = "";
	for (var i=0; i<pOptionArray.length; i++) {
	    vReturn += vCR + pOptionArray[i].join("|");
	    vCR = "\n";
	}
	return vReturn;
}
//----End of Method createOptionString Definition

//#################################################################
//# Method: createVariableString  
//#    used in Class: QNode
//#                
//# Comment: Creates an Export String for Saving the QNode                      
//#          
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function createVariableString_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:createVariableString()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.createVariableString();
	//-------------------------------------------------------
	var vReturn = "";
	var vCR = "";
	for (var iID in this.aVariables) {
	    vReturn += vCR + iID+"|"+this.aVariables[iID];
        vCR = "\n";
    }
	return vReturn;
}
//----End of Method createVariableString Definition

//#################################################################
//# Method: createVariableXML  
//#    used in Class: QNode
//#                
//# Comment: Creates an Export XML-String for Saving the QNode                      
//#          
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function createVariableXML_QNode(pIndent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:createVariableXML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.createVariableXML();
	//-------------------------------------------------------
	var vReturn = "";
	var vCR = "";
	var vValue = "";
	var vIndent = "       ";
	if (pIndent) vIndent = pIndent;
	for (var iID in this.aVariables) {
		vValue = this.replaceString(this.aVariables[iID],"\"",'\"');
	    vReturn += vCR + vIndent + "<VARDEF NAME=\"" +iID+"\" VALUE=\""+vValue+"\" />";
        vCR = "\n";
    }
	return vReturn;
}
//----End of Method createVariableXML Definition

//#################################################################
//# Method: createNoChildTemplate  
//#    used in Class: QNode
//#                
//# Comment: Creates an Export XML-String for Saving the QNode                      
//#          
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function createNoChildTemplate_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:createNoChildTemplate()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.createNoChildTemplate();
	//-------------------------------------------------------
    var iMax = this.aTemplateID.length - 3;
	for (var i=1; i<=2; i++) {
	    vString = this.aTemplates[i][1];
	    vSearch       = this.aVariableMark + "Q_CHILDNODES" + this.aVariableMark;
		this.aTemplates[i+iMax][1] = this.replaceString(vString,vSearch,"");
	};
}
//----End of Method createNoChildTemplate Definition

					
//#################################################################
//# Method: exportVariables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               7.10.2014             
//# last modifications    7.10.2014             
//#################################################################

function exportVariables_QNode(pVariableString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:exportVariables(pVariableString)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.exportVariables(pVariableString);
	//-------------------------------------------------------
 	var vReturn = "";
	for (var iSearchID in this.aVariables) {
	    var vReplace = this.aVariables[iSearchID];
        vReturn += iSearchID+"|"+vReplace+"\n";
    }
    return vReturn;


}
//----End of Method exportVariables Definition

						
//#################################################################
//# Method: getHTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getHTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getHTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getHTML();
	//-------------------------------------------------------
	
    //alert("qnode.js:158 - getHTML-Call\nformPath="+this.formPath+"\nobjectPath"+this.objectPath+" ");
	var vContentHTML = ""
    vContentHTML += "<hr/><h1>Show Variables of QNode</h1>";
    vContentHTML += this.showVariables();
    vContentHTML += "<hr/><h1>Show Templates of QNode</h1>";
    vContentHTML += this.aTemplates.show();
    return vContentHTML;
}
//----End of Method getHTML Definition

						
//#################################################################
//# Method: getEditHTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getEditHTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getEditHTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getEditHTML();
	//-------------------------------------------------------
	//alert("qnode.js:267 - getEditHTML-Call\nformPath="+this.formPath+"\nobjectPath"+this.objectPath+" ");
	this.replaceVariables();
	var vFormName = this.get_form_name(); //"fInputForm"; 
	//alert("qnode.js:250 getEditHTML()-Call\nvFormName="+vFormName+"\nthis.formPath="+this.formPath);
	var vContentHTML = ""
    vContentHTML += "<form name=\""+vFormName+"\" action=\"#\">";
     var vFormat = 4; //---export HTML without Children---
    vContentHTML += "<b><font color='red'>Preview QNode:</font></b><br/>";
    var vDisplayFormat = 3; // Only the Buttons with Standard Editing Options. 0 mean Hide Buttons 
    vContentHTML += this.getEditButtons(vDisplayFormat,"getEdit_Template_HTML()","getEditHTML()"); 
    vContentHTML += "<table border=0 bgcolor='#FFFFFF' width=\"100%\"><tr><td>";
    vContentHTML += this.exportText(vFormat); //
    vContentHTML += "</td></tr></table>";
    vContentHTML += "<br/>";
    //var vDisplayFormat = 3; // Only the Buttons with Standard Editing Options. 0 mean Hide Buttons 
    //vContentHTML += this.getEditButtons(vDisplayFormat,"getEdit_Template_HTML()","getEditHTML()"); 
    vContentHTML += "<h2>Edit Variables of QNode</h2>";
    vContentHTML += this.editVariables();
    vContentHTML += "<br/>";
    //vContentHTML += this.getEditButtons(); 
    vContentHTML += this.editOptions();
    vContentHTML += "<br/>"
    //vContentHTML += "<hr/>";
    vContentHTML += "</form>";
    return vContentHTML;

}
//----End of Method getEditHTML Definition

//#################################################################
//# Method: getEdit_Structure_HTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getEdit_Structure_HTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getEdit_Structure_HTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getEdit_Structure_HTML();
	//-------------------------------------------------------
	//alert("qnode.js:267 - getEdit_Structure_HTML-Call\nformPath="+this.formPath+"\nobjectPath"+this.objectPath+" ");
	this.replaceVariables();
	var vFormName = this.get_form_name(); //"fInputForm"; 
	//alert("qnode.js:250 getEdit_Structure_HTML()-Call\nvFormName="+vFormName+"\nthis.formPath="+this.formPath);
	var vContentHTML = ""
    vContentHTML += "<form name=\""+vFormName+"\" action=\"#\">";
    var iSearchID = "Q_TITLE";
	var vTitle = this.aVariables[iSearchID];
	var vFormat = 4; //---export HTML without Children---
    vContentHTML += "<hr/>";
    vContentHTML += "<b><font color='red'>("+this.ID+") Preview QNode:</font> "+vTitle+"</b><br/>";
    var vDisplayFormat = 1; // Only the Buttons without Editing visible. 0 mean Hide Buttons 
    vContentHTML += this.getEditButtons(vDisplayFormat,"getEdit_Title_HTML()",""); 
    vContentHTML += "<table border=0 bgcolor='#FFFFFF' width=\"100%\"><tr><td>";
    vContentHTML += this.exportText(vFormat); //
    vContentHTML += "</td></tr></table>";
    //vContentHTML += "<hr/><h2>Edit Variables of QNode</h2>";
    vContentHTML += "<br/>";
    //var vDisplayFormat = 1; // Only the Buttons without Editing visible. 0 mean Hide Buttons 
    //vContentHTML += this.getEditButtons(vDisplayFormat,"getEdit_Title_HTML()",""); 
    //vContentHTML += this.getEditButtons(); 
    vContentHTML += "<br/>"
    vContentHTML += "</form>";
    return vContentHTML;

}
//----End of Method getEdit_Structure_HTML Definition

//#################################################################
//# Method: getEdit_Title_HTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getEdit_Title_HTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getEdit_Title_HTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getEdit_Title_HTML();
	//-------------------------------------------------------
	//alert("qnode.js:267 - getEdit_Title_HTML-Call\nformPath="+this.formPath+"\nobjectPath"+this.objectPath+" ");
	this.replaceVariables();
	var vFormName = this.get_form_name(); //"fInputForm"; 
	//alert("qnode.js:250 getEdit_Title_HTML()-Call\nvFormName="+vFormName+"\nthis.formPath="+this.formPath);
	var vContentHTML = ""
    vContentHTML += "<form name=\""+vFormName+"\" action=\"#\">";
    //vContentHTML += "<hr/><h2>Edit Variables of QNode</h2>";
    var iSearchID = "Q_TITLE";
	var vSearch  = this.aVariableMark + iSearchID + this.aVariableMark;
	var vReplace = this.aVariables[iSearchID];
	vContentHTML += "<tr>"
	vContentHTML += "<td><b> <font color='red'>("+this.ID+")</font> "+iSearchID+"</b></td>\n";
	vContentHTML += "<td><input type=\"text\" name=\""+iSearchID+"\" size='"+this.textareaWidth+"'";
	vContentHTML += "onchange=\""+this.objectPath+".updateVariable('"+iSearchID+"')\" ";
	vContentHTML += "value=\""+vReplace+"\" >"
	vContentHTML += "</td>";
	vContentHTML += "</tr>\n";
    vContentHTML += "</table>";
	vContentHTML += "<br/>";
	var vDisplayFormat = 2; // Only the Title will be edited. 0 mean Hide Buttons 
    vContentHTML += this.getEditButtons(vDisplayFormat,"getEditHTML()","getEdit_Title_HTML()"); 
    vContentHTML += "<br/>"
    var vFormat = 4; //---export HTML without Children---
    vContentHTML += "<b><font color='red'>Preview QNode:</font><b/><br/>";
    vContentHTML += "<table border=0 bgcolor='#FFFFFF' width=\"100%\"><tr><td>";
    vContentHTML += this.exportText(vFormat); //
    vContentHTML += "</td></tr></table>";
    //vContentHTML += "<hr/>";
    vContentHTML += "</form>";
    return vContentHTML;

}
//----End of Method getEdit_Title_HTML Definition
						
//#################################################################
//# Method: getEdit_Template_HTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getEdit_Template_HTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getEdit_Template_HTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getEdit_Template_HTML();
	//-------------------------------------------------------
	//alert("qnode.js:267 - getEdit_Template_HTML-Call\nformPath="+this.formPath+"\nobjectPath"+this.objectPath+" ");
	this.replaceVariables();
	var vFormName = this.get_form_name(); //"fInputForm"; 
	//alert("qnode.js:250 getEdit_Template_HTML()-Call\nvFormName="+vFormName+"\nthis.formPath="+this.formPath);
	var vContentHTML = ""
    vContentHTML += "<form name=\""+vFormName+"\" action=\"#\">";
    var vFormat = 4; //---export HTML without Children---
    vContentHTML += "<hr/>";
    vContentHTML += "<b><font color='red'>Preview QNode:</font><b/><br/>";
    vContentHTML += "<table border=0 bgcolor='#FFFFFF' width=\"100%\"><tr><td>";
    vContentHTML += this.exportText(vFormat); //
    vContentHTML += "</td></tr></table>";

    var vDisplayFormat = 3; // Details are Diplayed. 0 mean Hide Buttons 
    vContentHTML += this.getEditButtons(vDisplayFormat,"","getEdit_Template_HTML()"); 

    vContentHTML += "<br/><h2>Edit Templates of QNode</h2>";
    vContentHTML += this.aTemplates.edit();
    vContentHTML += "</form>";
    vContentHTML += "<br/><h2>Edit Variables of QNode</h2>";
    vContentHTML += this.editVariables();
    vContentHTML += "<br/>";
    vContentHTML += this.editOptions();
    vContentHTML += this.getEditButtons(); 
    vContentHTML += "<hr/>"
    //vContentHTML += "<hr/><h2>Edit Options of QNode</h2>";
    //alert("qnode.js:527 - getEdit_Template_HTML-Call\n" + this.editOptions());
    //vContentHTML += "<h1>HTML Version of QNode</h1>";
    return vContentHTML;

}
//----End of Method getEdit_Template_HTML Definition

//#################################################################
//# Method: getEditButtons  
//#    used in Class: QNode
//#                
//# Comment:  pDisplayFormat=0 - Hide the Buttons                      
//#
//# created               14.10.2014             
//# last modifications    14.10.2014             
//#################################################################

function getEditButtons_QNode(pDisplayFormat,pEditCall,pUpdateCall) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getEditButton()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getEditButtons();
	//-------------------------------------------------------
	var vContent1 = "<input type=\"button\" value=\"";
	var vContent2 = "\"  onclick=\"";
	var vContent3 = "\">";
	var vButtonArray  = new Array("","Title","Details","Templates");
	var vReturn = "";
	if (pDisplayFormat>0) {
		vReturn += vContent1 + "Show Questionnaire" 
				 + vContent2 + "document.location='showquestionnaire.html'" 
				 + vContent3 + "\n";
		if (pUpdateCall != "") {
			vReturn += vContent1 + "Update " + vButtonArray[pDisplayFormat-1]
				 + vContent2 + "top.vSDAPScreator.editQNode('"+this.objectPath+"','"+pUpdateCall+"')" 
				 + vContent3 + "\n";
		};	 
		if (pEditCall != "") {
			vReturn += vContent1 + "Edit " + vButtonArray[pDisplayFormat]
				 + vContent2 + "top.vSDAPScreator.editQNode('"+this.objectPath+"','"+pEditCall+"')" 
				 + vContent3 + "\n";
		};
		var vNO = this.aVariables["QUESTION_NO"];
		var vObjectCall = this.objectPath + ".aChildNodes.insertQNode(pQNode,1)";
		var i = parseInt(vNO);
		//alert("qnode.js:674 - getEditButton()-Call\nthis.aType="+this.aType+"\naParent.aType="+this.aParent.aType);
		//alert("qnode.js:675 - getEditButton()-Call\nthis.aParent.="+this.aParent.objectPath+"\nthis.objectPath="+this.objectPath);
		//alert("qnode.js:676 - getEditButton()-Call\nthis.aParent.="+this.aParent.objectPath+"\nthis.ID="+this.ID);
		if (this.aParent.aType == "QNodeList") {
			var vi= this.ID;
			var vCount = this.aParent.rows;
		    var vCall = "top.vSDAPScreator.moveQNode('"+this.aParent.objectPath + "',"+vi+","
		    vReturn = "Pos: "+this.getSelectBox("SBox"+vi,vCount,vi,vCall) + vReturn;
		    vi= this.ID + 0
			//alert("vi="+vi+" qnode.js:864 getEditButton()-Call");
			vObjectCall = this.aParent.objectPath + ".insertQNode(pQNode,"+vi+")";
			vReturn += vContent1 + "Delete QNode" 
				 + vContent2 + "top.vSDAPScreator.deleteQNode('"+this.aParent.objectPath + "',"+vi+")" 
				 + vContent3 + "\n";
		}
		vReturn += vContent1 + "Save QNode" 
				 + vContent2 + "top.vSDAPScreator.saveQNode('"+this.objectPath+"')"
				 + vContent3 + "\n";
		vReturn += vContent1 + "  Add NEW QNode  " 
				 + vContent2 + "top.vSDAPScreator.addNewQNode('"+vObjectCall+"')"
				 + vContent3 + "\n";
		
		//alert("qnode.js:531 - getEditButton()-Call\n"+vReturn);
	}
	return vReturn;
}
//----End of Method getEditButton Definition

						
//#################################################################
//# Method: getChildText  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function getChildText_QNode(pFormat) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:getChildText(pFormat)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.getChildText(pFormat);
	//-------------------------------------------------------
	var vContentHTML = "";
	for (var i=1; i<=this.aChildNodes.rows; i++) {
       //vContentHTML += "(("+i+"))\n"
       if (this.aChildNodes[i]) {
	       vContentHTML += this.aChildNodes[i][2].exportText(pFormat);
	   } else {
	   	   vContentHTML += " ChildNode("+i+") undefined ";
	   }
    }
    return vContentHTML;
    //return vContentHTML + "----Format="+pFormat+" ALL THE CHILDREN OF QNODE----";
	//-------------------------------------------------------
}
//----End of Method getChildHTML Definition

						
//#################################################################
//# Method: showVariables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function showVariables_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:showVariables()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.showVariables();
	//-------------------------------------------------------
	var vReturn = "<table border=1>\n";
	vReturn += "<tr><td><b>Search-ID</b></td><td>";
    vReturn += "<b>Search-String</b></td><td><b>Replace-String</b></td></tr>\n";
	for (var iSearchID in this.aVariables) {
	    var vSearch  = this.aVariableMark + iSearchID + this.aVariableMark;
	    var vReplace = this.aVariables[iSearchID];
        vReturn += "<tr><td>"+iSearchID+"</td><td>";
        vReturn += vSearch+"</td><td>"+vReplace+"</td></tr>\n";
    }
    vReturn += "</table>";
    return vReturn;
}
//----End of Method showVariables Definition

						
//#################################################################
//# Method: edit_all_Variables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function edit_all_Variables_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:edit_all_Variables()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.edit_all_Variables();
	//-------------------------------------------------------
	var vReturn = "";
	// vReturn += "<form name=\""+this.get_form_name()+"\">\n";
	vReturn += "<table border=1>\n";
	vReturn += "<tr><td><b>Search-ID</b></td>";
    vReturn += "<td><b>Replace-String</b></td></tr>\n";
	for (var iSearchID in this.aVariables) {
	    var vSearch  = this.aVariableMark + iSearchID + this.aVariableMark;
	    var vReplace = this.aVariables[iSearchID];
        vReturn += "<tr>"
        vReturn += "<td>"+iSearchID+"</td>\n";
        vReturn += "<td><input type=\"text\" name=\""+iSearchID+"\" size='"+this.textareaWidth+"'";
        vReturn += "onchange=\""+this.objectPath+".updateVariable('"+iSearchID+"')\" ";
        vReturn += "value=\""+vReplace+"\" >"
        vReturn += "</td>";
        vReturn += "</tr>\n";
    }
    vReturn += "</table>";
    //vReturn += "</form>";
    return vReturn;

}
//----End of Method edit_all_Variables Definition

//#################################################################
//# Method: editVariables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function editVariables_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:editVariables()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.editVariables();
	//-------------------------------------------------------
	var vReturn = "";
	// vReturn += "<form name=\""+this.get_form_name()+"\">\n";
	vReturn += "<table border=1>\n";
	vReturn += "<tr><td><b>Search-ID</b></td>";
    vReturn += "<td><b>Replace-String</b></td></tr>\n";
	for (var iSearchID in this.aVariables) {
	    var vSearch  = this.aVariableMark + iSearchID + this.aVariableMark;
	    var vReplace = this.aVariables[iSearchID];
	    var vExcludedFound = 0;
	    for (var k=0;k<this.aExcludeVariables.length;k++) {
	    	if (iSearchID == this.aExcludeVariables[k]) {
	    	   vExcludedFound++;
	    	};
	    };
	    if (vExcludedFound == 0) {
			vReturn += "<tr>"
			vReturn += "<td>"+iSearchID+"</td>\n";
			vReturn += "<td><input type=\"text\" name=\""+iSearchID+"\" size='"+this.textareaWidth+"'";
			vReturn += "onchange=\""+this.objectPath+".updateVariable('"+iSearchID+"')\" ";
			vReturn += "value=\""+vReplace+"\" >"
			vReturn += "</td>";
			vReturn += "</tr>\n";
        };
    }
    vReturn += "</table>";
    //vReturn += "</form>";
    return vReturn;

}
//----End of Method editVariables Definition

						
//#################################################################
//# Method: editOptions  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function editOptions_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:editOptions()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.editOptions();
	//-------------------------------------------------------
	var vReturn = "";
	vReturn += "<br/><br/>\n";
	vReturn += "<table border=1>\n";
	vReturn += "<tr><th>Edit Options</th></tr>\n";
    vReturn += "<tr><td><tt>OPTION_TEXT|OPTION_VALUE</tt></td></tr>\n";
    vRowSize = this.createOptionArray(this.aOptions).length+1;
    vColSize = this.textareaWidth;
    vReturn += "<tr><td>\n";
    vReturn += "  <textarea name=\"Q_OPTIONS\" rows=\""+vRowSize
    			+"\" cols=\""+vColSize + "\" "
    			+"onchange=\""+this.objectPath+".updateOptions()\" >";
    vReturn += this.aOptions;			
    vReturn += "</textarea>\n";
    vReturn += "</td></tr>\n";
    vReturn += "<tr><td>  ";
    vReturn += "</td></tr>\n";
    vReturn += "</table>";
    return vReturn;

}
//----End of Method editOptions Definition

						
//#################################################################
//# Method: updateVariable  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function updateVariable_QNode(pVarName) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:373 updateVariable('"+pVarName+"')-Call");
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.updateVariable(pVarName);
	//-------------------------------------------------------
    this.aVariables[pVarName] = this.get_formvalue(pVarName);
	//alert("qnode.js:379 "+this.objectPath+".updateVariable('"+pVarName+"')-Call\nValue="+this.aVariables[pVarName]);

}
//----End of Method updateVariable Definition

//#################################################################
//# Method: updateOptions  
//#    used in Class: QNode
//#                
//# Comment:    s                    
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function updateOptions_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:373 updateOptions('"+pVarName+"')-Call");
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.updateOptions();
	//-------------------------------------------------------
    var vOptions = this.get_formvalue("Q_OPTIONS");
    var vOptionArray = this.createOptionArray(vOptions);
	this.aOptions = this.createOptionString(vOptionArray);
    //alert("qnode.js:763 "+this.objectPath+".updateOptions('Q_TITLE')-Call\nValue="+this.aOptions);

}
//----End of Method updateOptions Definition

						
//#################################################################
//# Method: set_formvalue  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               9.9.2014             
//# last modifications    9.9.2014             
//#################################################################

function set_formvalue_QNode(pVarName,pValue) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:set_formvalue(pVarName,pValue)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.set_formvalue(pVarName,pValue);
	//-------------------------------------------------------
	var vValue = pValue.replace(/\n/g, '\\n');
	vEvalStr = this.formPath+"."+pVarName+".value='"+vValue+"';";
	//alert("qnode.js:405 - set_formvalue()\npVarName="+pVarName+"\npValue="+vValue+"\n"+vEvalStr);
	eval(vEvalStr);

}
//----End of Method set_formvalue Definition

						
//#################################################################
//# Method: get_formvalue  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               9.9.2014             
//# last modifications    9.9.2014             
//#################################################################

function get_formvalue_QNode(pVarName) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:get_formvalue(pVarName)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.get_formvalue(pVarName);
	//-------------------------------------------------------
	var vReturn    = "";
	var vEvalStr = "";
	vEvalStr = "vReturn="+this.formPath+"."+pVarName+".value";
	eval(vEvalStr);
	//alert("qnode.js:434 - get_formvalue()\npVarName="+pVarName+" vReturn="+vReturn+"\n"+vEvalStr);
	return vReturn;
}
//----End of Method get_formvalue Definition

						
//#################################################################
//# Method: replaceVariables  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function replaceVariables_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:replaceVariables()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.replaceVariables();
	//-------------------------------------------------------
	var vString  = "";
	var vSearch  = "";
	var vReplace = "";
	var vSearchChild  = "";
	var vReplaceChild = "";
	var vSearchType  = "";
	var vReplaceType = "";
	var vSearchVarXML  = "";
	var vReplaceVarXML = "";
	var vFormat  = 0;
	var vGeneratedOptions = "";
	
	for (var ti=1; ti<=this.aTemplates.rows; ti++) {
		if (this.aTemplateID[ti-1].indexOf("Option")>0) {
 	      	this.aTemplates[ti][2] = this.replaceOptions(this.aTemplates[ti][1]);
		} else {
	    	//----Format is HTML=1, Latex=2 or XML=3--------
	    	//ti=1 Options HTML ti=2 Template HTML, ti=3 Options Latex, ....
		  	vFormat  = Math.round(ti/2);
		  	vString  = this.aTemplates[ti][1];
		  	vSearch       = this.aVariableMark + "Q_OPTIONS" + this.aVariableMark;
		  	vSearchChild  = this.aVariableMark + "Q_CHILDNODES" + this.aVariableMark;
		  	vSearchType   = this.aVariableMark + "QNODE_TYPE" + this.aVariableMark;
		  	vSearchVarXML = this.aVariableMark + "XML_VARIABLES" + this.aVariableMark;
		  	vReplace = this.aTemplates[ti-1][2]; //these are the options generate before
		  	vReplaceChild = this.aChildNodes.exportText(vFormat);
		  	//alert("qnode.js:1211 - vReplaceChild="+vReplaceChild);
		  	vReplaceType  = this.aType.toLowerCase();
		  	vReplaceVarXML  = this.createVariableXML("         ");
		  	if (ti > 0) {
		  		vString = this.replaceString(vString,vSearchChild,vReplaceChild);
		  		vString = this.replaceString(vString,vSearch,vReplace);
		  		vString = this.replaceString(vString,vSearchVarXML,vReplaceVarXML);
		  		vString = this.replaceString(vString,vSearchType,vReplaceType);
		  	} else {
		  		alert("qnode.js:500 - replaceVariables()-Call\nERROR: ti=1 has no options created before");
		  	}
		  	this.aTemplates[ti][2] =this.replaceSearchIDs(vString);
		}
    } //END for ti
}
//----End of Method replaceVariables Definition

//#################################################################
//# Method: replaceOptions  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function replaceOptions_QNode(pOptionString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:replaceOptions(pOptionString)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.replaceOptions(pOptionString);
	//-------------------------------------------------------
	var vString  = ""; //Original pOptionString remains unmodified for next option
	var vSearch  = "";
	var vReplace = "";
	var vGeneratedOptions = "";
	var vOptionArray = this.createOptionArray(this.aOptions);
	for (var i=0; i<vOptionArray.length; i++) {
	    //var vNumber = i+1;
		//vOptionArray[i] += "|"+ vNumber;
	    var vOptionPair = vOptionArray[i];
		//Set Default String for Replacement
		vString  = pOptionString;
		// replace ###OPTION_TEXT###
		// replace ###OPTION_VALUE###
		for (var k=0; k<this.aOptionVariables.length; k++) { 
			vSearch  = this.aVariableMark + this.aOptionVariables[k]+ this.aVariableMark;
			vReplace = vOptionPair[k];
			vString = this.replaceString(vString,vSearch,vReplace);
		};
		// append vString of all replaced OptionVariable to GeneratedOptions
		vGeneratedOptions += vString;
	}
	return vGeneratedOptions;
}
//----End of Method replaceVariables Definition


//#################################################################
//# Method: replaceSearchIDs  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function replaceSearchIDs_QNode(pString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:replaceSearchIDs(pString)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.replaceSearchIDs();
	//-------------------------------------------------------
	var vSearch  = "";
	var vReplace = "";
	for (var iSearchID in this.aVariables) {
		vSearch  = this.aVariableMark + iSearchID + this.aVariableMark;
		vReplace = this.aVariables[iSearchID];
		pString = this.replaceString(pString,vSearch,vReplace);
	}
	return pString;
}
//----End of Method replaceVariables Definition

						
//#################################################################
//# Method: replaceString  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function replaceString_QNode(pString,pSearch,pReplace) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:replaceString(pString,pSearch,pReplace)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.replaceString(pString,pSearch,pReplace);
	//-------------------------------------------------------
	//alert("qnode.js - replaceString() "+pString);
	var vReturnString = '';
	if (!pString) {
		vReturnString = "undefined pString-Replace";	
	} else if (pString != '') {
		var vHelpString = '';
		pString += "";
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
		vReturnString += pString;
	};
	return vReturnString;
}

						
//#################################################################
//# Method: exportText  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function exportText_QNode(pFormat) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:exportText(pFormat)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.exportText(pFormat);
	//-------------------------------------------------------
	var vContent = "";
	this.replaceVariables();
	//vContent += this.aTemplates[1][2*pFormat];
	//vContent += this.getChildText(pFormat);
	vContent += this.aTemplates[2*pFormat][2];
	return vContent;
}
//----End of Method exportText Definition


						
//#################################################################
//# Method: exportHTML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function exportHTML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:exportHTML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.exportHTML();
	//-------------------------------------------------------
	var pFormat  = 1;
	//this.aFormat = pFormat;
	return this.exportText(pFormat);
	
}
//----End of Method exportHTML Definition

						
//#################################################################
//# Method: exportLatex  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function exportLatex_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:exportLatex()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.exportLatex();
	//-------------------------------------------------------
	var pFormat  = 2;
	//this.aFormat = pFormat;
	return this.exportText(pFormat);
}
//----End of Method exportLatex Definition

						
//#################################################################
//# Method: exportXML  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function exportXML_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:exportXML()-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.exportXML();
	//-------------------------------------------------------
	var pFormat  = 3;
	//this.aFormat = pFormat;
	return this.exportText(pFormat);
	
}
//----End of Method exportHTML Definition
						
//#################################################################
//# Method: addChildNode  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function addChildNode_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	alert("qnode.js:848 ERROR in Code - addChildNode(pQNode)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    var qi = vMyInstance.addChildNode();
	//-------------------------------------------------------
	this.aChildNodes.push(new QNode());
	var qi = this.aChildNodes.length;
	return qi;
    
}
//----End of Method addChildNode Definition

						
//#################################################################
//# Method: removeChildNode  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               25.8.2014             
//# last modifications    25.8.2014             
//#################################################################

function removeChildNode_QNode(pIndex) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:removeChildNode(pID)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.removeChildNode(pID)			;
	//-------------------------------------------------------
	if (pIndex >= this.aChildNodes.length) {
	   alert("qnode.js:407:removeChildNode()-Call Error: pIndex="+pIndex+" does not exist!");
	} else {
	   this.aChildNodes.splice(pIndex, 1);
    }
}
//----End of Method removeChildNode Definition

						
//#################################################################
//# Method: addVariable  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function addVariable_QNode(pVar,pContent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:addVariable(pVar,pContent)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.addVariable(pVar,pContent);
	//-------------------------------------------------------
	
	this.aVariables[pVar] = pContent;

}
//----End of Method addVariable Definition

//#################################################################
//# Method: update  
//#    used in Class: QNode
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function update_QNode() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnode.js:update(pVar,pContent)-Call")
	//----Create Object/Instance of QNode----
	//    var vMyInstance = new QNode();
	//    vMyInstance.update();
	//-------------------------------------------------------
	
	this.aChildNodes.update();
    	

}
//----End of Method update Definition
		
