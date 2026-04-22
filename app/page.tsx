import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen paper-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--gold)]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl text-[var(--burgundy)] tracking-wide">
            á&apos;Bravo
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium tracking-wide uppercase text-[var(--espresso-light)] hover:text-[var(--burgundy)] transition-colors" href="#about">
              About
            </a>
            <a className="text-sm font-medium tracking-wide uppercase text-[var(--espresso-light)] hover:text-[var(--burgundy)] transition-colors" href="#menu">
              Menu
            </a>
            <a className="text-sm font-medium tracking-wide uppercase text-[var(--espresso-light)] hover:text-[var(--burgundy)] transition-colors" href="#visit">
              Visit
            </a>
            <a
              className="bg-[var(--burgundy)] text-white px-5 py-2 rounded text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              href="tel:9204327286"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-6 bg-[var(--cream)] overflow-hidden">
        {/* Left sketch illustration */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 pointer-events-none">
          <Image
            src="/images/sketch-left.png"
            alt=""
            width={400}
            height={600}
            className="sketch-illustration w-full h-auto"
            priority
          />
        </div>
        {/* Right sketch illustration */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 pointer-events-none">
          <Image
            src="/images/sketch-right.png"
            alt=""
            width={400}
            height={600}
            className="sketch-illustration w-full h-auto"
            priority
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-caveat text-[var(--gold)] text-3xl md:text-4xl mb-3">
            Established 1999
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--burgundy)] leading-tight mb-4">
            á&apos;Bravo Bistro
          </h1>
          <p className="font-serif text-lg md:text-xl text-[var(--espresso-light)]/80 max-w-xl mx-auto leading-relaxed mb-8">
            Timeless flavors. Warm hospitality. Unforgettable experiences.
          </p>
          {/* Gold ornamental divider */}
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <span className="ornament">❧</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-block bg-[var(--burgundy)] text-white px-8 py-4 rounded-md text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity"
              href="#menu"
            >
              View Our Menu
            </a>
            <a
              className="inline-block border border-[var(--burgundy)] text-[var(--burgundy)] px-8 py-4 rounded-md text-sm tracking-widest uppercase font-medium hover:bg-[var(--burgundy)] hover:text-white transition-colors"
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-0">
          {/* Left Column — Story & Awards (3/5) */}
          <div className="md:col-span-3 md:pr-12">
            <p className="font-caveat text-[var(--gold)] text-2xl md:text-3xl mb-2">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--burgundy)] mb-6 leading-tight">
              Where Comfort Meets Sophistication
            </h2>
            <div className="space-y-4 font-serif text-[var(--espresso-light)]/80 leading-relaxed">
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

            {/* Awards */}
            <div className="mt-10 pt-8 border-t border-[var(--gold)]/30">
              <div className="ornament-divider mb-6">
                <h3 className="font-serif text-lg text-[var(--burgundy)] px-4 whitespace-nowrap">
                  Awards &amp; Recognition
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { title: "Golden Fork — Best Sandwich", sub: "" },
                  { title: "Golden Fork — Best Salad", sub: "" },
                  { title: "Golden Fork — Best Café", sub: "" },
                  { title: "Best Dine-in Deli", sub: "" },
                  { title: "Best Ambiance", sub: "" },
                  { title: "Runner-up — Best Wine List", sub: "" },
                  { title: "Chamber of Commerce — Best Appetizer", sub: "" },
                  { title: "Taste of the Town — Best Entrée, Appetizer & Dessert", sub: "" },
                ].map((award, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mt-0.5 text-sm">★</span>
                    <div>
                      <p className="font-serif text-sm font-semibold text-[var(--espresso-light)]">
                        {award.title}
                      </p>
                      {award.sub && (
                        <p className="font-serif text-xs italic text-[var(--espresso-light)]/60">
                          {award.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical gold divider */}
          <div className="hidden md:block md:col-span-0 w-px bg-[var(--gold)]/30 mx-auto" />

          {/* Right Column — Photo + Hours & Location (2/5) */}
          <div className="md:col-span-2 md:pl-12 mt-12 md:mt-0">
            {/* Bistro interior photo */}
            <div className="bistro-photo-panel mb-8 shadow-lg">
              <Image
                src="/images/bg-bistro-interior.png"
                alt="á'Bravo Bistro interior — warm candlelit dining"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="border border-[var(--gold)]/30 rounded p-8 md:p-10 bg-white/40">
              <p className="font-caveat text-[var(--gold)] text-2xl mb-4">
                Hours
              </p>
              <div className="space-y-3 font-serif text-[var(--espresso-light)]/80 text-sm">
                <div className="flex justify-between border-b border-[var(--gold)]/20 pb-2">
                  <span>Monday – Friday</span>
                  <span className="font-medium">11:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-[var(--gold)]/20 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium">11:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-[var(--gold)]/20 pb-2">
                  <span>Sunday Brunch</span>
                  <span className="font-medium">10:00 AM – 2:00 PM</span>
                </div>
              </div>
              <p className="mt-4 text-xs font-serif text-[var(--espresso-light)]/50 italic">
                Lunch served daily 11:00 AM – 4:00 PM
              </p>

              <div className="mt-8 pt-6 border-t border-[var(--gold)]/30">
                <p className="font-caveat text-[var(--gold)] text-xl mb-2">
                  Location
                </p>
                <p className="font-serif text-[var(--espresso-light)]/80 text-sm">
                  2069 Central Court #77
                  <br />
                  Green Bay, WI 54311
                </p>
                <p className="mt-2 font-serif text-[var(--espresso-light)]/80 text-sm">
                  <a
                    href="tel:9204327286"
                    className="hover:text-[var(--burgundy)] transition-colors"
                  >
                    (920) 432-7286
                  </a>
                </p>
                <p className="mt-1 text-xs font-serif text-[var(--espresso-light)]/50">
                  Dine In, Carry Out, or GrubHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section — with parchment texture background */}
      <section id="menu" className="bg-parchment py-20 md:py-28 px-6 bg-[var(--cream)]">
        <div className="max-w-5xl mx-auto">
          {/* Menu Header */}
          <div className="text-center mb-16">
            <p className="font-caveat text-[var(--gold)] text-3xl md:text-4xl mb-2">
              Lunch Menu
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--burgundy)] uppercase tracking-wide mb-3">
              Served Daily 11 AM – 4 PM
            </h2>
            <div className="ornament-divider max-w-xs mx-auto">
              <span className="ornament">❧</span>
            </div>
          </div>

          {/* SNACKS & SHARES */}
          <MenuSection title="Snacks & Shares">
            <MenuItem
              name="Brussel Sprouts"
              price="$18"
              desc="Pan-seared with bacon, caramelized onion, herbs, parmesan, panko, & apple cider vinegar"
            />
            <MenuItem
              name="Burrata"
              price="$18"
              desc="With lemon oil, red wine vinaigrette, arugula, roasted tomato, & grilled crostini"
              badges={[{ label: "V", type: "v" }]}
            />
            <MenuItem
              name="House Made Seasonal Hummus"
              price="$17"
              desc="Served with toasted crostini, vegetables, & candied walnuts"
              badges={[{ label: "V", type: "v" }, { label: "VG", type: "vg" }]}
            />
            <MenuItem
              name="B.Y.O Pizza"
              price="$23"
              desc="Cauliflower crust with choice of seasonal veggies, meatballs, pepperoni, & red/white sauce"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Ahi Tuna"
              price="$28"
              desc="Seasonal preparation (ask server for details)"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Spinach Artichoke Dip"
              price="$18"
              desc="House-made, served warm with Naan bread"
            />
            <MenuItem
              name="Crab Stuffed Mushrooms"
              price="$18"
              desc="Cremini mushrooms with four-cheese crab blend, baked, topped with asiago"
            />
            <MenuItem
              name="Cauliflower Bites"
              price="$15"
              desc="Air-fried with choice of sauce"
            />
          </MenuSection>

          {/* SOUPS & SALADS */}
          <MenuSection
            title="Soups & Salads"
            note="Add Protein: Chicken +$7 | Shrimp +$9 | Salmon +$10 | Seared Tuna +$11"
          >
            <MenuItem
              name="Three Cheese Mushroom Soup"
              price="$8"
              desc="Cup $8 / Bowl $12 / Quart $20"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Soup Of The Day"
              price="$7"
              desc="Cup $7 / Bowl $10 / Quart $18"
            />
            <MenuItem
              name="Turkey Pesto Pasta"
              price="$18"
              desc="Roasted turkey, cranberries, red onion, pesto aioli, bow tie pasta, parmesan"
            />
            <MenuItem
              name="Caramelized Sweet Potato Salad"
              price="$18"
              desc="Roasted sweet potatoes, spring greens, mozzarella, olives, parmesan, honey balsamic vinaigrette"
              badges={[{ label: "GF", type: "gf" }, { label: "V", type: "v" }]}
            />
            <MenuItem
              name="Rustic Lovers Salad"
              price="$20"
              desc="House roasted turkey, parmesan, bacon, cranberries, onion, pistachio greens, spinach, peppercorn dressing"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Shrimp & Vegetable Noodle Bowl"
              price="$24"
              desc="Shrimp in spicy chicken broth with veggie noodles, sesame, lime"
              badges={[{ label: "GF", type: "gf" }, { label: "VG", type: "vg" }]}
            />
            <MenuItem
              name="Mandarin Seared Tuna Salad"
              price="$26"
              desc="Seared tuna on spinach with mandarin oranges, zucchini, peppers, citrus glaze, sesame"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Black & Bleu Salad"
              price="$23"
              desc="Blackened sirloin, mixed greens, bell peppers, onion, bleu cheese crumbles & dressing"
            />
          </MenuSection>

          {/* SANDWICHES */}
          <MenuSection
            title="Sandwiches"
            note="Served with kettle chips, roasted potatoes, fresh fruit, or cucumber & onion salad. Substitute cauliflower flatbread +$4. Can be made Gluten-Free."
          >
            <MenuItem
              name="Turkey Club Wrap"
              price="$18"
              desc="Shaved turkey, greens, onion, tomato, bacon, cheddar, cranberry mustard mayo on herb wrap"
            />
            <MenuItem
              name="Tuscany"
              price="$19"
              desc="Crispy chicken thigh, bacon, mozzarella, gorgonzola, tomato, greens, garlic aioli, basil on ciabatta"
            />
            <MenuItem
              name="Cuban"
              price="$18"
              desc="Sweet & spicy pulled pork, ham, Swiss, sweet pickles, chipotle mustard"
            />
            <MenuItem
              name="Build Your Own Burger"
              price="$19"
              desc="Waseda Farms beef with greens, tomato, onion, choice of cheese. Add fried egg +$2, Add bacon +$3"
            />
            <MenuItem
              name="Seafood Lobster Roll"
              price="$21"
              desc="New England style roll with lobster, crab, white fish salad, spiced aioli, celery, fennel"
            />
            <MenuItem
              name="Caprese Sandwich"
              price="$20"
              desc="Tomato, basil, mozzarella, greens, balsamic reduction on GF cauliflower flatbread or sourdough. Add chicken +$7, Add prosciutto +$5"
            />
            <MenuItem
              name="Chicken Salad Croissant"
              price="$19"
              desc="Chicken breast with craisins on a bed of spring greens"
            />
            <MenuItem
              name="Philly Cheese Steak"
              price="$19"
              desc="Angus steak, provolone, sautéed peppers, onions, mushrooms on a brick fire bun"
            />
            <MenuItem
              name="Rueben Sandwich"
              price="$19"
              desc="Corned beef, aged Swiss, house thousand island, sauerkraut on grilled marbled rye"
            />
            <MenuItem
              name="Meatloaf Sandwich"
              price="$19"
              desc="Signature meatloaf on sourdough with caramelized onions and Swiss"
            />
          </MenuSection>

          {/* BISTRO PLATES */}
          <MenuSection title="Bistro Plates">
            <MenuItem
              name="Big Boo"
              price="$23"
              desc="Sliced chicken thigh, bacon, bow tie pasta, roasted peppers, broccoli in spicy white wine cream sauce"
              badges={[{ label: "Mild", type: "gf" }]}
            />
            <MenuItem
              name="Lobster & Seafood Mac & Cheese"
              price="$27"
              desc="Lobster, crab, whitefish in four-cheese cream sauce with Cavatappi pasta & asiago toast"
            />
            <MenuItem
              name="Ratatouille"
              price="$21"
              desc="Roasted eggplant, squash, red pepper, tomato with red wine tomato sauce, basil oil, greens"
              badges={[{ label: "GF", type: "gf" }, { label: "VG", type: "vg" }]}
            />
            <MenuItem
              name="Thai Peanut Sauté"
              price="$24"
              desc="Chicken breast, seasonal veggies, spinach in Thai peanut sauce with jasmine rice, green onion, toasted nuts"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Prosciutto Chicken LC"
              price="$28"
              desc="Chicken breast stuffed with mozzarella, spinach, mushrooms, prosciutto, bacon. Served with truffle cauliflower risotto, seasonal veg, white wine cream sauce, pistachios"
              badges={[{ label: "GF", type: "gf" }]}
            />
            <MenuItem
              name="Spaghetti Squash & Meatballs LC"
              price="$25"
              desc="Waseda Farms beef & pork meatballs, red wine tomato sauce over spaghetti squash in cream sauce with ricotta, basil, parmesan"
            />
          </MenuSection>
        </div>
      </section>

      {/* Visit / CTA Section — with wine glasses background */}
      <section id="visit" className="bg-wine-cta py-20 md:py-28 px-6 bg-[var(--burgundy)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-caveat text-[var(--gold)] text-2xl md:text-3xl mb-2">
            Join Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            We&apos;d Love to See You
          </h2>
          <p className="font-serif text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re planning a night out, a special celebration,
            or need catering for your next event, we&apos;re here to help.
            Contact us today to make a reservation or inquire about catering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:9204327286"
              className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--espresso)] px-8 py-4 rounded-md text-sm tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <PhoneIcon />
              Call (920) 432-7286
            </a>
            <a
              href="mailto:abravobistro@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-[var(--gold)] text-[var(--gold)] px-8 py-4 rounded-md text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition-colors"
            >
              <MailIcon />
              Email for Catering
            </a>
          </div>
          <div className="border-t border-[var(--gold)]/30 pt-8">
            <p className="font-serif text-white/60 text-sm">
              2069 Central Court #77 • Green Bay, WI 54311
            </p>
            <p className="font-serif text-[var(--gold)] text-sm mt-1">
              Dine In • Carry Out • GrubHub
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--espresso)] py-10 px-6 text-center">
        <p className="font-serif text-lg text-white/80 mb-3">
          á&apos;Bravo Bistro
        </p>
        <div className="ornament-divider max-w-[120px] mx-auto mb-3">
          <span className="ornament">⚜</span>
        </div>
        <p className="font-serif text-[var(--gold)] text-sm">
          Established 1999 • Bellevue, Wisconsin
        </p>
        <p className="mt-4 text-white/30 text-xs">
          © 2026 á&apos;Bravo Bistro. All rights reserved.
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
        <h3 className="font-serif text-lg text-[var(--burgundy)] uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="ornament-divider mb-6">
        <span className="ornament">❧</span>
      </div>
      {note && (
        <p className="font-serif text-xs italic text-[var(--espresso-light)]/50 mb-5">
          {note}
        </p>
      )}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">{children}</div>
    </div>
  );
}

interface Badge {
  label: string;
  type: "v" | "gf" | "vg";
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
    <div className="flex justify-between items-start gap-4">
      <div>
        <p className="font-serif font-semibold text-[var(--espresso-light)]">
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
        <p className="font-serif text-sm text-[var(--espresso-light)]/55 mt-0.5 leading-relaxed">
          {desc}
        </p>
      </div>
      <span className="font-serif text-[var(--burgundy)] whitespace-nowrap font-semibold">
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
