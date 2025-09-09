/**
 * Represents a crawled link in JDownloader.
 *
 * @class
 * @typedef {Object} CrawledLink
 *
 * @method getAddedDate
 *   @returns {long} The date the link was added.
 * @method getAdvancedStatus
 *   @returns {Object} The advanced status of the link.
 * @method getArchive
 *   @returns {Archive} The archive object associated with the link.
 * @method getArchiveID
 *   @returns {string} The archive ID of the link.
 * @method getAvailableState
 *   @returns {string} The available state of the link.
 * @method getBytesTotal
 *   @returns {long} The total size of the link in bytes.
 * @method getBytesTotalVerified
 *   @returns {long} The verified total size of the link in bytes.
 * @method getComment
 *   @returns {string} The comment associated with the link.
 * @method getContainerURL
 *   @returns {string} The container URL of the link.
 * @method getContentURL
 *   @returns {string} The content URL of the link.
 * @method getDownloadHost
 *   @returns {string} The download host of the link.
 * @method getDownloadLink
 *   @returns {DownloadLink} The DownloadLink object associated with this link.
 * @method getDownloadPath
 *   @returns {string} The download path for the link.
 * @method getFinalName
 *   @returns {string} The final name of the link.
 * @method getForcedName
 *   @returns {string} The forced name of the link.
 * @method getHashInfo
 *   @returns {string} The hash info of the link.
 * @method getHost
 *   @returns {string} The host of the link.
 * @method getLinkID
 *   @returns {string} The link ID.
 * @method getLinkInfo
 *   @returns {LinkInfo} The LinkInfo object for the link.
 * @method getName
 *   @returns {string} The name of the link.
 * @method getOriginURL
 *   @returns {string} The origin URL of the link.
 * @method getPackage
 *   @returns {CrawledPackage} The package this link belongs to.
 * @method getPluginURL
 *   @returns {string} The plugin URL of the link.
 * @method getPriority
 *   @returns {string} The priority of the link.
 * @method getProperties
 *   @returns {Object} A map of all properties associated with the link.
 * @method getProperty
 *   @param {string} key The property key.
 *   @returns {Object} The value of the specified property.
 * @method getReferrerURL
 *   @returns {string} The referrer URL of the link.
 * @method getSessionProperty
 *   @param {string} key The session property key.
 *   @returns {Object} The value of the specified session property.
 * @method getSourceJob
 *   @returns {CrawlerJob} The source job of the link.
 * @method getUUID
 *   @returns {string} The UUID of the link.
 * @method getUrl
 *   @returns {string} The URL of the link.
 * @method isEnabled
 *   @returns {boolean} True if the link is enabled.
 * @method isNameSet
 *   @returns {boolean} True if the name is set.
 * @method isPartOfAnArchive
 *   @returns {boolean} True if the link is part of an archive.
 * @method remove
 *   @returns {boolean} True if the link was removed.
 * @method setComment
 *   @param {string} comment The comment to associate with the link.
 * @method setEnabled
 *   @param {boolean} enabled Enable or disable the link.
 * @method setName
 *   @param {string} name The name to set for the link.
 * @method setPriority
 *   @param {string} priority The priority to set for the link.
 * @method setProperty
 *   @param {string} key The property key.
 *   @param {Object} value The property value.
 * @method setSessionProperty
 *   @param {string} key The session property key.
 *   @param {Object} value The session property value.
 * @method toString
 *   @returns {string} String representation of the link.
 */
class CrawledLink {
    /**
     * @returns {long}
     */
    getAddedDate() {}

    /**
     * @returns {Object}
     */
    getAdvancedStatus() {}

    /**
     * @returns {Archive}
     */
    getArchive() {}

    /**
     * @returns {string}
     */
    getArchiveID() {}

    /**
     * @returns {string}
     */
    getAvailableState() {}

    /**
     * @returns {long}
     */
    getBytesTotal() {}

    /**
     * @returns {long}
     */
    getBytesTotalVerified() {}

    /**
     * @returns {string}
     */
    getComment() {}

    /**
     * @returns {string}
     */
    getContainerURL() {}

    /**
     * @returns {string}
     */
    getContentURL() {}

    /**
     * @returns {string}
     */
    getDownloadHost() {}

    /**
     * @returns {DownloadLink}
     */
    getDownloadLink() {}

    /**
     * @returns {string}
     */
    getDownloadPath() {}

    /**
     * @returns {string}
     */
    getFinalName() {}

    /**
     * @returns {string}
     */
    getForcedName() {}

    /**
     * @returns {string}
     */
    getHashInfo() {}

    /**
     * @returns {string}
     */
    getHost() {}

    /**
     * @returns {string}
     */
    getLinkID() {}

    /**
     * @returns {LinkInfo}
     */
    getLinkInfo() {}

    /**
     * @returns {string}
     */
    getName() {}

    /**
     * @returns {string}
     */
    getOriginURL() {}

    /**
     * @returns {CrawledPackage}
     */
    getPackage() {}

    /**
     * @returns {string}
     */
    getPluginURL() {}

    /**
     * @returns {string}
     */
    getPriority() {}

    /**
     * @returns {Object}
     */
    getProperties() {}

    /**
     * @param {string} key
     * @returns {Object}
     */
    getProperty(key) {}

    /**
     * @returns {string}
     */
    getReferrerURL() {}

    /**
     * @param {string} key
     * @returns {Object}
     */
    getSessionProperty(key) {}

    /**
     * @returns {CrawlerJob}
     */
    getSourceJob() {}

    /**
     * @returns {string}
     */
    getUUID() {}

    /**
     * @returns {string}
     */
    getUrl() {}

    /**
     * @returns {boolean}
     */
    isEnabled() {}

    /**
     * @returns {boolean}
     */
    isNameSet() {}

    /**
     * @returns {boolean}
     */
    isPartOfAnArchive() {}

    /**
     * @returns {boolean}
     */
    remove() {}

    /**
     * @param {string} comment
     */
    setComment(comment) {}

    /**
     * @param {boolean} enabled
     */
    setEnabled(enabled) {}

    /**
     * @param {string} name
     */
    setName(name) {}

    /**
     * @param {string} priority
     */
    setPriority(priority) {}

    /**
     * @param {string} key
     * @param {Object} value
     */
    setProperty(key, value) {}

    /**
     * @param {string} key
     * @param {Object} value
     */
    setSessionProperty(key, value) {}

    /**
     * @returns {string}
     */
    toString() {}
}