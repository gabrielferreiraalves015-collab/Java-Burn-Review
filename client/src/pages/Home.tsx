import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X, Check, Flame, Battery, Brain, Scale, Coffee, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { useTrackEvent } from "@/hooks/use-analytics";
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
  const { mutate: track } = useTrackEvent();

  useEffect(() => {
    track({ event_type: "view", location: "home" });
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="text-left">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
              Análise 2024 Atualizada
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-[1.1] mb-6 font-display">
              Review Java Burn <br />
              <span className="text-[#002B5C]">Análise Completa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Tudo que você precisa saber antes de decidir se este é o suplemento certo para você.
            </p>
            <CtaButton size="xl" location="hero" />
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Site Oficial verificado e seguro
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Descriptive alt text for accessibility and fallback */}
            <div className="relative z-10 w-full max-w-md aspect-square rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              <img src="/images/hero-coffee.png" alt="Java Burn Product" className="w-full h-full object-cover" />
              
              {/* Badge Overlay */}
              <div className="absolute -top-6 -right-6 bg-[#002B5C] text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-center shadow-lg rotate-12 border-4 border-white">
                <span className="text-sm leading-tight">100%<br/>Natural</span>
              </div>
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
              title="Java Burn Realmente Funciona?" 
              center={false}
              subtitle="Uma abordagem científica para o metabolismo"
            />
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A resposta curta é: <strong>Sim, para a maioria das pessoas.</strong> O mecanismo do Java Burn é baseado em uma ciência simples, mas eficaz: a <span className="text-[#002B5C] font-bold">termogênese nutricional</span>.
              </p>
              <p>
                Ao contrário de pílulas difíceis de engolir, o Java Burn é um pó sem sabor que se dissolve instantaneamente no seu café. A fórmula foi desenhada especificamente para interagir com a cafeína.
              </p>
              <div className="bg-white p-6 border-l-4 border-[#FFD814] shadow-sm rounded-r-xl">
                <p className="italic font-medium text-gray-800">
                  "Os ingredientes ativos 'pegam carona' na velocidade de absorção do café, criando uma janela metabólica onde seu corpo queima gordura de forma mais eficiente durante o dia."
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Flame className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-1">Acelera</h3>
              <p className="text-sm text-gray-500">O Metabolismo basal</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Battery className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-1">Energia</h3>
              <p className="text-sm text-gray-500">O dia todo sem crash</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. BENEFITS */}
      <Section>
        <SectionHeader title="Principais Benefícios" subtitle="O que você pode esperar ao usar diariamente" />
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <BenefitItem icon={Flame} text="Apoia metabolismo e acelera queima de gordura" />
          <BenefitItem icon={Battery} text="Energia sustentada sem queda brusca" />
          <BenefitItem icon={Scale} text="Reduz desejos e ajuda no controle do apetite" />
          <BenefitItem icon={Coffee} text="Mistura simples no café (sem sabor/tasteless)" />
          <BenefitItem icon={Brain} text="Pode apoiar foco e clareza mental" />
          <BenefitItem icon={CheckCircle2} text="Ingredientes 100% naturais e seguros" />
          <BenefitItem icon={ShieldCheck} text="Pode estabilizar açúcar no sangue" />
        </ul>
        <div className="mt-12 text-center">
          <CtaButton text="Ver todos os benefícios no site" location="benefits" />
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section className="bg-[#002B5C] text-white">
        <SectionHeader title="Como Funciona" subtitle="Simples, Rápido e Eficaz" center={true} />
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20 -z-0" />
          
          {[
            { step: "01", title: "Misture", desc: "Adicione um sachê de Java Burn ao seu café matinal." },
            { step: "02", title: "Ative", desc: "A fórmula se dissolve instantaneamente e sem sabor." },
            { step: "03", title: "Acelere", desc: "Seu metabolismo entra em modo de queima de gordura." },
            { step: "04", title: "Queime", desc: "Desfrute de energia o dia todo enquanto seu corpo trabalha." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white text-[#002B5C] rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-[#FFD814]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD814]">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. INGREDIENTS */}
      <Section>
        <SectionHeader title="Ingredientes Poderosos" subtitle="Prova técnica da eficácia" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IngredientItem name="Chromium" desc="Essencial para regular o açúcar no sangue e reduzir drasticamente os desejos por doces." />
          <IngredientItem name="L-Carnitine" desc="Ajuda a transportar ácidos graxos para as células serem queimados como energia." />
          <IngredientItem name="L-Theanine" desc="Aminoácido que neutraliza o nervosismo da cafeína, promovendo foco calmo." />
          <IngredientItem name="Vitamina B6 + B12" desc="Complexo B essencial para manter o metabolismo energético ativo o dia todo." />
          <IngredientItem name="Green Tea Extract" desc="Rico em EGCG, um antioxidante potente conhecido por efeitos termogênicos." />
          <IngredientItem name="Chlorogenic Acid" desc="Composto encontrado no café verde que ajuda a reduzir a absorção de carboidratos." />
        </div>
      </Section>

      {/* 6. SIDE EFFECTS */}
      <Section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-white p-4 rounded-full shadow-sm mx-auto md:mx-0">
            <AlertCircle className="w-12 h-12 text-amber-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Possíveis Efeitos Colaterais (Transparência)</h2>
            <div className="space-y-4 text-gray-700">
              <p>O Java Burn é formulado com ingredientes naturais, mas prezamos pela transparência total:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pode causar leve agitação se tomado em jejum por pessoas muito sensíveis.</li>
                <li>Como potencializa a cafeína, evite tomar tarde do dia para não atrapalhar o sono.</li>
                <li>Algumas pessoas relatam leve desconforto gastrointestinal nos primeiros dias de adaptação.</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4 italic">Nota: Resultados variam e dependem de hábitos e sensibilidade individual.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. PROS & CONS */}
      <Section>
        <SectionHeader title="Prós e Contras" subtitle="Uma visão equilibrada" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" /> Prós
            </h3>
            <ul className="space-y-4">
              {["Mistura instantânea no café", "Ingredientes 100% naturais", "Suporte real ao metabolismo", "Pode reduzir o apetite significativamente", "Energia sustentada sem crash", "Fórmula totalmente sem sabor"].map((pro, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <X className="w-8 h-8" /> Contras
            </h3>
            <ul className="space-y-4">
              {[
                { text: "Disponível apenas no site oficial", highlight: true },
                { text: "Pode demorar algumas semanas para notar efeito visível", highlight: false },
                { text: "Requer consumo diário de café para melhor efeito", highlight: false },
                { text: "Estoques limitados frequentes", highlight: false }
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
        <SectionHeader title="Comparativo" center={true} />
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
          <div className="grid grid-cols-3 bg-[#002B5C] text-white py-6 text-center font-bold text-lg md:text-xl">
            <div className="flex items-center justify-center pl-4 text-left md:text-center text-sm md:text-lg">Critério</div>
            <div className="flex flex-col items-center justify-center">
              <span>Java Burn</span>
              <div className="h-1 w-12 bg-[#FFD814] rounded mt-1"></div>
            </div>
            <div className="flex flex-col items-center justify-center opacity-70">
              <span className="text-sm md:text-lg">Outros</span>
              <span className="text-xs font-normal">Genéricos</span>
            </div>
          </div>
          <div className="p-2 md:p-6">
            <ComparisonRow label="Mistura no café" javaBurn={true} generic={false} />
            <ComparisonRow label="Fórmula Natural" javaBurn={true} generic={false} />
            <ComparisonRow label="Energia Sustentada" javaBurn={true} generic={false} />
            <ComparisonRow label="Foco Mental" javaBurn={true} generic={false} />
            <ComparisonRow label="Garantia de 60 Dias" javaBurn={true} generic={false} />
          </div>
        </div>
      </Section>

      {/* 9. REVIEWS */}
      <Section dark className="bg-[#002B5C]">
        <SectionHeader title="O que dizem os clientes?" subtitle="Baseado em relatos reais" center={true} />
        <div className="grid md:grid-cols-3 gap-8">
          <ReviewCard 
            name="Sarah M." 
            location="New York, NY" 
            content="Eu estava cética, mas depois de 3 semanas, minhas calças estão caindo. A energia é incrível, não sinto aquela moleza depois do almoço."
          />
          <ReviewCard 
            name="John D." 
            location="Chicago, IL" 
            content="A melhor parte é que não muda o gosto do café. Perdi peso sem ter que mudar minha rotina inteira. Simplesmente funciona."
          />
          <ReviewCard 
            name="Emily R." 
            location="Austin, TX" 
            content="Sinto meu foco muito melhor no trabalho. É como se meu café tivesse recebido um upgrade. Recomendo fortemente."
          />
        </div>
      </Section>

      {/* 10. OFFER SPECIAL */}
      <Section>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-16 text-center border border-yellow-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD814] blur-3xl opacity-20 rounded-full" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-display">
            Oferta Especial Limitada
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aproveite os pacotes com <span className="text-green-600 font-bold bg-green-100 px-2 rounded">Frete Grátis</span> e descontos exclusivos para novos clientes.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full md:w-64">
              <div className="text-gray-500 font-bold mb-2">1 Pacote</div>
              <div className="text-3xl font-extrabold">$69<span className="text-sm font-normal">/cada</span></div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#FFD814] shadow-lg transform md:-translate-y-4 w-full md:w-64 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD814] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Popular</div>
              <div className="text-gray-800 font-bold mb-2">3 Pacotes</div>
              <div className="text-3xl font-extrabold">$49<span className="text-sm font-normal">/cada</span></div>
              <div className="text-green-600 text-sm mt-2 font-bold">Economize $444</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full md:w-64">
              <div className="text-gray-500 font-bold mb-2">6 Pacotes</div>
              <div className="text-3xl font-extrabold">$39<span className="text-sm font-normal">/cada</span></div>
            </div>
          </div>
          
          <CtaButton size="xl" text="Escolha sua oferta oficial com desconto" location="pricing" />
        </div>
      </Section>

      {/* 11. GUARANTEE */}
      <Section>
        <div className="bg-gradient-to-r from-[#002B5C] to-[#001f42] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-full animate-shimmer" />
          
          <div className="shrink-0 bg-white/10 p-4 rounded-full border-2 border-[#FFD814]">
            <ShieldCheck className="w-20 h-20 text-[#FFD814]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 font-display">Garantia Blindada de 60 Dias</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Se você não ver os resultados que espera, ou se não ficar satisfeito por qualquer motivo, você recebe 100% do seu dinheiro de volta. Sem perguntas. É um processo simples e seguro.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold text-[#FFD814]">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Reembolso Total</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Compra Segura</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Risco Zero</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 12. FAQ */}
      <Section className="bg-slate-50">
        <SectionHeader title="Perguntas Frequentes" center={true} />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "O que é Java Burn?", a: "Java Burn é um suplemento natural em pó, sem sabor, projetado para ser misturado ao café. Ele contém ingredientes que, sinergicamente com a cafeína, aceleram o metabolismo." },
              { q: "Como devo usar?", a: "Simplesmente misture um sachê no seu café da manhã. Ele dissolve instantaneamente e não altera o sabor da bebida." },
              { q: "É seguro?", a: "Sim, é 100% natural, vegetariano, livre de glúten e produzido em instalações aprovadas pela FDA nos EUA sob padrões rigorosos de esterilidade." },
              { q: "Quando verei resultados?", a: "Muitos usuários relatam mais energia logo no primeiro dia. Mudanças no peso geralmente são notadas após 3-4 semanas de uso consistente." },
              { q: "Onde comprar o original?", a: "O Java Burn autêntico é vendido APENAS através do site oficial. Evite Amazon ou eBay para não comprar falsificações." }
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

      {/* 13. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <h4 className="text-white font-bold text-xl mb-4 font-display">Java Burn Review</h4>
              <p className="text-sm leading-relaxed max-w-sm">
                Nossa missão é fornecer análises honestas e detalhadas para ajudar você a tomar decisões informadas sobre sua saúde e bem-estar.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Benefícios</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Comprar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Isenção de Responsabilidade</a></li>
                <li><a href="#" className="hover:text-[#FFD814] transition-colors">Contato</a></li>
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
