/**
 * Represents a crawler job in JDownloader.
 *
 * @class
 * @typedef {Object} CrawlerJob
 *
 * @method getArchivPasswords
 *   @returns {string[]} The archive passwords for the job.
 * @method getOrigin
 *   @returns {string} The origin of the job.
 * @method getPassword
 *   @returns {string} The password for the job.
 * @method getSourceUrl
 *   @returns {string} The source URL for the job.
 * @method getText
 *   @returns {string} The text for the job.
 * @method getUUID
 *   @returns {string} The UUID of the job.
 * @method isAssignJobID
 *   @returns {boolean} True if the job ID is assigned.
 * @method isDeepAnalysisEnabled
 *   @returns {boolean} True if deep analysis is enabled.
 * @method isOverwritesPackagizerRulesEnabled
 *   @returns {boolean} True if packagizer rules are overwritten.
 * @method setAssignJobID
 *   @param {boolean} assign Set whether to assign a job ID.
 * @method setDeepAnalysisEnabled
 *   @param {boolean} enabled Set whether deep analysis is enabled.
 * @method setPassword
 *   @param {string} password Set the password for the job.
 * @method setText
 *   @param {string} text Set the text for the job.
 */
class CrawlerJob {
	/**
	 * @returns {string[]}
	 */
	getArchivPasswords() {}

	/**
	 * @returns {string}
	 */
	getOrigin() {}

	/**
	 * @returns {string}
	 */
	getPassword() {}

	/**
	 * @returns {string}
	 */
	getSourceUrl() {}

	/**
	 * @returns {string}
	 */
	getText() {}

	/**
	 * @returns {string}
	 */
	getUUID() {}

	/**
	 * @returns {boolean}
	 */
	isAssignJobID() {}

	/**
	 * @returns {boolean}
	 */
	isDeepAnalysisEnabled() {}

	/**
	 * @returns {boolean}
	 */
	isOverwritesPackagizerRulesEnabled() {}

	/**
	 * @param {boolean} assign
	 */
	setAssignJobID(assign) {}

	/**
	 * @param {boolean} enabled
	 */
	setDeepAnalysisEnabled(enabled) {}

	/**
	 * @param {string} password
	 */
	setPassword(password) {}

	/**
	 * @param {string} text
	 */
	setText(text) {}
}