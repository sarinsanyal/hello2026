import Hero from '@/components/web/Hero';
import About from '@/components/web/About';
import WhatToExpect from '@/components/web/WhatToExpect';
import OurSignatureEvents from '@/components/web/OurSignatureEvents';
import Timeline from '@/components/web/Timeline';
// import SpecialGuests from './components/SpecialGuests';
// import TrustedBy from './components/TrustedBy';
// import TicketCTA from './components/TicketCTA';
// import VenueAndContact from './components/VenueAndContact';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D8B4FE] selection:text-black">
      <Hero />
      <About />
      <WhatToExpect />
      <OurSignatureEvents/>
      <Timeline />
      {/*<SpecialGuests />
      <TrustedBy />
      <TicketCTA />
      <VenueAndContact /> */}
    </div>
  );
};