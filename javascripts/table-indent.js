document.addEventListener("DOMContentLoaded", function () {
    const tables = document.querySelectorAll(".md-typeset table");
  
    tables.forEach(table => {
      const heading = findPreviousHeading(table);
      if (!heading) return;
  
      const level = heading.tagName[1]; // '2'–'6'
      const cssVarName = `--l${level}-indent`;
  
      const container = table.closest('.md-typeset');
      if (!container) return;
  
      const computedStyle = getComputedStyle(container);
      const baseIndent = computedStyle.getPropertyValue(cssVarName).trim();
      if (!baseIndent || !baseIndent.endsWith('em')) return;
  
      const indentLeft = `calc(${baseIndent} + 2em)`;
      const indentRight = `calc(-1 * (${baseIndent} + 2em))`;
  
      table.style.setProperty('margin-left', indentLeft, 'important');
      table.style.setProperty('margin-right', indentRight, 'important');
    });
  
    function findPreviousHeading(el) {
      let current = el.previousElementSibling;
  
      while (current) {
        if (/^H[2-6]$/.test(current.tagName)) return current;
  
        const found = current.querySelector?.("h2, h3, h4, h5, h6");
        if (found) return found;
  
        current = current.previousElementSibling;
      }
  
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        let prev = parent.previousElementSibling;
        while (prev) {
          if (/^H[2-6]$/.test(prev.tagName)) return prev;
  
          const nested = prev.querySelector?.("h2, h3, h4, h5, h6");
          if (nested) return nested;
  
          prev = prev.previousElementSibling;
        }
        parent = parent.parentElement;
      }
  
      return null;
    }
  });
  