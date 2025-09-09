

/**
 * Show a message box.
 * @param {...any} args
 * @returns {void}
 * @example alert(JD_HOME);
 */
function alert(...args) {}

/**
 * Call the MyJDownloader API locally (no network involved).
 * See API Docs: https://my.jdownloader.org/developers/
 * @param {string} namespace
 * @param {string} method
 * @param {Object[]} params
 * @returns {Object}
 * @example callAPI("downloadsV2", "queryLinks", { "name": true })
 */
function callAPI(namespace, method, params) {}

/**
 * Call a local process asynchronously.
 * @param {function} callback
 * @param {...string} args
 * @returns {void}
 * @example callAsync(function(exitCode, stdOut, errOut) { alert("Closed Notepad"); }, "notepad.exe", JD_HOME+"\\license.txt");
 */
function callAsync(callback, ...args) {}

/**
 * Call a local process synchronously. Blocks until the process returns.
 * @param {...string} args
 * @returns {string}
 * @example var pingResultString = callSync("ping", "jdownloader.org");
 */
function callSync(...args) {}

/**
 * Delete a file or a directory.
 * @param {string} path
 * @param {boolean} recursive
 * @returns {boolean}
 * @example var myBooleanResult = deleteFile(JD_HOME+"/mydirectory/", false);
 */
function deleteFile(path, recursive) {}

/**
 * Disable permission checks.
 * @returns {void}
 */
function disablePermissionChecks() {}

/**
 * Perform a reconnect and wait for it.
 * @returns {boolean}
 * @example var success = doReconnect();
 */
function doReconnect() {}

/**
 * Enable permission checks.
 * @returns {void}
 */
function enablePermissionChecks() {}

/**
 * (Experimental) Get proxy banlist.
 * @returns {string}
 * @example experimental_proxybanlist();
 */
function experimental_proxybanlist() {}

/**
 * (Experimental) Get proxy list.
 * @returns {string}
 * @example experimental_proxylist();
 */
function experimental_proxylist() {}

/**
 * Perform a fake reconnect and optionally wait for it.
 * @param {boolean} waitForFakeReconnect
 * @returns {void}
 * @example fakeReconnect(false);
 */
function fakeReconnect(waitForFakeReconnect) {}

/**
 * Get a list of all crawled links.
 * @returns {CrawledLink[]}
 */
function getAllCrawledLinks() {}

/**
 * Get a list of all crawled packages.
 * @returns {CrawledPackage[]}
 */
function getAllCrawledPackages() {}

/**
 * Get a list of all download links.
 * @returns {DownloadLink[]}
 */
function getAllDownloadLinks() {}

/**
 * Get a list of all file packages.
 * @returns {FilePackage[]}
 */
function getAllFilePackages() {}

/**
 * Get current average download speed in bytes/second.
 * @returns {number}
 */
function getAverageSpeed() {}

/**
 * Get a Browser object.
 * @returns {Browser}
 */
function getBrowser() {}

/**
 * Create a checksum for a file. Types: e.g. CRC32, MD5, SHA-1, SHA-256.
 * @param {string} filePath
 * @param {string} type
 * @returns {string}
 */
function getChecksum(filePath, type) {}

/**
 * Get a CrawledLink by its UUID.
 * @param {number} uuid
 * @returns {CrawledLink}
 */
function getCrawledLinkByUUID(uuid) {}

/**
 * Get a CrawledPackage by its UUID.
 * @param {number} uuid
 * @returns {CrawledPackage}
 */
function getCrawledPackageByUUID(uuid) {}

/**
 * Get current timestamp in ms.
 * @returns {number}
 */
function getCurrentTimeStamp() {}

/**
 * Get a DownloadLink by its UUID.
 * @param {number} uuid
 * @returns {DownloadLink}
 */
function getDownloadLinkByUUID(uuid) {}

/**
 * Get a DownloadList package by its UUID.
 * @param {number} uuid
 * @returns {FilePackage}
 */
function getDownloadPackageByUUID(uuid) {}

/**
 * Gets the value of the specified environment variable.
 * @param {string} variable
 * @returns {string}
 */
function getEnv(variable) {}

/**
 * Get an Environment object.
 * @returns {Environment}
 */
function getEnvironment() {}

/**
 * Get a ModifyLock.
 * @param {string} key
 * @returns {ModifyLock}
 * @example var lock = getModifyLock("lockID");
 */
function getModifyLock(key) {}

/**
 * Loads a website (GET) and returns the source code.
 * @param {string} url
 * @returns {string}
 * @example var myhtmlSourceString = getPage("https://jdownloader.org");
 */
function getPage(url) {}

/**
 * Get a FilePath object.
 * @param {string} path
 * @returns {FilePath}
 */
function getPath(path) {}

/**
 * Get the current path separator ("/" or "\\").
 * @returns {string}
 */
function getPathSeparator() {}

/**
 * Gets the system property indicated by the specified key.
 * @param {string} key
 * @param {string} defaultValue
 * @returns {string}
 */
function getProperty(key, defaultValue) {}

/**
 * Get a property. Set global to true to access a global property.
 * @param {string} key
 * @param {boolean} global
 * @returns {Object}
 * @example var value = getProperty("myobject", false);
 */
function getProperty(key, global) {}

/**
 * Return current reconnect status.
 * @returns {string}
 * @example var reconnectStatus = getReconnectState();
 */
function getReconnectState() {}

/**
 * Get a list of all running download links.
 * @returns {DownloadLink[]}
 */
function getRunningDownloadLinks() {}

/**
 * Get a list of all running download packages.
 * @returns {FilePackage[]}
 */
function getRunningDownloadPackages() {}

/**
 * Create a checksum for a string. Types: e.g. CRC32, MD5, SHA-1, SHA-256.
 * @param {string} str
 * @param {string} type
 * @returns {string}
 */
function getStringChecksum(str, type) {}

/**
 * Get current total download speed in bytes/second.
 * @returns {number}
 */
function getTotalSpeed() {}

/**
 * Check if Download Controller is in IDLE state.
 * @returns {boolean}
 */
function isDownloadControllerIdle() {}

/**
 * Check if Download Controller is in PAUSE state.
 * @returns {boolean}
 */
function isDownloadControllerPaused() {}

/**
 * Check if Download Controller is in RUNNING state.
 * @returns {boolean}
 */
function isDownloadControllerRunning() {}

/**
 * Check if Download Controller is in STOPPING state (still running, but stop has been pressed).
 * @returns {boolean}
 */
function isDownloadControllerStopping() {}

/**
 * Is current script run in synchronous mode?
 * @returns {boolean}
 */
function isSynchronous() {}

/**
 * Log to stderr and to JDownloader log files.
 * @param {...any} args
 * @returns {void}
 */
function log(...args) {}

/**
 * Open a website or path in your default browser/file explorer.
 * @param {string} url
 * @returns {void}
 * @example openURL("https://jdownloader.org");
 */
function openURL(url) {}

/**
 * Play a WAV audio file.
 * @param {string} filePathOrUrl
 * @returns {void}
 * @example playWavAudio(JD_HOME+"/themes/standard/org/jdownloader/sounds/captcha.wav");
 */
function playWavAudio(filePathOrUrl) {}

/**
 * Loads a website (POST) and returns the source code.
 * @param {string} url
 * @param {string} postData
 * @returns {string}
 * @example var myhtmlSourceString = postPage("https://support.jdownloader.org/index.php", "searchquery=captcha");
 */
function postPage(url, postData) {}

/**
 * Read a text file.
 * @param {string} filePath
 * @returns {string}
 * @example var myString = readFile(JD_HOME+"/license.txt");
 */
function readFile(filePath) {}

/**
 * Refresh all premium accounts.
 * @param {boolean} waitForAccountChecks
 * @param {boolean} forceCheck
 * @returns {void}
 * @example refreshAccounts(true, true);
 */
function refreshAccounts(waitForAccountChecks, forceCheck) {}

/**
 * Remove a crawled link by UUID.
 * @param {string} uuid
 * @returns {boolean}
 */
function removeCrawledLinkByUUID(uuid) {}

/**
 * Remove a crawled package by UUID.
 * @param {string} uuid
 * @returns {boolean}
 */
function removeCrawledPackageByUUID(uuid) {}

/**
 * Remove a download link by UUID.
 * @param {string} uuid
 * @returns {boolean}
 */
function removeDownloadLinkByUUID(uuid) {}

/**
 * Remove a file package by UUID.
 * @param {string} uuid
 * @returns {boolean}
 */
function removeFilePackageByUUID(uuid) {}

/**
 * Request a reconnect.
 * @returns {void}
 * @example requestReconnect();
 */
function requestReconnect() {}

/**
 * Loads a JavaScript file or URL. ATTENTION: The loaded script can access the API as well.
 * @param {string} filePathOrUrl
 * @returns {void}
 * @example require("https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json.js");
 */
function require(filePathOrUrl) {}

/**
 * Enable/disable alert with textbox and copy & paste.
 * @param {boolean} enabled
 * @returns {void}
 */
function setAdvancedAlert(enabled) {}

/**
 * Enable/disable script on exceptions.
 * @param {boolean} enabled
 * @returns {void}
 */
function setDisableOnException(enabled) {}

/**
 * Pause/unpause downloads.
 * @param {boolean} paused
 * @returns {void}
 */
function setDownloadsPaused(paused) {}

/**
 * Enable/disable notification on exceptions.
 * @param {boolean} enabled
 * @returns {void}
 */
function setNotifyOnException(enabled) {}

/**
 * Set a property. This property will be available until JD exit or a script overwrites it. If global is true, the property will be available for all scripts.
 * @param {string} key
 * @param {any} value
 * @param {boolean} global
 * @returns {Object}
 * @example var oldValue = setProperty("myobject", { "name": true }, false);
 */
function setProperty(key, value, global) {}

/**
 * Set the speed limit in bytes/second. Values <= 0 disable the limiter.
 * @param {number} speedLimit
 * @returns {void}
 */
function setSpeedlimit(speedLimit) {}

/**
 * Show a confirm dialog.
 * @param {string} message
 * @param {string} okOption
 * @param {string} cancelOption
 * @returns {number}
 * @example showConfirmDialog("Do you like this method?", "yes", "no");
 */
function showConfirmDialog(message, okOption, cancelOption) {}

/**
 * Perform a sleep and wait for x milliseconds.
 * @param {number} milliseconds
 * @returns {void}
 * @example sleep(1000);
 */
function sleep(milliseconds) {}

/**
 * Start downloads.
 * @returns {void}
 */
function startDownloads() {}

/**
 * Stop downloads.
 * @returns {void}
 */
function stopDownloads() {}

/**
 * Write a text file.
 * @param {string} filePath
 * @param {string} text
 * @param {boolean} append
 * @returns {void}
 * @example writeFile(JD_HOME+"/log.txt", JSON.stringify(this)+"\r\n", true);
 */
function writeFile(filePath, text, append) {}

/**
 * JDownloader installation directory.
 * @type {string}
 */
const JD_HOME = '';
