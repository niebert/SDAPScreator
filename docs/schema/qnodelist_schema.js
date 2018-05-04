/*
"uniqueItems": true,
"items": {
    "title": "Attrib",
    "type": "object",
    "uniqueItems": true,
    "headerTemplate": "{{self.name}}",

*/
vDataJSON["qnodelist"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "additionalProperties": true,
    "title": "QNode Schema",
    "definitions": {},
    "type": "object",
    "id": "https://niebert.github.io/json-editor",
    "defaultProperties": [
        "listname",
        "language",
        "qnodelist"
    ],
    "properties": {
        "listname": {
            "type": "string",
            "id": "/properties/listname",
            "title": "QNode List:",
            "default": "My QNode List",
            "format": "text",
            "description": "This is a QNode List in english"
        },
        "language":{
          "type": "string",
          "id": "/properties/language",
          "title": "Language",
          "default": "en",
          "description": "Language in which the QNode definitions are stored.",
          "enum": [
            "en",
            "es",
            "de",
            "fr",
            "it",
            "nl",
            "ja",
            "pl",
            "ru",
            "sv",
            "vi",
            "ar",
            "id",
            "ms",
            "ca",
            "cs",
            "eu",
            "fa",
            "ko",
            "hu",
            "no",
            "pt",
            "ro",
            "sr",
            "sh",
            "fi",
            "tr",
            "uk",
            "zh",
            "bs",
            "bg",
            "da",
            "et",
            "el",
            "eo",
            "gl",
            "he",
            "hr",
            "lv",
            "lt",
            "nn",
            "sk",
            "sl",
            "th"
          ],
          "options": {
            "enum_titles": [
                "en - English",
                "es - Spanish",
                "de  - German",
                "fr - French",
                "it - Italian",
                "nl - Dutch",
                "ja - Japanese",
                "pl - Polish",
                "ru - Russian",
                "sv - Swedish",
                "vi - Vietnamese",
                "ar - Arabic",
                "id - Indonesian",
                "ms - Malay",
                "ca - Catalan",
                "cs - Czech",
                "eu - Basque",
                "fa - Persian",
                "ko - Korean",
                "hu - Hungarian",
                "no - Norwegian",
                "pt - Portuguese",
                "ro - Romanian",
                "sr - Serbian",
                "sh - Serbo-Croatian",
                "fi - Finnish",
                "tr - Turkish",
                "uk - Ukrainian",
                "zh - Chinese",
                "bs - Bosnian",
                "bg - Bulgarian",
                "da - Danish",
                "et - Estonian",
                "el - Greek",
                "eo - Esperanto",
                "gl - Galician",
                "he - Hebrew",
                "hr - Croatian",
                "lv - Latvian",
                "lt - Lithuanian",
                "nn - Norwegian Nynorsk",
                "sk - Slovak",
                "sl - Slovenian",
                "th - Thai"
            ]
          }
        },
        "qnodelist": {
            "title": "QNode List Templates",
            "type": "array",
            "id": "/properties/qnodelist",
            "format": "tabs",
            "uniqueItems": true,
            "items": {
                "type": "object",
                "id": "/properties/qnodelist/items",
                "headerTemplate": "{{self.name}}",
                "defaultProperties": [
                    "name",
                    "file",
                    "latex",
                    "xml",
                    "html"
                ],
                "properties": {
                    "name": {
                        "type": "string",
                        "id": "/properties/qnodelist/items/properties/name",
                        "title": "Title of 'root.qnodelist.*.name' Type: 'string'",
                        "default": "My QNode",
                        "format": "text",
                        "description": "An explanation for 'root.qnodelist.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.name'."
                    },
                    "file": {
                        "type": "string",
                        "id": "/properties/qnodelist/items/properties/file",
                        "title": "Title of 'root.qnodelist.*.file' Type: 'string'",
                        "default": "header1",
                        "format": "text",
                        "description": "An explanation for 'root.qnodelist.*.file' about the purpose of string instance with editor path 'root.qnodelist.*.file'."
                    },
                    "latex": {
                        "type": "object",
                        "id": "/properties/qnodelist/items/properties/latex",
                        "defaultProperties": [
                            "tempate",
                            "options",
                            "variables"
                        ],
                        "properties": {
                            "tempate": {
                                "type": "string",
                                "id": "/properties/qnodelist/items/properties/latex/properties/tempate",
                                "title": "Title of 'root.qnodelist.*.latex.tempate' Type: 'string'",
                                "default": "LaTeX\nString\nof QNode",
                                "format": "textarea",
                                "description": "An explanation for 'root.qnodelist.*.latex.tempate' about the purpose of string instance with editor path 'root.qnodelist.*.latex.tempate'."
                            },
                            "options": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/latex/properties/options",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/latex/properties/options/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/latex/properties/options/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.latex.options.*.name' Type: 'string'",
                                            "default": "Option1 Description",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.latex.options.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.latex.options.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/latex/properties/options/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.latex.options.*.value' Type: 'string'",
                                            "default": "Value of Option1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.latex.options.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.latex.options.*.value'."
                                        }
                                    }
                                }
                            },
                            "variables": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/latex/properties/variables",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/latex/properties/variables/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/latex/properties/variables/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.latex.variables.*.name' Type: 'string'",
                                            "default": "Name of Variable1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.latex.variables.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.latex.variables.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/latex/properties/variables/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.latex.variables.*.value' Type: 'string'",
                                            "default": "Replace String of Variable 1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.latex.variables.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.latex.variables.*.value'."
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "xml": {
                        "type": "object",
                        "id": "/properties/qnodelist/items/properties/xml",
                        "defaultProperties": [
                            "tempate",
                            "options",
                            "variables"
                        ],
                        "properties": {
                            "tempate": {
                                "type": "string",
                                "id": "/properties/qnodelist/items/properties/xml/properties/tempate",
                                "title": "Title of 'root.qnodelist.*.xml.tempate' Type: 'string'",
                                "default": "XML\nString\nof QNode",
                                "format": "textarea",
                                "description": "An explanation for 'root.qnodelist.*.xml.tempate' about the purpose of string instance with editor path 'root.qnodelist.*.xml.tempate'."
                            },
                            "options": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/xml/properties/options",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/xml/properties/options/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/xml/properties/options/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.xml.options.*.name' Type: 'string'",
                                            "default": "Option1 Description",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.xml.options.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.xml.options.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/xml/properties/options/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.xml.options.*.value' Type: 'string'",
                                            "default": "Value of Option1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.xml.options.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.xml.options.*.value'."
                                        }
                                    }
                                }
                            },
                            "variables": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/xml/properties/variables",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/xml/properties/variables/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/xml/properties/variables/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.xml.variables.*.name' Type: 'string'",
                                            "default": "Name of Variable1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.xml.variables.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.xml.variables.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/xml/properties/variables/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.xml.variables.*.value' Type: 'string'",
                                            "default": "Replace String of Variable 1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.xml.variables.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.xml.variables.*.value'."
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "html": {
                        "type": "object",
                        "id": "/properties/qnodelist/items/properties/html",
                        "defaultProperties": [
                            "tempate",
                            "options",
                            "variables"
                        ],
                        "properties": {
                            "tempate": {
                                "type": "string",
                                "id": "/properties/qnodelist/items/properties/html/properties/tempate",
                                "title": "Title of 'root.qnodelist.*.html.tempate' Type: 'string'",
                                "default": "HTML\nString\nof QNode",
                                "format": "textarea",
                                "description": "An explanation for 'root.qnodelist.*.html.tempate' about the purpose of string instance with editor path 'root.qnodelist.*.html.tempate'."
                            },
                            "options": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/html/properties/options",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/html/properties/options/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/html/properties/options/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.html.options.*.name' Type: 'string'",
                                            "default": "Option1 Description",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.html.options.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.html.options.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/html/properties/options/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.html.options.*.value' Type: 'string'",
                                            "default": "Value of Option1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.html.options.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.html.options.*.value'."
                                        }
                                    }
                                }
                            },
                            "variables": {
                                "type": "array",
                                "id": "/properties/qnodelist/items/properties/html/properties/variables",
                                "format": "tabs",
                                "items": {
                                    "type": "object",
                                    "id": "/properties/qnodelist/items/properties/html/properties/variables/items",
                                    "defaultProperties": [
                                        "name",
                                        "value"
                                    ],
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/html/properties/variables/items/properties/name",
                                            "title": "Title of 'root.qnodelist.*.html.variables.*.name' Type: 'string'",
                                            "default": "Name of Variable1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.html.variables.*.name' about the purpose of string instance with editor path 'root.qnodelist.*.html.variables.*.name'."
                                        },
                                        "value": {
                                            "type": "string",
                                            "id": "/properties/qnodelist/items/properties/html/properties/variables/items/properties/value",
                                            "title": "Title of 'root.qnodelist.*.html.variables.*.value' Type: 'string'",
                                            "default": "Replace String of Variable 1",
                                            "format": "text",
                                            "description": "An explanation for 'root.qnodelist.*.html.variables.*.value' about the purpose of string instance with editor path 'root.qnodelist.*.html.variables.*.value'."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
