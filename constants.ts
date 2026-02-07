// ✅ PROMPT FINAL (curto, sem conflito)
const userNotes = (userInstructions || "").trim();

const modeLine =
  useMode === "product_only"
    ? "No person visible."
    : useMode === "holding"
    ? "Person holding the product in hands at chest level."
    : "Person wearing/using the product naturally.";

const scenarioLine = selectedScenario?.prompt?.trim() || "";
const characterLine =
  useMode === "product_only"
    ? ""
    : (selectedCharacter?.prompt || "").trim();

const fullPrompt = `
${scenarioLine}

${modeLine}
${characterLine}

Product must remain 100% identical to the original uploaded image.
Do not change design, colors, logo, text, materials, proportions.

Professional commercial photo. Clean lighting. Sharp focus. True colors.
Aspect ratio: ${selectedFormat?.aspectRatio || "1:1"}.
Quality: ${quality === "4k" ? "4K ultra realistic" : "HD professional"}.

${userNotes ? `User notes: ${userNotes}` : ""}
`.trim();
