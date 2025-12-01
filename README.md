# TickKet 🎫

A decentralized event ticketing platform powered by blockchain technology. Create, buy, and sell event tickets as NFTs with complete transparency and security.

## 🌟 Features

### Core Functionality
- **Event Creation** - Create and manage events with custom ticket pricing
- **NFT Tickets** - Each ticket is a unique NFT on the blockchain
- **Marketplace** - Buy and resell tickets securely
- **Wallet Integration** - Connect with MetaMask, Coinbase Wallet, and more via Reown AppKit

### User Experience
- **User Settings** - Manage profile and notification preferences
- **My Tickets** - View and manage all your event tickets
- **QR Code Generation** - Generate QR codes for ticket validation
- **Responsive Design** - Optimized for desktop and mobile devices

### Production Ready
- **SEO Optimized** - Comprehensive metadata, sitemap, and structured data
- **Legal Compliance** - Terms of Service and Privacy Policy pages
- **PWA Support** - Installable as a progressive web app
- **Loading States** - Skeleton loaders for better UX

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Blockchain**: [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/)
- **Wallet Connection**: [Reown AppKit](https://reown.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jeremiah-eth/TickKet.git
cd TickKet

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
bun dev
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Reown Project ID (get from https://cloud.reown.com)
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🏗️ Project Structure

```
tick-ket/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── create-event/        # Event creation
│   ├── dashboard/           # Dashboard pages
│   ├── events/              # Events listing
│   ├── market/              # Marketplace
│   ├── my-tickets/          # User tickets
│   ├── privacy/             # Privacy policy
│   ├── settings/            # User settings
│   ├── terms/               # Terms of service
│   ├── layout.tsx           # Root layout
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap
├── components/              # React components
│   ├── legal/              # Legal page components
│   ├── settings/           # Settings components
│   ├── ui/                 # UI primitives
│   └── ...                 # Feature components
├── config/                  # Configuration files
├── context/                 # React context providers
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/                  # Static assets
```

## 🎨 Key Features Breakdown

### Settings
- Profile management with form validation
- Notification preferences (email, push, marketing)
- Accessible via `/settings`

### Legal Pages
- Terms of Service at `/terms`
- Privacy Policy at `/privacy`
- Consistent legal document layout

### SEO
- OpenGraph and Twitter card metadata
- Dynamic sitemap generation
- Robots.txt configuration
- JSON-LD structured data

### Mobile Optimization
- Responsive navigation drawer
- Mobile-friendly tables with card view fallback
- Touch-optimized interactions

## 🛠️ Development

```bash
# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint code
bun run lint
```

## 📝 Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jeremiah-eth/TickKet)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Live Demo](https://tickket.vercel.app)
- [GitHub Repository](https://github.com/jeremiah-eth/TickKet)
- [Reown Documentation](https://docs.reown.com)

## 👨‍💻 Author

Built with ❤️ by [Jeremiah](https://github.com/jeremiah-eth)

---

**Note**: This is a demo application. Always conduct thorough security audits before deploying to production with real assets.
