/**
 * Represents an archive file in JDownloader.
 *
 * @class
 * @typedef {Object} ArchiveFile
 *
 * @method exists
 *   @param {boolean} [check] Optional. If provided, checks for existence with the given value.
 *   @returns {boolean} True if the file exists.
 * @method getArchiveID
 *   @returns {string} The archive ID of the file.
 * @method getCrawledLinks
 *   @returns {CrawledLink[]} The crawled links in the archive file.
 * @method getDownloadLinks
 *   @returns {DownloadLink[]} The download links in the archive file.
 * @method getExtractionStatus
 *   @returns {string} The extraction status of the file.
 * @method getFilePath
 *   @returns {string} The file path.
 * @method getFileSize
 *   @returns {long} The file size in bytes.
 * @method getName
 *   @returns {string} The name of the file.
 * @method getPath
 *   @returns {FilePath} The path object for the file.
 * @method invalidateExists
 *   Invalidates the existence check for the file.
 * @method isComplete
 *   @returns {boolean} True if the file is complete.
 * @method isMissingArchiveFile
 *   @returns {boolean} True if the file is missing from the archive.
 * @method isPartOfAnArchive
 *   @returns {boolean} True if the file is part of an archive.
 */
class ArchiveFile {
	/**
	 * @param {boolean} [check]
	 * @returns {boolean}
	 */
	exists(check) {}

	/**
	 * @returns {string}
	 */
	getArchiveID() {}

	/**
	 * @returns {CrawledLink[]}
	 */
	getCrawledLinks() {}

	/**
	 * @returns {DownloadLink[]}
	 */
	getDownloadLinks() {}

	/**
	 * @returns {string}
	 */
	getExtractionStatus() {}

	/**
	 * @returns {string}
	 */
	getFilePath() {}

	/**
	 * @returns {long}
	 */
	getFileSize() {}

	/**
	 * @returns {string}
	 */
	getName() {}

	/**
	 * @returns {FilePath}
	 */
	getPath() {}

	/**
	 * Invalidates the existence check for the file.
	 */
	invalidateExists() {}

	/**
	 * @returns {boolean}
	 */
	isComplete() {}

	/**
	 * @returns {boolean}
	 */
	isMissingArchiveFile() {}

	/**
	 * @returns {boolean}
	 */
	isPartOfAnArchive() {}
}