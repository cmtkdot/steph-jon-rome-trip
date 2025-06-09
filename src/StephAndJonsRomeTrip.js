import React, { useState, useMemo } from 'react';
import { Star, MapPin, Users, Calendar, Filter, ExternalLink, Heart, Coffee, Camera, Utensils, Sparkles } from 'lucide-react';

/**
 * Steph & Jon's Romantic Rome Trip Component
 * 
 * A personalized guide for Stephanie and Jon's romantic getaway to Rome
 * August 6-10, 2024 - Finding the perfect love nest in the Eternal City
 * 
 * Features:
 * - Romantic neighborhood recommendations
 * - Cozy apartments perfect for couples
 * - Interactive filtering with love-themed styling
 * - Direct booking links for dream accommodations
 */
const StephAndJonsRomeTrip = () => {
  // State for filtering and sorting properties
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');
  const [budgetFilter, setBudgetFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Romantic neighborhood data with couple-focused highlights and beautiful images
  const neighborhoods = [
    {
      id: 'trastevere',
      name: 'Trastevere',
      icon: <Heart className="w-5 h-5" />,
      ranking: '💕 Perfect for Romance',
      description: 'Cobblestone streets for romantic evening strolls, candlelit restaurants',
      highlights: ['Sunset walks', 'Intimate dining', 'Street musicians', 'Cozy wine bars'],
      walkingDistance: 'Hand-in-hand walks to all major attractions',
      color: 'bg-rose-50 border-rose-200 text-rose-800',
      coupleNote: 'Most romantic neighborhood - perfect for evening aperitivos together!',
      backgroundImage: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Romantic cobblestone streets of Trastevere at sunset'
    },
    {
      id: 'centro-storico',
      name: 'Centro Storico',
      icon: <Camera className="w-5 h-5" />,
      ranking: '📸 Instagram Couple Goals',
      description: 'Historic backdrop for amazing couple photos at iconic landmarks',
      highlights: ['Trevi Fountain wishes', 'Pantheon selfies', 'Gelato dates', 'Piazza moments'],
      walkingDistance: 'Everything within a romantic stroll',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      coupleNote: 'Perfect for creating those dreamy vacation memories!',
      backgroundImage: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Historic Pantheon and ancient Roman architecture'
    },
    {
      id: 'monti',
      name: 'Monti',
      icon: <Coffee className="w-5 h-5" />,
      ranking: '☕ Cozy & Intimate',
      description: 'Hipster cafes for morning coffee dates, close to ancient romance',
      highlights: ['Morning espressos', 'Vintage shopping', 'Local artisans', 'Quiet corners'],
      walkingDistance: 'Colosseum for epic couple photos',
      color: 'bg-amber-50 border-amber-200 text-amber-800',
      coupleNote: 'Great for lazy mornings and discovering hidden gems together!',
      backgroundImage: 'https://images.unsplash.com/photo-1555992643-33606d653c5c?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Cozy Roman café with intimate atmosphere'
    },
    {
      id: 'campo-de-fiori',
      name: "Campo de' Fiori",
      icon: <Utensils className="w-5 h-5" />,
      ranking: '🍷 Foodie Paradise',
      description: 'Fresh market mornings, romantic dinners under the stars',
      highlights: ['Market browsing', 'Wine tastings', 'Rooftop dining', 'Late night bars'],
      walkingDistance: 'Food adventures and romantic dining',
      color: 'bg-orange-50 border-orange-200 text-orange-800',
      coupleNote: 'Cook together with fresh market finds or enjoy romantic dinners!',
      backgroundImage: 'https://images.unsplash.com/photo-1586796676765-f7f6d23bcc60?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Vibrant Campo de Fiori market with fresh produce'
    }
  ];

  // Romantic properties with couple-focused descriptions and beautiful images
  const allProperties = [
    // Trastevere romantic properties
    {
      id: '18684769',
      name: 'Your Little Love Nest in Trastevere 💕',
      neighborhood: 'trastevere',
      price: 572,
      pricePerNight: 114,
      rating: 4.89,
      reviews: 289,
      url: 'https://www.airbnb.com/rooms/18684769',
      badges: ['Guest favorite', 'Couple-friendly'],
      highlight: 'AMAZING VALUE',
      romanticNote: 'Cozy hideaway perfect for romantic mornings together!',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Cozy romantic apartment interior with warm lighting'
    },
    {
      id: '3674909',
      name: 'Romantic Trastevere Apartment ✨',
      neighborhood: 'trastevere',
      price: 716,
      pricePerNight: 143,
      rating: 4.93,
      reviews: 701,
      url: 'https://www.airbnb.com/rooms/3674909',
      badges: ['Guest favorite', 'Perfect location'],
      highlight: 'COUPLES CHOICE',
      romanticNote: 'Right in the heart of romance - evening strolls await!',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Beautiful Trastevere apartment with romantic ambiance'
    },
    {
      id: '690094631431468796',
      name: 'Cozy Heart of Trastevere for Two 💑',
      neighborhood: 'trastevere',
      price: 864,
      pricePerNight: 173,
      rating: 4.95,
      reviews: 219,
      url: 'https://www.airbnb.com/rooms/690094631431468796',
      badges: ['Guest favorite', 'Highly rated'],
      romanticNote: 'Intimate setting with everything you need for a romantic getaway!',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Intimate apartment perfect for couples in Trastevere'
    },
    // Centro Storico romantic properties
    {
      id: '5190142',
      name: 'Historic Romance at The Fury 🏛️',
      neighborhood: 'centro-storico',
      price: 788,
      pricePerNight: 158,
      rating: 4.88,
      reviews: 364,
      url: 'https://www.airbnb.com/rooms/5190142',
      badges: ['Guest favorite', 'Historic charm'],
      features: ['1 min to attractions', 'Photo opportunities'],
      romanticNote: 'Ancient Rome as your backdrop for unforgettable memories!',
      imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Historic Roman apartment near ancient monuments'
    },
    {
      id: '1418094071668071334',
      name: 'Dreamy Pantheon View for Lovers 😍',
      neighborhood: 'centro-storico',
      price: 960,
      pricePerNight: 192,
      rating: 0,
      reviews: 0,
      url: 'https://www.airbnb.com/rooms/1418094071668071334',
      badges: ['New listing', 'Pantheon view'],
      features: ['Pantheon view', '3 min walk', 'Brand new'],
      romanticNote: 'Wake up to views of ancient wonders - pure magic!',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Apartment with stunning Pantheon view'
    },
    {
      id: '15728405',
      name: 'Designer Love Pad Near Pantheon ✨',
      neighborhood: 'centro-storico',
      price: 1504,
      pricePerNight: 301,
      rating: 4.9,
      reviews: 333,
      url: 'https://www.airbnb.com/rooms/15728405',
      badges: ['Superhost', 'Designer style'],
      features: ['Designer apartment', '3 min to Pantheon', 'Luxury'],
      romanticNote: 'Elegant and stylish - perfect for your special getaway!',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Luxury designer apartment with modern amenities'
    },
    // Monti cozy properties
    {
      id: '756955945026441991',
      name: 'Modern Love Loft by Colosseum 🏟️',
      neighborhood: 'monti',
      price: 616,
      pricePerNight: 123,
      rating: 4.63,
      reviews: 115,
      url: 'https://www.airbnb.com/rooms/756955945026441991',
      badges: ['Modern style', 'Great value'],
      highlight: 'BUDGET ROMANCE',
      romanticNote: 'Modern comfort with ancient views - best of both worlds!',
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4b624?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Modern loft apartment with Colosseum views'
    },
    {
      id: '3260174',
      name: "Couple's Hideaway by Colosseum 💕",
      neighborhood: 'monti',
      price: 756,
      pricePerNight: 151,
      rating: 4.97,
      reviews: 585,
      url: 'https://www.airbnb.com/rooms/3260174',
      badges: ['Guest favorite', 'Highly rated'],
      romanticNote: 'Steps from gladiator history - create your own epic love story!',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Cozy apartment near the historic Colosseum'
    },
    {
      id: '19896319',
      name: 'Retro Romance in Historic Building 📸',
      neighborhood: 'monti',
      price: 894,
      pricePerNight: 179,
      rating: 4.9,
      reviews: 409,
      url: 'https://www.airbnb.com/rooms/19896319',
      badges: ['Guest favorite', 'Vintage charm'],
      romanticNote: 'Vintage vibes perfect for nostalgic lovebirds!',
      imageUrl: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Vintage-styled apartment with retro charm'
    },
    // Campo de' Fiori foodie properties
    {
      id: '26195032',
      name: "Foodie Lovers' Paradise at Campo 🍷",
      neighborhood: 'campo-de-fiori',
      price: 687,
      pricePerNight: 137,
      rating: 4.88,
      reviews: 365,
      url: 'https://www.airbnb.com/rooms/26195032',
      badges: ['Guest favorite', 'Food lovers'],
      romanticNote: 'Market mornings and wine evenings - a foodie couple dream!',
      imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Charming apartment near vibrant food market'
    },
    {
      id: '1264318516681770937',
      name: "Charming Campo Residence for Two 🌹",
      neighborhood: 'campo-de-fiori',
      price: 815,
      pricePerNight: 163,
      rating: 5.0,
      reviews: 25,
      url: 'https://www.airbnb.com/rooms/1264318516681770937',
      badges: ['Guest favorite', 'Perfect rating'],
      romanticNote: 'Brand new with perfect reviews - your romantic debut awaits!',
      imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Beautiful new apartment in Campo de Fiori'
    },
    {
      id: '49361107',
      name: 'Warm Love Nest in Campo de Fiori 🕯️',
      neighborhood: 'campo-de-fiori',
      price: 1026,
      pricePerNight: 205,
      rating: 4.8,
      reviews: 122,
      url: 'https://www.airbnb.com/rooms/49361107',
      badges: ['Superhost', 'Cozy atmosphere'],
      romanticNote: 'Intimate and warm - perfect for candlelit dinners at home!',
      imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Warm and cozy apartment perfect for intimate evenings'
    }
  ];

  /**
   * Filter and sort properties based on user selections
   * Returns filtered and sorted array of properties
   */
  const filteredProperties = useMemo(() => {
    let filtered = [...allProperties];

    // Filter by neighborhood
    if (selectedNeighborhood !== 'all') {
      filtered = filtered.filter(property => property.neighborhood === selectedNeighborhood);
    }

    // Filter by budget
    if (budgetFilter !== 'all') {
      switch (budgetFilter) {
        case 'budget':
          filtered = filtered.filter(property => property.price <= 700);
          break;
        case 'mid':
          filtered = filtered.filter(property => property.price > 700 && property.price <= 900);
          break;
        case 'premium':
          filtered = filtered.filter(property => property.price > 900);
          break;
        default:
          break;
      }
    }

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedNeighborhood, budgetFilter, sortBy]);

  /**
   * Get budget category badge color based on price
   */
  const getBudgetBadge = (price) => {
    if (price <= 700) return 'bg-green-100 text-green-800';
    if (price <= 900) return 'bg-yellow-100 text-yellow-800';
    return 'bg-purple-100 text-purple-800';
  };

  /**
   * Get budget category text based on price
   */
  const getBudgetText = (price) => {
    if (price <= 700) return 'Budget Friendly';
    if (price <= 900) return 'Mid-Range';
    return 'Premium';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Romantic Header Section */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            Steph & Jon's Roman Adventure
          </h1>
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
        </div>
        <div className="flex items-center justify-center gap-6 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-rose-500" />
            <span className="font-medium">August 6-10, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-rose-500" />
            <span className="font-medium">Two Lovebirds 💕</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span className="font-medium">Rome, The Eternal City</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-6 rounded-xl border border-rose-200">
          <p className="text-lg text-gray-700 mb-2">
            ✨ <strong>Your Perfect Roman Getaway Awaits!</strong> ✨
          </p>
          <p className="text-gray-600">
            We've curated the most romantic neighborhoods and cozy apartments where you two can 
            create unforgettable memories in the city of love, gelato, and ancient wonders! 
            Each place is perfect for couples looking to fall in love with Rome... and each other all over again.
          </p>
        </div>
      </div>

      {/* Romantic Neighborhoods Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          💕 Perfect Neighborhoods for Your Roman Romance
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Each neighborhood offers its own romantic charm - click to explore cozy love nests! 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div 
              key={neighborhood.id}
              className={`relative p-6 rounded-xl border-2 ${neighborhood.color} cursor-pointer transition-all hover:shadow-lg hover:scale-105 transform overflow-hidden`}
              onClick={() => setSelectedNeighborhood(neighborhood.id)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${neighborhood.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Content overlay */}
              <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                {neighborhood.icon}
                <h3 className="font-bold text-xl">{neighborhood.name}</h3>
                <span className="text-xs px-3 py-1 bg-white rounded-full font-medium shadow-sm">
                  {neighborhood.ranking}
                </span>
              </div>
              <p className="text-sm mb-3 font-medium">{neighborhood.description}</p>
              <div className="mb-3">
                <p className="text-xs font-semibold mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Perfect for Couples:
                </p>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-white rounded-full shadow-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs">
                  <span className="font-semibold">Getting Around:</span> {neighborhood.walkingDistance}
                </p>
              </div>
              <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                <p className="text-xs italic text-gray-700">
                  💡 <strong>For You Two:</strong> {neighborhood.coupleNote}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filter & Sort Your Dream Accommodations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Neighborhood Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Your Romantic Neighborhood
            </label>
            <select 
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="all">All Neighborhoods</option>
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood.id} value={neighborhood.id}>
                  {neighborhood.name}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget for Your Love Nest
            </label>
            <select 
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="all">All Budgets</option>
              <option value="budget">Budget Romance (≤$700)</option>
              <option value="mid">Sweet Spot ($700-900)</option>
              <option value="premium">Luxury Love ($900+)</option>
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort Your Options
            </label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="price">Price (Budget First)</option>
              <option value="rating">Rating (Best First)</option>
              <option value="reviews">Most Loved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Romantic Properties List */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          🏠 Your Perfect Love Nests ({filteredProperties.length} cozy options)
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Every apartment is an entire place just for you two - no sharing with strangers! 💕
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProperties.map((property) => {
            const neighborhood = neighborhoods.find(n => n.id === property.neighborhood);
            
            return (
              <div key={property.id} className="border border-gray-200 rounded-xl p-0 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={property.imageUrl} 
                    alt={property.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay with highlight badge */}
                  {property.highlight && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {property.highlight}
                      </span>
                    </div>
                  )}
                  {/* Price overlay */}
                  <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-1 shadow-md">
                    <span className="text-lg font-bold text-gray-900">${property.price}</span>
                    <span className="text-xs text-gray-600"> total</span>
                  </div>
                </div>

                {/* Property Content */}
                <div className="p-4">
                  {/* Property Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${neighborhood?.color || 'bg-gray-100 text-gray-800'}`}>
                          {neighborhood?.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getBudgetBadge(property.price)}`}>
                          {getBudgetText(property.price)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-3 mb-4">
                    {/* Rating and Per Night Price */}
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        ${property.pricePerNight}/night
                      </div>
                      <div className="text-right">
                        {property.rating > 0 ? (
                          <>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{property.rating}</span>
                            </div>
                            <div className="text-sm text-gray-600">{property.reviews} reviews</div>
                          </>
                        ) : (
                          <div className="text-sm text-gray-600">New listing</div>
                        )}
                      </div>
                    </div>

                    {/* Badges and Features */}
                    <div className="flex flex-wrap gap-2">
                      {property.badges.map((badge, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {badge}
                        </span>
                      ))}
                      {property.features?.map((feature, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Romantic Note */}
                    {property.romanticNote && (
                      <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg">
                        <p className="text-xs text-rose-700 italic flex items-start gap-1">
                          <Heart className="w-3 h-3 fill-rose-400 text-rose-400 mt-0.5 flex-shrink-0" />
                          {property.romanticNote}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Book Your Love Nest Button */}
                  <a 
                    href={property.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-3 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold shadow-md"
                  >
                    Book Our Love Nest 💕
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Personal Recommendations for Steph & Jon */}
      <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-8 rounded-xl border-2 border-rose-200">
        <h2 className="text-2xl font-semibold text-rose-800 mb-4 text-center flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 fill-rose-500" />
          Jon's Top Picks for You Two
          <Heart className="w-6 h-6 fill-rose-500" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-rose-100">
            <h3 className="font-bold text-rose-700 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              💕 Perfect for Us
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Romantic Trastevere Apartment</strong> - The ultimate blend of 
              romantic atmosphere, authentic Roman vibes, and great value. 
              Imagine evening strolls through cobblestone streets! 🌙
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-rose-600">$716 total</span>
              <span className="text-xs bg-rose-100 text-rose-800 px-3 py-1 rounded-full">
                $143/night
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              💰 Amazing Deal
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Your Little Love Nest</strong> - Cozy, authentic, and budget-friendly! 
              More money for gelato dates and romantic dinners. Still in the heart 
              of romantic Trastevere! 🍦
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">$572 total</span>
              <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                $114/night
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              📸 Insta Perfect
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Historic Romance at The Fury</strong> - Wake up steps from the Pantheon! 
              Perfect for those dreamy couple photos we'll treasure forever. 
              Ancient Rome as our backdrop! 🏛️
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-600">$788 total</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                $158/night
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <p className="text-sm text-gray-700 text-center">
            <strong>💡 Steph, babe:</strong> I'm leaning towards the Trastevere apartment - 
            it's got that perfect romantic vibe we love, great reviews, and we'll have 
            more budget for amazing dinners and adventures! What do you think? 
            <span className="text-rose-600 font-medium">Can't wait to explore Rome with you! ❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StephAndJonsRomeTrip;
