'use client'

import Image from "next/image";
import { Heading } from "../components/Heading";
import styles from "./page.module.css";
import { Section } from "../components/Section";
import { Button } from "../components/Button/Button";
import { Divider } from "../components/Divider";
import { Footer } from "../components/Footer";
import { Icon } from "@iconify/react";

export default function Venue() {
  return (
    <main>
      <Section>
        <Heading value="Venue details" level={1} align="center" />
        <div className={styles.address}>
          <address>
            <Icon icon="bx:map" />
            Fazeley Studios, 191 Fazeley St, Deritend, Birmingham, B5 5SE,
          </address>
          <a href="https://www.google.com/maps/dir/Fazeley+Studios,+191+Fazeley+St,+Deritend,+Birmingham+B5+5SE" target="_blank">
            <span>Get directions</span>
            <Icon icon="gridicons:external" />
          </a>
        </div>
        <div className={styles.hero}>
          <Image src="/venue.jpg" alt="Fazeley Studios" width={675} height={489} />
        </div>
      </Section>
      <Section className={styles.section}>
        <h2>Getting to the venue</h2>
        <div className={styles.transport}>
          <div>
            <h3>By Car</h3>
            <p>Free on-street parking nearby the venue is limited, but there are lots of inexpensive public pay and display car parks within a 10 minute walk.</p>
            <Button priority="secondary" text="Nearby Parking" href="https://www.google.com/maps/dir/Trinity+Street+Car+Park,+29+Heath+Mill+Ln,+Deritend,+Birmingham+B9+4AL" target="_blank" />
          </div>
          <div>
            <h3>By Public Transport</h3>
            <p>Birmingham New Street, Birmingham Moor Street, and Birmingham Snow Hill train stations are all within walking distance of the venue.</p>
            <Button priority="secondary" text="Nearby Train Stations" href="https://www.google.com/maps/dir/Birmingham+New+Street,+New+Street+station,+Station+St,+Birmingham+B2+4QA" target="_blank" />
          </div>
        </div>
      </Section>
      <Section className={styles.section}>
        <Divider />
      </Section>
      <Section className={styles.section}>
        <h2>When should I arrive?</h2>
        <div className={styles.guests}>
          <div>
            <h3>Day guests</h3>
            <p>Please arrive from 3.30pm</p>
          </div>
          <div>
            <h3>Evening guests</h3>
            <p>Please arrive from 7.30pm</p>
          </div>
        </div>
      </Section>
      <Section className={styles.section}>
        <Divider />
      </Section>
      <Section className={styles.section}>
        <h2>Accomodation</h2>
        <p>
          Check out your options on{' '}
          <a href="https://www.booking.com/searchresults.en-gb.html?ss=Fazeley+Studios%2C+Birmingham%2C+West+Midlands%2C+United+Kingdom&label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4Aq7x16wGwAIB0gIkYTg1MTYzYzQtZjM4NC00YTZmLWFiNGEtNGIwOGQxOTQ5NjI32AIF4AIB&sid=46f7786a2ca756c6b418e77db59be2ba&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=826gcqdt-00522c05c1a757a97f91bc455e38ae14-en&dest_type=latlong&place_id=826gcqdt-00522c05c1a757a97f91bc455e38ae14-en&latitude=52.4777296&longitude=-1.8815165&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=064801d767ff018e&ac_meta=IAAoBDICZW4%3D&checkin=2024-05-10&checkout=2024-05-12&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure" target="_blank">
            <span>Booking.com</span>
            <Icon icon="gridicons:external" />
          </a>
        </p>
      </Section>
      <Footer />
    </main>
  )
}
