import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-20 px-6 bg-white dark:bg-black sm:items-start">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Israel Neves Micha
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Full-stack Developer | React/TypeScript Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 px-3 text-white transition-colors hover:bg-blue-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://github.com/isrmicha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white px-3 text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
          </div>
        </section>

        {/* About */}
        <section className="w-full mb-12 space-y-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            About Me
          </h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              <span className="font-medium">👨‍💻 Currently:</span> Working
              full-time at Grupo Boticário.
            </p>
            <p>
              <span className="font-medium">🌱 Learning:</span> Front-end
              development with JavaScript/TypeScript and React with Redux.
            </p>
            <p>
              <span className="font-medium">💙 Interests:</span> Games,
              technology, and cryptocurrency.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
            Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1: Uminha */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🍻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-100 mb-2">
                    Uminha
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    Find places to drink - APK for Android
                  </p>
                  <a
                    href="https://m.apkpure.com/br/uminha-bora-tomar-uma/com.isrstudio.uminhabeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View on APKPure
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Pokedex */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">😸</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-100 mb-2">
                    Pokedex
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    A Pokédex application built with React
                  </p>
                  <div className="flex space-x-3 mb-2">
                    <a
                      href="https://pokedex-isrmicha.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md bg-blue-600 px-3 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/isrmicha/pokedex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: PokePath TD Wiki */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">👾</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-100 mb-2">
                    PokePath TD Wiki
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    Fumadocs Wiki for the game
                  </p>
                  <a
                    href="https://pokepath-wiki.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Wiki
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Web3 Rock Paper Scissors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🪨📃✂️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-100 mb-2">
                    Web3 Rock Paper Scissors
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    A blockchain-based rock paper scissors game
                  </p>
                  <div className="flex space-x-3 mb-2">
                    <a
                      href="https://rock-paper-scissors-web3.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md bg-blue-600 px-3 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/isrmicha/web3-rock-paper-scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5: Spotifood */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🎶🍕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-100 mb-2">
                    Spotifood
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    A food discovery app integrating Spotify and iFood APIs
                  </p>
                  <div className="flex space-x-3 mb-2">
                    <a
                      href="https://isrmicha-spotifood.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md bg-blue-600 px-3 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/isrmicha/ifood-frontend-test"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-auto items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
