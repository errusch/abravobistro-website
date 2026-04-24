"use client";

import { useState } from "react";
import ScrollReveal from "./components/ScrollReveal";
import MobileNav from "./components/MobileNav";
import OpenStatus from "./components/OpenStatus";
import { useScrollDirection } from "./hooks/useScrollDirection";

type MenuTab = "lunch" | "dinner" | "wine";

interface Badge {
  label: string;
  type: "v" | "gf" | "vg" | "df" | "lc";
}

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  badges?: Badge[];
}

interface MenuSectionData {
  title: string;
  note?: string;
  items: MenuItem[];
}

/* ─── Snacks & Shares (same for lunch & dinner) ─── */
const snacksAndShares: MenuSectionData = {
  title: "Snacks & Shares",
  items: [
    { name: "Brussel Sprouts", price: "$18", desc: "Pan seared with bacon, caramelized onions, fresh herbs, parmesan & panko" },
    { name: "Burrata", price: "$18", desc: "With lemon oil, red wine vinaigrette, arugula, tomato & grilled crostini", badges: [{ label: "V", type: "v" }] },
    { name: "Seasonal Hummus", price: "$17", desc: "House made, served with toasted crostini, vegetables & candied walnuts", badges: [{ label: "V", type: "v" }, { label: "VG", type: "vg" }] },
    { name: "BYO Pizza", price: "$23", desc: "Cauliflower crust, choose from seasonal vegetables, pulled pork & beef meatballs, pepperoni, red sauce, white sauce", badges: [{ label: "GF", type: "gf" }] },
    { name: "Spinach Artichoke Dip", price: "$18", desc: "House made, served warm with Naan bread" },
    { name: "Crab Stuffed Mushrooms", price: "$18", desc: "Cremini mushrooms stuffed with four cheese crab blend, baked, topped with asiago" },
    { name: "Cauliflower Bites", price: "$15", desc: "Air fried with choice of sauce" },
  ],
};

/* ─── Sandwiches (same for lunch & dinner) ─── */
const sandwiches: MenuSectionData = {
  title: "Sandwiches",
  note: "Served with kettle chips, roasted potatoes, fresh fruit, or cucumber & onion salad. Substitute cauliflower flatbread +$4.",
  items: [
    { name: "Turkey Club Wrap", price: "$18", desc: "House roasted turkey, spring greens, onion, tomato, bacon, cheddar & cranberry mustard mayo in a tomato & herb wrap" },
    { name: "Build Your Own Burger", price: "$19", desc: "Waseda Farms beef with greens, tomato, onion & choice of cheddar, pepper jack or swiss cheese. Add fried egg +$2, Add bacon +$3" },
    { name: "Tuscany", price: "$19", desc: "Grilled chicken thigh, bacon, fresh mozzarella, spring greens, garlic aioli, basil on ciabatta" },
    { name: "Cuban", price: "$18", desc: "Sweet & spicy pulled pork, shaved ham, baby Swiss, sweet house pickles & whole seed mustard" },
    { name: "Chicken Salad Croissant", price: "$19", desc: "Made with chicken breast, served on a bed of spring greens" },
    { name: "Caprese Sandwich", price: "$20", desc: "Tomato, basil, mozzarella, spring greens & balsamic reduction on cauliflower flatbread or sourdough. Add chicken +$7, Add prosciutto +$5", badges: [{ label: "GF", type: "gf" }] },
    { name: "Seafood Lobster Roll", price: "$21", desc: "Lobster, crab & white fish salad with spiced aioli, chopped celery, fennel & shallot in a New England style roll" },
    { name: "Philly Cheese Steak", price: "$19", desc: "Angus steak, provolone cheese, sautéed bell peppers, onions & mushrooms on a brick fire bun" },
    { name: "Rueben Sandwich", price: "$19", desc: "Layered with corned beef, aged Swiss, house thousand island dressing & sauerkraut on grilled marbled rye" },
    { name: "Beyond Burger", price: "$21", desc: "Plant based burger with greens, tomato, onion & choice of cheddar, pepper jack or swiss cheese" },
    { name: "Meatloaf Sandwich", price: "$19", desc: "Signature meatloaf sliced on sourdough bread with caramelized onions & Swiss cheese" },
  ],
};

/* ─── Soups & Salads (same for lunch & dinner) ─── */
const soupsAndSalads: MenuSectionData = {
  title: "Soups & Salads",
  note: "Add Protein: Chicken $7 | Shrimp $9 | Salmon $10 | Seared Tuna $11 | Mahi $11",
  items: [
    { name: "Three Cheese Mushroom Soup", price: "Cup $8 / Bowl $12 / Quart $20", desc: "When available", badges: [{ label: "GF", type: "gf" }] },
    { name: "Soup of the Day", price: "Cup $7 / Bowl $10 / Quart $18", desc: "Ask your server for today's selection" },
    { name: "Turkey Pesto Pasta", price: "$18", desc: "Smoked turkey, dried cranberries, red onion & light pesto aioli tossed with bow tie pasta & parmesan" },
    { name: "Roasted Sweet Potato Salad", price: "$18", desc: "Roasted sweet potatoes, red onion, kalamata olives, fresh mozzarella, parmesan, spring greens with honey balsamic vinaigrette", badges: [{ label: "GF", type: "gf" }, { label: "V", type: "v" }] },
    { name: "Rustic Lovers Salad", price: "$20", desc: "House roasted turkey, bacon, dried cranberry, pistachio, red onion, greens & spinach with parmesan peppercorn dressing", badges: [{ label: "GF", type: "gf" }] },
    { name: "Shrimp & Vegetable Noodle Bowl", price: "$24", desc: "Shrimp in spicy chicken broth with seasonal vegetable noodles, fresh lime & toasted sesame seeds", badges: [{ label: "GF", type: "gf" }, { label: "LC", type: "lc" }] },
    { name: "Mandarin Seared Tuna Salad", price: "$26", desc: "Seasonal seared tuna on a bed of spinach with mandarin oranges, zucchini, red & yellow peppers, citrus glaze & sesame seeds", badges: [{ label: "GF", type: "gf" }] },
    { name: "Black & Bleu Salad", price: "$23", desc: "Blackened sirloin, mixed greens, red, green & yellow bell peppers, red onions, bleu cheese crumbles with bleu cheese dressing" },
  ],
};

/* ─── Lunch Bistro Plates ─── */
const lunchBistroPlates: MenuSectionData = {
  title: "Bistro Plates",
  items: [
    { name: "Big Boo", price: "$23", desc: "Sliced chicken breast, bacon, bow tie pasta & vegetables in a spicy white wine cream sauce" },
    { name: "Lobster & Seafood Mac & Cheese", price: "$27", desc: "Lobster, crab & white fish, four-cheese cream sauce, cavatappi pasta & asiago toast" },
    { name: "Blackened Shrimp Tacos", price: "$25", desc: "Corn tortillas, chihuahua cheese, cabbage slaw, pickled onion & salsa roja", badges: [{ label: "GF", type: "gf" }] },
    { name: "Blackened Mahi Tacos", price: "$25", desc: "Blackened Mahi with corn tortillas, chihuahua cheese, cabbage & pickled onion salad and salsa roja", badges: [{ label: "GF", type: "gf" }] },
    { name: "Ratatouille", price: "$21", desc: "Roasted eggplant, summer squash, red pepper & tomato with red wine tomato sauce, spring greens & basil oil", badges: [{ label: "GF", type: "gf" }, { label: "VG", type: "vg" }] },
    { name: "Gluten Free Chicken Penne Pasta", price: "$28", desc: "Gluten free pasta with chicken breast & white cream sauce", badges: [{ label: "GF", type: "gf" }] },
    { name: "Thai Peanut Sauté", price: "$24", desc: "Sliced chicken breast, seasonal vegetable & spinach in Thai peanut sauce with jasmine rice, green onions, spicy toasted peanuts & almonds", badges: [{ label: "GF", type: "gf" }, { label: "DF", type: "df" }] },
    { name: "Prosciutto Chicken", price: "$28", desc: "Chicken breast stuffed with prosciutto, bacon, mushrooms, spinach & mozzarella, served with truffle cauliflower risotto, seasonal vegetables, white wine cream sauce & pistachios", badges: [{ label: "GF", type: "gf" }, { label: "LC", type: "lc" }] },
    { name: "Truffle Scallop Pasta", price: "$32", desc: "Gigli pasta, four cheese white wine cream sauce, Hudson Bay scallops, Italian black truffle & spinach" },
    { name: "Spinach & Mushroom Ravioli", price: "With Meatballs $28 / Without $22", desc: "Spinach & mushroom ravioli served with marinara and meatballs" },
    { name: "Spaghetti Squash & Meatballs", price: "$25", desc: "Waseda Farms beef & pork meatballs, red wine tomato sauce, spaghetti squash, fresh ricotta, basil & parmesan in a cream sauce", badges: [{ label: "LC", type: "lc" }] },
    { name: "Shrimp Scampi", price: "$36", desc: "Shrimp served with lemon butter garlic sauce over a truffle cauliflower risotto", badges: [{ label: "GF", type: "gf" }] },
    { name: "Chicken Parmesan", price: "$25", desc: "Almond flour, parmesan crusted chicken breast topped with red wine tomato sauce, fresh mozzarella, spaghetti squash in a cream sauce, basil oil & parmesan", badges: [{ label: "GF", type: "gf" }, { label: "LC", type: "lc" }] },
    { name: "Shrimp Alfredo", price: "$28", desc: "Garlic butter sautéed shrimp on a bed of linguine with house made white sauce, garnished with parmesan" },
    { name: "Grilled Salmon", price: "$31", desc: "Grilled salmon served over cauliflower risotto and seasonal vegetables" },
  ],
};

/* ─── Dinner Bistro Plates (lighter plates only) ─── */
const dinnerBistroPlates: MenuSectionData = {
  title: "Bistro Plates",
  items: [
    { name: "Blackened Shrimp Tacos", price: "$25", desc: "Corn tortillas, chihuahua cheese, cabbage slaw, pickled onion & salsa roja", badges: [{ label: "GF", type: "gf" }] },
    { name: "Blackened Mahi Tacos", price: "$25", desc: "Blackened Mahi with corn tortillas, chihuahua cheese, cabbage & pickled onion salad and salsa roja", badges: [{ label: "GF", type: "gf" }] },
    { name: "Ratatouille", price: "$21", desc: "Roasted eggplant, summer squash, red pepper & tomato with red wine tomato sauce, spring greens & basil oil", badges: [{ label: "GF", type: "gf" }, { label: "VG", type: "vg" }] },
    { name: "Gluten Free Chicken Penne Pasta", price: "$28", desc: "Gluten free pasta with chicken breast & white cream sauce", badges: [{ label: "GF", type: "gf" }] },
  ],
};

/* ─── Dinner Entrees ─── */
const dinnerEntrees: MenuSectionData = {
  title: "Entrées",
  note: "Served with a house salad or soup of your choice",
  items: [
    { name: "Ribeye", price: "$49", desc: "12 oz. hand cut ribeye with roasted potatoes & seasonal vegetables" },
    { name: "Lobster & Seafood Mac & Cheese", price: "$33", desc: "Lobster, crab & white fish, four-cheese cream sauce, cavatappi pasta & asiago toast" },
    { name: "Big Boo", price: "$29", desc: "Sliced chicken breast, bacon, bow tie pasta & vegetables in a spicy white wine cream sauce" },
    { name: "Spinach & Mushroom Ravioli", price: "With Meatballs $34 / Without $28", desc: "Spinach & mushroom ravioli served with marinara and meatballs" },
    { name: "Thai Peanut Sauté", price: "$30", desc: "Sliced chicken breast, seasonal vegetable & spinach in Thai peanut sauce with jasmine rice, green onions, spicy toasted peanuts & almonds", badges: [{ label: "GF", type: "gf" }] },
    { name: "Shrimp Scampi", price: "$42", desc: "Shrimp served with lemon butter garlic sauce over a truffle cauliflower risotto", badges: [{ label: "GF", type: "gf" }] },
    { name: "Prosciutto Chicken", price: "$34", desc: "Chicken breast stuffed with prosciutto, bacon, mushrooms, spinach & mozzarella, served with truffle cauliflower risotto, seasonal vegetables, white wine cream sauce & pistachios", badges: [{ label: "GF", type: "gf" }, { label: "LC", type: "lc" }] },
    { name: "Truffle Scallop Pasta", price: "$38", desc: "Gigli pasta, four cheese white wine cream sauce, Hudson Bay scallops, Italian black truffle & spinach" },
    { name: "Shrimp Alfredo", price: "$34", desc: "Garlic butter sautéed shrimp on a bed of linguine with house made white sauce, garnished with parmesan" },
    { name: "Chicken Parmesan", price: "$31", desc: "Almond flour, parmesan crusted chicken breast topped with red wine tomato sauce, fresh mozzarella, spaghetti squash in a cream sauce, basil oil & parmesan", badges: [{ label: "GF", type: "gf" }, { label: "LC", type: "lc" }] },
    { name: "Grilled Salmon", price: "$37", desc: "Grilled salmon served over cauliflower risotto and seasonal vegetables" },
    { name: "Classic Homestyle Meatloaf", price: "$29", desc: "Homestyle meatloaf with garlic mashed potatoes, burnt carrots & topped with house brown gravy" },
    { name: "Spaghetti Squash & Meatballs", price: "$31", desc: "Waseda Farms beef & pork meatballs, red wine tomato sauce, spaghetti squash, fresh ricotta, basil & parmesan in a cream sauce", badges: [{ label: "LC", type: "lc" }] },
  ],
};

/* ─── Wine Data ─── */
interface Wine {
  name: string;
  region: string;
  glassPrice: number;
  bottlePrice?: number;
  desc: string;
}

const whiteWines: Wine[] = [
  { name: "J. Lohr Bay Mist Riesling", region: "Monterey, California", glassPrice: 9, bottlePrice: 34, desc: "Flavors of ripe apple and pear with a touch of sweetness" },
  { name: "Caposaldo Pinot Grigio", region: "Delle Venezie, Italy", glassPrice: 9, bottlePrice: 34, desc: "Clean and crisp with delicate aromas of apples and peaches" },
  { name: "Matua Sauvignon Blanc", region: "Marlborough, New Zealand", glassPrice: 9, bottlePrice: 34, desc: "Fruit driven with classic Marlborough acidity, fresh clean palate and passion fruit finish" },
  { name: "Sonoma-Cutrer Russian River Ranches Chardonnay", region: "Sonoma Coast, California", glassPrice: 12, bottlePrice: 46, desc: "Crisp, bright acidity with lemon and mineral flavor and lingering notes of pineapple and pear" },
  { name: "Sea Sun Chardonnay", region: "California", glassPrice: 9, bottlePrice: 34, desc: "Medium bodied with hints of oak and fruit flavors" },
  { name: "Coppo Moncalvino Moscato d'Asti", region: "Piemonte, Italy", glassPrice: 11, bottlePrice: 40, desc: "Fresh, floral notes with peach and pear overtones" },
  { name: "Mulderbosche Rosé", region: "South Africa", glassPrice: 10, bottlePrice: 36, desc: "Elegant and full, with a creamy finish" },
  { name: "Bisol by Jeio Prosecco", region: "Prosecco, Italy", glassPrice: 12, bottlePrice: 46, desc: "Fresh, floral notes with peach and pear overtones" },
  { name: "Poema Cava Rosé", region: "Spain", glassPrice: 10, bottlePrice: 36, desc: "Flavors of strawberry and raspberry with elegant bubbles" },
];

const redWines: Wine[] = [
  { name: "Threadcount Red Blend", region: "California", glassPrice: 12, bottlePrice: 46, desc: "Bold flavors of boysenberry, sugar cookie and toffee with notes of strawberry jam and baking spice" },
  { name: "Decoy by Duckhorn Merlot", region: "California", glassPrice: 11, bottlePrice: 40, desc: "Refined tannins with a luxurious fruit-filled finish" },
  { name: "St. Francis \"Old Vine\" Zinfandel", region: "Sonoma, California", glassPrice: 12, bottlePrice: 46, desc: "Raspberry, blackberry and a touch of cranberry balanced with spicy notes of anise and cinnamon" },
  { name: "Böen Pinot Noir", region: "California", glassPrice: 12, bottlePrice: 46, desc: "Bright fruit flavors of cherry, strawberry, and blackberry with hints of cocoa and caramel" },
  { name: "Trivento Malbec", region: "Mendoza, Argentina", glassPrice: 9, bottlePrice: 34, desc: "Balanced with sweet tannins and a velvety finish" },
  { name: "Silver Raven Cabernet Sauvignon", region: "Columbia, Washington", glassPrice: 12, bottlePrice: 46, desc: "Stunning structure and balance with flavors of currant and blackberry" },
  { name: "Hess Shirttail Ranches Cabernet Sauvignon", region: "North Coast, California", glassPrice: 12, bottlePrice: 46, desc: "Harmonious and complex flavors of black cherry, plum, vanilla, chocolate with a whiff of spice" },
  { name: "Scarpetta Barbera", region: "Piedmont, Italy", glassPrice: 12, bottlePrice: 46, desc: "Medium-bodied with bright acidity and low tannins" },
];

const ports: { name: string; price: number; desc: string }[] = [
  { name: "Grahams Six Grapes", price: 9, desc: "Fruity and robust of superb quality" },
];

export default function Home() {
  const { direction, atTop } = useScrollDirection();

  const navHidden = !atTop && direction === "down";

  return (
    <main className="min-h-screen paper-texture">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm transition-all duration-300 ease-out ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        } ${atTop ? "" : "shadow-sm"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl text-burgundy tracking-wide">
            á&apos;Bravo
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium tracking-wide uppercase text-espresso-light hover:text-burgundy transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm font-medium tracking-wide uppercase text-espresso-light hover:text-burgundy transition-colors"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="text-sm font-medium tracking-wide uppercase text-espresso-light hover:text-burgundy transition-colors"
              href="#visit"
            >
              Reservations
            </a>
            <a
              className="bg-burgundy text-white px-5 py-2 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              href="tel:9204327286"
            >
              Reserve a Table
            </a>
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-6 bg-cream overflow-hidden">
        {/* Left sketch illustration */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sketch-left.png"
            alt=""
            width={400}
            height={600}
            className="sketch-illustration w-full h-auto"
          />
        </div>
        {/* Right sketch illustration */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sketch-right.png"
            alt=""
            width={400}
            height={600}
            className="sketch-illustration w-full h-auto"
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center hero-animate">
          <p className="font-caveat text-gold text-3xl md:text-4xl mb-3">
            Established 1999
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-burgundy leading-tight mb-4">
            á&apos;Bravo Bistro
          </h1>
          <p className="font-serif text-lg md:text-xl text-espresso-light/80 max-w-xl mx-auto leading-relaxed mb-8">
            Timeless flavors. Warm hospitality. Unforgettable experiences.
          </p>
          {/* Gold ornamental divider */}
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="ornament">❧</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-block bg-burgundy text-white px-8 py-4 rounded-md text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
              href="#menu"
            >
              View Our Menu
            </a>
            <a
              className="inline-block border border-burgundy text-burgundy px-8 py-4 rounded-md text-sm tracking-widest uppercase font-medium hover:bg-burgundy hover:text-white transition-colors"
              href="tel:9204327286"
            >
              Call to Reserve
            </a>
          </div>
        </div>
      </section>

      {/* Parallax Divider: Table Setting */}
      <div
        className="parallax-divider"
        style={{ backgroundImage: "url('/images/bg-table-setting.png')" }}
      />

      {/* About Section — with bistro interior background */}
      <section id="about" className="bg-bistro-interior py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto relative grid md:grid-cols-5 gap-0">
          {/* Left Column — Story & Awards (3/5) */}
          <div className="md:col-span-3 md:pr-12">
            <ScrollReveal>
              <p className="font-caveat text-gold text-2xl md:text-3xl mb-2">
                Our Story
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-6 leading-tight">
                Where Comfort Meets Sophistication
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4 font-serif text-espresso-light/80 leading-relaxed">
                <p>
                  á&apos;Bravo opened in 1999 as a small, upscale deli with an emphasis on catering. As we grew with our community, we expanded into a larger restaurant with a shabby-chic décor that feels like home—only better.
                </p>
                <p>
                  We offer a large variety of sophisticated comfort food with many primal dining and gluten-free options, as well as daily features to please any palate. Our dinner entrées change to complement the season, individual tastes, and to fully utilize locally grown products.
                </p>
                <p>
                  Our full-service bar includes an extensive cocktail menu. Our wine list is unique—we focus on intriguing, value-minded wines that are new, exciting, and not readily available.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Vertical gold divider (absolute positioned so it doesn't consume a grid column) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[60%] w-px bg-gold/30" />

          {/* Right Column — Hours & Location (2/5) */}
          <div className="md:col-span-2 md:pl-12 mt-12 md:mt-0">
            <ScrollReveal delay={200} direction="right">
              <div className="border border-gold/30 rounded p-8 md:p-10 bg-white/40">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-caveat text-gold text-2xl">Hours</p>
                  <OpenStatus />
                </div>
                <div className="space-y-3 font-serif text-espresso-light/80 text-sm">
                  <div className="flex justify-between border-b border-gold/20 pb-2">
                    <span>Monday – Friday</span>
                    <span className="font-medium">11:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/20 pb-2">
                    <span>Saturday</span>
                    <span className="font-medium">11:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/20 pb-2">
                    <span>Sunday Brunch</span>
                    <span className="font-medium">10:00 AM – 2:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 text-xs font-serif text-espresso-light/50 italic">
                  Lunch served daily 11:00 AM – 4:00 PM
                </p>

                <div className="mt-8 pt-6 border-t border-gold/30">
                  <p className="font-caveat text-gold text-xl mb-2">Location</p>
                  <p className="font-serif text-espresso-light/80 text-sm">
                    2069 Central Court #77
                    <br />
                    Bellevue / East Green Bay, WI 54311
                  </p>
                  <p className="mt-2 font-serif text-espresso-light/80 text-sm">
                    <a
                      href="tel:9204327286"
                      className="hover:text-burgundy transition-colors"
                    >
                      (920) 432-7286
                    </a>
                  </p>
                  <p className="mt-1 text-xs font-serif text-espresso-light/50">
                    Dine In, Carry Out, or{" "}
                    <a
                      href="https://www.grubhub.com/restaurant/abravo-bistro-2069-central-ct-77-green-bay/5526304"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-burgundy transition-colors"
                    >
                      GrubHub
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Awards — full width, centered below the two columns */}
        <ScrollReveal delay={100}>
          <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-gold/30">
            <div className="ornament-divider mb-8">
              <h3 className="font-serif text-lg text-burgundy px-4 whitespace-nowrap">
                Awards &amp; Recognition
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto text-center">
              {[
                "Golden Fork — Best Sandwich",
                "Golden Fork — Best Salad",
                "Golden Fork — Best Café",
                "Best Dine-in Deli",
                "Best Ambiance",
                "Runner-up — Best Wine List",
                "Chamber of Commerce — Best Appetizer",
                "Taste of the Town — Best Entrée, Appetizer & Dessert",
              ].map((award, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gold text-sm">★</span>
                    <p className="font-serif text-sm font-semibold text-espresso-light">
                      {award}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Menu Section — with parchment texture background */}
      <MenuSectionTabs />

      {/* Visit / CTA Section — with wine glasses background */}
      <section id="visit" className="bg-wine-cta py-20 md:py-28 px-6 bg-burgundy">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-caveat text-gold text-2xl md:text-3xl mb-2">
              Join Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              We&apos;d Love to See You
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-serif text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re planning a night out, a special celebration,
              or need catering for your next event, we&apos;re here to help.
              Contact us today to make a reservation or inquire about catering.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:9204327286"
                className="inline-flex items-center justify-center gap-2 bg-gold text-espresso px-8 py-4 rounded-md text-sm tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <PhoneIcon />
                Call (920) 432-7286
              </a>
              <a
                href="mailto:abravobistro@gmail.com?subject=Catering%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20catering%20for%20an%20upcoming%20event.%0A%0ADate%3A%20%0ALocation%3A%20%0AGuests%3A%20%0AEvent%20type%3A%20"
                className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 rounded-md text-sm tracking-widest uppercase font-semibold hover:bg-gold hover:text-espresso transition-colors"
              >
                <MailIcon />
                Email for Catering
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="border-t border-gold/30 pt-8">
              <p className="font-serif text-white/60 text-sm">
                2069 Central Court #77 • Bellevue / East Green Bay, WI 54311
              </p>
              <p className="font-serif text-gold text-sm mt-1">
                Dine In • Carry Out •{" "}
                <a
                  href="https://www.grubhub.com/restaurant/abravo-bistro-2069-central-ct-77-green-bay/5526304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  GrubHub
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso py-10 px-6 text-center">
        <ScrollReveal>
          <p className="font-serif text-lg text-white/80 mb-3">
            á&apos;Bravo Bistro
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="ornament-divider max-w-[120px] mx-auto mb-3">
            <span className="ornament">⚜</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="font-serif text-gold text-sm">
            Established 1999 • Bellevue / East Green Bay, Wisconsin
          </p>
        </ScrollReveal>
        <p className="mt-4 text-white/30 text-xs">
          © {new Date().getFullYear()} á&apos;Bravo Bistro. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

/* ─── Sub-components ─── */

function MenuSection({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-serif text-lg text-burgundy uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="ornament-divider mb-6">
        <span className="ornament">❧</span>
      </div>
      {note && (
        <p className="font-serif text-xs italic text-espresso-light/50 mb-5">
          {note}
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">{children}</div>
    </div>
  );
}

interface Badge {
  label: string;
  type: "v" | "gf" | "vg" | "df" | "lc";
}

function MenuItem({
  name,
  price,
  desc,
  badges,
}: {
  name: string;
  price: string;
  desc: string;
  badges?: Badge[];
}) {
  return (
    <div className="menu-row flex justify-between items-start gap-4 cursor-default">
      <div>
        <p className="font-serif font-semibold text-espresso-light">
          {name}
          {badges?.map((b, i) => (
            <span
              key={i}
              className={`badge-${b.type} ml-1.5 px-1.5 py-0.5 rounded-sm text-[10px] font-sans font-semibold uppercase tracking-wide`}
            >
              {b.label}
            </span>
          ))}
        </p>
        <p className="font-serif text-sm text-espresso-light/55 mt-0.5 leading-relaxed">
          {desc}
        </p>
      </div>
      <span className="font-serif text-burgundy whitespace-nowrap font-semibold">
        {price}
      </span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ─── Data-driven menu section renderer ─── */
function DataMenuSection({ section }: { section: MenuSectionData }) {
  return (
    <MenuSection title={section.title} note={section.note}>
      {section.items.map((item, i) => (
        <MenuItem
          key={i}
          name={item.name}
          price={item.price}
          desc={item.desc}
          badges={item.badges as Badge[] | undefined}
        />
      ))}
    </MenuSection>
  );
}

/* ─── Wine card component ─── */
function WineCard({ wine }: { wine: Wine }) {
  return (
    <div className="wine-card">
      <div className="flex justify-between items-start gap-4">
        <div className="min-w-0">
          <p className="font-serif font-semibold text-espresso-light text-sm leading-snug">
            {wine.name}
          </p>
          <p className="font-serif text-xs text-espresso-light/50 mt-0.5">
            {wine.region}
          </p>
        </div>
        <div className="text-right whitespace-nowrap flex-shrink-0">
          <span className="font-serif text-burgundy font-semibold text-sm">
            ${wine.glassPrice}
          </span>
          <span className="font-serif text-espresso-light/40 text-xs"> glass</span>
          {wine.bottlePrice && (
            <>
              <span className="text-espresso-light/20 mx-1">|</span>
              <span className="font-serif text-burgundy/70 font-semibold text-sm">
                ${wine.bottlePrice}
              </span>
              <span className="font-serif text-espresso-light/40 text-xs"> bottle</span>
            </>
          )}
        </div>
      </div>
      <p className="font-serif text-xs text-espresso-light/55 mt-1 leading-relaxed italic">
        {wine.desc}
      </p>
    </div>
  );
}

/* ─── Tabbed Menu Section ─── */
function MenuSectionTabs() {
  const [activeTab, setActiveTab] = useState<MenuTab>("lunch");

  const tabs: { key: MenuTab; label: string; sub: string }[] = [
    { key: "lunch", label: "Lunch", sub: "11 AM – 4 PM" },
    { key: "dinner", label: "Dinner", sub: "4 PM – Close" },
    { key: "wine", label: "Wine List", sub: "By the Glass" },
  ];

  const lunchSections: MenuSectionData[] = [
    snacksAndShares,
    sandwiches,
    lunchBistroPlates,
    soupsAndSalads,
  ];

  const dinnerSections: MenuSectionData[] = [
    snacksAndShares,
    sandwiches,
    dinnerBistroPlates,
    dinnerEntrees,
    soupsAndSalads,
  ];

  return (
    <section id="menu" className="bg-parchment relative py-20 md:py-28 px-6 bg-cream overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Menu Header */}
        <div className="text-center mb-10">
          <ScrollReveal>
            <p className="font-caveat text-gold text-3xl md:text-4xl mb-2">
              Our Menu
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="ornament-divider max-w-xs mx-auto">
              <span className="ornament">❧</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={150}>
          <div className="flex justify-center gap-8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`menu-tab text-center cursor-pointer bg-transparent border-0 ${
                  activeTab === tab.key ? "menu-tab-active" : "text-espresso-light/50"
                }`}
              >
                <span className="font-serif text-lg md:text-xl block">{tab.label}</span>
                <span className="font-sans text-[10px] uppercase tracking-widest block mt-0.5 opacity-60">
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dietary Legend (food menus only) */}
        {activeTab !== "wine" && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-xs font-sans text-espresso-light/60">
            <span className="flex items-center gap-1">
              <span className="badge-v px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase">V</span>
              Vegetarian
            </span>
            <span className="flex items-center gap-1">
              <span className="badge-vg px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase">VG</span>
              Vegan
            </span>
            <span className="flex items-center gap-1">
              <span className="badge-gf px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase">GF</span>
              Gluten-Free
            </span>
            <span className="flex items-center gap-1">
              <span className="badge-df px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase">DF</span>
              Dairy-Free
            </span>
            <span className="flex items-center gap-1">
              <span className="badge-lc px-1.5 py-0.5 rounded-sm text-[10px] font-semibold uppercase">LC</span>
              Low Carb
            </span>
          </div>
        )}

        {/* Menu Content */}
        {activeTab === "lunch" && (
          <>
            <ScrollReveal>
              <p className="text-center font-serif text-xs italic text-espresso-light/40 mb-10">
                Lunch available until 4:00 PM
              </p>
            </ScrollReveal>
            {lunchSections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 100}>
                <DataMenuSection section={section} />
              </ScrollReveal>
            ))}
          </>
        )}

        {activeTab === "dinner" && (
          <>
            {dinnerSections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 100}>
                <DataMenuSection section={section} />
              </ScrollReveal>
            ))}
          </>
        )}

        {activeTab === "wine" && (
          <>
            {/* White Wines */}
            <ScrollReveal>
              <div className="mb-14">
                <h3 className="font-serif text-lg text-burgundy uppercase tracking-wider mb-2">
                  White Wines
                </h3>
                <div className="ornament-divider mb-6">
                  <span className="ornament">❧</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {whiteWines.map((wine, i) => (
                    <WineCard key={i} wine={wine} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Red Wines */}
            <ScrollReveal delay={100}>
              <div className="mb-14">
                <h3 className="font-serif text-lg text-burgundy uppercase tracking-wider mb-2">
                  Red Wines
                </h3>
                <div className="ornament-divider mb-6">
                  <span className="ornament">❧</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {redWines.map((wine, i) => (
                    <WineCard key={i} wine={wine} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Port */}
            <ScrollReveal delay={200}>
              <div className="mb-14">
                <h3 className="font-serif text-lg text-burgundy uppercase tracking-wider mb-2">
                  Port
                </h3>
                <div className="ornament-divider mb-6">
                  <span className="ornament">❧</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {ports.map((p, i) => (
                    <div key={i} className="wine-card">
                      <div className="flex justify-between items-start gap-4">
                        <p className="font-serif font-semibold text-espresso-light text-sm">
                          {p.name}
                        </p>
                        <span className="font-serif text-burgundy font-semibold text-sm whitespace-nowrap">
                          ${p.price} glass
                        </span>
                      </div>
                      <p className="font-serif text-xs text-espresso-light/55 mt-1 italic">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-center font-serif text-xs italic text-espresso-light/40">
                Please drink responsibly
              </p>
            </ScrollReveal>
          </>
        )}

        {/* Footer note */}
        {activeTab !== "wine" && (
          <ScrollReveal delay={200}>
            <p className="text-center font-serif text-xs italic text-espresso-light/40 mt-12">
              Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. We are not a wheat-free facility.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
