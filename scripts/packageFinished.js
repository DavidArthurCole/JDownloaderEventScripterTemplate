// ========= Properties for the EventTrigger 'Package finished'  =========
// var myFilePackage = package;
// var myDownloadLink = link;

import { FilePackage, DownloadLink } from "../classes/index.js";

const _package = new FilePackage(); // Stillll hate that package is a reserved word in JS
const link = new DownloadLink();
// ========= YOUR SCRIPT BELOW HERE =========

var infoString = "";
infoString += "getContainerURL(): " + link.getContainerURL() + "\n";
infoString += "getContentURL(): " + link.getContentURL() + "\n";
infoString += "getDownloadPath(): " + link.getDownloadPath() + "\n";
infoString += "getLinkInfo(): " + link.getLinkInfo() + "\n";
infoString += "getUrl(): " + link.getUrl() + "\n";
infoString += "isFinished(): " + link.isFinished() + "\n";

log(infoString);