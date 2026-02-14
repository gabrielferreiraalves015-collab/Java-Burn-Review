import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X, Check, Flame, Battery, Brain, Scale, Coffee, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/CtaButton";
import { Section, SectionHeader } from "@/components/Section";
import { ReviewCard } from "@/components/ReviewCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Sub-components for specific sections ---

const BenefitItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <motion.li 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
  >
    <div className="mt-1 bg-green-100 p-2 rounded-full">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <span className="text-lg font-medium text-gray-800">{text}</span>
  </motion.li>
);

const IngredientItem = ({ name, desc }: { name: string, desc: string }) => (
  <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <h3 className="text-[#002B5C] text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const ComparisonRow = ({ label, javaBurn, generic }: { label: string, javaBurn: boolean, generic: boolean }) => (
  <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 last:border-0 items-center">
    <div className="font-semibold text-gray-700">{label}</div>
    <div className="flex justify-center">
      {javaBurn ? (
        <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-50" />
      ) : (
        <AlertCircle className="w-6 h-6 text-yellow-500" />
      )}
    </div>
    <div className="flex justify-center">
      {generic ? (
        <CheckCircle2 className="w-6 h-6 text-green-500" />
      ) : (
        <div className="flex items-center gap-1 text-gray-400">
          {generic === false ? <X className="w-6 h-6 text-red-400" /> : <AlertCircle className="w-6 h-6 text-yellow-500" />}
        </div>
      )}
    </div>
  </div>
);

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333] text-xl">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="text-left">
            <div className="inline-block px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider bg-[#ffffff] text-[#000000b0]">Updated 2026 Analysis</div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-[1.1] mb-6 font-display">
              Java Burn Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Everything you need to know before deciding if this is the right supplement for you.
            </p>
            <CtaButton size="xl" location="hero" text="Order Now" />
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Official Site verified and secure
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative z-10 w-full max-w-lg aspect-[800/701] rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src="https://javaburnn-coffee.com/assets/images/java-burn-coffee.jpg-800x701.jpg" 
                alt="Java Burn Product" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="mt-6 w-full max-w-md">
              <img 
                src="https://javaburnn-coffee.com/assets/images/certified-2024x296.png" 
                alt="Certified" 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFD814]/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
      {/* 2. DOES IT WORK? */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <SectionHeader 
              title="Does Java Burn Really Work?" 
              center={false}
              subtitle="A scientific approach to metabolism"
            />
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The short answer is: <strong>Yes, for most people.</strong> The mechanism of Java Burn is based on simple but effective science: <span className="text-[#002B5C] font-bold">nutritional thermogenesis</span>.
              </p>
              <p>
                Unlike hard-to-swallow pills, Java Burn is a tasteless powder that dissolves instantly in your coffee. The formula was specifically designed to interact with caffeine.
              </p>
              <div className="bg-white p-6 border-l-4 border-[#FFD814] shadow-sm rounded-r-xl">
                <p className="italic font-medium text-gray-800">
                  "The active ingredients 'hitch a ride' on the absorption speed of coffee, creating a metabolic window where your body burns fat more efficiently throughout the day."
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Flame className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-1">Accelerates</h3>
              <p className="text-sm text-gray-500">Basal Metabolism</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Battery className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-1">Energy</h3>
              <p className="text-sm text-gray-500">All day without crash</p>
            </div>
          </div>
        </div>
      </Section>
      {/* 3. BENEFITS */}
      <Section>
        <SectionHeader 
          title="Key Benefits" 
          subtitle="What you can expect with daily use" 
          className="bg-[#064e3b] text-white p-8 rounded-t-xl mb-0"
        />
        <div className="bg-white p-8 border-x border-b border-gray-100 rounded-b-xl">
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <BenefitItem icon={Flame} text="Supports metabolism and accelerates fat burning" />
            <BenefitItem icon={Battery} text="Sustained energy without a sharp drop" />
            <BenefitItem icon={Scale} text="Reduces cravings and helps in appetite control" />
            <BenefitItem icon={Coffee} text="Simple mix in coffee (tasteless)" />
            <BenefitItem icon={Brain} text="Can support focus and mental clarity" />
            <BenefitItem icon={CheckCircle2} text="100% natural and safe ingredients" />
            <BenefitItem icon={ShieldCheck} text="Can stabilize blood sugar" />
          </ul>
          <div className="mt-12 text-center">
            <CtaButton text="Get it today with discount" location="benefits" />
          </div>
        </div>
      </Section>
      {/* 4. HOW IT WORKS -> Moved and renamed to HOW TO USE */}
      {/* 5. INGREDIENTS */}
      <Section>
        <SectionHeader title="Powerful Ingredients" subtitle="Technical proof of effectiveness" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IngredientItem name="Chromium" desc="Essential for regulating blood sugar and drastically reducing sweet cravings." />
          <IngredientItem name="L-Carnitine" desc="Helps transport fatty acids into cells to be burned as energy." />
          <IngredientItem name="L-Theanine" desc="Amino acid that neutralizes caffeine jitters, promoting calm focus." />
          <IngredientItem name="Vitamin B6 + B12" desc="Essential B complex to keep energy metabolism active all day." />
          <IngredientItem name="Green Tea Extract" desc="Rich in EGCG, a potent antioxidant known for thermogenic effects." />
          <IngredientItem name="Chlorogenic Acid" desc="Compound found in green coffee that helps reduce carbohydrate absorption." />
        </div>
      </Section>
      {/* 6. SIDE EFFECTS */}
      <Section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-white p-4 rounded-full shadow-sm mx-auto md:mx-0">
            <AlertCircle className="w-12 h-12 text-amber-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Possible Side Effects (Transparency)</h2>
            <div className="space-y-4 text-gray-700">
              <p>Java Burn is formulated with natural ingredients, but we value total transparency:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>May cause slight jitters if taken on an empty stomach by very sensitive individuals.</li>
                <li>As it enhances caffeine, avoid taking it late in the day to not disturb sleep.</li>
                <li>Some people report mild gastrointestinal discomfort in the first few days of adaptation.</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4 italic">Note: Results vary and depend on habits and individual sensitivity.</p>
            </div>
          </div>
        </div>
      </Section>
      {/* HOW TO USE (formerly HOW IT WORKS) */}
      <Section className="bg-white">
        <SectionHeader title="How To Use" subtitle="Simple, Fast and Effective" center={true} />
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0" />
          
          {[
            { step: "01", title: "Mix", desc: "Add one Java Burn sachet to your morning coffee." },
            { step: "02", title: "Activate", desc: "The formula dissolves instantly and is tasteless." },
            { step: "03", title: "Accelerate", desc: "Your metabolism enters fat-burning mode." },
            { step: "04", title: "Burn", desc: "Enjoy energy all day while your body works." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white text-black rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-[#FFD814]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#002B5C]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      {/* 7. PROS & CONS */}
      <Section>
        <SectionHeader title="Pros and Cons" subtitle="A balanced view" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" /> Pros
            </h3>
            <ul className="space-y-4">
              {["Instant coffee mix", "100% natural ingredients", "Real metabolism support", "Can significantly reduce appetite", "Sustained energy without crash", "Totally tasteless formula"].map((pro, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <X className="w-8 h-8" /> Cons
            </h3>
            <ul className="space-y-4">
              {[
                { text: "Available only on the official website", highlight: true },
                { text: "May take a few weeks to notice visible effect", highlight: false },
                { text: "Requires daily coffee consumption for best effect", highlight: false },
                { text: "Frequent limited stocks", highlight: false }
              ].map((con, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span className={cn("text-gray-700", con.highlight && "font-medium text-red-900")}>{con.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      {/* 8. COMPARISON TABLE */}
      <Section className="bg-slate-50">
        <SectionHeader title="Comparison" center={true} />
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
          <div className="grid grid-cols-3 text-white py-6 text-center font-bold text-lg md:text-xl bg-[#24272bde]">
            <div className="flex items-center justify-center pl-4 text-left md:text-center text-sm md:text-lg">Criterion</div>
            <div className="flex flex-col items-center justify-center">
              <span>Java Burn</span>
              <div className="h-1 w-12 bg-[#FFD814] rounded mt-1"></div>
            </div>
            <div className="flex flex-col items-center justify-center opacity-70">
              <span className="text-sm md:text-lg">Others</span>
              <span className="text-xs font-normal">Generics</span>
            </div>
          </div>
          <div className="p-2 md:p-6">
            <ComparisonRow label="Mix in coffee" javaBurn={true} generic={false} />
            <ComparisonRow label="Natural Formula" javaBurn={true} generic={false} />
            <ComparisonRow label="Sustained Energy" javaBurn={true} generic={false} />
            <ComparisonRow label="Mental Focus" javaBurn={true} generic={false} />
            <ComparisonRow label="60-Day Guarantee" javaBurn={true} generic={false} />
          </div>
        </div>
      </Section>
      {/* 9. REVIEWS */}
      <Section className="bg-white">
        <SectionHeader 
          title="What do customers say?" 
          subtitle="Based on real reports" 
          center={true} 
          className="bg-[#064e3b] text-white p-8 rounded-t-xl mb-0"
        />
        <div className="bg-white p-8 border-x border-b border-gray-100 rounded-b-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              name="Sarah M." 
              location="New York, NY" 
              content="I was skeptical, but after 3 weeks, my pants are falling off. The energy is amazing, I don't feel that post-lunch slump."
            />
            <ReviewCard 
              name="John D." 
              location="Chicago, IL" 
              content="The best part is it doesn't change the taste of coffee. I lost weight without having to change my entire routine. It simply works."
            />
            <ReviewCard 
              name="Emily R." 
              location="Austin, TX" 
              content="I feel my focus much better at work. It's like my coffee got an upgrade. Strongly recommend."
            />
          </div>
        </div>
      </Section>
      {/* 10. OFFER SPECIAL */}
      <Section>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-16 text-center border border-yellow-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD814] blur-3xl opacity-20 rounded-full" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-display">
            Limited Special Offer
          </h2>
          
          <div className="max-w-4xl mx-auto mb-10">
            <img 
              src="https://javaburnn-coffee.com/assets/images/java-burn-coffee-price.jpg-1140x856.jpg" 
              alt="Java Burn Offers" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <CtaButton size="xl" text="Choose your official discount offer" location="pricing" />

          <div className="max-w-2xl mx-auto mt-10 bg-orange-100 border-2 border-black p-6 rounded-xl text-left">
            <p className="text-lg font-bold text-black text-center">
              <span className="text-red-600">ATTENTION:</span> Java Burn stocks are limited. Secure your reserved product now before the discount expires!
            </p>
          </div>
        </div>
      </Section>
      {/* 11. GUARANTEE */}
      <Section className="bg-black text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="mb-8 w-48 h-48">
            <img 
              src="https://javaburnn-coffee.com/assets/images/satisfaction-guaranteed-600x608.png" 
              alt="Satisfaction Guaranteed" 
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="font-bold mb-6 font-display text-[#ffffff] text-[39px]">Java Burn™ 60-Day Money Back Guarantee</h3>
          <div className="text-lg leading-relaxed mb-10 space-y-4 max-w-2xl">
            <p>
              The Java Burn supplement will be available for you to test for two months. If you are among the 0.5% who are not satisfied, you can request a FULL refund.
            </p>
            <p className="font-medium text-blue-200">
              Consider this a trial period if things don't go as expected. Java Burn can work. If it doesn't, you can ask for your money back.
            </p>
          </div>
          <CtaButton size="xl" text=">> Grab your bottle and see for yourself" location="guarantee" />
        </div>
      </Section>
      {/* 12. FAQ */}
      <Section className="bg-slate-50">
        <SectionHeader 
          title="Frequently Asked Questions" 
          center={true} 
          className="bg-black text-white p-8 rounded-t-xl mb-0"
        />
        <div className="bg-white p-8 border-x border-b border-gray-100 rounded-b-xl max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "What is Java Burn?", a: "Java Burn is a natural, tasteless powder supplement designed to be mixed into coffee. It contains ingredients that, synergistically with caffeine, accelerate metabolism." },
              { q: "How should I use it?", a: "Simply mix one sachet into your morning coffee. It dissolves instantly and does not change the flavor of the drink." },
              { q: "Is it safe?", a: "Yes, it is 100% natural, vegetarian, gluten-free, and produced in FDA-approved facilities in the USA under strict sterility standards." },
              { q: "When will I see results?", a: "Many users report more energy on the first day. Weight changes are usually noticed after 3-4 weeks of consistent use." },
              { q: "Where to buy the original?", a: "Authentic Java Burn is sold ONLY through the official website. Avoid Amazon or eBay to not buy counterfeits." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-gray-800 hover:text-[#002B5C] hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      {/* NEW SECTION: AFTER FAQ */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="What happens after I click the 'Buy Now' button on Java Burn Coffee?" 
            className="bg-red-700 text-white p-8 rounded-t-xl mb-0"
          />
          <div className="bg-white p-8 border-x border-b border-gray-100 rounded-b-xl mb-12">
            <p className="text-lg text-gray-700 mb-8">
              After clicking the “Buy Now” button, right below this text, you will be redirected to the secure payment page. Simply enter your information and you will have immediate access to Java Burn coffee.
            </p>
            <div className="max-w-sm mx-auto mb-12">
              <img 
                src="https://javaburnn-coffee.com/assets/images/javaburncoffee-secure-payment.jpg-614x820.jpg" 
                alt="Secure Payment" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <div className="text-left space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-bold mb-3">Is this a one-time payment?</h3>
                <p>
                  Yes. Java Burn coffee product is a one-time transaction processed by our trusted payment partner, Clickbank. Payment is secure and uses the same encryption technology as Clickbank and online banks. You will never be charged for anything beyond your consent and there are absolutely no hidden costs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Java Burn coffee prices and how to buy</h3>
                <p className="mb-4">Java Burn is available only on its official website.</p>
                <ul className="list-disc pl-5 space-y-2 font-medium">
                  <li>Java Burn Coffee 1 Bottle Pack: $59 + shipping.</li>
                  <li>Java Burn Coffee 3 Bottle Pack: $49 + free and fast shipping.</li>
                  <li>Java Burn Coffee 6 Bottle Pack: $39 + free and fast shipping.</li>
                </ul>
                <p className="mt-4">
                  There may be a small shipping fee for Java Burn bottle orders. The company offers a 90-day satisfaction guarantee. So, if Java Burn doesn't meet your expectations, you can request a full refund. Java Burn dietary supplement is a safe investment for a healthy life.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">How secure is my credit card information on your site?</h3>
                <p>
                  Your online privacy is one of our top priorities, so don't worry about losing sensitive information when placing your Java Burn coffee order with us. Additionally, you can trust Clickbank's excellent reputation and vast experience in online transactions to ensure the security of your purchase.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-3">Refund Policy:</h3>
                <p>
                  If, within the first 60 days after receiving, you are not satisfied with JavaBurn Coffee, you can request a refund by sending an email to the address provided inside the product packaging and we will immediately refund your full purchase amount, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* FINAL CTA SECTION */}
      <Section className="bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 font-display text-white">Don't wait any longer! Order your discounted bottle of Java Burn now!</h2>
          <div className="max-w-xl mx-auto mb-10">
            <img 
              src="https://javaburnn-coffee.com/assets/images/javaburncoffee-best-price.png-1241x1156.png" 
              alt="Best Price Offer" 
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4 mb-10">
            <p className="text-xl line-through opacity-60">Regular Java Burn price: $197 per bottle</p>
            <p className="text-4xl font-black text-[#FFD814]">Only: $49 per bottle</p>
          </div>
          <CtaButton size="xl" text="REDEEM YOUR DISCOUNTS NOW" location="final_cta" />
        </div>
      </Section>
      {/* 13. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <h4 className="text-white font-bold text-xl mb-4 font-display">Java Burn Review</h4>
              <p className="text-sm leading-relaxed max-w-sm">
                Our mission is to provide honest and detailed reviews to help you make informed decisions about your health and well-being.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Benefits</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Buy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Disclaimer</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-xs text-center leading-relaxed opacity-60">
            <p className="mb-4">
              FDA Disclaimer: The statements made on this website have not been evaluated by the Food and Drug Administration. The products showed are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Java Burn Reviews. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
