import { pinBackings, pinTypes } from "./pins";

export const patchBackings = ["Sew-on", "Iron-on", "Hook-and-loop"] as const;

type Choice = { key: string; title: string; options: readonly string[]; icon: string };
function choice(key: string, title: string, options: readonly string[], icon: string): Choice {
  return { key, title, options, icon };
}

const backing = choice("backing", "Choose a patch backing", patchBackings, "attachment");

export function quoteChoices(product: string, material: string): Choice[] {
  switch (product) {
    case "patches":
      return [
        choice("material", "What type of patch do you need?", ["PVC", "Embroidered", "Woven", "Chenille", "Sublimated", "Leather"], "badge"),
        backing,
      ];
    case "keychains":
      return [
        choice("material", "Choose a keychain style", ["Embroidered", "Woven", "Sublimation Printed", "PVC / Rubber"], "keychains"),
        ...(material === "PVC / Rubber" ? [] : [choice("border", "Choose a keychain border", ["Merrowed", "Heat Cut", "Laser Cut"], "border")]),
        choice("design", "Choose a design area", ["Single Sided", "Double Sided – Same Design", "Double Sided – Different Design"], "design"),
        choice("attachment", "Choose a keychain attachment", ["Split Ring", "Split Ring with Chain", "Lobster Clasp", "Split Ring with Lobster", "Carabiner Clip"], "attachment"),
      ];
    case "pins":
      return [
        choice("material", "Choose a pin style", pinTypes.map(({ option }) => option), "pins"),
        choice("attachment", "Choose a pin backing or attachment", pinBackings.map(([label]) => label), "attachment"),
      ];
    case "coins":
      return [
        choice("material", "Choose a coin style", ["Soft Enamel", "Hard Enamel", "Offset Printed", "Die Struck"], "coins"),
        choice("shape", "Choose a coin shape", ["Rounded", "Custom Shape"], "shape"),
        choice("design", "Choose a design area", ["Single Sided", "Double Sided"], "design"),
        choice("plating", "Choose a plating or finish", ["Gold", "Silver", "Copper", "Black", "Dual-Plating", "Antique Gold", "Antique Silver", "Antique Copper", "Antique Brass"], "color"),
        choice("edge", "Choose a coin edge", ["Standard Flat", "Rope", "Cross-cut", "Diamond Cut", "Reeded", "Oblique", "Spur"], "border"),
      ];
    default:
      return [];
  }
}

export const quoteUnits = ["in", "cm", "mm"];

export const quoteFileLimit = 5;
export const quoteFileBytes = 3 * 1024 * 1024;
export const quoteFileAccept = ".png,.jpg,.jpeg,.webp,.pdf,.svg,.ai,.eps";

export function quoteFileError(files: readonly File[]) {
  if (files.length > quoteFileLimit) return "Add up to 5 artwork files.";
  const extensions = quoteFileAccept.split(",");
  if (files.some((file) => !extensions.some((extension) => file.name.toLowerCase().endsWith(extension)))) {
    return "Choose PNG, JPG, WebP, PDF, SVG, AI, or EPS files.";
  }
  if (files.some((file) => file.size === 0)) return "Remove empty artwork files before continuing.";
  if (files.reduce((total, file) => total + file.size, 0) > quoteFileBytes) {
    return "Artwork files must be 3 MB or less in total.";
  }
  return "";
}
