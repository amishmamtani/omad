export default function LogIn() {
    return (
      <main className="flex items-center justify-center h-screen bg-[#18181B]">
        <div className="flex w-4/5 max-w-5xl rounded-lg overflow-hidden">
          {/* Right Side (Sign-Up Form Section) */}
          <div className="w-3/5 bg-black p-10 mx-auto rounded-lg">
            <h1 className="text-4xl font-junicode text-yellow-400 mb-8">Log In</h1>
            <form>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-satoshi text-white text-sm mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 rounded-md bg-[#101010] font-satoshi text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="example@mail.com"
                />
              </div>
              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block font-satoshi text-white text-sm mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-3 rounded-md bg-[#101010] font-satoshi text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-black rounded-md font-satoshi font-bold hover:bg-yellow-500 transition mt-4"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
  