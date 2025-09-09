
/**
 * Represents a linkgrabber selection in JDownloader.
 *
 * @class
 * @typedef {Object} LinkgrabberSelection
 *
 * @method getContextLink
 *   @returns {CrawledLink} The context crawled link.
 * @method getContextPackage
 *   @returns {CrawledPackage} The context crawled package.
 * @method getLinks
 *   @returns {CrawledLink[]} The crawled links in the selection.
 * @method getPackages
 *   @returns {CrawledPackage[]} The crawled packages in the selection.
 * @method isLinkContext
 *   @returns {boolean} True if the selection is a link context.
 * @method isPackageContext
 *   @returns {boolean} True if the selection is a package context.
 */
class LinkgrabberSelection {
	/**
	 * @returns {CrawledLink}
	 */
	getContextLink() {}

	/**
	 * @returns {CrawledPackage}
	 */
	getContextPackage() {}

	/**
	 * @returns {CrawledLink[]}
	 */
	getLinks() {}

	/**
	 * @returns {CrawledPackage[]}
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