(() => {
  const tables = [...document.querySelectorAll("table.record-table")];

  if (!tables.length) {
    return;
  }

  const sheets = tables.map((table) => {
    const box = table.closest(".handoff");
    if (box) {
      const prompt = box.previousElementSibling;
      if (prompt?.matches("p.record-prompt")) {
        const sheet = document.createElement("div");
        sheet.className = "print-sheet";
        box.parentNode.insertBefore(sheet, prompt);
        sheet.append(prompt, box);
        return sheet;
      }

      box.classList.add("print-sheet");
      return box;
    }

    const sheet = document.createElement("div");
    sheet.className = "print-sheet";
    table.parentNode.insertBefore(sheet, table);

    const prompt = sheet.previousElementSibling;
    if (prompt?.matches("p.record-prompt")) {
      sheet.append(prompt);
    }

    sheet.append(table);
    return sheet;
  });

  sheets[0].classList.add("print-sheet-first");

  sheets.forEach((sheet) => {
    let ancestor = sheet.parentElement;
    while (ancestor) {
      ancestor.classList.add("print-sheet-ancestor");
      ancestor = ancestor.parentElement;
    }
  });

  const tools = document.createElement("div");
  tools.className = "print-tools no-print";
  tools.setAttribute("aria-label", "Mentor print tools");
  tools.innerHTML = `
    <p><strong>Mentor print tools:</strong> each student record is prepared as its own worksheet page.</p>
    <button type="button">Print student worksheets</button>
  `;

  const button = tools.querySelector("button");
  button.addEventListener("click", () => {
    document.body.classList.add("print-worksheets");

    const restore = () => {
      document.body.classList.remove("print-worksheets");
      window.removeEventListener("afterprint", restore);
    };

    window.addEventListener("afterprint", restore);
    window.print();
  });

  document.querySelector("main")?.prepend(tools);
})();
