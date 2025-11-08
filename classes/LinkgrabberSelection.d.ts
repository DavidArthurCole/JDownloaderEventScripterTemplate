import { CrawledLink, CrawledPackage } from './index.js';

/**
 * Represents a linkgrabber selection in JDownloader.
 */
export class LinkgrabberSelection {
	getContextLink(): CrawledLink
	getContextPackage(): CrawledPackage
	getLinks(): CrawledLink[]
	getPackages(): CrawledPackage[]
	isLinkContext(): boolean
	isPackageContext(): boolean
}
