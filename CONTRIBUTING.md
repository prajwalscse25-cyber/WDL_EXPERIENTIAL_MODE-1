# Contributing to TechFront 2024

Thank you for your interest in contributing to the TechFront 2024 Conference Website! This document provides guidelines and instructions for contributing.

## Code of Conduct

We are committed to providing a welcoming and inspiring community. Please read our Code of Conduct and follow it in all interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots or animated GIFs if possible**
- **Include your browser and OS version**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and the expected behavior**
- **Explain the rationale for this enhancement**

### Pull Requests

- Fill in the required template
- Follow the JavaScript, HTML, and CSS styleguides
- End all files with a newline
- Avoid platform-dependent code

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

#### Commit Types

```
feat: A new feature
fix: A bug fix
refactor: Code refactoring
style: CSS/styling changes (no logic changes)
docs: Documentation changes
chore: Build process, dependencies, tools
perf: Performance improvements
test: Adding or updating tests
ci: CI/CD configuration changes
```

### HTML Styleguide

- Use semantic HTML5 elements
- Always include alt text for images
- Use proper heading hierarchy (h1 → h2 → h3)
- Include proper meta tags
- Use valid HTML validated by W3C

Example:
```html
<section id="schedule">
  <h2>Conference Schedule</h2>
  <!-- Content here -->
</section>
```

### CSS Styleguide

- Use CSS variables for colors and common values
- Use meaningful class names
- Use lowercase with hyphens for class names
- Organize CSS by sections with comments
- Avoid inline styles
- Mobile-first approach for media queries

Example:
```css
/* Section Description */
.section-class {
  background-color: var(--primary-color);
  padding: 20px;
  border-radius: 6px;
}
```

### JavaScript Styleguide

- Use meaningful variable names
- Use `const` by default, `let` if variable will be reassigned
- Avoid `var`
- Use arrow functions for callbacks
- Add comments for complex logic
- Follow ES6+ standards

Example:
```javascript
// Validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### Documentation Styleguide

- Use Markdown for documentation
- Include code examples where relevant
- Keep documentation up to date with code changes
- Use clear and concise language
- Include section headers and table of contents for long documents

## Development Setup

1. Fork the repository
2. Clone your forked repository
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes
5. Test your changes in multiple browsers
6. Commit your changes:
   ```bash
   git commit -m "feat: Your feature description"
   ```
7. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
8. Create a Pull Request

## Local Testing

### Testing in Browser

1. Open `index.html` in your browser
2. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
3. Test across different browsers (Chrome, Firefox, Safari, Edge)
4. Test on mobile devices (iOS, Android)

### Accessibility Testing

- Use browser DevTools accessibility audit
- Test with keyboard navigation only
- Use screen reader (NVDA for Windows, VoiceOver for Mac)
- Check color contrast with WebAIM Contrast Checker

### Performance Testing

- Check Lighthouse score (aim for >90)
- Monitor Core Web Vitals
- Test on slow connections (Throttle in DevTools)

## Branch Naming Convention

```
feature/feature-name       - New feature
fix/issue-name            - Bug fix
refactor/improvement-name - Code refactoring
docs/doc-name             - Documentation
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Increase version numbers following [Semantic Versioning](https://semver.org/)
3. Ensure all tests pass
4. Request review from maintainers
5. Address review comments promptly
6. Squash commits if requested by maintainer

## Code Review Process

- At least one approval required before merging
- Automated checks must pass
- No merge conflicts
- Code follows styleguide
- Documentation is updated
- Tests are included (if applicable)

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## Questions?

- Check the README.md for common questions
- Create an issue with label `question`
- Contact maintainers at info@techfront2024.com

## Acknowledgments

Thank you for contributing to TechFront 2024! Your efforts help make this project better.

---

**Last Updated**: April 20, 2024
