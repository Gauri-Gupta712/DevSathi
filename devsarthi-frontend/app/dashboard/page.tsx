'use client'

import Link from 'next/link'
import {
  Code2,
  BookOpen,
  ChevronRight,
  Clock,
  Target,
  Flame,
  ArrowRight,
  FolderOpen,
  CheckCircle2,
  Play,
  FileCode,
  Leaf,
  Sun
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Dashboard() {
  return (
    <div className="bg-[#F4F0E6] min-h-screen font-sans text-[#153326] flex flex-col">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full flex-1">
        {/* 1. WELCOME SECTION */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#153326] mb-3 flex items-center gap-3 font-medium">
                Welcome back, Student! <span className="text-2xl">🌿</span>
              </h1>
              <p className="text-lg text-[#3A5A4C]">
                Continue your Socratic learning journey with DevSarthi
              </p>
            </div>
            
            <Link 
              href="/studio" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E4D3B] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#153326] hover:-translate-y-1 hover:shadow-lg shadow-md"
            >
              Launch AI Studio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center w-full max-w-md">
            <div className="h-px flex-1 bg-[#1E4D3B]/20"></div>
            <Leaf className="w-5 h-5 text-[#1E4D3B] mx-4" />
            <div className="h-px flex-1 bg-[#1E4D3B]/20"></div>
          </div>
        </section>

        {/* 2. STATS ROW */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full bg-[#1E4D3B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-[#1E4D3B]" />
              </div>
              <div className="text-3xl font-bold text-[#153326] mb-1">24</div>
              <div className="text-sm font-medium text-[#3A5A4C]">Total Sessions</div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <div className="text-3xl font-bold text-[#153326] mb-1">18</div>
              <div className="text-sm font-medium text-[#3A5A4C]">Bugs Resolved</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full bg-[#52B788]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-6 h-6 text-[#1E4D3B]" />
              </div>
              <div className="text-3xl font-bold text-[#153326] mb-1">5 days</div>
              <div className="text-sm font-medium text-[#3A5A4C]">Current Streak</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start group">
              <div className="w-12 h-12 rounded-full bg-[#74C69D]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <div className="text-3xl font-bold text-[#153326] mb-1">42%</div>
              <div className="text-sm font-medium text-[#3A5A4C]">Syllabus Progress</div>
            </div>
          </div>
        </section>

        {/* 3. MU SUBJECTS SECTION */}
        <section className="mb-16">
          <div className="mb-8 relative inline-block">
            <h2 className="text-2xl md:text-3xl font-serif text-[#153326] font-medium">Mumbai University — Semester V</h2>
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#1E4D3B] rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Subject 1 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#1E4D3B]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSC501</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Analysis of Algorithms</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  Master algorithm design techniques, complexity analysis, and optimization strategies.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">65% completed</span>
                      <span className="text-[#6A887B]">12 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#1E4D3B] rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#1E4D3B] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subject 2 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#2D6A4F]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSC502</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Data Structures</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  Deep dive into trees, graphs, hashing, and advanced data organization.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">45% completed</span>
                      <span className="text-[#6A887B]">15 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#2D6A4F] rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#2D6A4F] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subject 3 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#40916C]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSC503</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Database Mgt Systems</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  Relational algebra, SQL, normalization, and transaction management.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">30% completed</span>
                      <span className="text-[#6A887B]">10 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#40916C] rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#40916C] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subject 4 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#1E4D3B]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSC504</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Operating Systems</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  Process scheduling, memory management, file systems, and concurrency.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">55% completed</span>
                      <span className="text-[#6A887B]">14 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#1E4D3B] rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#1E4D3B] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subject 5 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#52B788]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSC505</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Computer Networks</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  OSI model, protocols, routing algorithms, and network security.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">20% completed</span>
                      <span className="text-[#6A887B]">11 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#52B788] rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#2D6A4F] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subject 6 */}
            <div className="bg-white rounded-2xl border border-[#E2DDCF] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group">
              <div className="h-1.5 w-full bg-[#2D6A4F]"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-widest text-[#6A887B] mb-2 uppercase">CSDLO501</div>
                <h3 className="text-xl font-bold text-[#153326] mb-3">Machine Learning</h3>
                <p className="text-sm text-[#3A5A4C] mb-6 flex-1">
                  Supervised and unsupervised learning, neural networks, and applications.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#6A887B]">38% completed</span>
                      <span className="text-[#6A887B]">9 topics left</span>
                    </div>
                    <div className="h-2 w-full bg-[#E8E2D4] rounded-full overflow-hidden">
                      <div className="h-full bg-[#2D6A4F] rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                  <Link href="/studio" className="inline-flex items-center text-sm font-semibold text-[#2D6A4F] group-hover:underline">
                    Practice Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RECENT ACTIVITY SECTION */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-2xl font-serif text-[#153326] font-medium">Recent Activity</h2>
            <Sun className="w-5 h-5 text-[#1E4D3B]" />
          </div>
          
          <div className="bg-[#E4DFCE]/50 rounded-2xl p-6 md:p-8 border border-[#E2DDCF]">
            <ul className="space-y-4">
              {/* Activity 1 */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#E2DDCF] last:border-0 last:pb-0">
                <div className="hidden sm:block w-2 h-2 rounded-full bg-[#1E4D3B]"></div>
                <div className="text-sm text-[#6A887B] sm:w-28 shrink-0">2 hours ago</div>
                <div className="text-[#153326] font-medium flex-1">Debugged quicksort partition error</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1E4D3B]/10 text-[#1E4D3B] self-start sm:self-auto">AOA</span>
              </li>

              {/* Activity 2 */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#E2DDCF] last:border-0 last:pb-0">
                <div className="hidden sm:block w-2 h-2 rounded-full bg-[#2D6A4F]"></div>
                <div className="text-sm text-[#6A887B] sm:w-28 shrink-0">Yesterday</div>
                <div className="text-[#153326] font-medium flex-1">Resolved SQL JOIN confusion</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2D6A4F]/10 text-[#2D6A4F] self-start sm:self-auto">DBMS</span>
              </li>

              {/* Activity 3 */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#E2DDCF] last:border-0 last:pb-0">
                <div className="hidden sm:block w-2 h-2 rounded-full bg-[#40916C]"></div>
                <div className="text-sm text-[#6A887B] sm:w-28 shrink-0">2 days ago</div>
                <div className="text-[#153326] font-medium flex-1">Fixed binary tree traversal</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#40916C]/10 text-[#1E4D3B] self-start sm:self-auto">Data Structures</span>
              </li>

              {/* Activity 4 */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#E2DDCF] last:border-0 last:pb-0">
                <div className="hidden sm:block w-2 h-2 rounded-full bg-[#52B788]"></div>
                <div className="text-sm text-[#6A887B] sm:w-28 shrink-0">3 days ago</div>
                <div className="text-[#153326] font-medium flex-1">Understood process scheduling</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#52B788]/15 text-[#1E4D3B] self-start sm:self-auto">OS</span>
              </li>

              {/* Activity 5 */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-[#E2DDCF] last:border-0 last:pb-0">
                <div className="hidden sm:block w-2 h-2 rounded-full bg-[#1E4D3B]"></div>
                <div className="text-sm text-[#6A887B] sm:w-28 shrink-0">4 days ago</div>
                <div className="text-[#153326] font-medium flex-1">Socket programming hints</div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1E4D3B]/10 text-[#1E4D3B] self-start sm:self-auto">CN</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. RESOURCES SECTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#153326] font-medium mb-6 flex items-center gap-3">
            Study Resources <BookOpen className="w-5 h-5 text-[#1E4D3B]" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/studio" className="bg-white p-6 rounded-2xl border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#1E4D3B] group flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1E4D3B]/10 flex items-center justify-center shrink-0">
                <FileCode className="w-5 h-5 text-[#1E4D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-[#153326] mb-1 group-hover:text-[#1E4D3B] transition-colors">MU Question Papers</h3>
                <p className="text-sm text-[#3A5A4C]">Previous year papers for exam prep</p>
              </div>
            </Link>

            <Link href="/studio" className="bg-white p-6 rounded-2xl border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#2D6A4F] group flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 text-[#2D6A4F]" />
              </div>
              <div>
                <h3 className="font-bold text-[#153326] mb-1 group-hover:text-[#2D6A4F] transition-colors">Video Lectures</h3>
                <p className="text-sm text-[#3A5A4C]">Curated YouTube playlists</p>
              </div>
            </Link>

            <Link href="/studio" className="bg-white p-6 rounded-2xl border border-[#E2DDCF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#52B788] group flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#52B788]/15 flex items-center justify-center shrink-0">
                <FolderOpen className="w-5 h-5 text-[#1E4D3B]" />
              </div>
              <div>
                <h3 className="font-bold text-[#153326] mb-1 group-hover:text-[#1E4D3B] transition-colors">Lab Manuals</h3>
                <p className="text-sm text-[#3A5A4C]">Step-by-step practical guides</p>
              </div>
            </Link>
          </div>
        </section>

        {/* 6. MOTIVATIONAL FOOTER BANNER */}
        <section className="mb-4">
          <div className="bg-[#1E4D3B] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden shadow-lg">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-black/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 max-w-2xl">
              <p className="text-xl md:text-2xl font-serif text-[#F4F0E6] italic mb-2">
                "The only way to learn programming is by programming."
              </p>
              <p className="text-[#95B8A6] font-medium">— Dennis Ritchie</p>
            </div>
            
            <Link 
              href="/studio" 
              className="relative z-10 whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F4F0E6] text-[#1E4D3B] rounded-full font-bold transition-all duration-300 hover:bg-white hover:scale-105 shadow-md"
            >
              Start Coding <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
