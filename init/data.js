const sampleListings = [
    {
      title: 'Mountain Retreat',
      description: 'A peaceful retreat nestled in the mountains.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 120,
      location: 'Mountain Valley',
      country: 'United States'
    },
    {
      title: 'Coastal Paradise',
      description: 'A stunning beachfront property with panoramic ocean views.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 180,
      location: 'Seaside Resort',
      country: 'Australia'
    },
    {
      title: 'City Loft',
      description: 'Modern loft apartment in the heart of the city.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 200,
      location: 'Downtown',
      country: 'Canada'
    },
    {
      title: 'Rustic Cabin',
      description: 'Charming cabin surrounded by nature and wildlife.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 150,
      location: 'Forest Retreat',
      country: 'Norway'
    },
    {
      title: 'Lakeside Cottage',
      description: 'Quaint cottage with a view of the serene lake.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 130,
      location: 'Lakefront',
      country: 'New Zealand'
    },
    {
      title: 'Skyline View Apartment',
      description: 'Luxurious apartment with breathtaking city skyline views.',
      image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
      price: 300,
      location: 'Urban Living',
      country: 'Japan'
    },
    {
        title: 'Mountain Retreat',
        description: 'A peaceful retreat nestled in the mountains.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 120,
        location: 'Mountain Valley',
        country: 'United States'
      },
      {
        title: 'Coastal Paradise',
        description: 'A stunning beachfront property with panoramic ocean views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 180,
        location: 'Seaside Resort',
        country: 'Australia'
      },
      {
        title: 'City Loft',
        description: 'Modern loft apartment in the heart of the city.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 200,
        location: 'Downtown',
        country: 'Canada'
      },
      {
        title: 'Rustic Cabin',
        description: 'Charming cabin surrounded by nature and wildlife.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 150,
        location: 'Forest Retreat',
        country: 'Norway'
      },
      {
        title: 'Lakeside Cottage',
        description: 'Quaint cottage with a view of the serene lake.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 130,
        location: 'Lakefront',
        country: 'New Zealand'
      },
      {
        title: 'Skyline View Apartment',
        description: 'Luxurious apartment with breathtaking city skyline views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 300,
        location: 'Urban Living',
        country: 'Japan'
      },
      {
        title: 'Mountain Retreat',
        description: 'A peaceful retreat nestled in the mountains.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 120,
        location: 'Mountain Valley',
        country: 'United States'
      },
      {
        title: 'Coastal Paradise',
        description: 'A stunning beachfront property with panoramic ocean views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 180,
        location: 'Seaside Resort',
        country: 'Australia'
      },
      {
        title: 'City Loft',
        description: 'Modern loft apartment in the heart of the city.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 200,
        location: 'Downtown',
        country: 'Canada'
      },
      {
        title: 'Rustic Cabin',
        description: 'Charming cabin surrounded by nature and wildlife.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 150,
        location: 'Forest Retreat',
        country: 'Norway'
      },
      {
        title: 'Lakeside Cottage',
        description: 'Quaint cottage with a view of the serene lake.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 130,
        location: 'Lakefront',
        country: 'New Zealand'
      },
      {
        title: 'Skyline View Apartment',
        description: 'Luxurious apartment with breathtaking city skyline views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 300,
        location: 'Urban Living',
        country: 'Japan'
      },
      {
        title: 'Mountain Retreat',
        description: 'A peaceful retreat nestled in the mountains.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 120,
        location: 'Mountain Valley',
        country: 'United States'
      },
      {
        title: 'Coastal Paradise',
        description: 'A stunning beachfront property with panoramic ocean views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 180,
        location: 'Seaside Resort',
        country: 'Australia'
      },
      {
        title: 'City Loft',
        description: 'Modern loft apartment in the heart of the city.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 200,
        location: 'Downtown',
        country: 'Canada'
      },
      {
        title: 'Rustic Cabin',
        description: 'Charming cabin surrounded by nature and wildlife.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 150,
        location: 'Forest Retreat',
        country: 'Norway'
      },
      {
        title: 'Lakeside Cottage',
        description: 'Quaint cottage with a view of the serene lake.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 130,
        location: 'Lakefront',
        country: 'New Zealand'
      },
      {
        title: 'Skyline View Apartment',
        description: 'Luxurious apartment with breathtaking city skyline views.',
        image: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM',
        price: 300,
        location: 'Urban Living',
        country: 'Japan'
      }
  ];

  module.exports = { data : sampleListings };