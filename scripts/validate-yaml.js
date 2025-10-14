#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const matter = require("gray-matter");

function validateYamlFrontMatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const parsed = matter(content);

    // Check if front matter exists
    if (!parsed.data || Object.keys(parsed.data).length === 0) {
      console.warn(`⚠️  ${filePath}: No YAML front matter found`);
      return false;
    }

    // Validate required fields for blog posts
    const required = ["title", "excerpt", "date"];
    const missing = required.filter((field) => !parsed.data[field]);

    if (missing.length > 0) {
      console.error(
        `❌ ${filePath}: Missing required fields: ${missing.join(", ")}`
      );
      return false;
    }

    // Validate date format
    if (parsed.data.date) {
      const dateStr = parsed.data.date;
      if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(dateStr)) {
        console.warn(
          `⚠️  ${filePath}: Date format should be ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)`
        );
      }
    }

    // Validate ogImage structure if present
    if (parsed.data.ogImage) {
      if (typeof parsed.data.ogImage !== "object" || !parsed.data.ogImage.url) {
        console.error(
          `❌ ${filePath}: ogImage must be an object with a 'url' property`
        );
        return false;
      }
    }

    console.log(`✅ ${filePath}: YAML front matter is valid`);
    return true;
  } catch (error) {
    console.error(`❌ ${filePath}: YAML parsing error - ${error.message}`);
    return false;
  }
}

function findMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath));
    } else if (item.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  const postsDir = path.join(process.cwd(), "_posts");

  if (!fs.existsSync(postsDir)) {
    console.error("❌ _posts directory not found");
    process.exit(1);
  }

  console.log("🔍 Validating YAML front matter in markdown files...\n");

  const markdownFiles = findMarkdownFiles(postsDir);
  let allValid = true;

  for (const file of markdownFiles) {
    const isValid = validateYamlFrontMatter(file);
    if (!isValid) {
      allValid = false;
    }
  }

  console.log(
    `\n📊 Validation complete: ${markdownFiles.length} files checked`
  );

  if (allValid) {
    console.log("🎉 All files have valid YAML front matter!");
    process.exit(0);
  } else {
    console.log("💥 Some files have YAML front matter issues");
    process.exit(1);
  }
}

main();
