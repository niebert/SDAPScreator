//#################################################################
//# Javascript Class: Questionnaire()
//#       SuperClass: Matrix
//#   Class Filename: questionnaire.js
//#                
//# Author of Class:      Engelbert Niehaus                    
//# email:                niehaus@uni-landau.de                 
//# created               28.8.2014             
//# last modifications    28.8.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class Questionnaire() 
// Call the constructor for creating an instance of class Questionnaire
// by the following command in HTML-file that imports this class
// var vMyInstance = new Questionnaire();
//---------------------------------------------------------------------

function Questionnaire () {
	//--------------------------------------
	//---Super Class------------------------
	//this.SuperClass = Matrix;
	//this.SuperClass();
	//--------------------------------------
	
	//---Attributes-------------------------
	this.formPath   = "top.main.document.fInputForm";
	this.objectPath = "top.vSDAPScreator.aQuestionnaire";
	this.aType       = "Questionnaire";
	this.aParent	= null;
	this.aHeader    = new QNode();
    this.aQuestions = new QNode();
    this.aTail      = new QNode();
    this.endHeaderID = -1;
	this.beginTailID = -1;
	//---Methods----------------------------
	this.init			 = init_Questionnaire;
	this.init_form		 = init_form_Questionnaire;
	this.init_parent	 = init_parent_Questionnaire;
	this.insertQNode	 = insertQNode_Questionnaire;
	this.editMainSettings = editMainSettings_Questionnaire;
	this.getHTML		 = getHTML_Questionnaire;
	this.getEditHTML	 = getEditHTML_Questionnaire;
	this.exportText		 = exportText_Questionnaire;
	this.exportHTML		 = exportHTML_Questionnaire;
	this.exportLatex	 = exportLatex_Questionnaire;
	this.exportXML		 = exportXML_Questionnaire;
	this.save			 = save_Questionnaire;
	this.update			 = update_Questionnaire;

	//--------------------------------------
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of Questionnaire, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'Questionnaire'
// the function name is extended with '_Questionnaire'.
// This is done to avoid name space conflicts, if you overwrite a 
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       Questionnaire.my_method()
// The method definitions are as follows
//   function my_method_Questionnaire(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "Questionnaire()" defined as JS functions 
//---------------------------------------------------------------------
						
//#################################################################
//# Method: init  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function init_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:init()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.init();
	//-------------------------------------------------------
	this.aHeader.init();
	this.aQuestions.init();
	this.aTail.init();
	//this.aQuestions.loaded = 1;

}
//----End of Method init Definition


						
//#################################################################
//# Method: init_form  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function init_form_Questionnaire(pFormPath,pObjectPath) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:114 - init_form(pFormPath,pObjectPath)-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.init_form(pFormPath,pObjectPath);
	//-------------------------------------------------------
	this.formPath       = pFormPath;
	this.objectPath     = pObjectPath;
	this.aHeader.init_form(pFormPath,pObjectPath+".aHeader");
	this.aQuestions.init_form(pFormPath,pObjectPath+".aQuestions");
	this.aTail.init_form(pFormPath,pObjectPath+".aTail");
	//alert("questionnaire.js:124 - aQuestions.formPath="+this.aQuestions.formPath+"\npFormPath="+pFormPath+" ");
	//alert("questionnaire.js:125 - aQuestions.objectPath="+this.aQuestions.objectPath+"\npObjectPath="+pObjectPath+" ");
	
    // init QNode Forms
}
//----End of Method init_form Definition

//#################################################################
//# Method: init_parent  
//#    used in Class: Questionnaire
//#                
//# Comment:  pParent is null as Root Node or a QuestionnaireList                      
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function init_parent_Questionnaire(pParent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("Questionnaire.js:220 - init_parent()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.init_parent(pParent);
	//-------------------------------------------------------
	this.aParent = pParent;
	this.aHeader.init_parent(this);
	this.aQuestions.init_parent(this);
	this.aTail.init_parent(this);
    
}
//----End of Method init_parent Definition

				
//#################################################################
//# Method: insertQNode_Questionnaire  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function insertQNode_Questionnaire(pID) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:insertQNode(pID)-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.insertQNode(pID);
	//-------------------------------------------------------
     
    //Insert The QNode at Position pID and Shift  
     
    // insertQNode Forms
}
//----End of Method init_form Definition

							
//#################################################################
//# Method: editMainSettings  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function editMainSettings_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:editMainSettings()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.editMainSettings();
	//-------------------------------------------------------
	
	//>>>> INSERT YOUR CODE HERE <<<<<

    	

}
//----End of Method editMainSettings Definition

						
//#################################################################
//# Method: getHTML  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function getHTML_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:getHTML()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.getHTML();
	//-------------------------------------------------------
	var vReturn = ""; //<br><textarea rows='35' cols='85'>";
    vReturn += this.aQuestions.exportHTML();
    //vReturn += "</texarea>";
    return vReturn;
}
//----End of Method getHTML Definition

						
//#################################################################
//# Method: getEditHTML  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function getEditHTML_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:getEditHTML()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.getEditHTML();
	//-------------------------------------------------------
	
	//>>>> INSERT YOUR CODE HERE <<<<<

    	

}
//----End of Method getEditHTML Definition

						
//#################################################################
//# Method: exportHTML  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function exportText_Questionnaire(pFormat) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:exportHTML()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.exportText(pFormat);
	//-------------------------------------------------------
	var vContent = "";
	//vContent += this.aHeader.exportText(pFormat);
	vContent += this.aQuestions.exportText(pFormat);
	//vContent += this.aTail.exportText(pFormat);
	return vContent;

}
//----End of Method exportText Definition
						
//#################################################################
//# Method: exportHTML  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function exportHTML_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:exportHTML()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.exportHTML();
	//-------------------------------------------------------
	var pFormat  = 1;
	var vContent = "";
	vContent += "<HTML>\n";
	vContent += "  <HEADER>\n";
	vContent += "    <TITLE>SDAPS Creator HTML-Export</TITLE>\n";
	vContent += "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf8\">\n"
	vContent += "  </HEADER>\n";
	vContent += "  <BODY>\n";
	vContent += this.exportText(pFormat);
	vContent += "  </BODY>\n";
	vContent += "</HTML>";
	return vContent;

}
//----End of Method exportHTML Definition

	
						
//#################################################################
//# Method: exportLatex  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function exportLatex_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:exportLatex()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.exportLatex();
	//-------------------------------------------------------
	var pFormat  = 2;
	return this.exportText(pFormat);

}
//----End of Method exportLatex Definition

						
//#################################################################
//# Method: exportXML  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function exportXML_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:exportHTML()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.exportXML();
	//-------------------------------------------------------
	var pFormat  = 3;
	return this.exportText(pFormat);

}
//----End of Method exportXML Definition

						
//#################################################################
//# Method: save  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function save_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:save()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.save();
	//-------------------------------------------------------
	this.exportXML();
}
//----End of Method save Definition

						
//#################################################################
//# Method: update  
//#    used in Class: Questionnaire
//#                
//# Comment:                        
//#
//# created               28.8.2014             
//# last modifications    28.8.2014             
//#################################################################

function update_Questionnaire() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("questionnaire.js:update()-Call")
	//----Create Object/Instance of Questionnaire----
	//    var vMyInstance = new Questionnaire();
	//    vMyInstance.update();
	//-------------------------------------------------------
	this.aQuestions.update();
}
//----End of Method update Definition

			