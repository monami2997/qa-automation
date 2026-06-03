# JavaScript String Cheat Sheet

| Method / Function | One-line explanation |
|---|---|
| `String(value)` | Converts a value to a string. |
| `String.fromCharCode(...codes)` | Creates a string from UTF-16 code units. |
| `String.fromCodePoint(...codePoints)` | Creates a string from Unicode code points. |
| `String.raw(strings, ...substitutions)` | Returns a raw string literal, keeping escape sequences intact. |
| `str.charAt(index)` | Returns the character at the specified index. |
| `str.charCodeAt(index)` | Returns the UTF-16 code of the character at the specified index. |
| `str.codePointAt(pos)` | Returns the Unicode code point value at the given position. |
| `str.concat(...strings)` | Combines the original string with one or more strings. |
| `str.includes(searchString, position)` | Checks whether the string contains the search string. |
| `str.indexOf(searchValue, fromIndex)` | Returns the index of the first occurrence of the search string. |
| `str.lastIndexOf(searchValue, fromIndex)` | Returns the index of the last occurrence of the search string. |
| `str.startsWith(searchString, position)` | Checks whether the string begins with the search string. |
| `str.endsWith(searchString, length)` | Checks whether the string ends with the search string. |
| `str.substring(start, end)` | Extracts a substring between two indices. |
| `str.slice(beginIndex, endIndex)` | Extracts a section of the string and returns it as a new string. |
| `str.substr(start, length)` | Extracts a substring from a start index for a given length. |
| `str.replace(searchValue, replaceValue)` | Replaces the first match of a substring or pattern. |
| `str.replaceAll(searchValue, replaceValue)` | Replaces all matches of a substring or pattern. |
| `str.match(regexp)` | Returns matched results for a regular expression. |
| `str.matchAll(regexp)` | Returns an iterator of all matches of a regular expression. |
| `str.search(regexp)` | Searches for a match and returns the index of the first occurrence. |
| `str.split(separator, limit)` | Splits the string into an array of substrings. |
| `str.trim()` | Removes whitespace from both ends of the string. |
| `str.trimStart()` | Removes whitespace from the beginning of the string. |
| `str.trimEnd()` | Removes whitespace from the end of the string. |
| `str.padStart(targetLength, padString)` | Pads the string at the start to reach a target length. |
| `str.padEnd(targetLength, padString)` | Pads the string at the end to reach a target length. |
| `str.toLowerCase()` | Converts the string to lowercase. |
| `str.toUpperCase()` | Converts the string to uppercase. |
| `str.normalize(form)` | Normalizes Unicode characters using a specified normalization form. |
| `str.localeCompare(compareString, locales, options)` | Compares two strings according to locale-specific order. |
| `str.repeat(count)` | Returns a new string repeated a specified number of times. |
| `str.valueOf()` | Returns the primitive string value. |
| `str.toString()` | Returns the string representation of the string object. |
