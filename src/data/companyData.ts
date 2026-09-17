import { ServiceItem, ProjectItem } from '../types';

export const COMPANY_INFO = {
  name: 'LH Construction Ltd',
  shortName: 'LHConstruction',
  owner: 'Lewis Horwood',
  role: 'Owner & Operator',
  tagline: "Building Your Dreams — It's Not Just Carpentry",
  mission: 'Preparation is key to creating a strong canvas, and structural work is where the space becomes real.',
  experienceYears: 16,
  managementYears: 15,
  email: 'LewisH@lhconstructionltd.com',
  website: 'https://lhconstruction.ltd',
  locations: [
    {
      region: 'Killarney, County Kerry, Ireland',
      type: 'Primary Regional Base',
    },
    {
      region: 'Staffordshire & West Midlands, UK',
      type: 'Project Service Area',
    },
  ],
  socials: {
    instagram: 'https://www.instagram.com/lhconstructionlimited',
    facebook: 'https://www.facebook.com/share/1YWdi7yzoj/',
    googleMaps: 'https://maps.app.goo.gl/tdvh8ANHkUkoki2E9',
  },
  verifiedPhoneDisplay: 'Direct project consultation upon quote request',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'structural-roofing',
    title: 'Structural Roofing & Joisting',
    category: 'structural',
    tag: 'Structural Engineering',
    shortDesc:
      'Preparation is key to creating a strong canvas. We deliver heavy structural timber framing, roof joisting, and engineered layouts designed to endure.',
    fullDesc:
      'At LH Construction, we possess deep expertise in structural roofing and joisting. Structural work is where spatial architecture becomes real. From cut roofs and pitched rafters to floor joisting for expansive structural additions, our craftsmanship ensures a rigid, uncompromising timber foundation.',
    highlights: [
      'Engineered structural timber joisting',
      'Cut roof framing & heavy timber trusses',
      'Structural preparation for large open-plan spans',
      'Precision load-bearing integration with steelwork',
    ],
    image: '/assets/lh/roofing-structural.jpg',
  },
  {
    id: 'general-carpentry',
    title: 'Architectural Carpentry & Joinery',
    category: 'structural',
    tag: 'Master Joinery',
    shortDesc:
      'Bespoke stairs from scratch, balustrades, fitted wardrobes, precision architraves, skirting boards, doors, and timber flooring.',
    fullDesc:
      'General carpentry is our hallmark specialism. We execute all aspects with exacting tolerance: bespoke staircases built from scratch, architect-grade balustrades, custom fitted wardrobes, hung doors with precision ironmongery, and flawless timber flooring.',
    highlights: [
      'Bespoke hand-crafted staircases & balustrades',
      'Custom fitted wardrobes & storage joinery',
      'Architectural doors, architraves & skirting boards',
      'Hardwood & engineered timber flooring installations',
    ],
    image: '/assets/lh/carpentry-detail.jpg',
  },
  {
    id: 'bespoke-kitchens',
    title: 'Bespoke Kitchens & Living Spaces',
    category: 'interiors',
    tag: 'Interior Architecture',
    shortDesc:
      'Tailored kitchen installations designed in close collaboration with homeowners to achieve balanced, functional everyday luxury.',
    fullDesc:
      'We work directly with clients to design, configure, and fit bespoke kitchen spaces. Combining ergonomic workflow planning, cabinet fitting, and integrated joinery, we transform functional kitchens into the focal point of the home.',
    highlights: [
      'Collaborative spatial and cabinetry planning',
      'Precision cabinet fitting & bespoke island joinery',
      'Seamless multi-trade coordination for plumbing & electrics',
      'High-durability architectural finishes',
    ],
    image: '/assets/lh/kitchen-bespoke.jpg',
  },
  {
    id: 'autocad-design',
    title: 'AutoCAD Technical Design & Planning',
    category: 'technical',
    tag: 'Technical Rigor',
    shortDesc:
      'Detailed digital blueprints and CAD drawings that eliminate guesswork and ensure trade coordination before the first cut is made.',
    fullDesc:
      'We use AutoCAD to design the spaces we are entrusted to build. We enjoy working closely with clients to visualize their spaces in detail, providing clear technical information that aligns expectations and equips on-site tradespeople with exact dimensional guidelines.',
    highlights: [
      'Precise CAD dimensioning & spatial layouts',
      'Clear trade documentation for plumbers, sparks, & masons',
      'Client visualization prior to structural commitment',
      'Minimized on-site delays and material waste',
    ],
    image: '/assets/lh/architectural-cad.png',
  },
  {
    id: 'fire-door-compliance',
    title: 'Fire Door Installation & Compliance',
    category: 'technical',
    tag: 'Life Safety Standards',
    shortDesc:
      'Certified fire door installation, routine maintenance, and yearly compliance inspections in strict accordance with updating building codes.',
    fullDesc:
      'Understanding fire regulations is crucial, as codes continuously evolve and play an essential role in life safety. LH Construction provides end-to-end fire door services including certified installation, scheduled maintenance, and yearly regulatory inspection audits for residential and commercial environments.',
    highlights: [
      'Certified fire-rated door set installations',
      'Compliance with modern building & life-safety codes',
      'Annual inspection reports & door maintenance',
      'Commercial and multi-occupancy safety fit-outs',
    ],
    image: '/assets/lh/fire-door-compliance.jpg',
  },
  {
    id: 'project-management',
    title: 'Residential Extensions & Project Management',
    category: 'structural',
    tag: 'Turnkey Construction',
    shortDesc:
      'From custom interior upgrades to expansive home extensions, coordinated with 15+ years of multi-trade management experience.',
    fullDesc:
      'At LH Construction, we take on projects of all sizes — from fine detail alterations to large-scale residential extensions. Lewis Horwood brings 16 years in the trade, coordinating every specialty (groundworks, brickwork, plastering, plumbing, electrical) with single-point accountability.',
    highlights: [
      'End-to-end project management & single point of contact',
      'Coordination of verified, dependable trade specialists',
      'Transparent milestones and frequent client communication',
      'Quality assurance from site prep through handover',
    ],
    image: '/assets/lh/structural-extension.jpg',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-structural-roof',
    title: 'Engineered Cut Roof & Structural Joisting',
    category: 'structural',
    categoryLabel: 'Structural Timber Framing',
    image: '/assets/lh/roofing-structural.jpg',
    aspect: 'landscape',
    description:
      'Heavy structural roof framework featuring precise timber pitch cuts, ridge beam alignment, and reinforced joisting to accommodate expansive open-plan ceiling heights.',
    verifiedDetails: [
      'Structural timber framing',
      'Load distribution calculations',
      'Preparation for large span finishes',
    ],
  },
  {
    id: 'proj-bespoke-kitchen',
    title: 'Modern Bespoke Kitchen Installation',
    category: 'kitchens',
    categoryLabel: 'Bespoke Cabinetry & Living',
    image: '/assets/lh/kitchen-bespoke.jpg',
    aspect: 'portrait',
    description:
      'Full kitchen installation incorporating custom cabinetry, integrated appliance housings, high-tolerance worktop fitting, and meticulous electrical/plumbing trade coordination.',
    verifiedDetails: [
      'Custom cabinet joinery',
      'Integrated island worktop fitting',
      'Full multi-trade coordination',
    ],
  },
  {
    id: 'proj-site-framing',
    title: 'Heavy Timber Framing & Structural Extension',
    category: 'structural',
    categoryLabel: 'Residential Extension',
    image: '/assets/lh/hero-main.jpg',
    aspect: 'landscape',
    description:
      'On-site structural carpentry showcasing the structural framing phase of a residential build. Precision timber work establishing a durable architectural skeleton.',
    verifiedDetails: [
      'Direct on-site carpentry',
      'Timber frame construction',
      'True & plumb dimensional tolerance',
    ],
  },
  {
    id: 'proj-timber-joists',
    title: 'Precision Floor Joisting & Substructure',
    category: 'structural',
    categoryLabel: 'Structural Joisting',
    image: '/assets/lh/joisting-timber.jpg',
    aspect: 'portrait',
    description:
      'High-load floor and ceiling joist layout engineered for structural deflection resistance, sound deadening prep, and flawless subfloor leveling.',
    verifiedDetails: [
      'Engineered joist spacing',
      'Subfloor deflection control',
      'Structural preparation',
    ],
  },
  {
    id: 'proj-cad-blueprint',
    title: 'AutoCAD Spatial Architecture & Joinery Blueprint',
    category: 'technical',
    categoryLabel: 'Technical CAD Design',
    image: '/assets/lh/architectural-cad.png',
    aspect: 'square',
    description:
      'Technical AutoCAD layout prepared prior to construction to specify exact cabinetry clearances, trade rough-in coordinates, and spatial ergonomics for the client.',
    verifiedDetails: [
      'AutoCAD digital modeling',
      'Exact trade rough-in plans',
      'Client visualization process',
    ],
  },
  {
    id: 'proj-fire-door',
    title: 'Certified Fire Door Assembly & Compliance',
    category: 'technical',
    categoryLabel: 'Regulatory Life Safety',
    image: '/assets/lh/fire-door-compliance.jpg',
    aspect: 'portrait',
    description:
      'Certified fire-rated door set installation with intumescent seals, compliant ironmongery, and regulation-mandated perimeter tolerances.',
    verifiedDetails: [
      'Fire-rated hardware fitting',
      'Intumescent smoke sealing',
      'Current building code compliance',
    ],
  },
  {
    id: 'proj-extension-framing',
    title: 'Multi-Story Extension Framing & Studwork',
    category: 'structural',
    categoryLabel: 'Timber Framing',
    image: '/assets/lh/structural-extension.jpg',
    aspect: 'portrait',
    description:
      'Timber stud partition and external wall framing for home extension, demonstrating alignment with existing structural masonry and foundation anchors.',
    verifiedDetails: [
      'Studwork & timber wall framing',
      'Masonry interface tie-ins',
      'Multi-story structural rigidity',
    ],
  },
  {
    id: 'proj-interior-fitout',
    title: 'Interior Architectural Fit-Out & Joinery',
    category: 'carpentry',
    categoryLabel: 'Internal Joinery',
    image: '/assets/lh/interior-fitout.jpg',
    aspect: 'landscape',
    description:
      'High-spec internal joinery including architraves, pre-hung door lining, skirtings, and finish carpentry prepared for client handover.',
    verifiedDetails: [
      'Precision miters and joints',
      'Hardware alignment',
      'Clean finish tolerances',
    ],
  },
];

export const PILLARS = [
  {
    number: '01',
    title: 'Preparation As A Canvas',
    quote: 'Preparation is key to creating a strong canvas, and structural work is where the space becomes real.',
    desc: 'Great finishes are impossible without flawless structural substructures. We obsess over true levels, deflection tolerances, and rigid framing before decorative surfaces are touched.',
  },
  {
    number: '02',
    title: 'AutoCAD Digital Rigor',
    quote: 'We use AutoCAD to design the spaces we are entrusted to build, giving trades the right information to achieve the best outcome.',
    desc: 'Digital technical drafting eliminates guesswork on site. Clear dimensional drawings keep clients fully informed and ensure every subcontracted trade executes with millimeter accuracy.',
  },
  {
    number: '03',
    title: '16 Years Master Carpentry',
    quote: 'From updating door handles to adding large structural extensions, we prioritize every client.',
    desc: 'Over 16 years of hands-on experience mastering heavy structural timber, custom roof pitching, and bespoke interior cabinet fitting across residential and commercial sectors.',
  },
  {
    number: '04',
    title: 'Life Safety & Compliance',
    quote: 'Understanding fire regulations is crucial as they are always updating and play a major role in ensuring life safety.',
    desc: 'We uphold strict regulatory compliance through certified fire door installations, regular maintenance, and formal inspection procedures.',
  },
];
