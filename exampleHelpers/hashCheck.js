/**
 * Note: This helper requires `sqlite3` to be installed and available in PATH.
 * You can install it from https://www.sqlite.org/download.html
 * 
 * Because this runs in Rhino, we are using ES5 syntax, and cannot use modern JS features,
 * such as export, const, etc.
 */

// Replace this with the path to your database file
var dbPath = '/path/to/your/jdownloader/scripts/hashDatabase.db';
var dbTable = 'file_hashes';

/**
 * Check if a hash already exists in the download database
 * @param {string} hash - hash to check
 * @returns {boolean} true if hash already exists in download database, false otherwise
 */
function hashAlreadyInDb(hash) {
    // Run table creation, insert, and changes() in a single sqlite process (saving cycles (in theory))
    var query =
        "CREATE TABLE IF NOT EXISTS " + dbTable + " (hash TEXT PRIMARY KEY);\n" +
        "INSERT OR IGNORE INTO " + dbTable + "(hash) VALUES ('" + hash + "');\n" +
        "SELECT changes();";

    // 1 new insert, 0 duplicate
    return _execDbQuery(query) === "0";
}

/**
 * Add a new hash to the download database
 * @param {string} hash - hash to add
 * @returns {boolean} true if hash was added, false if it already existed
 */
function addHashToDb(hash) {
    var query =
        "INSERT OR IGNORE INTO " + dbTable + "(hash) VALUES ('" + hash + "');\n" +
        "SELECT changes();";

	// 1 new insert, 0 duplicate
    return _execDbQuery(query) === "1";
}

/**
 * Perform a sqlite db query using callSync
 * @param {string} query
 * @returns {string} stdout from sqlite3
 */
function _execDbQuery(query) {
    var result = callSync("sqlite3", "-batch", "-noheader", dbPath, query);
    return result ? result.trim() : "";
}