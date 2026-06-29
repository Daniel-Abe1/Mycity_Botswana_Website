#!/bin/bash

# setup.sh - Run this script after creating a new repository from template

echo "🚀 Setting up your new frontend project..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

# Check Node.js version (warning only, not blocking)
NODE_VERSION=$(node --version | cut -d'v' -f2)
RECOMMENDED_VERSION="18.17.0"

# Compare versions (basic check)
NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
    echo "⚠️  Warning: Node.js version $NODE_VERSION detected."
    echo "   Recommended: Node.js 18+ for optimal compatibility"
    echo "   You can continue, but consider upgrading if you encounter issues"
    echo "   Use 'nvm use' if you have nvm installed"
    echo ""
else
    echo "✅ Node.js version $NODE_VERSION detected (compatible)"
fi

# Clean up any existing lock files and node_modules
echo "🧹 Cleaning up existing dependencies..."
rm -rf node_modules pnpm-lock.yaml package-lock.json yarn.lock

# Update project name in package.json
read -p "Enter your project name (current: $(grep '"name"' package.json | cut -d'"' -f4)): " PROJECT_NAME
if [ ! -z "$PROJECT_NAME" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/\"name\": \"[^\"]*\"/\"name\": \"$PROJECT_NAME\"/" package.json
    else
        # Linux
        sed -i "s/\"name\": \"[^\"]*\"/\"name\": \"$PROJECT_NAME\"/" package.json
    fi
fi

# Install dependencies
echo "📦 Installing dependencies with pnpm..."
pnpm install

# Run initial checks (but don't fail on type errors)
echo "🔍 Running initial type checking..."
if pnpm run type-check; then
    echo "✅ Type checking passed"
else
    echo "⚠️  Type checking found issues - you may need to fix these before development"
fi

echo ""
echo "✅ Setup complete! You can now run:"
echo "  pnpm dev    - Start development server"
echo "  pnpm build  - Build for production"
echo "  pnpm lint   - Run linting"
echo ""
echo "💡 Tip: If you encounter Node.js compatibility issues, consider using Node.js 18+"
echo "🎉 Happy coding! With Love from Design System Team "
