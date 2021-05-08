
# SDAPScreator
Support Users in Creating a LaTeX Questionnaire that can printed, scanned and processed with SDAPS. See http://www.sdaps.org for further details about SDAPS.

* Use Firefox to start the [Demo of SDAPScreator](http://niebert.github.io/SDAPScreator).

* [Video about Basic Concept of SDAPS](https://www.youtube.com/watch?v=qJhvjqMSYmk)


You can download an image of SDAPS based on Linux, that can be install even on an old PC. The image is provided by the University of Koblenz-Landau can be download at https://support.uni-landau.de/pics/sdaps_urz_lubuntu_1604_180817_iso.zip and install the Linux Operating System with SDAPS on your PC or run the SDAPS Linux Operating System in [VirtualBox](https://en.wikipedia.org/wiki/VirtualBox) if you want to install it on a non-Linux Computer e.g. on WlND0WS or MacOSX in virtual machine. Further installation options can be found of the [SDAPS Homepage](https://sdaps.org/Documentation/Tutorial/)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [German Support Page/Download](#german-support-pagedownload)
- [Command Line - Quick Start](#command-line---quick-start)
  - [Create a Questionnaire](#create-a-questionnaire)
  - [Create SDAPS Project for Questionnaire](#create-sdaps-project-for-questionnaire)
  - [Print questionnaire](#print-questionnaire)
  - [Scan the filled paper and pencil questionnaires](#scan-the-filled-paper-and-pencil-questionnaires)
  - [Join single page TIFF files into one multipage TIFF](#join-single-page-tiff-files-into-one-multipage-tiff)
  - [Add scanned documents to project](#add-scanned-documents-to-project)
  - [Recognize scanned Questionnaires](#recognize-scanned-questionnaires)
  - [Check Recognition of Questionnaires in Frontend](#check-recognition-of-questionnaires-in-frontend)
  - [Create PDF Report of Recognition](#create-pdf-report-of-recognition)
  - [Export CSV Table of Recognition](#export-csv-table-of-recognition)
- [SDAPS Menu](#sdaps-menu)
- [Videos](#videos)
- [Links](#links)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation Support SDAPS Homepage
See https://sdaps.org/install/ for installation support on Linux Operating Systems. You can use e.g. an older Windows computer and install LUbuntu on it and use that with an attached USB scanner for scanning and processing for Paper and Pencil questionnaires. 


## Command Line - Quick Start
The following quick start tutorial assumes that your documents are stored in the subdirectory `/home/myuser/Documents` with a subdirectory `/home/myuser/Documents/SDAPS` that contains all SDAPS project. Adapt the pathname to your home directory and documents folder on your Linux Operating System

### Create a Questionnaire
* Create the Questionnaire with [SDAPS-Creator](http://niebert.github.io/SDAPScreator).
* Save LaTeX questionnaire e.g. as file `my_quest1.tex`


### Create SDAPS Project for Questionnaire
* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) setup_tex (TeX File)`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project setup_tex my_quest1.tex`

### Print questionnaire
The setup command creates the PDF document `questionnaire.pdf` in the project directory e.g. `/home/myuser/Documents/SDAPS/my_project/questionnaire.pdf`. Print this document multiple times for your survey and let fill out the questionnaire on paper for the survey.

### Scan the filled paper and pencil questionnaires
Scan the filled paper and pencil questionnaires with a scanner. E.g. the scanner provides a multipage PDF document with all the scanned questionnaires `filled_quests.pdf`. (300 DPI, grey scale or black and white). Convert the PDF document into multipage TIFF file in monochrome black and white (not grey scale) e.g. `filled_quests.tif`.

### Join single page TIFF files into one multipage TIFF
Sometimes the scanner provides multiple single page TIFF files. If you have Image Magick installed on your Linux Computer you can join multiple TIFF.
* Command: `convert page1.tif page2.tif -append multipage.tif`

### Add scanned documents to project

* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) add (TIFF Files)`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project add  multipage.tif`

### Recognize scanned Questionnaires

* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) recognize`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project recognize`

### Check Recognition of Questionnaires in Frontend

* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) gui`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project gui`

### Create PDF Report of Recognition

* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) report`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project report`

### Export CSV Table of Recognition

* Project Name: `my_project/`
* Linux Command:  `sdaps (Project Path) csv export`
* Example:  `sdaps /home/myuser/Documents/SDAPS/my_project csv export`

## SDAPS Menu
It exists an SDAPS menu to avoid command line execution from console. To use the `SDAPSmenu.sh` on your Linux system it is necessary that `zenity` and `evince` is installed by:
* `sudo apt-get install zenity`
* `sudo apt-get install evince`
Evince is a pdf-viewer used in `SDAPSmenu.sh` and `Zenity` allows user interaction from a shell script. If `zenity` and `evince` are installed you can start `SDAPSmenu.sh` by:
* `sh ./SDAPSmenu.sh`
`SDAPSmenu.sh` is provided the the ZIP-package of `SDAPScreator` on https://www.github.com/niebert/SDAPScreator .


## Videos
* [SDAPS Basic Concept](https://www.youtube.com/watch?v=qJhvjqMSYmk)
* [SDAPS Creator  - Youtube](https://www.youtube.com/watch?v=ZRkTktNf0Dk)
* [SDAPS Menu - Youtube](https://www.youtube.com/watch?v=386l4D3OK0g)

## Links
* [SDAPS Tutorial](https://sdaps.org/Documentation/Tutorial/)
* [SDAPScreator Repository on Github](https://www.github.io/niebert/SDAPScreator)
* [SDAPScreator Demo](https://niebert.github.io/SDAPScreator)
* [e-Question Portal](http://e-question.weebly.com)
