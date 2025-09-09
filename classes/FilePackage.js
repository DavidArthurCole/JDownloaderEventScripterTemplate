/**
 * Represents a download list package in JDownloader.
 *
 * @class
 * @typedef {Object} FilePackage
 *
 * @method getAddedDate
 *   @returns {long} The date the package was added.
 * @method getArchives
 *   @returns {Archive[]} The archives in the package.
 * @method getBytesLoaded
 *   @returns {long} The number of bytes loaded.
 * @method getBytesTotal
 *   @returns {long} The total size of the package in bytes.
 * @method getComment
 *   @returns {string} The comment associated with the package.
 * @method getDownloadFolder
 *   @returns {string} The download folder path for the package.
 * @method getDownloadLinks
 *   @returns {DownloadLink[]} The download links in the package.
 * @method getFinishedDate
 *   @returns {long} The date the package finished.
 * @method getModifiedDate
 *   @returns {long} The date the package was last modified.
 * @method getName
 *   @returns {string} The name of the package.
 * @method getPriority
 *   @returns {string} The priority of the package.
 * @method getProperties
 *   @returns {Object} A map of all properties associated with the package.
 * @method getProperty
 *   @param {string} key The property key.
 *   @returns {Object} The value of the specified property.
 * @method getUUID
 *   @returns {string} The UUID of the package.
 * @method indexOf
 *   @param {DownloadLink} link The link to find the index of.
 *   @returns {number} The index of the link in the package.
 * @method isExpanded
 *   @returns {boolean} True if the package is expanded.
 * @method isFinished
 *   @returns {boolean} True if the package is finished.
 * @method remove
 *   @returns {boolean} True if the package was removed.
 * @method setComment
 *   @param {string} comment The comment to associate with the package.
 * @method setDownloadFolder
 *   @param {string} folder The download folder path to set.
 * @method setExpanded
 *   @param {boolean} expanded Set the expanded state.
 * @method setName
 *   @param {string} name The name to set for the package.
 * @method setPriority
 *   @param {string} priority The priority to set for the package.
 * @method setProperty
 *   @param {string} key The property key.
 *   @param {Object} value The property value.
 * @method toString
 *   @returns {string} String representation of the package.
 */
class FilePackage {
	/**
	 * @returns {long}
	 */
	getAddedDate() {}

	/**
	 * @returns {Archive[]}
	 */
	getArchives() {}

	/**
	 * @returns {long}
	 */
	getBytesLoaded() {}

	/**
	 * @returns {long}
	 */
	getBytesTotal() {}

	/**
	 * @returns {string}
	 */
	getComment() {}

	/**
	 * @returns {string}
	 */
	getDownloadFolder() {}

	/**
	 * @returns {DownloadLink[]}
	 */
	getDownloadLinks() {}

	/**
	 * @returns {long}
	 */
	getFinishedDate() {}

	/**
	 * @returns {long}
	 */
	getModifiedDate() {}

	/**
	 * @returns {string}
	 */
	getName() {}

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
	getUUID() {}

	/**
	 * @param {DownloadLink} link
	 * @returns {number}
	 */
	indexOf(link) {}

	/**
	 * @returns {boolean}
	 */
	isExpanded() {}

	/**
	 * @returns {boolean}
	 */
	isFinished() {}

	/**
	 * @returns {boolean}
	 */
	remove() {}

	/**
	 * @param {string} comment
	 */
	setComment(comment) {}

	/**
	 * @param {string} folder
	 */
	setDownloadFolder(folder) {}

	/**
	 * @param {boolean} expanded
	 */
	setExpanded(expanded) {}

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
	 * @returns {string}
	 */
	toString() {}
}