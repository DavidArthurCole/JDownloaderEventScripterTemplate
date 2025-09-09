/**
 * Represents a link managed by the Packagizer in JDownloader2.
 * Provides methods to get and set various properties of a download link,
 * such as its name, download folder, priority, state, and more.
 *
 * @class
 * @typedef {Object} PackagizerLink
 * 
 * @method
 * 	 @name getBytesTotal
 * 	 @returns {Long} The total size of the link in bytes.
 * @method
 * 	 @name getChunks
 * 	 @returns {number} The number of chunks used for downloading.
 * @method
 * 	 @name getComment
 * 	 @returns {string} The comment associated with the link.
 * @method
 * 	 @name getCrawledLink
 * 	 @returns {CrawledLink} The CrawledLink object associated with this link.
 * @method
 * 	 @name getDownloadFolder
 * 	 @returns {string} The download folder path for the link.
 * @method
 * 	 @name getHost
 * 	 @returns {string} The host of the link.
 * @method
 * 	 @name getLinkState
 * 	 @returns {string} The current state of the link.
 * @method
 * 	 @name getName
 * 	 @returns {string} The name of the link.
 * @method
 * 	 @name getPackageName
 * 	 @returns {string} The name of the package this link belongs to.
 * @method
 * 	 @name getPriority
 * 	 @returns {string} The priority of the link. Possible values: HIGHEST, HIGHER, HIGH, DEFAULT, LOWER.
 * @method
 * 	 @name getProperties
 * 	 @returns {Map} A map of all properties associated with the link.
 * @method
 * 	 @name getProperty
 * @param {string} myString The property key.
 * 	 @returns {Object} The value of the specified property.
 * @method
 * 	 @name getSourceUrls
 * 	 @returns {string[]} An array of source URLs for the link.
 * @method
 * 	 @name getURL
 * 	 @returns {string} The URL of the link.
 * @method
 * 	 @name isAutoConfirmEnabled
 * 	 @returns {boolean} True if the link will be automatically moved to the download list.
 * @method
 * 	 @name isAutoStartEnabled
 * 	 @returns {boolean} True if the link will automatically start downloading after confirmation.
 * @method
 * 	 @name isEnabled
 * 	 @returns {boolean} True if the link is enabled.
 * @method
 * 	 @name setAutoConfirmEnabled
 * @param {boolean} myBoolean If true, the link will be automatically moved to the download list.
 * @method
 * 	 @name setAutoStartEnabled
 * @param {boolean} myBoolean If true, the link will automatically start downloading after confirmation.
 * @method
 * 	 @name setChunks
 * @param {number} myInt The number of chunks to use for downloading.
 * @method
 * 	 @name setComment
 * @param {string} myString The comment to associate with the link.
 * @method
 * 	 @name setDownloadFolder
 * @param {string} myString The download folder path for the link.
 * @method
 * 	 @name setEnabled
 * @param {boolean} myBoolean Enable or disable the link.
 * @method
 * 	 @name setName
 * @param {string} myString The name to set for the link.
 * @method
 * 	 @name setPackageName
 * @param {string} myString The package name to set for the link.
 * @method
 * 	 @name setPriority
 * @param {string} myString The priority to set for the link. Possible values: HIGHEST, HIGHER, HIGH, DEFAULT, LOWER.
 * @method
 * 	 @name setProperty
 * @param {string} myString The property key.
 * @param {Object} myObject The property value.
 */
class PackagizerLink {
    /**
     * @returns {Long}
     */
    getBytesTotal() {}
    /**
     * @returns {Integer}
     */
    getChunks() {};
    /**
     * @returns {String}
     */
    getComment() {};
    /**
     * @returns {CrawledLink}
     */
    getCrawledLink() {};
    /**
     * @returns {String}
     */
    getDownloadFolder() {};
    /**
     * @returns {String}
     */
    getHost() {};
    /**
     * @returns {String}
     */
    getLinkState() {};
    /**
     * @returns {String}
     */
    getName() {};
    /**
     * @returns {String}
     */
    getPackageName() {};
    /**
     * Get the Link Priority
     * (HIGHEST|HIGHER|HIGH|DEFAULT|LOWER)
     * @returns {String}
     */
    getPriority() {};
    /**
     * @returns {Map}
     */
    getProperties() {};
    /**
     * @param {String} myString The property key.
     * @return {Object} The value of the specified property.
     */
    getProperty(myString) {};
    /**
     * @returns {String[]}
     */
    getSourceUrls() {};
    /**
     * @returns {String} The URL of the link
     */
    getURL() {};
    /**
     * If true, the link will automove to the downloadlist
     * @returns {Boolean}
     */
    isAutoConfirmEnabled() {};
    /**
     * If true, the link will autostart download after beeing confirmed
     * @returns {Boolean}
     */
    isAutoStartEnabled() {};
    /**
     * @returns {Boolean} True, if the link is enabled
     */
    isEnabled() {};

    /**
     * @param myBoolean If true, the link will automove to the downloadlist
     */
    setAutoConfirmEnabled(myBoolean) {};
    /**
     * @param myBoolean If true, the link will autostart download after being confirmed
     */
    setAutoStartEnabled(myBoolean) {};
    setChunks(myInt) {};
    setComment(myString) {};
    setDownloadFolder(myString) {};
    setEnabled(myBoolean) {};
    setName(myString) {};
    setPackageName(myString) {};
    /**
     * Sets the Link Priority
     * @param myString HIGHEST|HIGHER|HIGH|DEFAULT|LOWER
     */
    setPriority(myString) {};
    setProperty(myString, myObject) {};
}