/**
 * Show a message box.
 * @example alert(JD_HOME);
 */
declare function alert(...args: any[]): void;

/**
 * Call the MyJDownloader API locally (no network involved).
 * See API Docs: https://my.jdownloader.org/developers/
 * @example callAPI("downloadsV2", "queryLinks", { "name": true })
 */
declare function callAPI(namespace: string, method: string, params: object[]): Object;

/**
 * Call a local process asynchronously.
 * @example callAsync(function(exitCode, stdOut, errOut) { alert("Closed Notepad"); }, "notepad.exe", JD_HOME+"\\license.txt");
 */
declare function callAsync(callback: function, ...args: string[]): void;

/**
 * Call a local process synchronously. Blocks until the process returns.
 * @example var pingResultString = callSync("ping", "jdownloader.org");
 */
declare function callSync(...args: string[]): string;

/**
 * Delete a file or a directory.
 * @example var myBooleanResult = deleteFile(JD_HOME+"/mydirectory/", false);
 */
declare function deleteFile(path: string, recursive: boolean): boolean;

/**
 * Disable permission checks.
 */
declare function disablePermissionChecks(): void;

/**
 * Perform a reconnect and wait for it.
 * @example var success = doReconnect();
 */
declare function doReconnect(): boolean;

/**
 * Enable permission checks.
 */
declare function enablePermissionChecks(): void;

/**
 * (Experimental) Get proxy banlist.
 */
declare function experimental_proxybanlist(): string;

/**
 * (Experimental) Get proxy list.
 */
declare function experimental_proxylist(): string;

/**
 * Perform a fake reconnect and optionally wait for it.
 * @example fakeReconnect(false);
 */
declare function fakeReconnect(waitForFakeReconnect: boolean): void;

/**
 * Get a list of all crawled links.
 */
declare function getAllCrawledLinks(): CrawledLink[];

/**
 * Get a list of all crawled packages.
 */
declare function getAllCrawledPackages(): CrawledPackage[];

/**
 * Get a list of all download links.
 */
declare function getAllDownloadLinks(): DownloadLink[];

/**
 * Get a list of all file packages.
 */
declare function getAllFilePackages(): FilePackage[];

/**
 * Get current average download speed in bytes/second.
 */
declare function getAverageSpeed(): number;

/**
 * Get a Browser object.
 */
declare function getBrowser(): Browser;

/**
 * Create a checksum for a file. Types: e.g. CRC32, MD5, SHA-1, SHA-256.
 */
declare function getChecksum(filePath: string, type: string): string;

/**
 * Get a CrawledLink by its UUID.
 */
declare function getCrawledLinkByUUID(uuid: number): CrawledLink;

/**
 * Get a CrawledPackage by its UUID.
 */
declare function getCrawledPackageByUUID(uuid: number): CrawledPackage;

/**
 * Get current timestamp in ms.
 */
declare function getCurrentTimeStamp(): number;

/**
 * Get a DownloadLink by its UUID.
 */
declare function getDownloadLinkByUUID(uuid: number): DownloadLink;

/**
 * Get a DownloadList package by its UUID.
 */
declare function getDownloadPackageByUUID(uuid: number): FilePackage;

/**
 * Gets the value of the specified environment variable.
 */
declare function getEnv(variable: string): string;

/**
 * Get an Environment object.
 */
declare function getEnvironment(): Environment;

/**
 * Get a ModifyLock.
 * @example var lock = getModifyLock("lockID");
 */
declare function getModifyLock(key: string): ModifyLock;

/**
 * Loads a website (GET) and returns the source code.
 * @example var myhtmlSourceString = getPage("https://jdownloader.org");
 */
declare function getPage(url: string): string;

/**
 * Get a FilePath object.
 */
declare function getPath(path: string): FilePath;

/**
 * Get the current path separator ("/" or "\\").
 */
declare function getPathSeparator(): string;

/**
 * Gets the system property indicated by the specified key.
 */
declare function getProperty(key: string, defaultValue: string): string;

/**
 * Get a property. Set global to true to access a global property.
 * @example var value = getProperty("myobject", false);
 */
declare function getProperty(key: string, global: boolean): object;

/**
 * Return current reconnect status.
 * @example var reconnectStatus = getReconnectState();
 */
declare function getReconnectState(): string;

/**
 * Get a list of all running download links.
 */
declare function getRunningDownloadLinks(): DownloadLink[];

/**
 * Get a list of all running download packages.
 */
declare function getRunningDownloadPackages(): FilePackage[];

/**
 * Create a checksum for a string. Types: e.g. CRC32, MD5, SHA-1, SHA-256.
 */
declare function getStringChecksum(str: string, type: string): string;

/**
 * Get current total download speed in bytes/second.
 */
declare function getTotalSpeed(): number;

/**
 * Check if Download Controller is in IDLE state.
 */
declare function isDownloadControllerIdle(): boolean;

/**
 * Check if Download Controller is in PAUSE state.
 */
declare function isDownloadControllerPaused(): boolean;

/**
 * Check if Download Controller is in RUNNING state.
 */
declare function isDownloadControllerRunning(): boolean;

/**
 * Check if Download Controller is in STOPPING state (still running, but stop has been pressed).
 */
declare function isDownloadControllerStopping(): boolean;

/**
 * Is current script run in synchronous mode?
 */
declare function isSynchronous(): boolean;

/**
 * Log to stderr and to JDownloader log files.
 */
declare function log(...args: any[]): void;

/**
 * Open a website or path in your default browser/file explorer.
 * @example openURL("https://jdownloader.org");
 */
declare function openURL(url: string): void;

/**
 * Play a WAV audio file.
 * @example playWavAudio(JD_HOME+"/themes/standard/org/jdownloader/sounds/captcha.wav");
 */
declare function playWavAudio(filePathOrUrl: string): void;

/**
 * Loads a website (POST) and returns the source code.
 * @example var myhtmlSourceString = postPage("https://support.jdownloader.org/index.php", "searchquery=captcha");
 */
declare function postPage(url: string, postData: string): string;

/**
 * Read a text file.
 * @example var myString = readFile(JD_HOME+"/license.txt");
 */
declare function readFile(filePath: string): string;

/**
 * Refresh all premium accounts.
 * @example refreshAccounts(true, true);
 */
declare function refreshAccounts(waitForAccountChecks: boolean, forceCheck: boolean): void;

/**
 * Remove a crawled link by UUID.
 */
declare function removeCrawledLinkByUUID(uuid: string): boolean;

/**
 * Remove a crawled package by UUID.
 */
declare function removeCrawledPackageByUUID(uuid: string): boolean;

/**
 * Remove a download link by UUID.
 */
declare function removeDownloadLinkByUUID(uuid: string): boolean;

/**
 * Remove a file package by UUID.
 */
declare function removeFilePackageByUUID(uuid: string): boolean;

/**
 * Request a reconnect.
 */
declare function requestReconnect(): void;

/**
 * Loads a JavaScript file or URL. ATTENTION: The loaded script can access the API as well.
 * @example require("https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json.js");
 */
declare function require(filePathOrUrl: string): void;

/**
 * Enable/disable alert with textbox and copy & paste.
 */
declare function setAdvancedAlert(enabled: boolean): void;

/**
 * Enable/disable script on exceptions.
 */
declare function setDisableOnException(enabled: boolean): void;

/**
 * Pause/unpause downloads.
 */
declare function setDownloadsPaused(paused: boolean): void;

/**
 * Enable/disable notification on exceptions.
 */
declare function setNotifyOnException(enabled: boolean): void;

/**
 * Set a property. This property will be available until JD exit or a script overwrites it. If global is true, the property will be available for all scripts.
 * @example var oldValue = setProperty("myobject", { "name": true }, false);
 */
declare function setProperty(key: string, value: any, global: boolean): object;

/**
 * Set the speed limit in bytes/second. Values <= 0 disable the limiter.
 */
declare function setSpeedlimit(speedLimit: number): void;

/**
 * Show a confirm dialog.
 * @example showConfirmDialog("Do you like this method?", "yes", "no");
 */
declare function showConfirmDialog(message: string, okOption: string, cancelOption: string): number;

/**
 * Perform a sleep and wait for x milliseconds.
 * @example sleep(1000);
 */
declare function sleep(milliseconds: number): void;

/**
 * Start downloads.
 */
declare function startDownloads(): void;

/**
 * Stop downloads.
 */
declare function stopDownloads(): void;

/**
 * Write a text file.
 * @example writeFile(JD_HOME + "/log.txt", JSON.stringify(this) + "\r\n", true);
 */
declare function writeFile(filePath: string, text: string, append: boolean): void;

/**
 * JDownloader installation directory.
 */
declare const JD_HOME: string = '';
