/**
 * Replace all occurrences of a string with a color class:
 * Example: '###red word list long### and other words' will be replaced with <span className="text-red-500">word list long</span> and other words
 * @param text
 */
export default function (text: string): string {
    // Define the regular expression pattern to extract color
    const colorPattern = /###([a-zA-Z]+)/;
    const matches = text.match(colorPattern);
    let color = "black"; // Default color if not found

    // If color pattern is found, extract the color
    if (matches && matches.length > 1) {
        color = matches[1];
    }

    // Define the regular expression pattern for replacing words
    const wordPattern = /###([a-zA-Z]+) (.*?)###/g;

    // Replace the matches with the desired HTML, using the extracted color
    return text.replace(wordPattern, '<span class="leading-snug text-' + color + '-500"">$2</span>');
}
