import React, { useState, useMemo } from 'react';
import { Star, MapPin, Users, Calendar, Filter, ExternalLink, Heart, Coffee, Camera, Utensils, Sparkles, Wifi, Car, UtensilsCrossed, Bath, Dumbbell } from 'lucide-react';

/**
 * Romantic Hotels Component for Steph & Jon's Rome Trip
 * 
 * A curated collection of romantic hotels perfect for couples
 * Based on comprehensive research of Rome's most romantic accommodations
 * Featuring luxury, boutique, and charming properties across romantic neighborhoods
 * 
 * Features:
 * - Hotel filtering by neighborhood and budget
 * - Romantic amenities and couple-focused descriptions
 * - Direct booking links and detailed hotel information
 * - Matches the existing Airbnb-style design aesthetic
 */
const HotelsComponent = () => {
  // State for filtering and sorting hotels
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');
  const [budgetFilter, setBudgetFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Romantic neighborhood data optimized for hotel stays
  const neighborhoods = [
    {
      id: 'spanish-steps',
      name: 'Spanish Steps',
      icon: <Camera className="w-5 h-5" />,
      ranking: '✨ Ultimate Luxury',
      description: 'Historic luxury hotels, designer shopping, elegant atmosphere',
      highlights: ['Luxury shopping', 'Historic hotels', 'Elegant atmosphere', 'Prime location'],
      walkingDistance: 'Walking distance to Villa Borghese and city center',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      coupleNote: 'Most luxurious area - perfect for a special romantic celebration!',
      backgroundImage: 'https://images.unsplash.com/photo-1548585744-c2cfd2e14c74?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Elegant Spanish Steps with luxury hotel atmosphere'
    },
    {
      id: 'centro-storico',
      name: 'Centro Storico',
      icon: <Heart className="w-5 h-5" />,
      ranking: '🏛️ Historic Romance',
      description: 'Boutique hotels near Pantheon, ancient charm, walkable to everything',
      highlights: ['Ancient monuments', 'Boutique charm', 'Central location', 'Historic ambiance'],
      walkingDistance: 'Everything within romantic walking distance',
      color: 'bg-rose-50 border-rose-200 text-rose-800',
      coupleNote: 'Perfect blend of history and romance - wake up to ancient wonders!',
      backgroundImage: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Historic Pantheon area with romantic atmosphere'
    },
    {
      id: 'trastevere',
      name: 'Trastevere',
      icon: <Utensils className="w-5 h-5" />,
      ranking: '🌙 Evening Romance',
      description: 'Charming cobblestone streets, intimate dining, authentic Roman vibe',
      highlights: ['Cobblestone charm', 'Romantic dinners', 'Evening strolls', 'Authentic atmosphere'],
      walkingDistance: 'Hand-in-hand walks along romantic streets',
      color: 'bg-amber-50 border-amber-200 text-amber-800',
      coupleNote: 'Most romantic evenings - perfect for dinner and wine under the stars!',
      backgroundImage: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Romantic Trastevere streets at sunset'
    },
    {
      id: 'colosseum-area',
      name: 'Colosseum Area',
      icon: <Coffee className="w-5 h-5" />,
      ranking: '🏟️ Ancient Views',
      description: 'Historic luxury with gladiator views, unique photo opportunities',
      highlights: ['Colosseum views', 'Ancient history', 'Unique hotels', 'Epic photos'],
      walkingDistance: 'Steps from ancient Roman monuments',
      color: 'bg-orange-50 border-orange-200 text-orange-800',
      coupleNote: 'Wake up to epic views of ancient Rome - unforgettable memories!',
      backgroundImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=300&fit=crop&crop=center',
      imageAlt: 'Majestic Colosseum with luxury hotel views'
    }
  ];

  // Curated romantic hotels based on comprehensive research
  const allHotels = [
    // Spanish Steps - Ultimate Luxury
    {
      id: 'hotel-de-russie',
      name: 'Hotel de Russie ✨',
      neighborhood: 'spanish-steps',
      price: 2400, // 4 nights total
      pricePerNight: 600,
      rating: 4.8,
      reviews: 1247,
      category: 'Historic Luxury',
      badges: ['5-Star Luxury', 'Rocco Forte Hotels', 'Secret Garden'],
      highlight: 'ULTIMATE LUXURY',
      romanticNote: 'Secret terraced garden perfect for romantic moments - pure luxury!',
      amenities: ['Spa', 'Garden Terrace', 'Fine Dining', 'Concierge', 'Fitness'],
      bookingUrl: 'https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Luxury Hotel de Russie with secret garden terrace',
      specialFeatures: ['Secret garden terrace', 'Near Spanish Steps', 'Luxury spa', 'Michelin dining']
    },
    {
      id: 'portrait-roma',
      name: 'Portrait Roma 💕',
      neighborhood: 'spanish-steps',
      price: 2000,
      pricePerNight: 500,
      rating: 4.9,
      reviews: 892,
      category: 'Boutique Luxury',
      badges: ['Lungarno Collection', 'Design Hotel', 'Luxury Suites'],
      highlight: 'ROMANTIC SUITES',
      romanticNote: 'Designer suites perfect for couples - sophisticated romance!',
      amenities: ['Designer Suites', 'Rooftop Views', 'Personal Service', 'Premium Location'],
      bookingUrl: 'https://www.lungarnocollection.com/portrait-roma/',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Elegant Portrait Roma luxury suites',
      specialFeatures: ['Luxury suites only', 'Personal service', 'Via Condotti shopping', 'Panoramic views']
    },
    {
      id: 'hotel-de-la-ville',
      name: 'Hotel de la Ville 🌟',
      neighborhood: 'spanish-steps',
      price: 1800,
      pricePerNight: 450,
      rating: 4.7,
      reviews: 634,
      category: 'Modern Luxury',
      badges: ['Rocco Forte Hotels', 'Rooftop Bar', 'Modern Design'],
      romanticNote: 'Stunning rooftop bar with city views - perfect for sunset cocktails!',
      amenities: ['Rooftop Bar', 'Spa', 'Modern Design', 'City Views', 'Fine Dining'],
      bookingUrl: 'https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-la-ville/',
      imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Modern Hotel de la Ville with rooftop views',
      specialFeatures: ['Rooftop cocktail bar', 'Modern luxury', 'Spanish Steps location', 'Designer interiors']
    },

    // Centro Storico - Historic Romance
    {
      id: 'pantheon-iconic-hotel',
      name: 'The Pantheon Iconic Rome Hotel 🏛️',
      neighborhood: 'centro-storico',
      price: 1600,
      pricePerNight: 400,
      rating: 4.6,
      reviews: 423,
      category: 'Historic Luxury',
      badges: ['5-Star', 'Pantheon Views', 'Historic Location'],
      romanticNote: 'Steps from the Pantheon - ancient romance at your doorstep!',
      amenities: ['Historic Location', 'Luxury Rooms', 'Pantheon Views', 'Premium Service'],
      bookingUrl: 'https://www.thepantheonhotel.com/en/',
      imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Historic hotel near the ancient Pantheon',
      specialFeatures: ['Next to Pantheon', 'Ancient Roman setting', 'Luxury accommodations', 'Historic ambiance']
    },
    {
      id: '47-boutique-hotel',
      name: '47 Boutique Hotel 📸',
      neighborhood: 'centro-storico',
      price: 1200,
      pricePerNight: 300,
      rating: 4.5,
      reviews: 2344,
      category: 'Boutique Charm',
      badges: ['Boutique Style', 'Rooftop Restaurant', 'Historic Center'],
      highlight: 'GREAT VALUE',
      romanticNote: 'Rooftop restaurant with Roman Forum views - dinner with history!',
      amenities: ['Rooftop Restaurant', 'Modern Rooms', 'Historic Views', 'Central Location'],
      bookingUrl: 'https://www.fortysevenhotel.com/',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Boutique 47 Hotel with rooftop dining',
      specialFeatures: ['Rooftop dining', 'Roman Forum views', 'Boutique design', 'Central location']
    },
    {
      id: 'palazzo-delle-pietre',
      name: 'Palazzo delle Pietre ✨',
      neighborhood: 'centro-storico',
      price: 1400,
      pricePerNight: 350,
      rating: 4.8,
      reviews: 156,
      category: 'Historic Palazzo',
      badges: ['15th Century', 'Authentic Palazzo', 'Unique Design'],
      romanticNote: 'Stay in a real 15th-century palazzo - live like Roman nobility!',
      amenities: ['Historic Palazzo', 'Unique Apartments', 'Authentic Design', 'Archaeological Features'],
      bookingUrl: 'https://www.mrandmrssmith.com/luxury-hotels/palazzo-delle-pietre',
      imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Historic 15th century Palazzo delle Pietre',
      specialFeatures: ['15th-century palazzo', 'Archaeological features', 'Unique apartments', 'Historic authenticity']
    },

    // Trastevere - Evening Romance
    {
      id: 'hotel-santa-maria-trastevere',
      name: 'Hotel Santa Maria Trastevere 🌙',
      neighborhood: 'trastevere',
      price: 1000,
      pricePerNight: 250,
      rating: 4.4,
      reviews: 987,
      category: 'Romantic Charm',
      badges: ['Trastevere Heart', 'Garden Courtyard', 'Romantic Setting'],
      highlight: 'ROMANTIC VALUE',
      romanticNote: 'Beautiful garden courtyard in the heart of romantic Trastevere!',
      amenities: ['Garden Courtyard', 'Historic Building', 'Romantic Setting', 'Authentic Atmosphere'],
      bookingUrl: 'https://www.hotelsantamaria.info/',
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Charming Hotel Santa Maria with garden courtyard',
      specialFeatures: ['Garden courtyard', 'Trastevere location', 'Romantic atmosphere', 'Historic charm']
    },
    {
      id: 'nikis-collection-trastevere',
      name: 'Nikis Collection Trastevere 🍷',
      neighborhood: 'trastevere',
      price: 800,
      pricePerNight: 200,
      rating: 4.3,
      reviews: 445,
      category: 'Boutique Collection',
      badges: ['Collection Property', 'Modern Comfort', 'Great Location'],
      romanticNote: 'Modern comfort in historic Trastevere - perfect for wine lovers!',
      amenities: ['Modern Rooms', 'Historic Location', 'WiFi', 'Comfortable Stay'],
      bookingUrl: 'https://boutiquehotels-rome.com/trastevere/',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Modern Nikis Collection hotel in romantic Trastevere',
      specialFeatures: ['Modern amenities', 'Trastevere heart', 'Wine bar nearby', 'Comfortable rooms']
    },

    // Colosseum Area - Ancient Views
    {
      id: 'palazzo-manfredi',
      name: 'Palazzo Manfredi 🏟️',
      neighborhood: 'colosseum-area',
      price: 3200,
      pricePerNight: 800,
      rating: 4.9,
      reviews: 567,
      category: 'Ultra Luxury',
      badges: ['5-Star Luxury', 'Colosseum Views', 'Small Luxury Hotels'],
      highlight: 'COLOSSEUM VIEWS',
      romanticNote: 'Wake up to private Colosseum views - the ultimate Roman fantasy!',
      amenities: ['Colosseum Views', 'Michelin Restaurant', 'Luxury Suites', 'Personal Service', 'Spa'],
      bookingUrl: 'https://www.manfredihotels.com/en/palazzo-manfredi/',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Luxury Palazzo Manfredi with exclusive Colosseum views',
      specialFeatures: ['Direct Colosseum views', 'Michelin-starred restaurant', 'Ultra-luxury suites', 'Gladiator school views']
    },
    {
      id: 'mercure-colosseo',
      name: 'Mercure Roma Centro Colosseo 🌟',
      neighborhood: 'colosseum-area',
      price: 1200,
      pricePerNight: 300,
      rating: 4.2,
      reviews: 1567,
      category: 'Modern Comfort',
      badges: ['International Brand', 'Modern Amenities', 'Great Location'],
      romanticNote: 'Modern comfort steps from ancient wonders - reliable romance!',
      amenities: ['Modern Rooms', 'International Standard', 'Fitness Center', 'Business Services'],
      bookingUrl: 'https://www.accor.com/gb/hotel-5368-mercure-roma-centro-colosseo/index.shtml',
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4b624?w=500&h=300&fit=crop&crop=center',
      imageAlt: 'Modern Mercure hotel near the Colosseum',
      specialFeatures: ['Near Colosseum', 'Modern amenities', 'Reliable service', 'International standards']
    }
  ];

  /**
   * Filter and sort hotels based on user selections
   * Returns filtered and sorted array of hotels
   */
  const filteredHotels = useMemo(() => {
    let filtered = [...allHotels];

    // Filter by neighborhood
    if (selectedNeighborhood !== 'all') {
      filtered = filtered.filter(hotel => hotel.neighborhood === selectedNeighborhood);
    }

    // Filter by budget (4-night total prices)
    if (budgetFilter !== 'all') {
      switch (budgetFilter) {
        case 'budget':
          filtered = filtered.filter(hotel => hotel.price <= 1200);
          break;
        case 'mid':
          filtered = filtered.filter(hotel => hotel.price > 1200 && hotel.price <= 2000);
          break;
        case 'luxury':
          filtered = filtered.filter(hotel => hotel.price > 2000);
          break;
        default:
          break;
      }
    }

    // Sort hotels
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
    if (price <= 1200) return 'bg-green-100 text-green-800';
    if (price <= 2000) return 'bg-yellow-100 text-yellow-800';
    return 'bg-purple-100 text-purple-800';
  };

  /**
   * Get budget category text based on price
   */
  const getBudgetText = (price) => {
    if (price <= 1200) return 'Great Value';
    if (price <= 2000) return 'Mid-Luxury';
    return 'Ultra Luxury';
  };

  /**
   * Get amenity icon for visual appeal
   */
  const getAmenityIcon = (amenity) => {
    const icons = {
      'Spa': <Bath className="w-3 h-3" />,
      'WiFi': <Wifi className="w-3 h-3" />,
      'Fitness': <Dumbbell className="w-3 h-3" />,
      'Fine Dining': <UtensilsCrossed className="w-3 h-3" />,
      'Parking': <Car className="w-3 h-3" />
    };
    return icons[amenity] || <Sparkles className="w-3 h-3" />;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Romantic Header Section */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            Romantic Hotels for Your Roman Adventure
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
            <span className="font-medium">Perfect for Couples 💕</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span className="font-medium">Rome's Most Romantic Hotels</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-6 rounded-xl border border-rose-200">
          <p className="text-lg text-gray-700 mb-2">
            ✨ <strong>Curated Romantic Hotels Just for You Two!</strong> ✨
          </p>
          <p className="text-gray-600">
            From historic luxury palazzos to charming boutique gems, each hotel is handpicked for couples 
            seeking the perfect romantic escape in the Eternal City. Every property offers unique romantic 
            experiences, from secret gardens to Colosseum views!
          </p>
        </div>
      </div>

      {/* Romantic Neighborhoods Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          🏨 Perfect Hotel Neighborhoods for Romance
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Each area offers unique romantic experiences - from luxury shopping to ancient views!
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
                    <span className="font-semibold">Location:</span> {neighborhood.walkingDistance}
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
          Find Your Perfect Romantic Hotel
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Neighborhood Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Your Romantic Area
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
              Budget for 4 Nights
            </label>
            <select 
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="all">All Budgets</option>
              <option value="budget">Great Value (≤$1,200)</option>
              <option value="mid">Mid-Luxury ($1,200-2,000)</option>
              <option value="luxury">Ultra Luxury ($2,000+)</option>
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort Hotels
            </label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
            >
              <option value="price">Price (Budget First)</option>
              <option value="rating">Rating (Best First)</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Romantic Hotels List */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          🏨 Your Dream Romantic Hotels ({filteredHotels.length} perfect options)
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Handpicked for couples seeking romance, luxury, and unforgettable memories in Rome! 💕
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHotels.map((hotel) => {
            const neighborhood = neighborhoods.find(n => n.id === hotel.neighborhood);
            
            return (
              <div key={hotel.id} className="border border-gray-200 rounded-xl p-0 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                {/* Hotel Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.imageUrl} 
                    alt={hotel.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay with highlight badge */}
                  {hotel.highlight && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {hotel.highlight}
                      </span>
                    </div>
                  )}
                  {/* Price overlay */}
                  <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 rounded-lg px-3 py-1 shadow-md">
                    <span className="text-lg font-bold text-gray-900">${hotel.price}</span>
                    <span className="text-xs text-gray-600"> total</span>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-4">
                  {/* Hotel Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${neighborhood?.color || 'bg-gray-100 text-gray-800'}`}>
                          {neighborhood?.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getBudgetBadge(hotel.price)}`}>
                          {getBudgetText(hotel.price)}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          {hotel.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="space-y-3 mb-4">
                    {/* Rating and Per Night Price */}
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        ${hotel.pricePerNight}/night
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{hotel.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{hotel.reviews} reviews</div>
                      </div>
                    </div>

                    {/* Badges and Features */}
                    <div className="flex flex-wrap gap-2">
                      {hotel.badges.map((badge, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Special Features */}
                    {hotel.specialFeatures && (
                      <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                        <p className="text-xs text-purple-700 font-semibold mb-1">✨ Special Features:</p>
                        <div className="flex flex-wrap gap-2">
                          {hotel.specialFeatures.map((feature, index) => (
                            <span key={index} className="text-xs text-purple-600">
                              • {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Romantic Note */}
                    {hotel.romanticNote && (
                      <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg">
                        <p className="text-xs text-rose-700 italic flex items-start gap-1">
                          <Heart className="w-3 h-3 fill-rose-400 text-rose-400 mt-0.5 flex-shrink-0" />
                          {hotel.romanticNote}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Book Your Romantic Stay Button */}
                  <a 
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-3 px-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold shadow-md"
                  >
                    Book Our Romantic Stay 💕
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
          Jon's Top Hotel Picks for You Two
          <Heart className="w-6 h-6 fill-rose-500" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              ✨ Ultimate Romance
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Hotel de Russie</strong> - The secret terraced garden is absolutely magical! 
              Pure luxury in the heart of Rome with impeccable service. Perfect for special moments! 🌹
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-600">$2,400 total</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                $600/night
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-rose-100">
            <h3 className="font-bold text-rose-700 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              💕 Perfect Balance
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>47 Boutique Hotel</strong> - Great value with a rooftop restaurant overlooking 
              ancient Rome! Modern comfort with historic views. More budget for amazing dinners! 🍷
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-rose-600">$1,200 total</span>
              <span className="text-xs bg-rose-100 text-rose-800 px-3 py-1 rounded-full">
                $300/night
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
            <h3 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              🏟️ Epic Views
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Palazzo Manfredi</strong> - Wake up to private Colosseum views! 
              Ultra-luxury with Michelin dining. The ultimate splurge for once-in-a-lifetime memories! 📸
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-orange-600">$3,200 total</span>
              <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                $800/night
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <p className="text-sm text-gray-700 text-center">
            <strong>💡 Steph, what do you think?</strong> I'm torn between the romantic garden at Hotel de Russie 
            and the great value at 47 Boutique Hotel. The Colosseum views at Palazzo Manfredi are incredible 
            but maybe we save that splurge for our anniversary? 
            <span className="text-rose-600 font-medium">Can't wait to plan this with you! ❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelsComponent;