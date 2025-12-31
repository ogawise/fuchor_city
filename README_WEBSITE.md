# Fuchor City Guest House - Website

A premium, luxury hospitality website for Fuchor City Guest House located in Bomaka, Buea, Cameroon.

## 🌟 Features

### Core Pages
- **Home**: Hero section, amenities showcase, rooms preview, CTA sections
- **About Us**: Guest house story, values, location highlights
- **Rooms & Amenities**: Detailed room descriptions with image galleries
- **Rates**: Transparent pricing with multi-day discounts (1, 3, 7 days)
- **Location**: Google Maps integration, neighborhood info, nearby attractions
- **Contact**: WhatsApp booking form, direct call functionality, FAQ section

### Key Functionalities
✅ **WhatsApp Integration**: Direct booking via WhatsApp (+237 653 207 528)
✅ **Click-to-Call**: One-click phone calls for immediate contact
✅ **Responsive Design**: Mobile-first, works perfectly on all devices
✅ **Luxury Design System**: Warm neutral palette, elegant typography
✅ **Google Maps**: Live map showing guest house location in Bomaka
✅ **Contact Form**: WhatsApp-integrated booking form with date selection

### Premium Amenities Highlighted
- High-speed WiFi internet
- Smart TVs with Netflix (bedroom & parlor)
- Air conditioning (bedroom & parlor)
- Hot/warm/cold shower options
- Fully equipped modern kitchen
- First-aid kit
- Complimentary protection for couples
- Free transportation to/from guest house

## 💰 Pricing Structure

| Duration | Price | Savings |
|----------|-------|---------|
| 1 Day | 40,000 FRS | - |
| 3 Days | 110,000 FRS | Save 10,000 FRS |
| 7 Days | 245,000 FRS | Save 35,000 FRS |

*Custom discounts available for longer stays*

## 🎨 Design System

### Colors (Warm Neutral Palette)
- **Primary Background**: `#fffef2` (Warm white)
- **Secondary Background**: `#f6f5e8` (Light warm beige)
- **Text Primary**: `#333333`
- **Text Secondary**: `#666666`
- **Interactive Base**: `#333333`
- **Borders**: `#bcbbb4`, `#cccccc`

### Typography
- **Font System**: System fonts with elegant fallbacks
- **Hero Large**: 30px
- **Hero Medium**: 26px
- **Headings**: 24px, 20px, 18px
- **Body**: 16px, 14px, 12px

### Key Design Principles
1. **Luxury Minimalism**: Clean, restrained design with generous white space
2. **Sharp Elements**: 0px border-radius for modern, elegant look
3. **Warm Palette**: Neutral, warm tones for hospitality feel
4. **Exceptional Typography**: Font hierarchy as primary design element
5. **Premium Imagery**: High-quality photos showcasing comfort

## 📱 Contact Information

**Phone/WhatsApp**: +237 653 207 528  
**Address**: Chief Street, Bomaka, Buea, Cameroon

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Routing**: React Router DOM v7
- **Styling**: CSS with custom design system
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Maps**: Google Maps Embed API

## 📂 Project Structure

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Main navigation bar
│   │   ├── Navigation.css
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Footer.css
│   │   └── ui/                 # Shadcn UI components
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── About.jsx           # About page
│   │   ├── Rooms.jsx           # Rooms & amenities
│   │   ├── Rates.jsx           # Pricing page
│   │   ├── Location.jsx        # Location & map
│   │   └── Contact.jsx         # Contact & booking
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   └── index.css               # Tailwind + theme
└── public/
    └── index.html
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and Yarn
- Modern web browser

### Installation
```bash
cd /app/frontend
yarn install
```

### Development
```bash
yarn start
# Opens at http://localhost:3000
```

### Production Build
```bash
yarn build
# Creates optimized build in /build
```

## 🖼️ Updating Images

See [IMAGE_UPDATE_GUIDE.md](/app/IMAGE_UPDATE_GUIDE.md) for detailed instructions on replacing placeholder images with actual guest house photos.

**Quick Steps**:
1. Place images in `/app/frontend/public/images/`
2. Update image sources in component files
3. Restart development server

## 📱 WhatsApp Integration

The website includes automatic WhatsApp integration for bookings:

### Book Now Buttons
Clicking any "Book Now" button opens WhatsApp chat with +237 653 207 528

### Booking Form
The contact form pre-fills WhatsApp message with:
- Guest name
- Phone number
- Check-in/check-out dates
- Number of guests
- Additional notes

## 🗺️ Google Maps

The Location page embeds Google Maps showing Bomaka, Buea area. The map can be updated with exact coordinates once the precise location pin is finalized.

## 🎯 Key Features for Clients

### For Business Owner
- Easy to update pricing and amenities
- Simple image replacement system
- WhatsApp integration for instant bookings
- Professional, trustworthy presentation

### For Guests
- Clear pricing information
- Visual room previews
- Easy booking process
- Mobile-friendly interface
- Transparent amenities list

## 📞 Support & Modifications

For website updates, modifications, or technical support, refer to your developer or the project documentation.

## 📄 License

This website is proprietary to Fuchor City Guest House.

---

**Built with** ❤️ **for elegant hospitality in Buea, Cameroon**
