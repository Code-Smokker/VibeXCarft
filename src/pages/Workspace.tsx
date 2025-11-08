import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Play,
  Save,
  Share2,
  FolderTree,
  Terminal,
  Sparkles,
  User,
  Users,
  Github,
  Video,
  PlusCircle,
  Globe,
  Layers,
  Code,
  MessageCircle,
  Rocket,
  Trophy,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Workspace() {
  const [activeTab, setActiveTab] = useState("editor");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Sarah", text: "Ready for the VibeX Hackathon kickoff? 🚀" },
    { sender: "You", text: "Absolutely! Let’s dominate this build 💪" },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, { sender: "You", text: chatInput }]);
    setChatInput("");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 🧭 Top Bar */}
      <div className="border-b border-border p-4 flex items-center justify-between bg-sidebar/90 backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">VibeXCraft Workspace</h1>
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary hover:shadow-glow-purple">
              <Play className="w-4 h-4 mr-2" /> Run
            </Button>
            <Button size="sm" variant="secondary">
              <Save className="w-4 h-4 mr-2" /> Save
            </Button>
            <Button size="sm" variant="secondary">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            <Github className="w-4 h-4 mr-2" /> Connect GitHub
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] hover:opacity-90 transition">
            <Sparkles className="w-4 h-4 mr-2" /> AI Assist
          </Button>
        </div>
      </div>

      {/* 🧱 Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* 📁 Sidebar */}
        <div className="w-64 border-r border-border bg-sidebar p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FolderTree className="w-5 h-5 text-primary" />
              <h2 className="font-semibold">Project Files</h2>
            </div>

            <div className="space-y-1 text-sm">
              <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">📁 src</div>
              <div className="p-2 pl-6 hover:bg-sidebar-accent rounded-lg cursor-pointer text-muted-foreground">📄 App.tsx</div>
              <div className="p-2 pl-6 hover:bg-sidebar-accent rounded-lg cursor-pointer text-muted-foreground">📄 index.tsx</div>
              <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">📁 components</div>
              <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">📁 utils</div>
            </div>
          </div>

          {/* 💬 Tools */}
          <div className="space-y-2">
            <Button variant="secondary" size="sm" className="w-full flex items-center justify-center">
              <Users className="w-4 h-4 mr-2" /> Create Group
            </Button>
            <Button variant="secondary" size="sm" className="w-full flex items-center justify-center">
              <Video className="w-4 h-4 mr-2" /> Start Video Call
            </Button>
            <Button variant="secondary" size="sm" className="w-full flex items-center justify-center">
              <PlusCircle className="w-4 h-4 mr-2" /> New Coding Room
            </Button>
          </div>
        </div>

        {/* 💻 Main Panel */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-border bg-sidebar/70">
            {[
              { name: "Editor", key: "editor", icon: Code },
              { name: "Terminal", key: "terminal", icon: Terminal },
              { name: "Hackathons", key: "hackathon", icon: Trophy },
              { name: "Chat", key: "chat", icon: MessageCircle },
              { name: "Projects", key: "projects", icon: Layers },
              { name: "Profile", key: "profile", icon: User },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab.key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" /> {tab.name}
              </button>
            ))}
          </div>

          {/* 🧠 Content Area */}
          <div className="flex-1 overflow-auto bg-[#0A0A14] p-4">
            {/* 🧑‍💻 Code Editor */}
            {activeTab === "editor" && (
              <GlassCard className="h-full p-6">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">// Collaborative Code Editor</div>
                  <div className="text-primary">
                    import <span className="text-accent">React</span> from 'react';
                  </div>
                  <div className="text-primary">
                    function <span className="text-accent">App</span>() {'{'}
                  </div>
                  <div className="pl-4">return (</div>
                  <div className="pl-8 text-muted-foreground">&lt;div className="app"&gt;</div>
                  <div className="pl-12 text-foreground">Welcome to VibeXCraft Coding Room 🚀</div>
                  <div className="pl-8 text-muted-foreground">&lt;/div&gt;</div>
                  <div className="pl-4">);</div>
                  <div>{'}'}</div>
                </div>
              </GlassCard>
            )}

            {/* 🧑‍💻 Terminal */}
            {activeTab === "terminal" && (
              <GlassCard className="p-6 font-mono text-sm space-y-2 text-muted-foreground">
                <div>$ npm run dev</div>
                <div className="text-primary">✓ Server running at http://localhost:3000</div>
                <div>$ git commit -m "Initial setup"</div>
                <div>✔️ Changes committed successfully.</div>
              </GlassCard>
            )}

            {/* 🏆 Hackathon Section */}
            {activeTab === "hackathon" && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "AI Innovation Sprint", date: "Nov 20–Dec 1, 2025", reward: "$5,000 + Internship" },
                  { title: "Web3 Future Hack", date: "Dec 10–Dec 20, 2025", reward: "$10,000 + Credits" },
                  { title: "HealthTech Builder Jam", date: "Jan 5–Jan 15, 2026", reward: "$7,000 + Incubation" },
                ].map((hack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl border border-border bg-background/50 hover:bg-background/70 transition"
                  >
                    <h3 className="font-semibold text-lg mb-1">{hack.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{hack.date}</p>
                    <p className="text-sm text-accent mb-4">🏆 {hack.reward}</p>
                    <Button size="sm" className="w-full bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]">
                      Join Hackathon
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 💬 Community Chat */}
            {activeTab === "chat" && (
              <GlassCard className="p-6 h-[70vh] flex flex-col">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-accent" /> Live Community Chat
                </h2>

                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl max-w-[70%] ${
                        msg.sender === "You"
                          ? "ml-auto bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] text-white"
                          : "bg-background/60 border border-border text-foreground"
                      }`}
                    >
                      <p className="text-xs font-medium mb-1">{msg.sender}</p>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} className="flex gap-3">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-background/50 border border-border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 ring-primary"
                  />
                  <Button type="submit" className="bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF]">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </GlassCard>
            )}

            {/* 👤 Profile */}
            {activeTab === "profile" && (
              <GlassCard className="p-8 space-y-4 text-center">
                <User className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Omkar Shewale</h3>
                <p className="text-sm text-muted-foreground">Developer • AI Builder • Open Source Contributor</p>
                <div className="flex justify-center gap-3 mt-3">
                  <Button size="sm" variant="secondary">Edit Profile</Button>
                  <Button size="sm" variant="secondary">My Projects</Button>
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
