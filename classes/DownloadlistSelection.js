
/**
 * Represents a download list selection in JDownloader.
 *
 * @class
 * @typedef {Object} DownloadlistSelection
 *
 * @method getContextLink
 *   @returns {DownloadLink} The context download link.
 * @method getContextPackage
 *   @returns {FilePackage} The context file package.
 * @method getDownloadLinks
 *   @returns {DownloadLink[]} The download links in the selection. (Deprecated: May be removed in future versions.)
 * @method getLinks
 *   @returns {DownloadLink[]} The download links in the selection.
 * @method getPackages
 *   @returns {FilePackage[]} The file packages in the selection.
 * @method isLinkContext
 *   @returns {boolean} True if the selection is a link context.
 * @method isPackageContext
 *   @returns {boolean} True if the selection is a package context.
 */
class DownloadlistSelection {
	/**
	 * @returns {DownloadLink}
	 */
	getContextLink() {}

	/**
	 * @returns {FilePackage}
	 */
	getContextPackage() {}

	/**
	 * @deprecated May be removed in future versions.
	 * @returns {DownloadLink[]}
	 */
	getDownloadLinks() {}

	/**
	 * @returns {DownloadLink[]}
	 */
	getLinks() {}

	/**
	 * @returns {FilePackage[]}
	 */
	getPackages() {}

	/**
	 * @returns {boolean}
	 */
	isLinkContext() {}

	/**
	 * @returns {boolean}
	 */
	isPackageContext() {}
}