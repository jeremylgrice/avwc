# Linting Setup

This project includes comprehensive linting for markdown files and YAML front matter to ensure consistency and prevent parsing errors.

## Available Scripts

### YAML Front Matter Validation

```bash
npm run lint:yaml
```

Validates YAML front matter in all markdown files in the `_posts` directory. Checks for:

- Valid YAML syntax
- Required fields (`title`, `excerpt`, `date`)
- Proper `ogImage` structure
- Date format validation (ISO 8601)

### Markdown Linting

```bash
npm run lint:md
```

Runs markdownlint on all markdown files (excluding node_modules) to check for style and formatting issues.

### Full Linting

```bash
npm run lint
```

Runs both YAML and markdown linting.

### Auto-fix Markdown Issues

```bash
npm run lint:fix
```

Automatically fixes markdown style issues where possible.

### Posts-only Linting

```bash
npm run lint:posts
```

Quick check for just the blog posts YAML validation.

### Pre-commit Check

```bash
npm run pre-commit
```

Recommended to run before committing changes. Currently validates YAML front matter.

## Configuration

### Markdown Linting

Configuration is in `.markdownlint.json`. Current rules disabled:

- MD013: Line length (disabled for flexibility)
- MD033: HTML allowed
- MD041: First line heading not required
- MD001: Heading levels don't need to be incremental
- MD024: Duplicate headings allowed
- MD025: Multiple H1 headings allowed
- MD022: Blank lines around headings not required
- MD036: Emphasis as headings allowed
- MD034: Bare URLs allowed
- MD059: Link text requirements relaxed
- MD047: Single trailing newline not required

### YAML Validation

Custom script at `scripts/validate-yaml.js` validates:

- YAML syntax correctness
- Required fields for blog posts
- Date format validation
- ogImage structure validation

## Error Examples

### YAML Syntax Error

```
❌ _posts/example.md: YAML parsing error - bad indentation of a mapping entry at line 6, column 3
```

### Missing Required Field

```
❌ _posts/example.md: Missing required fields: title, excerpt
```

### Invalid ogImage Structure

```
❌ _posts/example.md: ogImage must be an object with a 'url' property
```

## Integration

### Development Workflow

1. Write/edit blog posts
2. Run `npm run lint:posts` to validate YAML
3. Fix any validation errors
4. Run `npm run pre-commit` before committing

### CI/CD

Add to your CI pipeline:

```bash
npm run lint
```

This ensures all markdown files and YAML front matter are valid before deployment.

## Front Matter Template

Use this template for new blog posts:

```yaml
---
title: "Your Blog Post Title"
excerpt: "A brief description of your blog post content..."
coverImage: "/assets/blog/cover-photos/your-image.webp"
date: "2025-10-14T00:00:00.000Z"
ogImage:
  url: "/assets/blog/cover-photos/your-image.webp"
---
```

## Troubleshooting

### Common YAML Issues

1. **Indentation**: Use 2 spaces for nested properties
2. **Quotes**: Use double quotes for string values
3. **Line breaks**: Don't split values across lines
4. **Colons**: Ensure space after colons in key-value pairs

### Running Individual Validations

To check a specific file:

```bash
node scripts/validate-yaml.js
```

The script automatically finds and validates all `.md` files in the `_posts` directory.
