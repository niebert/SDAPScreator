//#################################################################
//# Javascript Class: XMLparser()
//#       SuperClass: 
//#   Class Filename: XMLparser.js
//#                
//# Author of Class:      Engelbert Niehaus                    
//# email:                niehaus@uni-landau.de                 
//# created               22.10.2014             
//# last modifications    22.10.2014             
//# GNU Public License - OpenSource
//# created with JavaScript Class Generator by Engelbert Niehaus 
//#################################################################

//---------------------------------------------------------------------
//---Import this Class in HTML-File with
// <SCRIPT LANGUAGE="JavaScript" SRC="myclass.js"> </SCRIPT>
//---------------------------------------------------------------------
//---Constructor of Class XMLparser() 
// Call the constructor for creating an instance of class XMLparser
// by the following command in HTML-file that imports this class
// var vMyInstance = new XMLparser();
//---------------------------------------------------------------------

function XMLparser () {
	// no superclass defined

	//---Attributes-------------------------
	this.aParent = null;
	this.aText = "";
	this.aTreeXML = null;

	//---Methods----------------------------
	this.init			 = init_XMLparser;
	this.init_parent	 = init_parent_XMLparser;
	this.parse			 = parse_XMLparser;
	this.checkXML		 = checkXML_XMLparser;
	this.exportTree		 = exportTree_XMLparser;
	this.handleNode		 = handleNode_XMLparser;

	//--------------------------------------
}
//---------------------------------------------------------------------
//----Attributes-------------------------------------------------------
// If you want to access the attributes of XMLparser, use
// the attribute name with a leading "this.", e.g.
// this.myattrib3 = "Hello World";
//---------------------------------------------------------------------
//----Methodes---------------------------------------------------------
// In the definition of the methods of  'XMLparser'
// the function name is extended with '_XMLparser'.
// This is done to avoid name space conflicts, if you overwrite a 
// method 'my_method()' that was inherited from a superclass 'MySuperClass' e.g.
//   SuperClass: MySuperClass.my_method()
//   Class:       XMLparser.my_method()
// The method definitions are as follows
//   function my_method_XMLparser(...) { .....
// and
//   function my_method_MySuperClass(...) { .....
//---------------------------------------------------------------------
//---Methods of Class "XMLparser()" defined as JS functions 
//---------------------------------------------------------------------
						
//#################################################################
//# Method: init  
//#    used in Class: XMLparser
//#                
//# Comment:                        
//#
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function init_XMLparser(pText) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:init(pText)-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.init(pText);
	//-------------------------------------------------------
	this.aText = pText;
	this.aTreeXML = null;

}
//----End of Method init Definition

//#################################################################
//# Method: init_parent  
//#    used in Class: XMLparser
//#                
//# Comment:                        
//#
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function init_parent_XMLparser(pParent) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:init(pText)-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.init(pText);
	//-------------------------------------------------------
	this.aParent = pParent;
}
//----End of Method init Definition
						
//#################################################################
//# Method: checkXML  
//#    used in Class: XMLparser
//#                
//# Comment:                        
//#
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function checkXML_XMLparser(pText) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:checkXML(pText)-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.checkXML(pText);
	//-------------------------------------------------------

}
//----End of Method checkXML DefcheckXMLion

						
//#################################################################
//# Method: parse  
//#    used in Class: XMLparser
//#                
//# Comment: if this.aTAG="BODY" then this.aText contains the block                       
//#          between <BODY> and </BODY>. Parsing append all 
//#          Children to this.aChilden. aTAG="" means block is 
//#          a string without XML-Tags.
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function parse_XMLparser(pXMLstring) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:parse()-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.parse();
	//-------------------------------------------------------
	this.aText = pXMLstring;
	if (window.DOMParser) {
    	parser=new DOMParser();
    	this.aTreeXML = parser.parseFromString(this.aText,"text/xml");
	} else {
	// Internet Explorer
	    this.aTreeXML = new ActiveXObject("Microsoft.XMLDOM");
    	this.aTreeXML.async=false;
	    this.aTreeXML.loadXML(this.aText);
	}
}
//----End of Method parse Definition

						
//#################################################################
//# Method: exportTree  
//#    used in Class: XMLparser
//#                
//# Comment:                        
//#
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function exportTree_XMLparser() {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:exportTree()-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.exportTree();
	//-------------------------------------------------------
	var vNode = this.aTreeXML.getElementsByTagName("QUESTIONNAIRE");
	var vChildNodes = null;
	var vFileLoader = this.aParent;
	if (vNode.length == 0) {
		alert("ERROR: XML-File contains no <QUESTIONNAIRE>-Definition!\nxmlparser.js:186 - exportTree()-Call");
	} else if (vNode.length > 1) {
		alert("ERROR: XML-File contains more than 1 <QUESTIONNAIRE>-Definition!\nxmlparser.js:188 - exportTree()-Call");
	} else {     
		if (vNode[0].getAttribute('FOLDER')) {	
			if (vNode[0].getAttribute('FOLDER') != "") {
				vFileLoader.folder = vNode[0].getAttribute('FOLDER');
			} else {
				alert("FOLDER-Attribute defined as empty string '' in QUESTIONNAiRE");
			}
		} else {
			alert("FOLDER-Attribute not defined in QUESTIONNAiRE.\nWill use 'qnodes/' as default.\nxmlparser.js:199");
			vFileLoader.folder = "qnodes/"
		};
		var vQNodes = vNode[0].getElementsByTagName("QNODE");
		//alert("vQNodes.length="+vQNodes.length);
		//---QNODES----
		for (var i=0;i<vQNodes.length;i++) {
			//---Create a new Record-----
			//FileRecord("Q_TITLE","FILENAME","L","VARIABLES","OPTIONS"));
			vFileLoader.append_row();
			vFileRecord = vFileLoader[vFileLoader.rows];
			for (var j=1;j<=vFileLoader.cols;j++) {
				vFileRecord[j]= "";
			};
			//---Store LOAD-Attribute----
			//alert("vQNodes["+i+"].getAttribute('LOAD')="+vQNodes[i].getAttribute('LOAD'));
			vFileRecord[3] = vQNodes[i].getAttribute('LOAD');
			var vName  = "";
			var vValue = "";
			var vContent = "";
			vNode = vQNodes[i].getElementsByTagName("TYPE");
			if (vNode.length > 0) {
				vValue = vNode[0].childNodes[0].nodeValue;
				vValue = vValue.replace(/\s/g,"");
				//alert("TYPE="+vValue);
				vFileRecord[2] = vValue.toLowerCase();
			}
			vNode = vQNodes[i].getElementsByTagName("VARIABLES");
			if (vNode.length > 0) {
				var vDefArray = vNode[0].getElementsByTagName("VARDEF");
				vContent = "";
				for (var j=0;j< vDefArray.length; j++) {
					vName  = vDefArray[j].getAttribute('NAME');
					vValue  = vDefArray[j].getAttribute('VALUE');
					//vValue = vValue.replace(/\s$/g,"");
					vContent += vName+"|"+vValue +"\n";
					if (vName == "Q_TITLE") {
						vFileRecord[1] = vValue;
					}
				}
				vFileRecord[4] = vContent;
				//alert("VARIABLES:\n"+vContent);
			};
			vNode = vQNodes[i].getElementsByTagName("OPTIONS");
			if (vNode.length > 0) {
				var vDefArray = vNode[0].getElementsByTagName("OPTDEF");
				vContent = "";
				for (var j=0;j< vDefArray.length; j++) {
					vName  = vDefArray[j].getAttribute('TEXT');
					vValue  = vDefArray[j].getAttribute('VALUE');
					vContent += vName+"|"+vValue +"\n";
				}
				vFileRecord[5] = vContent;
				//alert("OPTIONS:\n"+vContent);
			}
		}
	};
	// <QUESTIONNAIRE FOLDER="qnodes/">
	//   <QNODE LOAD="Y">
	//      <TYPE>1header</TYPE>
	//      <VARIABLES>
	//         <VARDEF NAME="Q_TITLE" VALUE="Qestionnaire Header"/>
	//         <VARDEF NAME="VAR1" VALUE="default1"/>
	//         <VARDEF NAME="VAR2" VALUE="default2"/>
	//      </VARIABLES>
	//      <OPTIONS>
	//         <OPTDEF TEXT="Option 1" VALUE="Opt1"/>
	//         <OPTDEF TEXT="Option 2" VALUE="Opt2"/>
	//         <OPTDEF TEXT="Option 3" VALUE="Opt3"/>
	//         <OPTDEF TEXT="Option 4" VALUE="Opt4"/>
	//         <OPTDEF TEXT="Option 5" VALUE="Opt5"/>
	//      </OPTIONS>
	//   </QNODE>
	//   <QNODE LOAD="Y">
	//      <TYPE>section</TYPE>
	//      <VARIABLES>
	//         <VARDEF NAME="Q_TITLE" VALUE="First Section"/>
	//         <VARDEF NAME="VAR3" VALUE="default3"/>
	//         <VARDEF NAME="VAR4" VALUE="default4"/>
	//         <VARDEF NAME="VAR5" VALUE="default5"/>
	//      </VARIABLES>
	//      <OPTIONS>
	//         <OPTDEF TEXT="Option 1" VALUE="Opt1"/>
	//         <OPTDEF TEXT="Option 2" VALUE="Opt2"/>
	//      </OPTIONS>
	//   </QNODE>
	//   <QNODE LOAD="Y">
	//      <TYPE>short4long1other</TYPE>
	//      <VARIABLES>
	//         <VARDEF NAME="Q_TITLE" VALUE="First Section"/>
	//         <VARDEF NAME="VAR6" VALUE="default6"/>
	//      </VARIABLES>
	//      <OPTIONS>
	//         <OPTDEF TEXT="Option 1" VALUE="Opt1"/>
	//         <OPTDEF TEXT="Option 2" VALUE="Opt2"/>
	//         <OPTDEF TEXT="Option 3" VALUE="Opt3"/>
	//         <OPTDEF TEXT="Option 4" VALUE="Opt4"/>
	//      </OPTIONS>
	//   </QNODE>
	// </QUESTIONNAIRE>
	// These are s ome typical DOM properties:
	// 
	//     x.nodeName - the name of x
	//     x.nodeValue - the value of x
	//     x.parentNode - the parent node of x
	//     x.childNodes - the child nodes of x
	//     x.attributes - the attributes nodes of x
	// 
	// Note: In the list above, x is a node object.
	// XML DOM Methods
	// 
	//     x.getElementsByTagName(name) - get all elements with a specified tag name
	//     x.appendChild(node) - insert a child node to x
	//     x.removeChild(node) - remove a child node from x
	//     x.getAttribute(attrib_name) - get the value of attribute with attrib_name";
	// Note: In the list above, x is a node object.
	//Gets TYPE
	// vQNode.getElementsByTagName("TYPE")[0].childNodes[0].nodeValue;

	// x=xmlDoc.getElementsByTagName('book');
	// 
	// for (i=0;i<x.length;i++) {
	//   document.write(x[i].getAttribute('category'));
	//   document.write("<br>");
	// }

	
	// var str = '<books>' +
	// 			  '  <book title="A Tale of Two Cities"/>' +
	// 			  '  <book title="1984" category="fiction"/>' +
	// 			  '</books>';
	// 	
	// 	var vXMLparser = new XMLparser();
	// 	var XMLdoc = vXMLparser.parse(str);
	// 	
	// 	var bookEls = XMLdoc.getRootElement().getChildElements();
	// 	
	// 	for (var i=0; i<bookEls.length; i++) {
	// 		var bookEl = bookEls[i];
	// 		// alerts "Element name is 'book' and book title is '...'"
	// 		alert("Element name is '" + bookEl.getName() + 
	// 			"' and book title is '" + 
	// 			bookEl.getAttributeValue("title") + "'"
	// 		);
	// 	}
}
//----End of Method exportTree() Definition

						
//#################################################################
//# Method: handleNode  
//#    used in Class: XMLparser
//#                
//# Comment:                        
//#
//# created               22.10.2014             
//# last modifications    22.10.2014             
//#################################################################

function handleNode_XMLparser(pNode) {
	//----Debugging------------------------------------------
	// The following alert-Command is useful for debugging 
	//alert("XMLparser.js:handleNode()-Call")
	//----Create Object/Instance of XMLparser----
	//    var vMyInstance = new XMLparser();
	//    vMyInstance.handleNode();
	//-------------------------------------------------------
	if (pNode.nodeName == "QNODE") {
	} else if (pNode.nodeName == "VARIABLES") {
	} else {
	};
}
//----End of Method handleNode() Definition
			