/**
 * Represents a download list link in JDownloader.
 *
 * @class
 * @typedef {Object} DownloadLink
 *
 * @method abort
 *   Aborts the download.
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
 * @method getBytesLoaded
 *   @returns {long} The number of bytes loaded.
 * @method getBytesTotal
 *   @returns {long} The total size of the link in bytes.
 * @method getBytesTotalVerified
 *   @returns {long} The verified total size of the link in bytes.
 * @method getComment
 *   @returns {string} The comment associated with the link.
 * @method getConditionalSkipReason
 *   @returns {ConditionalSkipReason} The conditional skip reason.
 * @method getContainerURL
 *   @returns {string} The container URL of the link.
 * @method getContentURL
 *   @returns {string} The content URL of the link.
 * @method getDownloadDuration
 *   @returns {long} The download duration in ms.
 * @method getDownloadHost
 *   @returns {string} The download host of the link.
 * @method getDownloadPath
 *   @returns {string} The download path for the link.
 * @method getDownloadProxy
 *   @returns {HTTPProxy} The HTTP proxy used for the download.
 * @method getDownloadSessionDuration
 *   @returns {long} The download session duration in ms.
 * @method getDownloadTime
 *   @returns {long} The total download time in ms.
 * @method getEta
 *   @returns {long} The estimated time remaining in ms.
 * @method getExtractionStatus
 *   @returns {string} The extraction status.
 * @method getFinalLinkStatus
 *   @returns {string} The final link status.
 * @method getFinalName
 *   @returns {string} The final name of the link.
 * @method getFinishedDate
 *   @returns {long} The date the link finished.
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
 *   @returns {FilePackage} The package this link belongs to.
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
 * @method getSkippedReason
 *   @returns {string} The skipped reason.
 * @method getSpeed
 *   @returns {long} The current download speed in bytes/sec.
 * @method getStatus
 *   @returns {string} The status of the link.
 * @method getTempProperties
 *   @returns {Object} A map of all temporary properties.
 * @method getTempProperty
 *   @param {string} key The temp property key.
 *   @returns {Object} The value of the specified temp property.
 * @method getUUID
 *   @returns {string} The UUID of the link.
 * @method getUrl
 *   @returns {string} The URL of the link.
 * @method isAborting
 *   @returns {boolean} True if the link is aborting.
 * @method isActive
 *   @returns {boolean} True if the link is active.
 * @method isEnabled
 *   @returns {boolean} True if the link is enabled.
 * @method isFinished
 *   @returns {boolean} True if the link is finished.
 * @method isPartOfAnArchive
 *   @returns {boolean} True if the link is part of an archive.
 * @method isResumeable
 *   @returns {boolean} True if the link is resumeable.
 * @method isRunning
 *   @returns {boolean} True if the link is running.
 * @method isSkipped
 *   @returns {boolean} True if the link is skipped.
 * @method remove
 *   @returns {boolean} True if the link was removed.
 * @method reset
 *   Resets the link.
 * @method resume
 *   Resumes the link.
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
 * @method setSkipped
 *   @param {boolean} skipped Set the skipped state.
 * @method setTempProperty
 *   @param {string} key The temp property key.
 *   @param {Object} value The temp property value.
 * @method toString
 *   @returns {string} String representation of the link.
 */
class DownloadLink {
    /**
     * Aborts the download.
     */
    abort() {}

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
    getBytesLoaded() {}

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
     * @returns {ConditionalSkipReason}
     */
    getConditionalSkipReason() {}

    /**
     * @returns {string}
     */
    getContainerURL() {}

    /**
     * @returns {string}
     */
    getContentURL() {}

    /**
     * @returns {long}
     */
    getDownloadDuration() {}

    /**
     * @returns {string}
     */
    getDownloadHost() {}

    /**
     * @returns {string}
     */
    getDownloadPath() {}

    /**
     * @returns {HTTPProxy}
     */
    getDownloadProxy() {}

    /**
     * @returns {long}
     */
    getDownloadSessionDuration() {}

    /**
     * @returns {long}
     */
    getDownloadTime() {}

    /**
     * @returns {long}
     */
    getEta() {}

    /**
     * @returns {string}
     */
    getExtractionStatus() {}

    /**
     * @returns {string}
     */
    getFinalLinkStatus() {}

    /**
     * @returns {string}
     */
    getFinalName() {}

    /**
     * @returns {long}
     */
    getFinishedDate() {}

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
     * @returns {FilePackage}
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
     * @returns {string}
     */
    getSkippedReason() {}

    /**
     * @returns {long}
     */
    getSpeed() {}

    /**
     * @returns {string}
     */
    getStatus() {}

    /**
     * @returns {Object}
     */
    getTempProperties() {}

    /**
     * @param {string} key
     * @returns {Object}
     */
    getTempProperty(key) {}

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
    isAborting() {}

    /**
     * @returns {boolean}
     */
    isActive() {}

    /**
     * @returns {boolean}
     */
    isEnabled() {}

    /**
     * @returns {boolean}
     */
    isFinished() {}

    /**
     * @returns {boolean}
     */
    isPartOfAnArchive() {}

    /**
     * @returns {boolean}
     */
    isResumeable() {}

    /**
     * @returns {boolean}
     */
    isRunning() {}

    /**
     * @returns {boolean}
     */
    isSkipped() {}

    /**
     * @returns {boolean}
     */
    remove() {}

    /**
     * Resets the link.
     */
    reset() {}

    /**
     * Resumes the link.
     */
    resume() {}

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
     * @param {boolean} skipped
     */
    setSkipped(skipped) {}

    /**
     * @param {string} key
     * @param {Object} value
     */
    setTempProperty(key, value) {}

    /**
     * @returns {string}
     */
    toString() {}
}
