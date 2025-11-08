/**
 * Represents a browser/session in JDownloader.
 */
export class Browser {
	cloneBrowser(): Browser
	getConnectTimeout(): number
	getContentLength(): number
	getContentType(): string
	getCookie(host: string, key: string): string
	getDefaultSSLTrustALL(): boolean
	getDownload(url: string, file: string): void
	getHTML(): string
	getLoadLimit(): number
	getPage(url: string): string
	getReadTimeout(): number
	getRedirectLocation(): string
	getRequestMethod(): string
	getRequestTime(): number
	getResponseCode(): number
	getResponseHeader(key: string): string
	getResponseHeaders(): Map<string, object>
	getURL(): string
	headPage(url: string): string
	isFollowingRedirects(): boolean
	isSSLTrustALL(): boolean
	postPage(url: string, data: string): string
	setConnectTimeout(timeout: number): void
	setCookie(host: string, key: string, value: string): void
	setDefaultSSLTrustALL(trustAll: boolean): void
	setFollowRedirects(follow: boolean): void
	setHeader(key: string, value: string): void
	setLoadLimit(limit: number): void
	setProxy(proxy: string): boolean
	setReadTimeout(timeout: number): void
}
