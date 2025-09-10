// ========= Properties for the EventTrigger 'A Download stopped'  =========
// var myHTTPProxy = proxy;
// var myFilePackage = package;
// var myDownloadLink = link;

import { HTTPProxy, FilePackage, DownloadLink } from "../classes/index.js";
import { hashAlreadyInDb, addHashToDb } from "exampleHelpers/hashCheck.js";

const proxy = new HTTPProxy();
const _package = new FilePackage();
const link = new DownloadLink();
// ========= YOUR SCRIPT BELOW HERE =========

(function() {
    if (!isSynchronous()) return;
    var hashInfo = link.getHashInfo();
    if (!hashInfo) {
        var filePath = link.getDownloadPath();
        if (!filePath) {
            return;
        }
        hashInfo = getChecksum('MD5', filePath);
        if (!hashInfo) return;
    }

    // Replace with the actual path to your hashCheck.js (see exampleHelpers/hashCheck.js)
    require('C:/scripts/hashCheck.js');
    var fileName = link.getName() || "<unknown>";
    if (hashAlreadyInDb(hashInfo)) {
        var downloadPath = link.getDownloadPath();
        if (downloadPath && deleteFile(downloadPath, false)) {
            log("Removed duplicate file: " + fileName + " at " + downloadPath + " (" + hashInfo + ")");
            link.setComment("Removed duplicate file");
        } else {
            log("Failed to remove duplicate file: " + fileName + " at " + downloadPath + " (" + hashInfo + "), disabling it instead.");
            link.setComment("REMOVAL FAILED - disabled duplicate file");
            link.reset();
        }
        link.setSkipped(true);
        link.abort();
    } else {
        log("Adding hash to database: " + fileName + " (" + hashInfo + ")");
        addHashToDb(hashInfo);
    }
})();