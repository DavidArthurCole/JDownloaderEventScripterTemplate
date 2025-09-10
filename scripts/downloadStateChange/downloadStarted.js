// ========= Properties for the EventTrigger 'A Download started'  =========
// var myHTTPProxy = proxy;
// var myFilePackage = package;
// var myDownloadLink = link;

import { HTTPProxy, FilePackage, DownloadLink } from "../../classes/index.js";

const proxy = new HTTPProxy();
const _package = new FilePackage(); // I fucking hate that "package" is a reserved word in JS
const link = new DownloadLink();
// ========= YOUR SCRIPT BELOW HERE =========