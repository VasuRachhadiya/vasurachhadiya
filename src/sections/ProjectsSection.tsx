import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ShoppingCart, 
  Smartphone, 
  Star, 
  Clock, 
  Flame, 
  Search, 
  ChevronRight, 
  Code2, 
  Plus, 
  Check,
  Eye
} from 'lucide-react';
import { GithubIcon } from '../components/icons/SocialIcons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [cartCount, setCartCount] = useState(2);
  const [recipeSaved, setRecipeSaved] = useState(false);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Practical application concepts exploring modern e-commerce workflows, interactive web components, and Android mobile user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          
          {/* Project 1: PrimeMart */}
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800/90 overflow-hidden backdrop-blur-xl hover:border-slate-700 transition-all duration-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    E-Commerce Web Application
                  </span>
                  <span className="text-xs font-mono text-slate-400">Featured Concept</span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    PrimeMart
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-1">
                    Modern E-Commerce Workflow & Catalog Experience
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  An e-commerce project concept focused on product browsing, shopping workflows, and user interface features. Created with interactive catalog discovery, responsive product cards, cart state management, and AI-assisted prototyping.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML5', 'CSS3', 'React Concept', 'State Management', 'UI/UX'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onSelectProject(projectsData[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-md shadow-sky-500/20"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details & Architecture</span>
                  </button>

                  <a
                    href="https://github.com/VasuRachhadiya/PrimeMart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Custom Interactive Web UI Mockup */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl overflow-hidden relative">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex-1 max-w-[260px] mx-auto px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 text-center truncate">
                      https://primemart.store/catalog
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <ShoppingCart className="w-3.5 h-3.5 text-sky-400" />
                      <span className="font-mono text-sky-400 font-bold">{cartCount}</span>
                    </div>
                  </div>

                  {/* Mock Catalog Items */}
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="font-bold text-white uppercase tracking-wider text-[11px]">Popular Gear</span>
                      <span className="text-[11px] text-sky-400">Showing 3 of 24</span>
                    </div>

                    {/* Product Card 1 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                          🎧
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">HyperSonic Pro Wireless</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-[10px] text-amber-400 flex items-center">
                              <Star className="w-3 h-3 fill-amber-400" /> 4.9
                            </span>
                            <span className="text-[10px] text-slate-500">• Over-ear ANC</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-bold text-xs text-sky-400">$149.99</span>
                        <button
                          onClick={() => setCartCount(c => c + 1)}
                          className="p-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/30 text-sky-400 transition-colors"
                          title="Add to cart"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          ⌨️
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Quantum Mechanical Deck</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-[10px] text-amber-400 flex items-center">
                              <Star className="w-3 h-3 fill-amber-400" /> 4.8
                            </span>
                            <span className="text-[10px] text-slate-500">• Hot-swappable RGB</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-mono font-bold text-xs text-indigo-400">$99.99</span>
                        <button
                          onClick={() => setCartCount(c => c + 1)}
                          className="p-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/30 text-indigo-400 transition-colors"
                          title="Add to cart"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Checkout Bar Preview */}
                    <div className="p-2.5 rounded-xl bg-slate-900/50 border border-dashed border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">Workflow: Instant Cart Sync</span>
                      <span className="text-emerald-400 font-mono text-[11px] font-bold">Checkout Ready ✓</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Project 2: RecipeHub */}
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800/90 overflow-hidden backdrop-blur-xl hover:border-slate-700 transition-all duration-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              
              {/* Left Column: Mobile App Preview Mockup */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="max-w-[320px] mx-auto rounded-3xl bg-slate-950 border-4 border-slate-800 p-4 shadow-2xl relative">
                  {/* Phone Speaker & Camera Notch */}
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-slate-950" />
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="space-y-3 font-sans">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <div>
                        <p className="text-[10px] text-slate-400 font-mono">Good Morning ☀️</p>
                        <p className="text-sm font-bold text-white">RecipeHub Mobile</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-300">
                        VR
                      </div>
                    </div>

                    {/* Search Field */}
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                      <Search className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-[11px]">Search 500+ recipes...</span>
                    </div>

                    {/* Featured Dish Card */}
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30 relative">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Trending Today
                        </span>
                        <button
                          onClick={() => setRecipeSaved(!recipeSaved)}
                          className={`p-1 rounded-md transition-colors ${recipeSaved ? 'text-amber-400' : 'text-slate-400'}`}
                        >
                          <Star className={`w-3.5 h-3.5 ${recipeSaved ? 'fill-amber-400' : ''}`} />
                        </button>
                      </div>

                      <div className="my-2">
                        <h5 className="text-xs font-bold text-white">Creamy Tuscan Garlic Pasta</h5>
                        <p className="text-[10px] text-slate-400">Sun-dried tomatoes & spinach</p>
                      </div>

                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sky-400" /> 25 min
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-rose-400" /> 420 kcal
                        </span>
                      </div>
                    </div>

                    {/* Quick Recipe List Item */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          🥗
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Avocado Quinoa Salad</p>
                          <p className="text-[9px] text-slate-400">10m • Healthy • Vegan</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>

                    {/* Android Navigation Bar */}
                    <div className="pt-2 flex justify-around text-[10px] text-slate-400 border-t border-slate-800/80 font-mono">
                      <span className="text-indigo-400 font-bold">Recipes</span>
                      <span>Favorites</span>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Android Recipe Application
                  </span>
                  <span className="text-xs font-mono text-slate-400">Kotlin Mobile Concept</span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    RecipeHub
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-1">
                    Android Mobile Application for Culinary Discovery
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  An Android application concept featuring user registration, customized profile management, recipe search, and recipe-listing screens. Designed with a focus on Kotlin-based mobile development, structured component hierarchies, and fluid mobile UX.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'Android SDK', 'Mobile UI/UX', 'User Auth Flow', 'Recipe Catalog', 'Material Design'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onSelectProject(projectsData[1])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-500 hover:bg-indigo-400 text-white transition-colors shadow-md shadow-indigo-500/20"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details & Architecture</span>
                  </button>

                  <a
                    href="https://github.com/VasuRachhadiya/RecipeHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
