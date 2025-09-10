/**
 * Note: This helper requires `sqlite3` to be installed and available in PATH.
 * You can install it from https://www.sqlite.org/download.html
 */

// Replace this with the path to your database file
const dbPath = '/path/to/your/database.db';
const dbTable = 'hashes';

/**
 * Check if a hash already exists in the download database
 * @param {string} hash - hash to check
 * @returns {boolean} true if hash already exists in download database, false otherwise
 */
function hashAlreadyInDb(hash) {
    // Run table creation, insert, and changes() in a single sqlite process (saving cycles (in theory))
    const query = `
        CREATE TABLE IF NOT EXISTS ${dbTable} (hash TEXT PRIMARY KEY);
        INSERT OR IGNORE INTO ${dbTable}(hash) VALUES ('${hash}');
        SELECT changes();
    `;

    const result = _execDbQuery(query);
    // 1 new insert, 0 duplicate
    return result === "0";
}

/**
 * Perform a sqlite db query using callSync
 * @param {string} query
 * @returns {string} stdout from sqlite3
 */
function _execDbQuery(query) {
    const result = callSync("sqlite3", "-batch", "-noheader", dbPath, query);
    return result ? result.trim() : "";
}

/**
 * This can now be used by doing:
 * require('exampleHelpers/hashCheck.js');
 */
export { hashAlreadyInDb };