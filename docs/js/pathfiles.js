
function getExtensionOfFilename(pFilename) {
  var re = /(?:\.([^.]+))?$/;
  // re.exec("/path.file/project/output.dzslides.html")[1];  returns  "html"
  return re.exec(pFilename)[1];   // "html"
}
function removeExtension(pFilename) {
  var vReturn = pFilename;
  if (pFilename.indexOf('.')>0) {
    vReturn = pFilename.substr(0, pFilename.lastIndexOf('.'));
  };
  return vReturn;
};
function getPathFromFilename(pFilename) {
  return getPath4Filename(pFilename);
};
function getPathSeparator() {
  return "/";
};

function getPath4Filename(pFilename) {
  var vSep = getPathSeparator();
  return pFilename.substr(0, pFilename.lastIndexOf(vSep));
};
function getNameExt4Filename(pFilename) {
  var vSep = getPathSeparator();
  pFilename = "/X/"+pFilename;
  return pFilename.substr(pFilename.lastIndexOf(vSep)+1,pFilename.length);
};
function getName4Filename(pFilename) {
  return removeExtension(getNameExt4Filename("/X/"+pFilename));
};

/**
 * Souce: https://gist.github.com/eriwen/1211656
 * Given a source directory and a target filename, return the relative
 * file path from source to target.
 * @param source {String} directory path to start from for traversal
 * @param target {String} directory path and filename to seek from source
 * @return Relative path (e.g. "../../style.css") as {String}
 */
function getRelativePath(source, target) {
  var vSep = getPathSeparator();
  //var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
  var sep = getPathSeparator(),
		targetArr = target.split(sep),
		sourceArr = source.split(sep),
		filename = targetArr.pop(),
		targetPath = targetArr.join(sep),
		relativePath = "";

	while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
		sourceArr.pop();
		relativePath += ".." + sep;
	}

	var relPathArr = targetArr.slice(sourceArr.length);
	relPathArr.length && (relativePath += relPathArr.join(sep) + sep);

	return relativePath + filename;
};
