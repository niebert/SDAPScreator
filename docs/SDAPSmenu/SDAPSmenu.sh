#!/bin/bash
clear
# VARIABLE DEFINITION for DIRECTORIES
projectDIR="./projects"
scanDIR="./scanned"
questDIR="./questionnaires"
# DIRECTORY SELECT
zenity --info --text "SDAPS Menu\n----------\nPlease select the folder of your current SDAPS project or\npress [Cancel] and create a new Project"
sdapsPROJECT=`zenity --title="Select SDAPS Project Folder" --filename="$projectDIR" --file-selection --directory`;
baseDIR="$projectDIR"
tmpDIR="$scanDIR/tmp"
scanDIRFORMAT="$scanDIR/TIF"
echo "Startup SDAPS Project Directory: $sdapsPROJECT"
echo "scanDIR = $scanDIR" 
while true; do
	sdapsCMD=`zenity --list \
	 --title="Choose your SDAPS Command" \
	 --column="SDAPS Command" --column="File Type Action" \
	  "Create" "Project LaTeX" \
	  "Print" "PDF Questionnaire" \
	  "Import" "Scanned Files" \
	  "GUI" "Check Scanned Files" \
	  "Report" "Create Report File" \
	  "Export" "CSV Data for Spreadsheet" \
	  "Remove" "SDAPS Project Files" \
	  "Quit" "Exit Enviroment"`
	echo "SDAPS Command: $sdapsCMD"
	# For CREATE enter a new Subdirectory of sdapsPROJECT
	sdapsNEWDIR=""
	case $sdapsCMD in
	   Create) sdapsNEWDIR=`zenity --title="New SDAPS Project Directory" --entry --entry-text="newproject"  text="New SDAPS Folder Name"`
	           sdapsPROJECT="$baseDIR/$sdapsNEWDIR"
	          ;;
	   Print)  echo "Print  $sdapsCMD selected";;
	   Import)  echo "Scanned Images are added to Project by $sdapsCMD"
	   			echo "Select Import Format for Scanned Images"
	   			scanFORMAT=`zenity --list \
				--title="Select Answer for Remove" \
				--column="" --column="Operation" \
				"JPG" "Cellphone JPG Questionnaires" \
				"PDF" "Scanned PDF Questionnaire" \
				"TIF" "Scanned TIFF Monochrome" `
	            echo "Scanned format: $scanFORMAT"
				scanDIRFORMAT="$scanDIR/$scanFORMAT"
	            ;;
	      GUI)  echo "Check Scanned Files execute SDAPS recognize: $sdapsCMD "
	            sdaps $sdapsPROJECT recognize
	            ;;
	   Report)  echo "Run Optical Mark Recorgnition: $sdapsCMD "	   
	            sdaps $sdapsPROJECT recognize
	            ;;
	   Export)  echo "Export CSV Data for Project: \n   sdapsPROJECT"	   
	            ;;
	   Remove)  echo "Remove Project Files: $sdapsCMD "
				sdapsPROJECT=`zenity --title="Delete SDAPS Project Folder" --filename="$projectDIR" --file-selection --directory`;
				Answer=`zenity --list \
				--title="Select Answer for Remove" \
				--column="Answer" --column="Operation" \
				"Yes" "Remove all project files" \
				"No" "Cancel" `
	            echo "Remove Check: $Answer"
				case $Answer in
	              Yes) echo "Perform Remove Project Files"
	                   rm -r $sdapsPROJECT
	                   echo "All files deleted '$sdapsPROJECT'"
	              ;;
				  No) echo "Cancel"
				  ;;
				esac
	            ;;
	   *) echo "Exist SDAPS Zenity";exit;;
	esac
	echo "SDAPS Project: $sdapsPROJECT"
	# Select the SDAPS Questionnaire as LaTeX document
	case $sdapsCMD in
	   Create) sdapsFILE=`zenity --title="Select SDAPS Questionnaire LaTeX File" --file-selection `
	           ;;
	   Import) sdapsIMPORT=`zenity --title="Select Scanned Questionaire Files" --multiple  --filename="$scanDIRFORMAT"  --file-selection --separator=" "`
	           # sdaps PROJECT convert --3d-transform $sdapsIMPORT -o $sdapsDIR/output.tif 
	           echo "Convert and import into File $sdapsDIR/output.tif"
			   t=0
			   #case $sdapsCMD in
			   for iFile in $sdapsIMPORT
	           do
			      t=$(( t + 1 ))
	              echo "$t : Conversion of scanned File $iFile"
	              case $scanFORMAT in
	                PDF) echo "Image Magick Convert $scanFORMAT in $scanDIR"
	                     #vOut=`convert -density 300 $iFile -compress none -threshold 30% -monochrome $scanDIR/output.tif`
	                     #vOut=`convert -density 300 $iFile -compress none -scale 2000x1000  -threshold 30%  -monochrome $scanDIR/output.tif`
	                     #echo "convert -density 300 $iFile -compress none -scale 2000x1000  -threshold 30%  -monochrome $scanDIR/output.tif"
	                     #convert -density 300 $iFile -compress none -scale 8000x4000  -threshold 30%  -monochrome $scanDIR/output.tif
	                     #convert -density 300 $iFile -compress none -scale 10000x5000  -monochrome $scanDIR/output.tif
	                     # rm $scanDIR/output.tif
	                     #convert -density 300 $iFile -scale 2479x3507 -threshold 30% -monochrome $scanDIR/output.tif
	                     #convert $iFile -resize 2479x3507 -threshold $ansThreshold -monochrome -units PixelsPerInch -density 300  $scanDIR/output.tif
	                     convert -density 300 $iFile -scale 2479x3507 -resize 2479x3507 -monochrome $scanDIR/output.tif

	                     #sdaps $sdapsPROJECT convert $iFile -o $scanDIR/output.tif
	                     sdaps $sdapsPROJECT add $scanDIR/output.tif
	                     ;;
	                JPG) echo "Image Magick Convert $scanFORMAT in $scanDIR"
	                     #vOut=`convert -density 300 $iFile -compress none -threshold 30% -monochrome $scanDIR/output.tif`
	                     #vOut=`convert -density 300 $iFile -compress none -scale 2000x1000  -threshold 30%  -monochrome $scanDIR/output.tif`
	                     #convert -density 300 $iFile -compress none -scale 8000x4000  -threshold 30%  -monochrome $scanDIR/output.tif
	                     #convert -density 300 $iFile -compress none -scale 10000x5000  -monochrome $scanDIR/output.tif
	                     #convert -density 300 $iFile -scale 2479x3507 -resize 2479x3507 -threshold 30%-monochrome $scanDIR/output.tif
	                     ansThreshold=$(zenity --entry --text "Please provide threshold to Black and White image - monochrome:" --entry-text "30%")
	                     convert $iFile -resize 2479x3507 -threshold $ansThreshold -monochrome -units PixelsPerInch -density 300 $scanDIR/output.tif
	                     #sdaps $sdapsPROJECT convert $iFile -o $scanDIR/output.tif
	                     sdaps $sdapsPROJECT add $scanDIR/output.tif
	                     ;;
	                TIF) sdaps $sdapsPROJECT add $iFile
	                     echo "File is TIF monochrome: $iFile" 
	                     sdaps $sdapsPROJECT add $iFile
	                     ;;
	                  * ) echo
	              esac
			   done
			   # $sdapsIMPORT="$sdapsDIR/output.tif"
	           ;;
	   Report)  echo "Run Optical Mark Recorgnition: $sdapsCMD "
	            sdaps $sdapsPROJECT recognize
	            ;;
	   Quit) exit;;
	       * ) echo "Not Input for Create Directory necessary - use '$sdapsPROJECT'.";;
	esac
	case $sdapsCMD in
	   Create) echo "SDAPS Questionnaire File: $sdapsFILE";;
	   Print) echo "Print SDAPS Questionnaire File: $sdapsPROJECT/questionnaire.pdf"
	          evince $sdapsPROJECT/questionnaire.pdf
	   ;;
	esac
	echo "Execute the SDAPS command"
	case $sdapsCMD in
	   Create) sdaps $sdapsPROJECT setup_tex $sdapsFILE;;
	   Import) t=0
	           for iFile in $sdapsIMPORT
	           do
	              t=$(( t + 1 ))
	              #sdaps $sdapsPROJECT add $iFile
	              echo "$t : Import DONE scanned for File $iFile"
			   done
			   ;;
	     GUI)  echo "Check Scanned Files: $sdapsCMD "
	           sdaps $sdapsPROJECT gui
	           ;;
	   Report) echo "Create SDAPS Report"
	           rm $sdapsPROJECT/report_1.pdf
		       sdaps $sdapsPROJECT report
		       evince $sdapsPROJECT/report_1.pdf
		       ;;
	   Export) rm $sdapsPROJECT/data_1.csv
	           sdaps $sdapsPROJECT csv export
	           echo "DONE Export CSV Data for Project:  sdapsPROJECT"
	           libreoffice  --calc -o $sdapsPROJECT/data_1.csv
	           ;;
	      GUI)  echo "Check Scanned Files execute SDAPS recognize: $sdapsCMD "
	            sdaps $sdapsPROJECT gui
	            ;;
	  Quit) exit;;
	       * ) echo "Please select SDAPS Command.";;
	esac
	echo "-----------------------------------------------------"
done
	
