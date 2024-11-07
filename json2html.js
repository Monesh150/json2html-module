export default function json2html(data) {
    // Extract headers from the data (unique keys from all objects)
    const headers = [...new Set(data.flatMap(obj => Object.keys(obj)))];
    
    // Create the table element with the data-user attribute
    let html = `<table data-user="jangammonesh@gmail.com">`;
    
    // Generate the header row
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    
    // Generate the body rows
    html += `<tbody>`;
    for (const row of data) {
        html += `<tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += `</tr>`;
    }
    html += `</tbody></table>`;
    
    return html;
}
