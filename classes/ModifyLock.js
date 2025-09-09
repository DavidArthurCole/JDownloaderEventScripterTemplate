/**
 * Represents a modify lock in JDownloader.
 * 
 * @class
 * @typedef {Object} ModifyLock
 * 
 * @method readLock
 *   @returns {boolean}
 * @method readUnlock
 *   @param {boolean} [myBoolean]
 * @method writeLock
 * @method writeUnlock
 */
class ModifyLock { 
    /**
     * @returns {boolean}
     */
    readLock() {}

    /**
     * @param {boolean} [myBoolean]
     */
    readUnlock(myBoolean) {}

    writeLock() {}
    writeUnlock() {}
}