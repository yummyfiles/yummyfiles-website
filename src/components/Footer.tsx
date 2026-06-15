export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} YUMMYFILES // DEV
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yummyfiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-white/50 transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/10">/</span>
          <a
            href="https://www.youtube.com/@TheWolfPack123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-white/50 transition-colors"
          >
            YouTube
          </a>
          <span className="text-white/10">/</span>
          <a
            href="#hero"
            className="text-xs text-white/20 hover:text-white/50 transition-colors"
          >
            Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
