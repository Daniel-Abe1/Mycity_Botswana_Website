# 🚀 MyCity Website

**The MyCity Website** is the ultimate tourism and lifestyle platform for Nigeria — showcasing the best of our cities, culture, people, events, food spots, travel destinations, nightlife, and everything lifestyle.

It serves as a centralized hub where users can explore what’s happening across Nigeria, discover places to visit, stay updated on local events, and get inspired by the vibrant life across states and cities.

Built with Next.js, React, Tailwind CSS, and managed with pnpm, the website delivers fast performance, clean design, and an engaging browsing experience.

1. **Install pnpm** (if not already installed):

   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

## 📋 Available Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `pnpm dev`        | Start development server with Turbopack |
| `pnpm build`      | Build for production                    |
| `pnpm start`      | Start production server                 |
| `pnpm lint`       | Run ESLint with auto-fix                |
| `pnpm lint:check` | Check linting without fixing            |
| `pnpm type-check` | Run TypeScript type checking            |
| `pnpm clean`      | Clean build artifacts and cache         |
| `pnpm prepare`    | Setup Husky git hooks                   |

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.3 with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Radix UI primitives
- **Icons:** Lucide React
- **Package Manager:** pnpm (enforced for consistency)

## 🎨 UI Components Included

- **Accordion** (Radix UI)
- **Slot** (Radix UI)
- **Class Variance Authority** for component variants
- **Tailwind Merge** for className optimization
- **Tailwind CSS Animate** for animations

## 🔧 Configuration

### Git Hooks & Commit Standards

This template includes **Husky** and **commitlint** for maintaining code quality and standardized commit messages:

- **Pre-commit hooks** automatically run linting and type checking
- **Commit message validation** ensures consistent commit format
- **Supported commit types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`, `security`, `translation`, `changeset`, `layout`, `pages`, `api`, `wip`

Example commit messages:
```bash
feat: add new user authentication feature
fix: resolve navigation menu alignment issue
docs: update API documentation
style: format code according to style guide
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
# Example
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_MTN_API_KEY=your-api-key
```

### Node.js Version (Optional)

This template is optimized for Node.js 18+, but should work with 16+.

```bash
# If using nvm, you can use the recommended version:
nvm use
```

## 🚨 Troubleshooting

### Common Issues

**Dependencies conflict:**

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Type errors:**

```bash
pnpm run type-check
```

**Linting issues:**

```bash
pnpm run lint
```

**Node.js compatibility issues:**

- Try upgrading to Node.js 18+ if you encounter problems
- Most issues are resolved with newer Node versions

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Check [Radix UI documentation](https://www.radix-ui.com/primitives)
- Consider upgrading Node.js if you encounter compatibility issues

## 📝 Development Guidelines for MTN Nigeria Teams

1. **Use TypeScript** for all new files
2. **Use Tailwind CSS** for styling (follow MTN design system)
3. **Leverage Radix UI** components for accessibility
4. **Follow conventional commit standards** (feat:, fix:, docs:, etc.)
5. **Run linting** before committing (automated via Husky)
6. **Test builds** locally before deploying
7. **Keep dependencies updated** regularly
8. **Follow MTN coding standards** and best practices

## ⚖️ License

This project is **MIT licensed**, meaning you're free to use, modify, and distribute it.

---

**Happy coding! 🎉🚀**
