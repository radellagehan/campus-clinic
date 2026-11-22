// Simple quality check for the HTML prototype (used by CI).
// 1) index.html exists  2) inline <script> has valid JS syntax  3) basic structure checks
const fs = require("fs");
const vm = require("vm");

const file = process.argv[2] || "frontend/index.html";
if (!fs.existsSync(file)) { console.error("FAIL: " + file + " not found"); process.exit(1); }

const html = fs.readFileSync(file, "utf8");
let errors = 0;
const fail = (m) => { console.error("FAIL: " + m); errors++; };

if (!/<!doctype html>/i.test(html)) fail("missing <!DOCTYPE html>");
if (!/<html[^>]*lang=/i.test(html)) fail("missing lang attribute on <html>");
if (!/<title>[^<]+<\/title>/i.test(html)) fail("missing <title>");
if (!/<meta[^>]*viewport/i.test(html)) fail("missing viewport meta (responsive)");

const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
if (scripts.length === 0) fail("no inline <script> found");
scripts.forEach((code, i) => {
  try { new vm.Script(code, { filename: "inline-script-" + i }); }
  catch (e) { fail("JS syntax error in inline script " + i + ": " + e.message); }
});

if (errors) { console.error(errors + " check(s) failed"); process.exit(1); }
console.log("OK: " + file + " passed all checks (" + scripts.length + " inline script(s))");
