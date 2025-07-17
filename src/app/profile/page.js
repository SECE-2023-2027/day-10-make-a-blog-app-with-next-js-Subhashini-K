'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!session) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8">
            <div className="flex items-center space-x-6">
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={96}
                height={96}
                className="rounded-full border-4 border-white"
              />
              <div className="text-white">
                <h1 className="text-3xl font-bold">{session.user.name}</h1>
                <p className="text-blue-100 text-lg">@{session.user.login || session.user.email}</p>
                <p className="text-blue-200 mt-2">Welcome to TechBlog!</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Account Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Account Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Full Name
                    </label>
                    <p className="text-gray-900 dark:text-white">{session.user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </label>
                    <p className="text-gray-900 dark:text-white">{session.user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      GitHub Username
                    </label>
                    <p className="text-gray-900 dark:text-white">@{session.user.login}</p>
                  </div>
                </div>
              </div>

              {/* Profile Actions */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <a
                    href={`https://github.com/${session.user.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 dark:text-white">View GitHub Profile</span>
                  </a>
                  
                  <button
                    className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors w-full text-left"
                  >
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-blue-600 dark:text-blue-400">Edit Profile Settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* GitHub Stats Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Your Activity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-lg text-white">
                  <div className="text-2xl font-bold">Connected</div>
                  <div className="text-green-100">GitHub Account</div>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-lg text-white">
                  <div className="text-2xl font-bold">Member</div>
                  <div className="text-blue-100">TechBlog Community</div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-lg text-white">
                  <div className="text-2xl font-bold">Reader</div>
                  <div className="text-purple-100">Tech Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 TechBlog. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
