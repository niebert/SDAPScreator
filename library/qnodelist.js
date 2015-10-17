//#################################################################
//# Javascript Class: QNodeList()
//#       SuperClass: Matrix
//#   Class Filename: qnodelist.js
//#                
//# Author of Class:      Engelbert Niehaus                    
//# email:                niehaus@uni-landau.de                 
//# created               7.9.2014             
//# last modifications    7.9.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class QNodeList() 
// Call the constructor for creating an instance of class QNodeList
// by the following command in HTML-file that imports this class
// var vMyInstance = new QNodeList();
//---------------------------------------------------------------------

function QNodeList () {
	//--------------------------------------
	//---Super Class------------------------
	this.SuperClass = Matrix;
	this.SuperClass();
	//--------------------------------------
	
	//---Attributes-------------------------
	this.aInsertID = -1;
	this.aType = "QNodeList";
	this.aName = "My QNode List";
	this.aParent = null;
	this.aUpdatePrefix = ""; //Defined recursively by update_QNodeList()
	//---Methods----------------------------
	this.init_name			 = init_name_QNodeList;
	this.init_parent		 = init_parent_QNodeList;
	this.update				 = update_QNodeList;
	this.importQNode		 = importQNode_QNodeList;
	this.appendQNode		 = appendQNode_QNodeList;
	this.insertQNode		 = insertQNode_QNodeList;
	this.removeQNode		 = removeQNode_QNodeList;
	this.moveQNode			 = moveQNode_QNodeList;
	this.getHTML	 		 = getHTML_QNodeList;
	this.getEditHTML		 = getEditHTML_QNodeList;
	this.getEdit_Structure_HTML	 = getEdit_Structure_HTML_QNodeList;
	this.exportText			 = exportText_QNodeList;
	this.exportHTML			 = exportHTML_QNodeList;
	this.exportLatex		 = exportLatex_QNodeList;
	this.exportXML			 = exportXML_QNodeList;

	//--------------------------------------
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of QNodeList, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'QNodeList'
// the function name is extended with '_QNodeList'.
// This is done to avoid name space conflicts, if you overwrite a 
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       QNodeList.my_method()
// The method definitions are as follows
//   function my_method_QNodeList(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "QNodeList()" defined as JS functions 
//---------------------------------------------------------------------
						
//#################################################################
//# Method: init_name  
//#    used in Class: QNodeList
//#                
//# Comment:  aName is used for generation of ObjectPath                      
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function init_name_QNodeList(pName) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:init_name()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.init_name(pName);
	//-------------------------------------------------------
	this.aName = pName;

}
//----End of Method init_name Definition

//#################################################################
//# Method: init_parent  
//#    used in Class: QNodeList
//#                
//# Comment:  pParent is QNode as parent object of QNodeList                     
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function init_parent_QNodeList(pParent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:init_parent()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.init_parent(pParent);
	//-------------------------------------------------------
	this.aParent = pParent;
	for (var i=1; i<=this.rows; i++) {
		this[i][2].init_parent(this)
	}
}
//----End of Method init_parent Definition

						
//#################################################################
//# Method: update  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function update_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:update()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.update();
	//-------------------------------------------------------
	var vSectionNo = 0;
	var vSubSectionNo = 0;
	var vQuestionNo = 0;
	for (var i=1; i<=this.rows; i++) {
		if (this[i][2].aType.toUpperCase() == "SECTION" ) {
		    vSectionNo++;
		    vSubSectionNo = 0;
		} else {
			vSubSectionNo++;
		    vQuestionNo++;
		};
		//this[i][1]= i;
		this[i][2].ID = i;
		this[i][2].aVariables["SECTION_NO"]  = this.aUpdatePrefix + vSectionNo; 
		this[i][2].aVariables["SUBSECTION_NO"]  = vSubSectionNo; 
		this[i][2].aVariables["QUESTION_NO"] = vQuestionNo; 
		this[i][2].init_form(this.formPath+"Q"+i,this.objectPath+"["+i+"][2]");
		this[i][2].aChildNodes.aUpdatePrefix = vSectionNo + ".";
		this[i][2].aChildNodes.update();
	};
}
//----End of Method update Defupdateion

						
//#################################################################
//# Method: importQNode  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function importQNode_QNodeList(pQNode) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:importQNode(pQNode)-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.importQNode(pQNode,pi);
	//-------------------------------------------------------
	if (this.aInsertID > 0) {
		this.insertQNodeQNode(pQNode,this.aInsertID);
	} else {
		this.appendQNode(pQNode);
	}
}
//----End of Method importQNode Definition

					
						
//#################################################################
//# Method: appendQNode  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function appendQNode_QNodeList(pQNode) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:appendQNode(pQNode)-Call Row="+this.rows+"-- LIST VARIABLES=\n"+pQNode["Variables"]);
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.appendQNode(pQNode);
	//-------------------------------------------------------
	this.append_row(); //inherited from Class "Matrix()"
	this[this.rows][1] = this.rows;
	var vQNode = new QNode();
	vQNode.init();
	vQNode.init_parent(this);
	vQNode.init_form(this.formPath+"Q"+this.rows,this.objectPath+"["+this.rows+"]");
	vQNode.importQNode(pQNode);
	this[this.rows][2] = vQNode;
	this.update(); // update enumeration
}
//----End of Method appendQNode Definition

						
//#################################################################
//# Method: insertQNode  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function insertQNode_QNodeList(pQNode,pi) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:258 - insertQNode(pQNode,"+pi+")-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.insertQNode(pQNode,pi);
	//-------------------------------------------------------
	if (pi>this.rows) {
		this.append_row();
		pi = this.rows;
	} else {
		this.insert_default(pi);
	}
	//alert("insertQNode(pi) pi="+pi+" rows="+this.rows+"\nqnodelist.js:245");
	var vQNode = new QNode();
	vQNode.init();
	vQNode.init_parent(this);
	vQNode.init_form(this.formPath+"Q"+this.rows,this.objectPath+"["+this.rows+"]");
	vQNode.importQNode(pQNode);
	this[pi][2] = vQNode;
	this.update(); //update enumeration of Questions
}
//----End of Method insertQNode Definition

						
//#################################################################
//# Method: moveQNode  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function moveQNode_QNodeList(pi,pDestination) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:258 - moveQNode(pQNode,"+pi+")-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.moveQNode(pQNode,pi);
	//-------------------------------------------------------
	var vQNode = null;
	if (pi>this.rows) {
		pi = this.rows;
	};
	if (pi > pDestination) {
	   vQNode = this[pi][2];
	   for (i=pi-1;i>=pDestination;i--) {
	       this[i+1][2] = this[i][2];
	   };
	   this[pDestination][2] = vQNode;
	} else 	if (pi < pDestination) {
	   vQNode = this[pi][2];
	   for (i=pi+1;i<=pDestination;i++) {
	       this[i-1][2] = this[i][2];
	   };
	   this[pDestination][2] = vQNode;
    }
	//alert("moveQNode(pi) pi="+pi+" pDestination="+pDestination+"rows="+this.rows+"\nqnodelist.js:245");
	this.update(); //update enumeration of Questions
}
//----End of Method moveQNode Definition

						
//#################################################################
//# Method: removeQNode  
//#    used in Class: QNodeList
//#                
//# Comment:   removes the the row with index pi and updates Question numbers                     
//#
//# created               8.9.2014             
//# last modifications    8.9.2014             
//#################################################################

function removeQNode_QNodeList(pi) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:removeQNode(pi)-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.removeQNode(pi);
	//-------------------------------------------------------
	this.remove(pi); // removes the the row with index pi
 	this.update(); //update enumeration of Questions
}
//----End of Method removeQNode Definition

						
//#################################################################
//# Method: getHTML  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function getHTML_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:getHTML()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.getHTML();
	//-------------------------------------------------------
	var vContent = "";
	for (var i=1; i<=this.rows; i++) {
		vContent += this[i][2].getHTML(); 
	};
	return vContent;
}
//----End of Method getHTML Definition

						
//#################################################################
//# Method: getEditHTML  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function getEditHTML_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:getEditHTML()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.getEditHTML();
	//-------------------------------------------------------
	var vContent = "";
	for (var i=1; i<=this.rows; i++) {
		if (this[i]) {
			vContent += this[i][2].getEditHTML(); 
		} else { 
			vContent += " ChildNode("+i+") undefined ";
		}
	};
	return vContent;

}
//----End of Method getEditHTML Definition

						
//#################################################################
//# Method: getEdit_Structure_HTML  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function getEdit_Structure_HTML_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:getEditHTML()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.getEditHTML();
	//-------------------------------------------------------
	var vContent = "";
	for (var i=1; i<=this.rows; i++) {
		if (this[i]) {
			vContent += this[i][2].getEdit_Structure_HTML(); 
		} else { 
			vContent += " ChildNode("+i+") undefined ";
		}
	};
	return vContent;

}
//----End of Method getEditHTML Definition

						
//#################################################################
//# Method: exportText  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function exportText_QNodeList(pFormat) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:exportText()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.exportText();
	//-------------------------------------------------------
	var vContent = "";
	for (var i=1; i<=this.rows; i++) {
		vContent += this[i][2].exportText(pFormat); 
	};
	return vContent;

}
//----End of Method exportText Definition

						
//#################################################################
//# Method: exportHTML  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function exportHTML_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:exportHTML()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.exportHTML();
	//-------------------------------------------------------
	var pFormat  = 1;
	this.aFormat = pFormat;
	return this.exportText(pFormat);

}
//----End of Method exportHTML Definition

						
//#################################################################
//# Method: exportLatex  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function exportLatex_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:exportLatex()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.exportLatex();
	//-------------------------------------------------------
	
	var pFormat  = 2;
	this.aFormat = pFormat;
	return this.exportText(pFormat);

}
//----End of Method exportLatex Definition

						
//#################################################################
//# Method: exportXML  
//#    used in Class: QNodeList
//#                
//# Comment:                        
//#
//# created               7.9.2014             
//# last modifications    7.9.2014             
//#################################################################

function exportXML_QNodeList() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qnodelist.js:exportXML()-Call")
	//----Create Object/Instance of QNodeList----
	//    var vMyInstance = new QNodeList();
	//    vMyInstance.exportXML();
	//-------------------------------------------------------
	var pFormat  = 3;
	this.aFormat = pFormat;
	return this.exportText(pFormat);

}
//----End of Method exportXML Definition

			