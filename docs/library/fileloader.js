//#################################################################
//# Javascript Class: FileLoader()
//#       SuperClass: Matrix
//#   Class Filename: fileloader.js
//#
//# Author of Class:      Engelbert Niehaus
//# email:                niehaus@uni-landau.de
//# created               4.2.2013
//# last modifications    4.2.2013
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class FileLoader()
// Call the constructor for creating an instance of class FileLoader
// by the following command in HTML-file that imports this class
// var vMyInstance = new FileLoader();
//---------------------------------------------------------------------

function FileLoader () {
	//--------------------------------------
	//---Super Class------------------------
	this.SuperClass = Matrix;
	this.SuperClass();
	//--------------------------------------
	this.assSDAPScreator = null;
	//---Attributes-------------------------
	this.name = "FileLoader";
	this.folder = "qnodes/";
	this.preload_index = 0;
	this.fileindex = 0;
	this.nextfile  = "empty.html"; //used for HTML-Load Chain
	this.finalfile = "empty.html"; //used for HTML-Load Chain
	this.XMLparser = new XMLparser();
	//---Methods----------------------------
	this.init				 = init_FileLoader;
	this.loadQNodeXML		 = loadQNodeXML_FileLoader;
	this.preload_index_OK	 = preload_index_OK_FileLoader;
	this.init_parent		 = init_parent_FileLoader;
	this.next_index			 = next_index_FileLoader;
	this.get_next_filename	 = get_next_filename_FileLoader;
	this.get_Q_TITLE		 = get_Q_TITLE_FileLoader;
	this.get_VARIABLES		 = get_VARIABLES_FileLoader;
	this.get_OPTIONS		 = get_OPTIONS_FileLoader;
	this.setParentAss		 = setParentAss_FileLoader;
	this.unloadQNodes		 = unloadQNodes_FileLoader;
	this.show_QNode_selector = show_QNode_selector_FileLoader;
	this.show_QNode_links	 = show_QNode_links_FileLoader;
	this.split_qnodefiles	 = split_qnodefiles_FileLoader;
	this.preload			 = preload_FileLoader;
	this.check_preload		 = check_preload_FileLoader;
	this.set_loaded			 = set_loaded_FileLoader;
	this.set_unloaded		 = set_unloaded_FileLoader;
	this.appendChildLoader	 = appendChildLoader_FileLoader;

	//--------------------------------------
	// FileLoader-Row = ("Q_TITLE","FILENAME","L","VARIABLES","OPTIONS")
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of FileLoader, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'FileLoader'
// the function name is extended with '_FileLoader'.
// This is done to avoid name space conflicts, if you overwrite a
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       FileLoader.my_method()
// The method definitions are as follows
//   function my_method_FileLoader(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "FileLoader()" defined as JS functions
//---------------------------------------------------------------------

//#################################################################
//# Method: init_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: overwrites the init-method of Matrix()
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function init_FileLoader() {
	//---Method Class:  "FileLoader" defined in fileloader.js---
    this.preload_index = 0;
	this.removeall();
	this.rows = 0;
	this.cols = 5;
	this.XMLparser.init_parent(this);
}

//#################################################################
//# Method: loadQNodeXML_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: loades the loadXML-method of Matrix()
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function loadQNodeXML_FileLoader(pXMLstring) {
	//---Method Class:  "FileLoader" defined in fileloader.js---
	//alert("fileloader.js:113 - loadXML_FileLoader(pXMLstring)\n"+pXMLstring);
	this.XMLparser.parse(pXMLstring);
	this.XMLparser.exportTree();
}

//#################################################################
//# Method: preload_index_OK_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: Checks if preload index in within the range
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function preload_index_OK_FileLoader() {
	//---Method Class:  "FileLoader" defined in fileloader.js---
    return ((this.preload_index>0) && (this.preload_index <= this.rows));
}


//#################################################################
//# Method: init_parent
//#    used in Class: FileLoader
//#
//# Comment:  pParent is the SDAPScreator.
//#           same functionality as setParentAss_FileLoader
//# created               7.9.2014
//# last modifications    7.9.2014
//#################################################################

function init_parent_FileLoader(pParent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:107 - init_parent()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.init_parent(pParent);
	//-------------------------------------------------------
	this.assSDAPScreator = pParent;

}
//----End of Method init_parent Definition


//#################################################################
//# Method: check_preload_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: increase preload_index and preload a single QNode File
//#          that has the Preload-Tag "L" set in config.html
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function check_preload_FileLoader() {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//alert("fileloader.js:169 check_preload()\n Rows: "+this.rows+" preload_index="+this.preload_index);
	// this.preload_index = 100;
	if (this.preload_index > this.rows) {
		top.main.document.location='./frames/empty.html';
		//alert("All QNodes defined in config.html were preloaded!\nfileloader.js:194 - check_preload_FileLoader()");
	} else {
		this.preload();
	};
}

//#################################################################
//# Method: preload_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: increase preload_index and preload a single Grammar File
//#          that has the Preload-Tag "L" set in config.html
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function preload_FileLoader() {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//alert("fileloader.js:169 preload_FileLoader()\n Name: "+this.name);
	// this.preload_index = 100;
	if (this.preload_index == 0) {
		//with (this.assSDAPScreator) {
			//alert("textGrammar="+textGrammar+"\nfileloader.js:169");
			//import_grammar(textGrammar,"SYSTEM");
		//}
		//alert("fileloader.js:169 - this.preload_index = 0 ")
	}
	this.next_index();
	if (this.preload_index > this.rows) {
		var vEval ="top.main.document.location.href = 'frames/postprocessingload.html'";
		top.setTimeout(vEval,100);
		//top.main.document.location='./frames/empty.html';
		//alert("All grammars defined in config.html were preloaded!\nfileloader.js:149 - preload_FileLoader for QNodes ()");
	} else if (this[this.preload_index][3] == "W") {
	 	this.assSDAPScreator.wizzard.active = 1;
		this[this.preload_index][3] = "Wizzard";
		alert("Start Wizzard: "+this[this.preload_index][2] + ".html\nfileloader.js:188 - preload()");
		top.main.document.location = this.folder + this[this.preload_index][2] + ".html";
	} else {
	    this.assSDAPScreator.wizzard.active = 0;
		this[this.preload_index][3] = "Loaded";
		//alert("preload_FileLoader():256 - Load: "+this[this.preload_index][2] + ".html");
		top.main.document.location = this.folder + this[this.preload_index][2] + ".html";
	};
}


//#################################################################
//# Method: next_index
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               14.10.2014
//# last modifications    14.10.2014
//#################################################################

function next_index_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:next_index()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.next_index();
	//-------------------------------------------------------
	this.preload_index++;
	//if (this.preload_index <= this.rows) alert("fileloader.js:200 preload_FileLoader()\nRows="+this.rows+"\nFilename: "+this[this.preload_index][2]+"\nLOAD="+this[this.preload_index][3]);
	while ((this.preload_index <= this.rows)
		&& (this[this.preload_index][3] != "L")
		&& (this[this.preload_index][3] != "W")
		) {
		this.preload_index++;
	};

}
//----End of Method next_index Definition

//#################################################################
//# Method: get_next_filename
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               14.10.2014
//# last modifications    14.10.2014
//#################################################################

function get_next_filename_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:get_next_filename()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.get_next_filename();
	//-------------------------------------------------------
	var vReturn = "";
	this.next_index();
	if (this.preload_index > this.rows) {
		vReturn = "frames/postprocessingload.html";
	} else if (this[this.preload_index][3] == "W") {
		this.assSDAPScreator.wizzard.active = 1;
		this[this.preload_index][3] = "Wizzard";
		vReturn = "frames/wizzardqnode.html";
	} else {
	    this.assSDAPScreator.wizzard.active = 0;
		this[this.preload_index][3] = "Loaded";
		//alert("preload_FileLoader():256 - Load: "+this[this.preload_index][2] + ".html");
		vReturn = this.folder + this[this.preload_index][2] + ".html";
	};
	return vReturn;
}
//----End of Method get_next_filename Definition


//#################################################################
//# Method: get_Q_TITLE
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               14.10.2014
//# last modifications    14.10.2014
//#################################################################

function get_Q_TITLE_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:get_Q_TITLE()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.get_Q_TITLE();
	//-------------------------------------------------------
	var vReturn = "";
	//if ((this.preload_index>=0) && (this.preload_index <= this.rows)) {
	if (this.preload_index_OK()) {
		vReturn = this[this.preload_index][1];
	};
	return vReturn;
}
//----End of Method get_Q_TITLE Definition

//#################################################################
//# Method: get_VARIABLES
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               14.10.2014
//# last modifications    14.10.2014
//#################################################################

function get_VARIABLES_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:get_VARIABLES()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.get_VARIABLES();
	//-------------------------------------------------------
	var vReturn = "";
	//if ((this.preload_index>=0) && (this.preload_index <= this.rows)) {
	if (this.preload_index_OK()) {
		vReturn = this[this.preload_index][4];
	};
	return vReturn;
}
//----End of Method get_VARIABLES Definition

//#################################################################
//# Method: get_OPTIONS
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               14.10.2014
//# last modifications    14.10.2014
//#################################################################

function get_OPTIONS_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:get_OPTIONS()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.get_OPTIONS();
	//-------------------------------------------------------
	var vReturn = "";
	//if ((this.preload_index>=0) && (this.preload_index <= this.rows)) {
	if (this.preload_index_OK()) {
		vReturn = this[this.preload_index][5];
	};
	return vReturn;
}
//----End of Method get_OPTIONS Definition


//#################################################################
//# Method: setParentAss
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function setParentAss_FileLoader(pSDAPScreator) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:84 - setParentAss(pSDAPScreator)-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.setParentAss(pSDAPScreator);
	this.assSDAPScreator = pSDAPScreator;

}
//----End of Method split_qnodefile Definition


//#################################################################
//# Method: split_qnodefiles
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function split_qnodefiles_FileLoader(pTextAreaString) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:74 - split_qnodefiles("+pTextAreaString+")-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.split_qnodefile(pTextAreaString);
	//-------------------------------------------------------
	var vQNodeFileArray = pTextAreaString.split("\n");
	//alert("fileloader.js:79 - split_qnodefile() length after split="+vQNodeFileArray.length+"'")
	for (var i=0; i<vQNodeFileArray.length; i++) {
		var vTriple = vQNodeFileArray[i].split("|");
		if (vTriple.length > 1) {
			this.add(vTriple);
		};
	}
	//alert("fileloader.js:79 - split_qnodefile() length FileLoader='"+this.rows+"'")
}
//----End of Method split_qnodefile Definition


//#################################################################
//# Method: show_QNode_selector
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               16.10.2014
//# last modifications    16.10.2014
//#################################################################

function show_QNode_selector_FileLoader() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	//alert("fileloader.js:show_QNode_selector()-Call")
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.show_QNode_selector();
	//-------------------------------------------------------
	var vEval = "top.main.document.location.href = '"+this.folder+"1qnodeselector.html'";
	this.assSDAPScreator.setTimeout(vEval,500);
}
//----End of Method show_QNode_selector Definition



//#################################################################
//# Method: show_QNode_links_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: overwrites the show-method of Matrix()
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function show_QNode_links_FileLoader() {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//---Overwrites Method from "Matrix" defined in matrix.js---
	var vContentHTML = "";
	//alert("fileloader.js:136 - m_show_QNodeFile()\n Name: "+this.name);
	//---TABLE HEADER---
	// vContentHTML += B_FONT_ARIAL + "<b>" + this.name + "</b>" + B_FONT_ARIAL;
	vContentHTML +="<table border=0>";
	vContentHTML +="<tr>";
	//---TABLE ROWS---
	for (var i=1; i<=this.rows; i++) {
		vContentHTML +="<tr>";
		vContentHTML +="<td><nobr>" + this[i][1] + "</nobr></td>";
		vContentHTML +="<td><nobr><a href=\"../" + this.folder + this[i][2] + ".html\">/"+ this.folder +this[i][2]+".html</a></nobr> "+this[i][3]+"</td>";
		vContentHTML +="</tr>";
	};
	//---TABLE TAIL---
	vContentHTML +="</table>";
	//alert("fileloader.js:108 - m_show_FileLoader() this.rows="+this.rows);
	return vContentHTML;
}

//#################################################################
//# Method: set_loaded_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: set QNode file as loaded
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################

function set_loaded_FileLoader(pFilename) {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//alert("fileloader.js:169 set_loaded_FileLoader()\n Name: "+this.name);
	// this.preload_index = 100;
	if (this.preload_index_OK()) {
		if (this[this.preload_index][2] == pFilename) {
			this[this.preload_index][3] = "Loaded";
		} else {
			alert("fileloader.js:169 set_loaded_FileLoader()\nError Filename Mismatch: "+
				  "\n"+ this[this.preload_index][2] +"!=" +pFilename);
		};
	}
}

//#################################################################
//# Method: set_unloaded_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: set QNode  file as loaded
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################


function set_unloaded_FileLoader(pFilename) {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//alert("fileloader.js:191 set_unloaded_FileLoader()\n Name: "+this.name);
	// this.preload_index = 100;
	for (var i=1; i<=this.rows; i++) {
		if (this[i][2] == pFilename) {
			this[i][3] = "";
		};
	};
}
//#################################################################
//# Method: unloadQNodes_FileLoader
//#    used in Class: FileLoader
//#
//# Comment: set all QNode files as unloaded
//#
//# created               4.2.2013
//# last modifications    4.2.2013
//#################################################################


function unloadQNodes_FileLoader() {
	//---Method Class:  "FileLoader for QNodes " defined in fileloader.js---
	//alert("fileloader.js:191 set_unloaded_FileLoader()\n Name: "+this.name);
	// this.preload_index = 100;
	this.preload_index = 0;
	for (var i=1; i<=this.rows; i++) {
		this[i][3] = "";
	};
	alert("fileloader.js:283 - unloadQNodes() - ToDo - Remove Qnodes in Questionnaire");
}


//#################################################################
//# Method: appendChildLoader
//#    used in Class: FileLoader
//#
//# Comment:
//#
//# created               11.10.2014
//# last modifications    11.10.2014
//#################################################################

function appendChildLoader_FileLoader(pObjectPath) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging
	alert("fileloader.js:325 - appendChildLoader(pObjectPath)-Call");
	//----Create Object/Instance of FileLoader----
	//    var vMyInstance = new FileLoader();
	//    vMyInstance.appendChildLoader(pObjectPath);
	//-------------------------------------------------------

	//>>>> INSERT YOUR CODE HERE <<<<<



}
//----End of Method appendChildLoader Definition
