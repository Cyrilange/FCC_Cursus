const convertMarkdown = () => {
    const input = document.getElementById('markdown-input').value.trim();
  
    let htmlMarkdown = input
      .replace(/^(#{1,3})\s*(.+)$/gm, (match, hashes, text) => {
        const level = hashes.length;
        return `<h${level}>${text}</h${level}>`;
      })
      .replace(/(\*\*|__)(.*?)\1/gm, '<strong>$2</strong>')
      .replace(/(\*|_)(.*?)\1/gm, '<em>$2</em>')
      .replace(/!\[([^\]]*)\]\(([^)]*)\)/gm, '<img alt="$1" src="$2">')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2">$1</a>')
      .replace(/^>\s*(.*)$/gm, '<blockquote>$1</blockquote>');
  
    return htmlMarkdown;
  };
  
  document.getElementById('markdown-input').addEventListener('input', () => {
    const convertedHTML = convertMarkdown();
    document.getElementById('html-output').textContent = convertedHTML;
    document.getElementById('preview').innerHTML = convertedHTML;
  });
  