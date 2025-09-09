/**
 * Represents an HTTP proxy configuration in JDownloader.
 *
 * @class
 * @typedef {Object} HTTPProxy
 *
 * @method getHost
 *   @returns {string} The host of the proxy.
 * @method getPassword
 *   @returns {string} The password for the proxy.
 * @method getPort
 *   @returns {number} The port number of the proxy.
 * @method getType
 *   @returns {string} The type of the proxy (e.g., HTTP, SOCKS).
 * @method getUsername
 *   @returns {string} The username for the proxy.
 * @method indexOf
 *   @returns {number} The index of the proxy in the proxy list.
 * @method isEnabled
 *   @returns {boolean} True if the proxy is enabled.
 * @method remove
 *   @returns {boolean} True if the proxy was removed.
 * @method setEnabled
 *   @param {boolean} enabled Enable or disable the proxy.
 * @method toExportString
 *   @returns {string} String representation of the proxy for export.
 */

class HTTPProxy {
    /**
     * @returns {string} The proxy host.
     */
    getHost() {}

    /**
     * @returns {string} The proxy password.
     */
    getPassword() {}

    /**
     * @returns {number} The proxy port.
     */
    getPort() {}

    /**
     * @returns {string} The proxy type.
     */
    getType() {}

    /**
     * @returns {string} The proxy username.
     */
    getUsername() {}

    /**
     * @returns {number} The index of this proxy.
     */
    indexOf() {}

    /**
     * @returns {boolean} True if the proxy is enabled.
     */
    isEnabled() {}

    /**
     * Removes this proxy.
     * @returns {boolean} True if the proxy was removed.
     */
    remove() {}

    /**
     * Enables or disables the proxy.
     * @param {boolean} enabled
     */
    setEnabled(enabled) {}

    /**
     * @returns {string} String representation for export.
     */
    toExportString() {}
}