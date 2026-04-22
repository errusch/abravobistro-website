import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-burgundy tracking-wide">
            á’Bravo
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <Link href="#about" className="hover:text-burgundy transition-colors">About</Link>
            <Link href="#menu" className="hover:text-burgundy transition-colors">Menu</Link>
            <Link href="#visit" className="hover:text-burgundy transition-colors">Visit</Link>
            <Link
              href="tel:9204327286"
              className="bg-burgundy text-cream px-5 py-2 hover:bg-espresso transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-handwritten text-gold text-3xl md:text-4xl mb-4">
            Established 1999
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-burgundy leading-tight mb-6">
            á’Bravo Bistro
          </h1>
          <p className="text-lg md:text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Sophisticated comfort food with a shabby-chic décor in the heart of Bellevue.
            Primal dining, gluten-free options, daily features, and an award-winning wine list.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#menu"
              className="inline-block bg-burgundy text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-espresso transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="tel:9204327286"
              className="inline-block border-2 border-burgundy text-burgundy px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-burgundy hover:text-cream transition-colors"
            >
              Call to Reserve
            </Link>
          </div>
        </div>
        {/* Decorative line */}
        <div className="max-w-xs mx-auto mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gold/40"></div>
          <div className="w-2 h-2 rotate-45 bg-gold"></div>
          <div className="flex-1 h-px bg-gold/40"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 px-6 bg-taupe/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="font-handwritten text-gold text-2xl mb-2">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-6">
              Where Comfort Meets Sophistication
            </h2>
            <div className="space-y-4 text-espresso/80 leading-relaxed">
              <p>
                á’Bravo opened in 1999 as a small, upscale deli with an emphasis on catering.
                As we grew with our community, we expanded into a larger restaurant with a
                shabby-chic décor that feels like home—only better.
              </p>
              <p>
                We offer a large variety of sophisticated comfort food with many primal dining
                and gluten-free options, as well as daily features to please any palate.
                Our dinner entrées change to complement the season, individual tastes, and
                to fully utilize locally grown products.
              </p>
              <p>
                Our full-service bar includes an extensive cocktail menu. Our wine list is
                unique—we focus on intriguing, value-minded wines that are new, exciting,
                and not readily available.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-10 pt-8 border-t border-gold/30">
              <p className="font-handwritten text-gold text-xl mb-4">Awards & Recognition</p>
              <div className="grid grid-cols-2 gap-3 text-sm text-espresso/70">
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Golden Fork — Best Sandwich</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Golden Fork — Best Salad</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Golden Fork — Best Café</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Best Dine-in Deli</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Best Ambiance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Runner-up — Best Wine List</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Chamber of Commerce — Best Appetizer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">★</span>
                  <span>Taste of the Town — Best Entrée, Appetizer & Dessert</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-burgundy/5 border border-gold/20 p-8 md:p-12">
            <p className="font-handwritten text-gold text-2xl mb-4">Hours</p>
            <div className="space-y-3 text-espresso/80">
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
            <p className="mt-6 text-sm text-espresso/60 italic">
              Lunch served daily 11:00 AM – 4:00 PM
            </p>
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="font-handwritten text-gold text-xl mb-2">Location</p>
              <p className="text-espresso/80">
                2069 Central Court #77<br />
                Green Bay, WI 54311
              </p>
              <p className="mt-2 text-espresso/80">
                <a href="tel:9204327286" className="hover:text-burgundy transition-colors">
                  (920) 432-7286
                </a>
              </p>
              <p className="mt-1 text-sm text-espresso/60">
                Dine In, Carry Out, or GrubHub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-handwritten text-gold text-2xl md:text-3xl mb-2">Lunch Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl text-burgundy mb-4">
              Served Daily 11 AM – 4 PM
            </h2>
            <p className="text-espresso/60 text-sm tracking-wide uppercase">
              Substitute GF Cauliflower flatbread for hummus — additional $2
            </p>
          </div>

          {/* Snacks & Shares */}
          <div className="mb-14">
            <h3 className="font-serif text-2xl text-burgundy border-b border-gold/30 pb-3 mb-6">
              Snacks & Shares
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {[
                { name: "Brussel Sprouts", desc: "Pan-seared with bacon, caramelized onion, herbs, parmesan, panko, & apple cider vinegar", price: "18" },
                { name: "Burrata", desc: "With lemon oil, red wine vinaigrette, arugula, roasted tomato, & grilled crostini", price: "18", note: "Vegetarian" },
                { name: "House Made Seasonal Hummus", desc: "Served with toasted crostini, vegetables, & candied walnuts", price: "17", note: "Vegetarian, Vegan" },
                { name: "B.Y.O Pizza", desc: "Cauliflower crust with choice of seasonal veggies, meatballs, pepperoni, & red/white sauce", price: "23", note: "Gluten-Free" },
                { name: "Ahi Tuna", desc: "Seasonal preparation (ask server for details)", price: "28", note: "Gluten-Free" },
                { name: "Spinach Artichoke Dip", desc: "House-made, served warm with Naan bread", price: "18" },
                { name: "Crab Stuffed Mushrooms", desc: "Cremini mushrooms with four-cheese crab blend, baked, topped with asiago", price: "18" },
                { name: "Cauliflower Bites", desc: "Air-fried with choice of sauce", price: "15" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-medium text-espresso">
                      {item.name}
                      {item.note && (
                        <span className="text-xs text-gold ml-2 font-normal">({item.note})</span>
                      )}
                    </p>
                    <p className="text-sm text-espresso/60 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-serif text-burgundy whitespace-nowrap">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soups & Salads */}
          <div className="mb-14">
            <h3 className="font-serif text-2xl text-burgundy border-b border-gold/30 pb-3 mb-6">
              Soups & Salads
            </h3>
            <p className="text-sm text-espresso/60 mb-4 italic">
              Add Protein: Chicken +$7 | Shrimp +$9 | Salmon +$10 | Seared Tuna +$11
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {[
                { name: "Three Cheese Mushroom Soup", desc: "Cup $8 / Bowl $12 / Quart $20", price: "8", note: "Gluten-Free" },
                { name: "Soup Of The Day", desc: "Cup $7 / Bowl $10 / Quart $18", price: "7" },
                { name: "Turkey Pesto Pasta", desc: "Roasted turkey, cranberries, red onion, pesto aioli, bow tie pasta, parmesan", price: "18" },
                { name: "Caramelized Sweet Potato Salad", desc: "Roasted sweet potatoes, spring greens, mozzarella, olives, parmesan, honey balsamic vinaigrette", price: "18", note: "GF, Vegetarian" },
                { name: "Rustic Lovers Salad", desc: "House roasted turkey, parmesan, bacon, cranberries, onion, pistachio greens, spinach, peppercorn dressing", price: "20", note: "GF" },
                { name: "Shrimp & Vegetable Noodle Bowl", desc: "Shrimp in spicy chicken broth with veggie noodles, sesame, lime", price: "24", note: "GF, Mild, Dairy-Free" },
                { name: "Mandarin Seared Tuna Salad", desc: "Seared tuna on spinach with mandarin oranges, zucchini, peppers, citrus glaze, sesame", price: "26", note: "GF" },
                { name: "Black & Bleu Salad", desc: "Blackened sirloin, mixed greens, bell peppers, onion, bleu cheese crumbles & dressing", price: "23" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-medium text-espresso">
                      {item.name}
                      {item.note && (
                        <span className="text-xs text-gold ml-2 font-normal">({item.note})</span>
                      )}
                    </p>
                    <p className="text-sm text-espresso/60 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-serif text-burgundy whitespace-nowrap">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sandwiches */}
          <div className="mb-14">
            <h3 className="font-serif text-2xl text-burgundy border-b border-gold/30 pb-3 mb-6">
              Sandwiches
            </h3>
            <p className="text-sm text-espresso/60 mb-4 italic">
              Served with kettle chips, roasted potatoes, fresh fruit, or cucumber & onion salad.
              Substitute cauliflower flatbread +$4. Can be made Gluten-Free.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {[
                { name: "Turkey Club Wrap", desc: "Shaved turkey, greens, onion, tomato, bacon, cheddar, cranberry mustard mayo on herb wrap", price: "18" },
                { name: "Tuscany", desc: "Crispy chicken thigh, bacon, mozzarella, gorgonzola, tomato, greens, garlic aioli, basil on ciabatta", price: "19" },
                { name: "Cuban", desc: "Sweet & spicy pulled pork, ham, Swiss, sweet pickles, chipotle mustard", price: "18" },
                { name: "Build Your Own Burger", desc: "Waseda Farms beef with greens, tomato, onion, choice of cheese. Add fried egg +$2, Add bacon +$3", price: "19" },
                { name: "Seafood Lobster Roll", desc: "New England style roll with lobster, crab, white fish salad, spiced aioli, celery, fennel", price: "21" },
                { name: "Caprese Sandwich", desc: "Tomato, basil, mozzarella, greens, balsamic reduction on GF cauliflower flatbread or sourdough. Add chicken +$7, Add prosciutto +$5", price: "20" },
                { name: "Chicken Salad Croissant", desc: "Chicken breast with craisins on a bed of spring greens", price: "19" },
                { name: "Philly Cheese Steak", desc: "Angus steak, provolone, sautéed peppers, onions, mushrooms on a brick fire bun", price: "19" },
                { name: "Rueben Sandwich", desc: "Corned beef, aged Swiss, house thousand island, sauerkraut on grilled marbled rye", price: "19" },
                { name: "Meatloaf Sandwich", desc: "Signature meatloaf on sourdough with caramelized onions and Swiss", price: "19" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-medium text-espresso">{item.name}</p>
                    <p className="text-sm text-espresso/60 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-serif text-burgundy whitespace-nowrap">${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bistro Plates */}
          <div>
            <h3 className="font-serif text-2xl text-burgundy border-b border-gold/30 pb-3 mb-6">
              Bistro Plates
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {[
                { name: "Big Boo", desc: "Sliced chicken thigh, bacon, bow tie pasta, roasted peppers, broccoli in spicy white wine cream sauce", price: "23", note: "Mild" },
                { name: "Lobster & Seafood Mac & Cheese", desc: "Lobster, crab, whitefish in four-cheese cream sauce with Cavatappi pasta & asiago toast", price: "27" },
                { name: "Ratatouille", desc: "Roasted eggplant, squash, red pepper, tomato with red wine tomato sauce, basil oil, greens", price: "21", note: "GF, Vegan" },
                { name: "Thai Peanut Sauté", desc: "Chicken breast, seasonal veggies, spinach in Thai peanut sauce with jasmine rice, green onion, toasted nuts", price: "24", note: "GF, Dairy-Free" },
                { name: "Prosciutto Chicken LC", desc: "Chicken breast stuffed with mozzarella, spinach, mushrooms, prosciutto, bacon. Served with truffle cauliflower risotto, seasonal veg, white wine cream sauce, pistachios", price: "28", note: "GF" },
                { name: "Spaghetti Squash & Meatballs LC", desc: "Waseda Farms beef & pork meatballs, red wine tomato sauce over spaghetti squash in cream sauce with ricotta, basil, parmesan", price: "25" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-medium text-espresso">
                      {item.name}
                      {item.note && (
                        <span className="text-xs text-gold ml-2 font-normal">({item.note})</span>
                      )}
                    </p>
                    <p className="text-sm text-espresso/60 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="font-serif text-burgundy whitespace-nowrap">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-20 md:py-28 px-6 bg-burgundy text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-handwritten text-gold text-2xl md:text-3xl mb-2">Join Us</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">We’d Love to See You</h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Reservations are taken over the phone. Email or online reservations may not be accepted.
            For catering inquiries, please email us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:9204327286"
              className="inline-block bg-gold text-espresso px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-cream transition-colors"
            >
              Call (920) 432-7286
            </a>
            <a
              href="mailto:abravobistro@gmail.com"
              className="inline-block border-2 border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gold hover:text-espresso transition-colors"
            >
              Email for Catering
            </a>
          </div>
          <div className="border-t border-gold/30 pt-10">
            <p className="text-cream/60 text-sm">
              2069 Central Court #77 • Green Bay, WI 54311
            </p>
            <p className="text-cream/60 text-sm mt-1">
              Dine In • Carry Out • GrubHub
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-cream/50 py-10 px-6 text-center text-sm">
        <p className="font-serif text-lg text-cream/80 mb-2">á’Bravo Bistro</p>
        <p>Established 1999 • Bellevue, Wisconsin</p>
        <p className="mt-4 text-cream/30">
          © {new Date().getFullYear()} á’Bravo Bistro. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
