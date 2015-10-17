//#################################################################
//# Javascript Class: QTemplates()
//#       SuperClass: Matrix
//#   Class Filename: qtemplates.js
//#                
//# Author of Class:      Joerg Rapp                    
//# email:                rapp@uni-landau.de                 
//# created               16.10.2014             
//# last modifications    16.10.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class QTemplates() 
// Call the constructor for creating an instance of class QTemplates
// by the following command in HTML-file that imports this class
// var vMyInstance = new QTemplates();
//---------------------------------------------------------------------

function QTemplates () {
	//--------------------------------------
	//---Super Class------------------------
	this.SuperClass = Matrix;
	this.SuperClass();
	//--------------------------------------
	
	//---Attributes-------------------------
	this.aTemplateID  	 = new Array();
	this.aTemplateTitle	 = new Array();
	this.aColTitle    	 = new Array("Source","Replaced");
	this.textareaWidth	 = 80;
	//---Methods----------------------------
	this.init_content	 = init_content_QTemplates;
	this.init_ID		 = init_ID_QTemplates;
	this.show_row		 = show_row_QTemplates;
	this.edit_row		 = edit_row_QTemplates;
	this.edit_row_size	 = edit_row0_size_Matrix;
	//this.show			 = show_QTemplates;
	//this.edit			 = edit_QTemplates;
	this.row_ID_header	 = row_ID_header_QTemplates;

	//--------------------------------------
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of QTemplates, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'QTemplates'
// the function name is extended with '_QTemplates'.
// This is done to avoid name space conflicts, if you overwrite a 
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       QTemplates.my_method()
// The method definitions are as follows
//   function my_method_QTemplates(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "QTemplates()" defined as JS functions 
//---------------------------------------------------------------------
						
//#################################################################
//# Method: init_ID  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function init_ID_QTemplates(pTemplateID) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:init(pTemplateID)-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.init_ID(pTemplateID);
	//-------------------------------------------------------
	var vContent = ""; 
	this.aTemplateID = pTemplateID;
	for (var j=0; j<this.aTemplateID.length; j++) {
		vContent = this.aTemplateID[j];
		vContent = vContent.replace(/Option/,"-Option");
		vContent = vContent.replace(/Template/,"-Template");
		this.aTemplateTitle.push(vContent);
	};

}
//----End of Method init_ID Definition

						
//#################################################################
//# Method: init_content  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function init_content_QTemplates() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:init_content()-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.init_content();
	//-------------------------------------------------------
	var vContent = "";
	for (var i=1; i<=this.rows; i++) {
		for (var j=1; j<=this.cols; j++) {
			vContent = "undefined";
			//vContent = "undefined R"+i;
			//if (j<=this.aColTitle.length) {
			//	vContent = "undefined "+this.aColTitle[j-1];
			//};
			if (i<=this.aTemplateID.length) {
				vContent += " "+this.aTemplateID[i-1];
			};
			this[i][j] = vContent;
		};
	};
}
//----End of Method init_content Definition


						
//#################################################################
//# Method: show  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function show_QTemplates() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:show()-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.show();
	//-------------------------------------------------------
	var vContentHTML = "";
	vContentHTML +="<table border=2>";
	//---TABLE ROWS---
	for (var i=1; i<=this.rows; i++) {
		vContentHTML += this.show_ID_header(i);
		vContentHTML += this.show_row(i);
	};
	//---TABLE TAIL---
	vContentHTML +="</table>";
	//alert("matrix.js:62 - m_create_matrix() this.rows="+this.rows);
	return vContentHTML; 

}
//----End of Method show Definition

						
//#################################################################
//# Method: show_row  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function show_row_QTemplates(pi) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:show_row(pi)-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.show_row(pi);
	//-------------------------------------------------------
	var vContentHTML = "";
	//alert("matrix.js:126 m_show_row_matrix()\n Name: "+this.name);
	//---TABLE HEADER---
	// vContentHTML += B_FONT_ARIAL + "<b>" + this.name + "</b>" + B_FONT_ARIAL;
	//---TABLE ROW---
	vContentHTML +="<tr>";
	for (var j=1; j<=this.cols; j++) {
		//vContentHTML +="<td><nobr>" + this[pRow][j] + "</nobr></td>";
		vContentHTML +="<td>" + this[pRow][j] + "</td>";
	};
	vContentHTML +="</tr>";
	//alert("matrix.js:126 m_show_row_matrix()\n Name: "+this.name);
	return vContentHTML; 

}
//----End of Method show_row Definition


						
//#################################################################
//# Method: edit  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function edit_QTemplates() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:edit()-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.edit();
	//-------------------------------------------------------
	var vContentHTML = "";
	//alert("matrix.js:122 m_edit_matrix()\n Name: "+this.name);
	//---TABLE HEADER---
	// vContentHTML += B_FONT_ARIAL + "<b>" + this.name + "</b>" + B_FONT_ARIAL;
	vContentHTML +="<table border=2>";
	vContentHTML +="<tr>";
	//---TABLE ROWS---
	for (var i=1; i<=this.rows; i++) {
		vContentHTML +="<tr>";
		// vContentHTML +="<th>R" + i + "</th>";
		vContentHTML += this.edit_row(i);
		vContentHTML +="</tr>";
	};
	//---TABLE TAIL---
	vContentHTML +="</table>";
	//'alert("matrix.js:62 - m_create_matrix() this.rows="+this.rows);
	return vContentHTML; 

}
//----End of Method edit Definition


						
//#################################################################
//# Method: edit_row  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function edit_row_QTemplates(pi) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:edit_row(pi)-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.edit_row(pi);
	//-------------------------------------------------------
	//return this.edit_row_size(pi,this.textareaHeight,this.textareaWidth);
	
	var vContentHTML = "";
	vContentHTML += this.row_ID_header(pi);
	var vCols = this.textareaWidth;
	var vRows = this.textareaHeight;
	if ((pi % 2) == 0) {
		vRows = 3*this.textareaHeight;
	}
	vContentHTML += this.edit_row_size(pi,vRows,vCols);
	
	return vContentHTML;

}
//----End of Method edit_row Definition

			
						
//#################################################################
//# Method: row_ID_header  
//#    used in Class: QTemplates
//#                
//# Comment:                        
//#
//# created               16.10.2014             
//# last modifications    16.10.2014             
//#################################################################

function row_ID_header_QTemplates(pi) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("qtemplates.js:row_ID_header(pi)-Call")
	//----Create Object/Instance of QTemplates----
	//    var vMyInstance = new QTemplates();
	//    vMyInstance.row_ID_header(pi);
	//-------------------------------------------------------
	var vContentHTML = "";
	vContentHTML +="<tr>";
	//vContentHTML +="<th>R" + pi + "</th>";
	for (var j=1; j<=this.cols; j++) {
		var vColTitle = "undefined R"+pi;
		if (j<=this.aColTitle.length) {
			vColTitle = "("+pi+") "+this.aColTitle[j-1];
		};
		vColTitle += " "+this.aTemplateTitle[pi-1] ;
		vContentHTML +="<td><nobr><b>" + vColTitle + "</b></nobr></td>";
	};
	vContentHTML +="</tr>";
			
	return vContentHTML;

};
//----End of Method row_ID_header Definition