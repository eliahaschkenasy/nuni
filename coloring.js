/* ==========================================================================
   Nuni – coloring pages
   Tap any picture to print just that one; the button prints them all.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sheets = Array.from(document.querySelectorAll(".sheet"));

  function clearSingle() {
    body.classList.remove("printing-one");
    sheets.forEach((s) => s.classList.remove("print-only"));
  }

  function printOne(sheet) {
    clearSingle();
    body.classList.add("printing-one");
    sheet.classList.add("print-only");
    window.print();
  }

  sheets.forEach((sheet) => {
    // each picture behaves like a button
    sheet.tabIndex = 0;
    sheet.setAttribute("role", "button");

    sheet.addEventListener("click", () => printOne(sheet));
    sheet.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        printOne(sheet);
      }
    });
  });

  const printAll = document.getElementById("printAll");
  if (printAll) {
    printAll.addEventListener("click", () => {
      clearSingle();
      window.print();
    });
  }

  // Restore the normal view once the print dialog closes
  window.addEventListener("afterprint", clearSingle);
});
