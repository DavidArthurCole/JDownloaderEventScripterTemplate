import { DownloadLink, FilePackage } from './index.js';

/**
 * Represents a download list selection in JDownloader.
 */
export class DownloadlistSelection {
	getContextLink(): DownloadLink
	getContextPackage(): FilePackage
	/**
	 * @deprecated May be removed in future versions.
	 */
	getDownloadLinks(): DownloadLink[]
	getLinks(): DownloadLink[]
	getPackages(): FilePackage[]
	isLinkContext(): boolean
	isPackageContext(): boolean
}