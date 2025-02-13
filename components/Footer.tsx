import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center gap-2">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold text-white">joaoschwingel</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Joao-Schwingel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/joaov-schwingel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:jv.schwingel@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Email
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} João Vitor Schwingel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

