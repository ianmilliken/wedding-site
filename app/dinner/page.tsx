'use client'

import { Heading } from "../components/Heading";
import styles from "./page.module.css";
import { Section } from "../components/Section";
import { Divider } from "../components/Divider";
import { Footer } from "../components/Footer";

export default function Dinner() {
  return (
    <main>
      <Section>
        <Heading value="Dinner" level={1} align="center" />
        <div className={styles.intro}>
          <p>The menu is served as a platter to all tables.</p>
        </div>
      </Section>
      <Section className={styles.section}>
        <h2>Starter</h2>
        <ul>
          <li>Spicy thai chicken wings (GF, DF)</li>
          <li>Crispy salt and chilli tofu (V, GF)</li>
          <li>Vegetable spring rolls with sweet chilli dip (V, DF)</li>
          <li>Vegetable tempura (VE)</li>
        </ul>
      </Section>
      <Section className={styles.section}>
        <Divider />
      </Section>
      <Section className={styles.section}>
        <h2>Main</h2>
        <ul>
          <li>Tofu thai green curry with cocunut milk, sweet basil leaves, bamboo shoot and chilli (GF, DF, VE)</li>
          <li>Baked fresh shitake mushroom, potato edamame dumpling, szechuan peppercorn sauce, toasted pine nuts (VE, GF)</li>
        </ul>
      </Section>
      <Section className={styles.section}>
        <Divider />
      </Section>
      <Section className={styles.section}>
        <h2>Dessert</h2>
        <ul>
          <li>Mango cheesecake (V)</li>
        </ul>
      </Section>
      <Section className={styles.section}>
        <p>If you have any allergies please let us know.</p>
      </Section>
      <Footer />
    </main>
  )
}
