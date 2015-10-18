#!/bin/sh
sudo apt-get install python-distutils-extra python-cairo-dev libtiff5-dev libcairo2-dev libglib2.0-dev
sudo apt-get install python-zbar
sudo apt-get install python-gi python-gi-cairo
sudo apt-get install gir1.2-gtk-3.0
sudo apt-get install pdftk 
#----- "python-pypdf" is an alternative for "pdftk"-----
#sudo apt-get install python-pypdf
sudo apt-get install python-reportlab
sudo apt-get install python-imaging
sudo apt-get install gir1.2-poppler-0.18
sudo apt-get install python-opencv 
sudo apt-get install python2.7-dev
#----LaTeX packages and TeX utils-----------
sudo apt-get install gedit-latex-plugin pgf texlive-fonts-recommended latex-beamer texpower texlive-pictures texlive-latex-extra texpower-examples texlive-science
sudo apt-get install texstudio
#----Scanned Image conversion---------------------------
sudo apt-get install imagemagick
#----View PDF output in SDAPSmenu.sh with evince--------
sudo apt-get install evince
#----zenity is used for SDAPSmenu.sh--------------------
sudo apt-get install zenity 
#----- Now Install SDAPS------
# add repsository for SDAPS
sudo add-apt-repository ppa:benjamin-sipsolutions/sdaps
sudo apt-get update
sudo apt-get install sdaps
