/**
 * Represents a crawled package in JDownloader.
 *
 * @class
 * @typedef {Object} CrawledPackage
 *
 * @method getAddedDate
 *   @returns {long} The date the package was added.
 * @method getArchives
 *   @returns {Archive[]} The archives in the package.
 * @method getBytesTotal
 *   @returns {long} The total size of the package in bytes.
 * @method getComment
 *   @returns {string} The comment associated with the package.
 * @method getDownloadFolder
 *   @returns {string} The download folder path for the package.
 * @method getDownloadLinks
 *   @returns {CrawledLink[]} The crawled links in the package.
 * @method getModifiedDate
 *   @returns {long} The date the package was last modified.
 * @method getName
 *   @returns {string} The name of the package.
 * @method getPriority
 *   @returns {string} The priority of the package.
 * @method getUUID
 *   @returns {string} The UUID of the package.
 * @method indexOf
 *   @param {CrawledLink} link The link to find the index of.
 *   @returns {number} The index of the link in the package.
 * @method isExpanded
 *   @returns {boolean} True if the package is expanded.
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
 * @method toString
 *   @returns {string} String representation of the package.
 */
class CrawledPackage {
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
	 * @returns {CrawledLink[]}
	 */
	getDownloadLinks() {}

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
	 * @returns {string}
	 */
	getUUID() {}

	/**
	 * @param {CrawledLink} link
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
	 * @returns {string}
	 */
	toString() {}
}