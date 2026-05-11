import { Leaf, Mail, Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 glass-panel mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
                ecotract
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Advanced plant disease detection powered by AI. Helping farmers and gardeners keep their plants healthy and thriving.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#detect" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Detect Disease</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">API Documentation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} ecotract. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
