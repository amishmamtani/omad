export default function SignUp() {
  return (
    <main className="flex items-center justify-center h-screen bg-[#18181B]">
      <div className="flex w-4/5 max-w-5xl rounded-lg overflow-hidden">
        {/* Right Side (Sign-Up Form Section) */}
        <div className="w-3/5 bg-black p-10 mx-auto rounded-lg">
          <h1 className="text-4xl font-junicode text-yellow-400 mb-8">Sign Up</h1>
          <form>
            {/* First Name and Last Name */}
            <div className="flex space-x-4 mb-6">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block font-satoshi text-white text-sm mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-3 rounded-md bg-[#101010] font-satoshi text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="John"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block font-satoshi text-white text-sm mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-3 rounded-md bg-[#101010] font-satoshi text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  placeholder="Doe"
                />
              </div>
            </div>
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
            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block font-satoshi text-white text-sm mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full p-3 rounded-md bg-[#101010] font-satoshi text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="Confirm Password"
              />
            </div>
            {/* Sign Up Button 
            What are you grateful for today? What made you smile? Who made your day better? What’s a small win you had today? What’s something new you learned?
What moment today felt the most meaningful? What’s one thing you’re proud of? Who or what inspired you today? What’s a memory you want to keep forever? How did you show kindness today?
What challenge did you overcome? What’s the best part of your day so far? What’s one thing you love about yourself? What’s a goal you’re excited about? What’s something that gave you hope today?
            */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black rounded-md font-satoshi font-bold hover:bg-yellow-500 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
