'use client'

import { nanoid } from "nanoid";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading";
import { Review } from "./components/Review";
import { Section } from "./components/Section";
import { Stack } from "./components/Stack";
import { Schedule } from "./components/Schedule";
import Image from "next/image";
import { Divider } from "./components/Divider";
import { Canvas } from "./components/Canvas";
import { Footer } from "./components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {


  const copy = {
    heading: "We're getting hitched",
    subheading: "Critics love it",
    reviews: [
      {
        quote: "Finally!",
        author: "Clare Evans",
        rating: 5,
      },
      {
        quote: "Nooo wayyy!",
        author: "Lewis Dow",
        rating: 5,
      },
      {
        quote: "What took him so long?",
        author: "Chris Wood",
        rating: 5,
      },
      {
        quote: "Clare is kenough for him",
        author: "Chloe Kane",
        rating: 5,
      },
    ],
  };

  const venue = {
    preHeading: "Coming to a venue (nowhere) near you soon...",
    heading: "Fazeley Studios",
    address: "Fazeley Studios, 191 Fazeley St, Deritend, Birmingham, B5 5SE",
    date: "Saturday 11 May 2024",
    cta: "See venue information"
  }

  const schedule = {
    preHeading: "What's the happy-hap?",
    heading: "The BIG day.",
    postHeading: "We think it's going to go something like this...",
    events: [
      {
        time: "3:00 PM",
        title: "Day guests arrive",
      },
      {
        time: "3:30 PM",
        title: "Ceremony",
      },
      {
        time: "4:00 PM",
        title: "Drinks reception & speeches",
      },
      {
        time: "5:30 PM",
        title: "Dinner",
      },
      {
        time: "7:30 PM",
        title: "P - A - R - T - Y",
      },
      {
        time: "9:00 PM",
        title: "Evening bites"
      },
      {
        time: "1:00 AM",
        title: "The afterparty (and over 30's bedtime)",
      },
    ],
  }

  return (
    <main>
      <Section>
        {/* Banner */}
        <header className="banner">
          <Heading value={copy.heading} level={1} />
          <div className="image">
              <Image src="/photo.png" alt="Clare & Ian" width={764} height={964} />
          </div>
        </header>
        {/* Reviews */}
        <div className="reviews">
          <h4>{copy.subheading}</h4>
          <Stack>
            {copy.reviews.map((review) => <Review key={nanoid()} {...review} />)}
          </Stack>
        </div>
      </Section>
      {/** Venue information */}
      <Section className="venue">
        <Divider title="Venue" />
        <div className="venue__layout">
          <div>
            <Heading value={venue.heading} level={2} />
            <address>
              <Icon icon="bx:map" />
              {venue.address}
            </address>
            <Button priority="secondary" text={venue.cta} href="/venue" />
          </div>
          <Image src="/venue.jpg" alt="Fazeley Studios" width={675} height={489} />
        </div>
      </Section>
      <Section className="schedule">
        <Divider title="Schedule" />
        <header>
          <Heading value={schedule.heading} level={2} align="center" />
          <p className="lg">{schedule.postHeading}</p>
        </header>
        <Schedule events={schedule.events} />
      </Section>
      <Footer />
      <Canvas />
    </main>
  );
}
