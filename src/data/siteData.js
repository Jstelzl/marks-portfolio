export const heroImage = '/assets/images/subpage_bg.jpg'

export const services = [
  {
    icon: 'fa-home',
    title: 'Residential Builds',
    text: 'New construction, additions, and full home remodels.',
  },
  {
    icon: 'fa-wrench',
    title: 'Renovations & Repairs',
    text: 'Kitchens, baths, flooring, and structural upgrades.',
  },
  {
    icon: 'fa-building',
    title: 'Light Commercial',
    text: 'Tenant improvements, office refreshes, and small builds.',
  },
]

// All portfolio projects - order = most recent first. First 4 shown on Home.
export const portfolioItems = [
  {
    slug: 'modern-kitchen-remodel',
    title: 'Modern Kitchen Remodel',
    subtitle: 'Custom cabinetry + layout redesign',
    category: 'remodel',
    image: heroImage,
    description:
      'Complete kitchen transformation with custom cabinetry, quartz countertops, and an open layout that maximizes natural light. We reconfigured the footprint to improve flow between the cooking and dining areas, and installed new flooring throughout.',
    video: null,
    photos: [
      { src: heroImage, description: 'Before: Original kitchen layout' },
      { src: heroImage, description: 'During: Cabinetry installation' },
      { src: heroImage, description: 'After: Finished kitchen with new counters' },
    ],
  },
  {
    slug: 'backyard-adu-build',
    title: 'Backyard ADU Build',
    subtitle: 'Studio unit + utility setup',
    category: 'exterior',
    image: heroImage,
    description:
      'New accessory dwelling unit built from the ground up in a residential backyard. Includes full bathroom, kitchenette, and separate utility connections. Designed for rental income while complementing the main home\'s aesthetic.',
    video: null,
    photos: [
      { src: heroImage, description: 'Exterior view of completed ADU' },
      { src: heroImage, description: 'Interior living space' },
      { src: heroImage, description: 'Kitchenette and bathroom' },
    ],
  },
  {
    slug: 'retail-store-refresh',
    title: 'Retail Store Refresh',
    subtitle: 'Interior build-out + finish work',
    category: 'interior',
    image: heroImage,
    description:
      'Commercial tenant improvement for a retail space. Demolition of existing fixtures, new drywall and flooring, custom display shelving, and updated lighting. Completed on a tight timeline to meet store opening deadline.',
    video: null,
    photos: [
      { src: heroImage, description: 'Storefront and entry' },
      { src: heroImage, description: 'Display area with custom shelving' },
      { src: heroImage, description: 'Checkout counter and back room' },
    ],
  },
  {
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    subtitle: 'Floor plan update + structural improvements',
    category: 'remodel',
    image: heroImage,
    description:
      'Whole-house renovation including structural updates, new floor plan, updated electrical and plumbing, and finish work throughout. Preserved original character while bringing the home up to modern standards.',
    video: null,
    photos: [
      { src: heroImage, description: 'Living room before and after' },
      { src: heroImage, description: 'Updated master bathroom' },
      { src: heroImage, description: 'New open-concept kitchen' },
    ],
  },
  {
    slug: 'deck-and-patio-addition',
    title: 'Deck and Patio Addition',
    subtitle: 'Outdoor living space',
    category: 'exterior',
    image: heroImage,
    description:
      'New composite deck and stone patio extending the living space outdoors. Includes built-in planters, lighting, and steps down to the yard. Designed for low maintenance and year-round use.',
    video: null,
    photos: [
      { src: heroImage, description: 'Deck view from house' },
      { src: heroImage, description: 'Patio and landscaping' },
    ],
  },
  {
    slug: 'bathroom-remodel',
    title: 'Master Bathroom Remodel',
    subtitle: 'Spa-inspired retreat',
    category: 'interior',
    image: heroImage,
    description:
      'Luxury master bathroom with walk-in shower, freestanding tub, and double vanity. Heated floors, custom tile work, and upgraded fixtures throughout.',
    video: null,
    photos: [
      { src: heroImage, description: 'Walk-in shower detail' },
      { src: heroImage, description: 'Vanity and mirror' },
    ],
  },
  {
    slug: 'office-build-out',
    title: 'Office Build-Out',
    subtitle: 'Professional workspace',
    category: 'interior',
    image: heroImage,
    description:
      'Office tenant improvement with new walls, flooring, and built-in workstations. Includes conference room, break area, and updated HVAC for the leased space.',
    video: null,
    photos: [
      { src: heroImage, description: 'Main workspace' },
      { src: heroImage, description: 'Conference room' },
    ],
  },
  {
    slug: 'exterior-siding-replacement',
    title: 'Exterior Siding Replacement',
    subtitle: 'Durable fiber cement siding',
    category: 'exterior',
    image: heroImage,
    description:
      'Full exterior re-siding with fiber cement panels. Replaced rotted trim, added new windows, and refreshed the facade. Improved insulation and curb appeal.',
    video: null,
    photos: [
      { src: heroImage, description: 'Front elevation' },
      { src: heroImage, description: 'Side and rear views' },
    ],
  },
]

// Filter categories for Portfolio page (slug used in URL/filter)
export const portfolioCategories = [
  { slug: 'all', label: 'All' },
  { slug: 'exterior', label: 'Exterior' },
  { slug: 'interior', label: 'Interior' },
  { slug: 'remodel', label: 'Remodels' },
]

export const testimonials = [
  {
    quote:
      'Great communication, clean jobsite, and a finished result we love.',
    author: 'Alex Ramirez',
    role: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      'On time and on budget. The team handled every detail professionally.',
    author: 'Morgan Lee',
    role: 'Property Manager',
    rating: 5,
  },
]

export const counters = [
  { icon: 'fa-briefcase', number: 120, title: 'Projects' },
  { icon: 'fa-users', number: 85, title: 'Clients' },
  { icon: 'fa-calendar', number: 15, title: 'Years' },
  { icon: 'fa-check', number: 100, title: 'Inspections Passed' },
]
