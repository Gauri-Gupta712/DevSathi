'use client';

import Link from 'next/link';
import {
  Component,
  Search,
  LayoutDashboard,
  Sparkles,
  BookOpen,
  Library,
  LineChart,
  Calendar,
  Target,
  Timer,
  Activity,
  LogOut,
  Bell,
  ChevronDown,
  History,
  ArrowRight,
  Play,
  GraduationCap,
  Bug,
  Flame,
  PieChart,
  FileText,
  CalendarDays,
  ClipboardList,
  ClipboardCheck,
  CheckCircle2,
  Code2,
  MessageSquare
} from 'lucide-react';

const recentSources = [
  { id: 1, title: 'Python Programming.pdf', icon: FileText, color: 'text-error' },
  { id: 2, title: 'DBMS Unit 3.pdf', icon: FileText, color: 'text-error' },
  { id: 3, title: 'Data Structures Notes.pdf', icon: FileText, color: 'text-error' },
];

const upcomingEvents = [
  { id: 1, title: 'DBMS Internal Exam', date: 'Aug 22', icon: CalendarDays, color: 'text-secondary' },
  { id: 2, title: 'DSA Assignment', date: 'Aug 26', icon: ClipboardList, color: 'text-secondary' },
  { id: 3, title: 'Project Submission', date: 'Sep 02', icon: ClipboardCheck, color: 'text-secondary' },
];

const recentActivity = [
  { id: 1, title: 'Debugged Quicksort partition (AOA)', time: '2 hours ago', icon: Code2 },
  { id: 2, title: 'Resolved SQL JOIN confusion (DBMS)', time: '5 hours ago', icon: MessageSquare },
  { id: 3, title: 'Practiced binary tree traversal (DSA)', time: 'Yesterday', icon: BookOpen },
];

export default function Dashboard() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased overflow-x-hidden min-h-screen selection:bg-primary-container selection:text-on-primary-container flex flex-col">
      {/* Shared Component: SideNavBar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col py-8 bg-surface/60 backdrop-blur-md border-r border-outline-variant/30 shadow-sm z-50">
        {/* Brand Header */}
        <div className="px-6 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
            <Component className="w-5 h-5 text-on-primary-container" />
          </div>
          <div>
            <h1 className="font-headline-lg text-title-md font-bold text-primary dark:text-primary-fixed leading-tight tracking-tight">DevSarthi</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Academic Architect</p>
          </div>
        </div>

        {/* Sidebar Search */}
        <div className="px-4 mb-6">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-sm" />
            <input 
              type="text"
              placeholder="Search..." 
              className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-secondary focus:ring-0 pl-9 pr-4 py-2 text-sm rounded-lg transition-colors placeholder:text-on-surface-variant/60 focus:bg-white outline-none" 
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 space-y-6">
          {/* Main Section */}
          <div className="space-y-1">
            <p className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant opacity-70">Main</p>
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed font-bold border-r-4 border-primary bg-primary-container/5 rounded-r-lg group">
              <LayoutDashboard className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 fill-primary/20" />
              <span>Dashboard</span>
            </Link>
            <Link href="/ai-studio" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="w-5 h-5 text-secondary relative z-10 transition-transform duration-200 group-hover:rotate-12" />
              <span className="font-medium relative z-10">AI Studio</span>
            </Link>
          </div>

          {/* Learning Section */}
          <div className="space-y-1">
            <p className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant opacity-70">Learning</p>
            <Link href="/subjects" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <BookOpen className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Subjects</span>
            </Link>
            <Link href="/sources" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <Library className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Sources</span>
            </Link>
            <Link href="/progress" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <LineChart className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Progress</span>
            </Link>
          </div>

          {/* Planning Section */}
          <div className="space-y-1">
            <p className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant opacity-70">Planning</p>
            <Link href="/calendar" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <Calendar className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Calendar</span>
            </Link>
            <Link href="/goals" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <Target className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Goals</span>
            </Link>
          </div>

          {/* Productivity Section */}
          <div className="space-y-1">
            <p className="px-4 py-2 font-label-caps text-label-caps text-on-surface-variant opacity-70">Productivity</p>
            <Link href="/focus" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <Timer className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Focus Mode</span>
            </Link>
            <Link href="/activity" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary hover:bg-primary-container/10 transition-colors duration-200 rounded-r-lg group">
              <Activity className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              <span>Activity</span>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-auto pt-6 px-2 space-y-1 border-t border-outline-variant/20 mx-4">
          <button className="w-full flex items-center gap-3 px-2 py-2 text-on-surface-variant hover:text-error hover:bg-error-container/10 transition-colors duration-200 rounded-lg group text-sm">
            <LogOut className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Shared Component: TopAppBar */}
      <header className="hidden md:flex fixed top-0 right-0 w-[calc(100%-16rem)] h-16 justify-end items-center px-gutter z-40 bg-surface/60 dark:bg-surface-dim/60 backdrop-blur-xl border-b border-outline-variant/20 transition-all">
        {/* Actions & Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all hover:text-primary relative group">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
          </button>
          
          <div className="h-6 w-px bg-outline-variant/30 mx-1"></div>
          
          <button className="flex items-center gap-2 hover:bg-surface-container-high p-1 pr-3 rounded-full transition-all border border-transparent hover:border-outline-variant/30">
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-semibold flex items-center justify-center text-sm">
              ST
            </div>
            <span className="text-sm font-medium text-on-surface">Student Profile</span>
            <ChevronDown className="w-4 h-4 text-on-surface-variant" />
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-20 md:pt-24 px-4 md:px-[64px] pb-[64px] flex-1">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Header Section */}
          <section className="space-y-1 animate-fade-in-up">
            <h2 className="font-headline-lg text-display-lg text-primary tracking-tight">
              Good evening, Student <span className="inline-block animate-wave">👋</span>
            </h2>
            <p className="font-title-md text-title-md text-on-surface-variant font-normal">
              Semester V · Mumbai University
            </p>
          </section>

          {/* Hero Row (High Priority) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Continue Learning Card */}
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <History className="w-4 h-4 text-secondary" />
                  <span className="font-label-caps text-label-caps text-secondary">Continue Learning</span>
                </div>
                <h3 className="font-title-md text-title-md mb-1">Database Management Systems</h3>
                <p className="text-on-surface-variant mb-6 text-sm">Topic: SQL JOINs · Last studied 2 hours ago</p>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface">Syllabus Coverage</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full w-[80%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 -translate-x-[100%] animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto relative z-10">
                <button className="bg-primary-container text-on-primary-container hover:bg-primary px-6 py-2.5 rounded-lg font-title-md text-sm font-semibold transition-colors flex items-center gap-2">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recommended for You Card */}
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col justify-between border-l-4 border-l-secondary relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="font-label-caps text-label-caps text-secondary">Recommended for You</span>
                </div>
                <h3 className="font-title-md text-title-md mb-1">Practice Recursion</h3>
                <p className="text-on-surface-variant mb-4 text-sm">Data Structures · 20 min estimated</p>
                <p className="text-sm text-on-surface-variant/80 bg-surface-container/50 inline-block px-3 py-1.5 rounded-md border border-outline-variant/20">
                  Based on your recent struggle with tree traversals.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <button className="border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-container px-6 py-2.5 rounded-lg font-title-md text-sm font-semibold transition-colors flex items-center gap-2">
                  <span>Start Practice</span>
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </section>

          {/* Learning Statistics Row */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-title-md text-lg font-semibold text-on-surface">24</p>
                <p className="text-sm text-on-surface-variant">Sessions</p>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <Bug className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-title-md text-lg font-semibold text-on-surface">18</p>
                <p className="text-sm text-on-surface-variant">Bugs Resolved</p>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-on-tertiary-container" />
              </div>
              <div>
                <p className="font-title-md text-lg font-semibold text-on-surface">5 Day</p>
                <p className="text-sm text-on-surface-variant">Streak</p>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/50 flex items-center justify-center shrink-0">
                <PieChart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-title-md text-lg font-semibold text-on-surface">42%</p>
                <p className="text-sm text-on-surface-variant">Syllabus Progress</p>
              </div>
            </div>
          </section>

          {/* Sources and Upcoming Row */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sources */}
            <div className="glass-panel rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-title-md text-lg font-semibold text-on-surface">Recent Sources</h3>
                <Link href="/sources" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-3 flex-1">
                {recentSources.map((source) => (
                  <div key={source.id} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-outline-variant/30">
                    <source.icon className={`w-5 h-5 ${source.color}`} />
                    <span className="text-sm text-on-surface font-medium truncate">{source.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming */}
            <div className="glass-panel rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-title-md text-lg font-semibold text-on-surface">Upcoming</h3>
                <Link href="/calendar" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View Calendar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-3 flex-1">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/30">
                    <div className="flex items-center gap-3">
                      <event.icon className={`w-5 h-5 ${event.color}`} />
                      <span className="text-sm text-on-surface font-medium">{event.title}</span>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium bg-surface-container px-2 py-1 rounded">
                      {event.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Goals and Activity Row */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Goals */}
            <div className="glass-panel rounded-xl p-6 flex flex-col justify-center">
              <h3 className="font-title-md text-lg font-semibold text-on-surface mb-4">Goals</h3>
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-sm font-medium text-on-surface">Weekly Learning Goal</p>
                    <p className="text-xs text-on-surface-variant">4/5 sessions completed</p>
                  </div>
                  <span className="text-sm font-bold text-primary">80%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-primary rounded-full w-[80%]"></div>
                </div>
                <p className="text-xs text-on-surface-variant flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  1 more session to complete your goal.
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-panel rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-title-md text-lg font-semibold text-on-surface">Recent Activity</h3>
                <Link href="/activity" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center mt-0.5 shrink-0">
                      <activity.icon className="w-4 h-4 text-on-surface-variant" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-on-surface">{activity.title}</p>
                      <p className="text-xs text-on-surface-variant">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Focus Mode */}
          <section className="glass-panel rounded-xl p-6 bg-gradient-to-r from-surface to-primary/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Timer className="w-5 h-5 text-primary" />
                  <h3 className="font-title-md text-lg font-semibold text-on-surface">Focus Mode</h3>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">Ready to focus?</p>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-sm font-medium hover:bg-surface-container transition-colors">25</button>
                  <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-sm font-medium shadow-sm">45</button>
                  <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-sm font-medium hover:bg-surface-container transition-colors">60</button>
                  <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 text-sm font-medium hover:bg-surface-container transition-colors">Custom</button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-title-md text-sm font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md">
                  Start Focus Session
                </button>
                <span className="text-xs font-medium bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full flex items-center gap-1">
                  🔥 5 focus sessions this week
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/20 md:ml-64 mt-auto">
        <div className="w-full py-8 px-4 md:px-[64px] flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="font-headline-lg-mobile text-base font-bold text-primary dark:text-primary-fixed">
              DevSarthi
            </div>
            <p className="font-body-md text-xs text-on-surface-variant dark:text-on-surface-variant text-center md:text-left">
              © 2024 DevSarthi. Built for Mumbai University Engineering.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="font-body-md text-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="font-body-md text-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors">
              Terms
            </Link>
            <Link href="/support" className="font-body-md text-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors">
              MU Support
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Inline styles for custom animations that might not be in tailwind yet */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
        }
        .animate-wave {
            animation: wave 2s infinite ease-in-out;
            transform-origin: 70% 70%;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
