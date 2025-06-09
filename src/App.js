import React, { useState } from 'react';
import './App.css';
import StephAndJonsRomeTrip from './StephAndJonsRomeTrip';
import HotelsComponent from './HotelsComponent';
import { Home, Building2, Heart } from 'lucide-react';

/**
 * Main App Component for Steph & Jon's Roman Adventure
 * 
 * A beautiful, romantic guide for planning the perfect couples trip to Rome
 * August 6-10, 2024
 * 
 * Features:
 * - Toggle between Airbnb apartments and romantic hotels
 * - Consistent romantic theming across both sections
 * - Easy navigation for comparing accommodation options
 */
function App() {
  const [activeTab, setActiveTab] = useState('apartments');

  return (
    <div className="App">
      {/* Navigation Header */}
      <div className="bg-gradient-to-r from-rose-50 to-purple-50 border-b border-rose-200">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Steph & Jon's Rome Adventure
              </h1>
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-4">
            <div className="bg-white rounded-lg p-1 shadow-md border border-rose-200">
              <button
                onClick={() => setActiveTab('apartments')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'apartments'
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                <Home className="w-5 h-5" />
                Romantic Apartments
              </button>
              <button
                onClick={() => setActiveTab('hotels')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'hotels'
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                <Building2 className="w-5 h-5" />
                Luxury Hotels
              </button>
            </div>
          </div>
          
          {/* Tab Description */}
          <div className="text-center mt-3">
            <p className="text-sm text-gray-600">
              {activeTab === 'apartments' 
                ? '🏠 Private apartments perfect for couples - your own romantic space!'
                : '🏨 Curated luxury hotels with romantic amenities and world-class service!'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-screen">
        {activeTab === 'apartments' ? <StephAndJonsRomeTrip /> : <HotelsComponent />}
      </div>
    </div>
  );
}

export default App;
