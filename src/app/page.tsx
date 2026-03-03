export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Your Next.js App</h1>
        <p className="text-neutral-400 text-lg mb-8">
          This is a minimal Next.js 16 starter template with TypeScript and Tailwind CSS 4.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <h2 className="text-white font-semibold mb-1">📚 Documentation</h2>
            <p className="text-neutral-400 text-sm">Learn about Next.js features and API</p>
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <h2 className="text-white font-semibold mb-1">🎓 Learn</h2>
            <p className="text-neutral-400 text-sm">Interactive tutorials to get you started</p>
          </a>
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <h2 className="text-white font-semibold mb-1">⭐ GitHub</h2>
            <p className="text-neutral-400 text-sm">Star us on GitHub</p>
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <h2 className="text-white font-semibold mb-1">🚀 Deploy</h2>
            <p className="text-neutral-400 text-sm">Deploy your app with Vercel</p>
          </a>
        </div>
      </div>
    </main>
  );
}
