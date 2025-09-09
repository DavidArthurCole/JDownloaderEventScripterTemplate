/**
 * Represents a conditional skip reason in JDownloader.
 *
 * @class
 * @typedef {Object} ConditionalSkipReason
 *
 * @method getClassName
 *   @returns {string} The class name of the skip reason.
 * @method getDownloadLinkCondition
 *   @returns {DownloadLink} The download link condition.
 * @method getMessage
 *   @returns {string} The message for the skip reason.
 * @method getTimeOutLeft
 *   @returns {long} The time left for the timeout condition.
 * @method getTimeOutTimeStamp
 *   @returns {long} The timestamp for the timeout condition.
 * @method getWaitingSkipReason
 *   @returns {string} The waiting skip reason.
 * @method isConditionReached
 *   @returns {boolean} True if the condition is reached.
 * @method isDownloadLinkCondition
 *   @returns {boolean} True if this is a download link condition.
 * @method isTimeOutCondition
 *   @returns {boolean} True if this is a timeout condition.
 */
class ConditionalSkipReason {
	/**
	 * @returns {string}
	 */
	getClassName() {}

	/**
	 * @returns {DownloadLink}
	 */
	getDownloadLinkCondition() {}

	/**
	 * @returns {string}
	 */
	getMessage() {}

	/**
	 * @returns {long}
	 */
	getTimeOutLeft() {}

	/**
	 * @returns {long}
	 */
	getTimeOutTimeStamp() {}

	/**
	 * @returns {string}
	 */
	getWaitingSkipReason() {}

	/**
	 * @returns {boolean}
	 */
	isConditionReached() {}

	/**
	 * @returns {boolean}
	 */
	isDownloadLinkCondition() {}

	/**
	 * @returns {boolean}
	 */
	isTimeOutCondition() {}
}