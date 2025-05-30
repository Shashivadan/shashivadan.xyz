import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Portfolio90s() {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   // Simulate visitor count increase
  //   const visitorTimer = setInterval(() => {
  //     setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //     clearInterval(visitorTimer);
  //   };
  // }, []);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-auto"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff00ff' fillOpacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        fontFamily: "Comic Sans MS, cursive",
      }}
    >
      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
              color: ["#ff00ff", "#00ffff", "#ffff00", "#ff0080"][
                Math.floor(Math.random() * 4)
              ],
            }}
          >
            ★
          </div>
        ))}
      </div>

      {/* Header with Blinking Title */}
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-4 border-4 border-yellow-400">
          <div className="text-center">
            <div className="animate-pulse text-4xl font-bold text-yellow-300 mb-2">
              ★☆★ WELCOME TO SHASHIVADAN'S CYBER SPACE ★☆★
            </div>
            <div className="text-lg text-white animate-bounce">
              ♪♫ Best Viewed in Netscape Navigator 4.0+ ♫♪
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="bg-red-600 text-yellow-300 py-2 border-4 border-white">
          <div className="animate-marquee whitespace-nowrap">
            ★★★ UNDER CONSTRUCTION!!! ★★★ NEW UPDATES COMING SOON!!! ★★★ PLEASE
            SIGN MY GUESTBOOK!!! ★★★ EMAIL ME FOR COOL LINKS!!! ★★★
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 border-4 border-cyan-400">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {[
              "HOME",
              "ABOUT ME",
              "MY PROJECTS",
              "COOL LINKS",
              "GUESTBOOK",
              "EMAIL ME",
            ].map((item, i) => (
              <div key={item} className="relative">
                <div className="bg-yellow-400 text-black px-3 py-1 border-2 border-red-500 font-bold text-sm hover:bg-pink-400 cursor-pointer transform hover:scale-110 transition-all">
                  {item}
                </div>
                {i % 2 === 0 && (
                  <div className="absolute -top-2 -right-2 text-red-500 animate-spin">
                    ★
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Sidebar */}
          <div className="lg:w-64 bg-gradient-to-b from-purple-800 to-pink-800 p-4 border-4 border-cyan-400">
            {/* Visitor Counter */}

            {/* Current Time */}

            {/* Music Player */}

            {/* Cool Links */}
            <Card className="bg-gradient-to-b from-yellow-600 to-orange-600 border-4 border-purple-400 p-4 mb-4">
              <div className="text-center text-black">
                <div className="font-bold mb-2">★ COOL LINKS ★</div>
                <div className="space-y-1 text-xs">
                  <div className="text-blue-800 underline cursor-pointer">
                    → My Friend's Page
                  </div>
                  <div className="text-blue-800 underline cursor-pointer">
                    → Anime Ring
                  </div>
                  <div className="text-blue-800 underline cursor-pointer">
                    → Web Ring
                  </div>
                  <div className="text-blue-800 underline cursor-pointer">
                    → Cool Graphics
                  </div>
                  <div className="text-blue-800 underline cursor-pointer">
                    → MIDI Collection
                  </div>
                </div>
              </div>
            </Card>

            {/* Awards */}
            <Card className="bg-red-600 border-4 border-yellow-400 p-4">
              <div className="text-center text-white">
                <div className="font-bold text-yellow-300 mb-2">★ AWARDS ★</div>
                <div className="space-y-2">
                  <div className="bg-yellow-400 text-black p-1 text-xs border-2 border-red-800">
                    COOL SITE AWARD
                  </div>
                  <div className="bg-pink-400 text-black p-1 text-xs border-2 border-purple-800">
                    BEST GRAPHICS 1999
                  </div>
                  <div className="bg-cyan-400 text-black p-1 text-xs border-2 border-blue-800">
                    WEB RING MEMBER
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Welcome Section */}
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 border-4 border-yellow-400 p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-4 animate-pulse">
                  ★☆★ KONNICHIWA!!! ★☆★
                </div>
                <div className="text-2xl text-white mb-4">
                  Welcome to{" "}
                  <span className="text-cyan-300 animate-bounce">
                    THOTA SHASHIVADAN's
                  </span>{" "}
                  Homepage!!!
                </div>
                <div className="text-lg text-pink-200">
                  ♪♫ The COOLEST Developer in Cyberspace!!! ♫♪
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  {[...Array(10)].map((_, i) => (
                    <span
                      key={i}
                      className="text-2xl animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {["★", "♪", "♫", "☆", "♥"][i % 5]}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* About Me */}
            <Card className="bg-black border-4 border-cyan-400 p-6 mb-6">
              <div className="border-4 border-pink-500 p-4 bg-gradient-to-r from-blue-900 to-purple-900">
                <h2 className="text-3xl font-bold text-yellow-300 mb-4 text-center animate-pulse">
                  ★★★ ABOUT ME!!! ★★★
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-pink-300 text-lg font-bold mb-2">
                      PERSONAL INFO:
                    </div>
                    <div className="space-y-2 text-cyan-200">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-bold">
                          +91 6281373269
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-bold">
                          shashivadan99@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Linkedin className="w-4 h-4 text-yellow-400" />
                        <span className="text-cyan-300 underline cursor-pointer">
                          LinkedIn Profile
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-yellow-400" />
                        <span className="text-cyan-300 underline cursor-pointer">
                          GitHub Profile
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-pink-300 text-lg font-bold mb-2">
                      CURRENT STATUS:
                    </div>
                    <div className="space-y-1 text-cyan-200">
                      <div>★ SDE Intern at Aloghire.ai</div>
                      <div>★ Full-Stack Developer</div>
                      <div>★ React.js Specialist</div>
                      <div>★ AI/ML Graduate</div>
                      <div>★ Anime Fan!!! (◕‿◕)</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-4 border-red-500 p-6 mb-6">
              <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
                ♪♫ MY WORK EXPERIENCE!!! ♫♪
              </h2>

              <div className="space-y-6">
                {/* Aloghire.ai */}
                <div className="bg-black border-4 border-pink-400 p-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 border-2 border-yellow-400">
                    <h3 className="text-xl font-bold text-yellow-300">
                      SDE Intern @ Aloghire.ai
                    </h3>
                    <div className="text-cyan-200">
                      Mar 2025 – Present | On-Site
                    </div>
                  </div>
                  <div className="p-3 text-white">
                    <div className="text-pink-300 font-bold mb-2">
                      WHAT I DO:
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>
                        ★ Built AWESOME recruitment dashboard with React &
                        Shadcn UI!!!
                      </li>
                      <li>
                        ★ Created SUPER FAST backend with Node.js & Express!!!
                      </li>
                      <li>★ Used Firebase for DATABASE POWER!!!</li>
                      <li>
                        ★ Fixed TONS of bugs and made everything PERFECT!!!
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Wonder Creative Studio */}
                <div className="bg-black border-4 border-cyan-400 p-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 border-2 border-yellow-400">
                    <h3 className="text-xl font-bold text-yellow-300">
                      React Intern @ Wonder Creative Studio
                    </h3>
                    <div className="text-cyan-200">
                      Nov 2024 – Feb 2025 | Remote
                    </div>
                  </div>
                  <div className="p-3 text-white">
                    <div className="text-pink-300 font-bold mb-2">
                      COOL STUFF I MADE:
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>
                        ★ Built AMAZING e-commerce platform with React &
                        TypeScript!!!
                      </li>
                      <li>
                        ★ Added REAL-TIME features with WebSocket technology!!!
                      </li>
                      <li>★ Made BEAUTIFUL responsive interfaces!!!</li>
                      <li>★ Increased user engagement by 40%!!! WOW!!!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projects */}
            <Card className="bg-gradient-to-r from-yellow-600 to-red-600 border-4 border-purple-500 p-6 mb-6">
              <h2 className="text-3xl font-bold text-white mb-6 text-center animate-pulse">
                ★☆★ MY AWESOME PROJECTS!!! ★☆★
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Zenstream */}
                <div className="bg-black border-4 border-pink-400 p-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 border-2 border-yellow-400 mb-3">
                    <h3 className="text-lg font-bold text-yellow-300">
                      Zenstream
                    </h3>
                    <div className="text-cyan-200 text-sm">
                      Anime Streaming Platform!!!
                    </div>
                  </div>
                  <div className="text-white text-sm mb-3">
                    SUPER COOL platform for watching anime, K-drama, and
                    movies!!! Built with Next.js!!!
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge className="bg-pink-500 text-white text-xs">
                      Next.js
                    </Badge>
                    <Badge className="bg-cyan-500 text-black text-xs">
                      Prisma
                    </Badge>
                    <Badge className="bg-yellow-500 text-black text-xs">
                      PostgreSQL
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-black font-bold text-xs"
                    >
                      CODE
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs"
                    >
                      LIVE
                    </Button>
                  </div>
                </div>

                {/* BlogX */}
                <div className="bg-black border-4 border-cyan-400 p-4">
                  <div className="bg-gradient-to-r from-green-600 to-purple-600 p-3 border-2 border-yellow-400 mb-3">
                    <h3 className="text-lg font-bold text-yellow-300">BlogX</h3>
                    <div className="text-cyan-200 text-sm">
                      Blogging Platform!!!
                    </div>
                  </div>
                  <div className="text-white text-sm mb-3">
                    AMAZING blog platform with Google OAuth and rich text
                    editor!!! SO COOL!!!
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge className="bg-blue-500 text-white text-xs">
                      Next.js
                    </Badge>
                    <Badge className="bg-green-500 text-white text-xs">
                      TypeScript
                    </Badge>
                    <Badge className="bg-purple-500 text-white text-xs">
                      Docker
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-black font-bold text-xs"
                    >
                      CODE
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs"
                    >
                      LIVE
                    </Button>
                  </div>
                </div>

                {/* Vouch */}
                <div className="bg-black border-4 border-yellow-400 p-4">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 p-3 border-2 border-cyan-400 mb-3">
                    <h3 className="text-lg font-bold text-yellow-300">Vouch</h3>
                    <div className="text-cyan-200 text-sm">
                      Testimonial Platform!!!
                    </div>
                  </div>
                  <div className="text-white text-sm mb-3">
                    AUTOMATED testimonial collection!!! Customers love it!!!
                    SUPER EASY!!!
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge className="bg-pink-500 text-white text-xs">
                      React
                    </Badge>
                    <Badge className="bg-yellow-500 text-black text-xs">
                      Node.js
                    </Badge>
                    <Badge className="bg-cyan-500 text-black text-xs">
                      Automation
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-black font-bold text-xs"
                    >
                      CODE
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs"
                    >
                      LIVE
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-cyan-400 p-6 mb-6">
              <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
                ♪♫ MY TECHNICAL SKILLS!!! ♫♪
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-black border-4 border-yellow-400 p-4">
                  <h3 className="text-lg font-bold text-pink-300 mb-2">
                    LANGUAGES:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-yellow-500 text-black">
                      JavaScript
                    </Badge>
                    <Badge className="bg-blue-500 text-white">TypeScript</Badge>
                  </div>
                </div>

                <div className="bg-black border-4 border-pink-400 p-4">
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">
                    FRONTEND:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-orange-500 text-white">HTML</Badge>
                    <Badge className="bg-blue-600 text-white">CSS</Badge>
                    <Badge className="bg-purple-500 text-white">React.js</Badge>
                    <Badge className="bg-black text-white border border-white">
                      Next.js
                    </Badge>
                  </div>
                </div>

                <div className="bg-black border-4 border-green-400 p-4">
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">
                    BACKEND:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-green-600 text-white">Node.js</Badge>
                    <Badge className="bg-gray-700 text-white">Express.js</Badge>
                    <Badge className="bg-orange-600 text-white">Hono.js</Badge>
                  </div>
                </div>

                <div className="bg-black border-4 border-red-400 p-4">
                  <h3 className="text-lg font-bold text-green-300 mb-2">
                    DATABASES:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-blue-700 text-white">PostgreSQL</Badge>
                    <Badge className="bg-green-700 text-white">MongoDB</Badge>
                    <Badge className="bg-indigo-600 text-white">Prisma</Badge>
                  </div>
                </div>

                <div className="bg-black border-4 border-blue-400 p-4">
                  <h3 className="text-lg font-bold text-red-300 mb-2">
                    CLOUD:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-orange-600 text-white">AWS</Badge>
                    <Badge className="bg-gray-600 text-white">EC2</Badge>
                    <Badge className="bg-orange-500 text-white">
                      CloudFront
                    </Badge>
                  </div>
                </div>

                <div className="bg-black border-4 border-purple-400 p-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-2">
                    TOOLS:
                  </h3>
                  <div className="space-y-1">
                    <Badge className="bg-orange-600 text-white">Postman</Badge>
                    <Badge className="bg-blue-600 text-white">VS Code</Badge>
                    <Badge className="bg-gray-800 text-white">GitHub</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 border-4 border-yellow-400 p-6">
              <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center animate-pulse">
                ★☆★ EDUCATION & AWARDS!!! ★☆★
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border-4 border-pink-400 p-4">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">
                    EDUCATION:
                  </h3>
                  <div className="text-white">
                    <div className="text-lg font-bold text-yellow-300">
                      B.Tech in AI & ML
                    </div>
                    <div className="text-pink-300">
                      Balaji Institute of Technology and Science
                    </div>
                    <div className="text-cyan-200">2021 - 2024</div>
                  </div>
                </div>

                <div className="bg-black border-4 border-cyan-400 p-4">
                  <h3 className="text-xl font-bold text-pink-300 mb-3">
                    CERTIFICATIONS:
                  </h3>
                  <div className="space-y-2 text-white">
                    <div>
                      <div className="font-bold text-yellow-300">
                        Cloud Computing Fundamentals
                      </div>
                      <div className="text-cyan-200">Cloud Skills Boost</div>
                    </div>
                    <div>
                      <div className="font-bold text-yellow-300">
                        Full Stack Development
                      </div>
                      <div className="text-cyan-200">100xdevs</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 p-6 border-4 border-yellow-400 text-center">
          <div className="text-2xl font-bold text-yellow-300 mb-4 animate-pulse">
            ★☆★ THANK YOU FOR VISITING!!! ★☆★
          </div>
          <div className="text-white mb-4">
            Please sign my guestbook and email me!!! Let's be cyber friends!!!
            (◕‿◕)
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              SIGN GUESTBOOK
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold">
              EMAIL ME
            </Button>
          </div>
          <div className="text-sm text-cyan-200">
            © 1999 Thota Shashivadan | Best viewed in 800x600 | Made with ♥ in
            Cyberspace
          </div>
          <div className="mt-2 text-xs text-yellow-300">
            This page is Geocities compatible!!! | Member of the Cool Developers
            Web Ring
          </div>
        </div>
      </div>
    </div>
  );
}
