import { LinkInfo } from './index.js';

/**
 * Represents a file or directory path in JDownloader.
 */
export class FilePath {
	copyTo(dest: string): boolean
	copyTo(dest: string, newName: string, overwrite: boolean): boolean
	delete(): boolean
	deleteRecursive(): boolean
	exists(): boolean
	getAbsolutePath(): string
	getChildren(): FilePath[]
	getCreatedDate(): number
	getExtension(): string
	getFreeDiskSpace(): number
	getLinkInfo(): LinkInfo
	getModifiedDate(): number
	getName(): string
	getParent(): FilePath
	getPath(): string
	getPathSeparator(): string
	getReservedDiskSpace(): number
	getSize(): number
	isDirectory(): boolean
	isFile(): boolean
	mkdirs(): boolean
	moveTo(dest: string): boolean
	rename(newName: string): FilePath
	renameName(newName: string): FilePath
	renamePath(newPath: string): FilePath
	renameTo(dest: string): boolean
	toString(): string
}
