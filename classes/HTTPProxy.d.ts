/**
 * Represents an HTTP proxy configuration in JDownloader.
 */
export class HTTPProxy {
    getHost(): string
    getPassword(): string
    getPort(): number
    getType(): string
    getUsername(): string
    indexOf(): number
    isEnabled(): boolean
    remove(): boolean
    setEnabled(enabled: boolean): void
    toExportString(): string
}