import iconNames from "icons.json";

function createImports(filenames) {
  return filenames.map(
    filename => `import ${toCamelCase(filename)} from "${filename}";`
  );
}

function toCamelCase(string) {
  return string
    .replace(".svg", "")
    .split("-")
    .map((s, index) =>
      index === 0 ? s : s.charAt(0).toUpperCase() + s.substring(1)
    )
    .join("");
}

function polishNames(arrayOfNames) {
  return arrayOfNames.map(icon =>
    icon
      .replace(".svg", "")
      .split("-")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ")
  );
}

function camelCaseNames() {
  return arrayOfNames.map(icon =>
    icon
      .replace(".svg", "")
      .split("-")
      .map((s, index) =>
        index === 0 ? s : s.charAt(0).toUpperCase() + s.substring(1)
      )
      .join("")
  );
}

function readSvgFillFilenames() {
  return iconNames.fill.map(name => name);
}

function readSvgOutlineFilenames() {
  return iconNames.outline.map(name => name);
}

export {
  polishNames,
  camelCaseNames,
  readSvgFillFilenames,
  readSvgOutlineFilenames
};
