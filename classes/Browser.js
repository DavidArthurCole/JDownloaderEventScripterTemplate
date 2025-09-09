/**
 * Represents a browser/session in JDownloader.
 *
 * @class
 * @typedef {Object} Browser
 *
 * @method cloneBrowser
 *   @returns {Browser} A clone of the browser instance.
 * @method getConnectTimeout
 *   @returns {number} The connect timeout in ms.
 * @method getContentLength
 *   @returns {long} The content length of the response.
 * @method getContentType
 *   @returns {string} The content type of the response.
 * @method getCookie
 *   @param {string} host The host for the cookie.
 *   @param {string} key The cookie key.
 *   @returns {string} The cookie value.
 * @method getDefaultSSLTrustALL
 *   @returns {boolean} True if SSL trust-all is enabled by default.
 * @method getDownload
 *   @param {string} url The URL to download.
 *   @param {string} file The file path to save to.
 *   Initiates a download.
 * @method getHTML
 *   @returns {string} The HTML content of the page.
 * @method getLoadLimit
 *   @returns {number} The load limit.
 * @method getPage
 *   @param {string} url The URL to load.
 *   @returns {string} The page content.
 * @method getReadTimeout
 *   @returns {number} The read timeout in ms.
 * @method getRedirectLocation
 *   @returns {string} The redirect location, if any.
 * @method getRequestMethod
 *   @returns {string} The HTTP request method.
 * @method getRequestTime
 *   @returns {long} The request time in ms.
 * @method getResponseCode
 *   @returns {number} The HTTP response code.
 * @method getResponseHeader
 *   @param {string} key The header key.
 *   @returns {string} The header value.
 * @method getResponseHeaders
 *   @returns {Object} A map of all response headers.
 * @method getURL
 *   @returns {string} The current URL.
 * @method headPage
 *   @param {string} url The URL to send a HEAD request to.
 *   @returns {string} The response from the HEAD request.
 * @method isFollowingRedirects
 *   @returns {boolean} True if following redirects is enabled.
 * @method isSSLTrustALL
 *   @returns {boolean} True if SSL trust-all is enabled.
 * @method postPage
 *   @param {string} url The URL to post to.
 *   @param {string} data The data to post.
 *   @returns {string} The response from the POST request.
 * @method setConnectTimeout
 *   @param {number} timeout The connect timeout in ms.
 *   Sets the connect timeout.
 * @method setCookie
 *   @param {string} host The host for the cookie.
 *   @param {string} key The cookie key.
 *   @param {string} value The cookie value.
 *   Sets a cookie.
 * @method setDefaultSSLTrustALL
 *   @param {boolean} trustAll Enable or disable SSL trust-all by default.
 *   Sets the default SSL trust-all behavior.
 * @method setFollowRedirects
 *   @param {boolean} follow Enable or disable following redirects.
 *   Sets the follow redirects behavior.
 * @method setHeader
 *   @param {string} key The header key.
 *   @param {string} value The header value.
 *   Sets a request header.
 * @method setLoadLimit
 *   @param {number} limit The load limit.
 *   Sets the load limit.
 * @method setProxy
 *   @param {string} proxy The proxy string.
 *   @returns {boolean} True if the proxy was set successfully.
 * @method setReadTimeout
 *   @param {number} timeout The read timeout in ms.
 *   Sets the read timeout.
 */
class Browser {
	/**
	 * @returns {Browser}
	 */
	cloneBrowser() {}

	/**
	 * @returns {number}
	 */
	getConnectTimeout() {}

	/**
	 * @returns {long}
	 */
	getContentLength() {}

	/**
	 * @returns {string}
	 */
	getContentType() {}

	/**
	 * @param {string} host
	 * @param {string} key
	 * @returns {string}
	 */
	getCookie(host, key) {}

	/**
	 * @returns {boolean}
	 */
	getDefaultSSLTrustALL() {}

	/**
	 * @param {string} url
	 * @param {string} file
	 */
	getDownload(url, file) {}

	/**
	 * @returns {string}
	 */
	getHTML() {}

	/**
	 * @returns {number}
	 */
	getLoadLimit() {}

	/**
	 * @param {string} url
	 * @returns {string}
	 */
	getPage(url) {}

	/**
	 * @returns {number}
	 */
	getReadTimeout() {}

	/**
	 * @returns {string}
	 */
	getRedirectLocation() {}

	/**
	 * @returns {string}
	 */
	getRequestMethod() {}

	/**
	 * @returns {long}
	 */
	getRequestTime() {}

	/**
	 * @returns {number}
	 */
	getResponseCode() {}

	/**
	 * @param {string} key
	 * @returns {string}
	 */
	getResponseHeader(key) {}

	/**
	 * @returns {Object}
	 */
	getResponseHeaders() {}

	/**
	 * @returns {string}
	 */
	getURL() {}

	/**
	 * @param {string} url
	 * @returns {string}
	 */
	headPage(url) {}

	/**
	 * @returns {boolean}
	 */
	isFollowingRedirects() {}

	/**
	 * @returns {boolean}
	 */
	isSSLTrustALL() {}

	/**
	 * @param {string} url
	 * @param {string} data
	 * @returns {string}
	 */
	postPage(url, data) {}

	/**
	 * @param {number} timeout
	 */
	setConnectTimeout(timeout) {}

	/**
	 * @param {string} host
	 * @param {string} key
	 * @param {string} value
	 */
	setCookie(host, key, value) {}

	/**
	 * @param {boolean} trustAll
	 */
	setDefaultSSLTrustALL(trustAll) {}

	/**
	 * @param {boolean} follow
	 */
	setFollowRedirects(follow) {}

	/**
	 * @param {string} key
	 * @param {string} value
	 */
	setHeader(key, value) {}

	/**
	 * @param {number} limit
	 */
	setLoadLimit(limit) {}

	/**
	 * @param {string} proxy
	 * @returns {boolean}
	 */
	setProxy(proxy) {}

	/**
	 * @param {number} timeout
	 */
	setReadTimeout(timeout) {}
}