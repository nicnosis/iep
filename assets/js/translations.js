// Translation system for IEP website
class IEPTranslator {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                // Navigation
                'nav.what-we-do': 'What We Do',
                'nav.invest': 'Invest With Us',
                
                // Hero Section
                'hero.title': 'The Future, Financed',
                'hero.subtitle': 'International Energy Partners connects visionary investors with transformative clean energy projects worldwide.',
                'hero.cta': 'Partner With Us',
                
                // What We Do Section
                'what-we-do.title': 'What We Do',
                'what-we-do.subtitle': 'We focus on three key areas of clean energy investment, delivering sustainable returns and environmental impact.',
                
                // LNG Card
                'lng.title': 'Liquefied Natural Gas',
                'lng.description': 'Strategic investments in LNG infrastructure and technology, facilitating cleaner energy transition while maintaining energy security across global markets.',
                'lng.feature1': 'Infrastructure Development',
                'lng.feature2': 'Technology Innovation',
                'lng.feature3': 'Global Supply Chain',
                
                // Equity Card
                'equity.title': 'Equity Investments',
                'equity.description': 'Direct equity participation in promising clean energy companies, from early-stage innovators to established market leaders driving sustainable solutions.',
                'equity.feature1': 'Growth Capital',
                'equity.feature2': 'Strategic Partnerships',
                'equity.feature3': 'Market Expansion',
                
                // EV Charging Card
                'ev.title': 'EV Charging Infrastructure',
                'ev.description': 'Building comprehensive electric vehicle charging networks to support the rapid adoption of electric transportation across urban and highway corridors.',
                'ev.feature1': 'Fast Charging Networks',
                'ev.feature2': 'Smart Grid Integration',
                'ev.feature3': 'Urban & Highway Coverage',
                
                // About Us Section
                'about.title': 'About Us',
                'about.subtitle': 'Meet the leadership team driving International Energy Partners\' mission to accelerate the global transition to clean energy.',
                'about.experience': 'Experience',
                'about.past-companies': 'Past Companies',
                
                // Derek's Card
                'derek.role': 'CEO',
                'derek.summary': 'Energy industry veteran with proven track record in strategic investments and market development. Expert in identifying and executing high-impact opportunities in the clean energy sector.',
                'derek.accomplishment1': 'Closed $2Bn+ in energy infrastructure deals',
                'derek.accomplishment2': 'Led renewable energy project development',
                'derek.accomplishment3': 'Established strategic partnerships globally',
                
                // Nic's Card
                'nic.role': 'CTO',
                'nic.summary': 'Technology leader with extensive experience in AI integration and scalable systems development. Specializes in building high-performance platforms that drive business transformation and operational efficiency.',
                'nic.accomplishment1': 'Led AI integration for Fortune 500 companies',
                'nic.accomplishment2': 'Developed scalable marketing automation systems',
                'nic.accomplishment3': 'Built and launched high-performance web platforms',
                
                // Featured Investment Section
                'investment.title': 'Featured Investment',
                'investment.subtitle': 'Target Acquisition',
                'investment.description': 'North America\'s leading provider of renewable natural gas (RNG) for the transportation sector. Their innovative approach to providing clean fuel solutions aligns perfectly with our mission of accelerating the transition to sustainable energy.',
                'investment.feature1': 'Market leader with 550+ natural gas fueling stations across North America',
                'investment.feature2': 'Q1 2025: $103.8M revenue with improved EBITDA of $17.1M',
                'investment.feature3': 'Strong liquidity position with $226M cash on hand',
                'investment.feature4': 'Significant institutional backing with major funds increasing positions',
                'investment.cta': 'Request Investment Memorandum',
                'investment.market-data': 'Live market data updates every 60 seconds',
                
                // Invest With Us Section
                'invest.title': 'Invest With Us',
                'invest.subtitle': 'Join our network of global investors and be part of the clean energy revolution. Minimum investment starting at $1M USD.',
                'invest.cta': 'Contact Our Investment Team',
                
                // Footer
                'footer.description': 'International Energy Partners is a global investment firm focused on accelerating the transition to clean energy.',
                'footer.contact': 'Contact',
                'footer.copyright': 'International Energy Partners. All rights reserved.'
            },
            es: {
                // Navigation
                'nav.what-we-do': 'Qué Hacemos',
                'nav.invest': 'Invertir Con Nosotros',
                
                // Hero Section
                'hero.title': 'El Futuro, Financiado',
                'hero.subtitle': 'International Energy Partners conecta inversores visionarios con proyectos transformadores de energía limpia en todo el mundo.',
                'hero.cta': 'Asociarse Con Nosotros',
                
                // What We Do Section
                'what-we-do.title': 'Qué Hacemos',
                'what-we-do.subtitle': 'Nos enfocamos en tres áreas clave de inversión en energía limpia, entregando retornos sostenibles e impacto ambiental.',
                
                // LNG Card
                'lng.title': 'Gas Natural Licuado',
                'lng.description': 'Inversiones estratégicas en infraestructura y tecnología de GNL, facilitando la transición energética más limpia mientras mantenemos la seguridad energética en mercados globales.',
                'lng.feature1': 'Desarrollo de Infraestructura',
                'lng.feature2': 'Innovación Tecnológica',
                'lng.feature3': 'Cadena de Suministro Global',
                
                // Equity Card
                'equity.title': 'Inversiones en Capital',
                'equity.description': 'Participación directa en capital de empresas prometedoras de energía limpia, desde innovadores en etapa temprana hasta líderes establecidos del mercado que impulsan soluciones sostenibles.',
                'equity.feature1': 'Capital de Crecimiento',
                'equity.feature2': 'Alianzas Estratégicas',
                'equity.feature3': 'Expansión de Mercado',
                
                // EV Charging Card
                'ev.title': 'Infraestructura de Carga EV',
                'ev.description': 'Construyendo redes integrales de carga de vehículos eléctricos para apoyar la rápida adopción del transporte eléctrico en corredores urbanos y de carreteras.',
                'ev.feature1': 'Redes de Carga Rápida',
                'ev.feature2': 'Integración de Red Inteligente',
                'ev.feature3': 'Cobertura Urbana y de Carretera',
                
                // About Us Section
                'about.title': 'Sobre Nosotros',
                'about.subtitle': 'Conoce al equipo de liderazgo que impulsa la misión de International Energy Partners de acelerar la transición global a la energía limpia.',
                'about.experience': 'Experiencia',
                'about.past-companies': 'Empresas Anteriores',
                
                // Derek's Card
                'derek.role': 'CEO',
                'derek.summary': 'Veterano de la industria energética con historial comprobado en inversiones estratégicas y desarrollo de mercados. Experto en identificar y ejecutar oportunidades de alto impacto en el sector de energía limpia.',
                'derek.accomplishment1': 'Cerrado $2Bn+ en acuerdos de infraestructura energética',
                'derek.accomplishment2': 'Lideró el desarrollo de proyectos de energía renovable',
                'derek.accomplishment3': 'Estableció alianzas estratégicas globalmente',
                
                // Nic's Card
                'nic.role': 'CTO',
                'nic.summary': 'Líder tecnológico con amplia experiencia en integración de IA y desarrollo de sistemas escalables. Se especializa en construir plataformas de alto rendimiento que impulsan la transformación empresarial y la eficiencia operativa.',
                'nic.accomplishment1': 'Lideró la integración de IA para empresas Fortune 500',
                'nic.accomplishment2': 'Desarrolló sistemas escalables de automatización de marketing',
                'nic.accomplishment3': 'Construyó y lanzó plataformas web de alto rendimiento',
                
                // Featured Investment Section
                'investment.title': 'Inversión Destacada',
                'investment.subtitle': 'Adquisición Objetivo',
                'investment.description': 'El proveedor líder en América del Norte de gas natural renovable (GNR) para el sector del transporte. Su enfoque innovador para proporcionar soluciones de combustible limpio se alinea perfectamente con nuestra misión de acelerar la transición a la energía sostenible.',
                'investment.feature1': 'Líder del mercado con más de 550 estaciones de combustible de gas natural en América del Norte',
                'investment.feature2': 'Q1 2025: $103.8M de ingresos con EBITDA mejorado de $17.1M',
                'investment.feature3': 'Fuerte posición de liquidez con $226M en efectivo disponible',
                'investment.feature4': 'Respaldo institucional significativo con fondos importantes aumentando posiciones',
                'investment.cta': 'Solicitar Memorándum de Inversión',
                'investment.market-data': 'Datos de mercado en vivo se actualizan cada 60 segundos',
                
                // Invest With Us Section
                'invest.title': 'Invertir Con Nosotros',
                'invest.subtitle': 'Únete a nuestra red de inversores globales y sé parte de la revolución de la energía limpia. Inversión mínima a partir de $1M USD.',
                'invest.cta': 'Contactar a Nuestro Equipo de Inversión',
                
                // Footer
                'footer.description': 'International Energy Partners es una firma de inversión global enfocada en acelerar la transición a la energía limpia.',
                'footer.contact': 'Contacto',
                'footer.copyright': 'International Energy Partners. Todos los derechos reservados.'
            },
            pt: {
                // Navigation
                'nav.what-we-do': 'O Que Fazemos',
                'nav.invest': 'Investir Conosco',
                
                // Hero Section
                'hero.title': 'O Futuro, Financiado',
                'hero.subtitle': 'International Energy Partners conecta investidores visionários com projetos transformadores de energia limpa em todo o mundo.',
                'hero.cta': 'Parceria Conosco',
                
                // What We Do Section
                'what-we-do.title': 'O Que Fazemos',
                'what-we-do.subtitle': 'Nos concentramos em três áreas principais de investimento em energia limpa, entregando retornos sustentáveis e impacto ambiental.',
                
                // LNG Card
                'lng.title': 'Gás Natural Liquefeito',
                'lng.description': 'Investimentos estratégicos em infraestrutura e tecnologia de GNL, facilitando a transição energética mais limpa enquanto mantemos a segurança energética em mercados globais.',
                'lng.feature1': 'Desenvolvimento de Infraestrutura',
                'lng.feature2': 'Inovação Tecnológica',
                'lng.feature3': 'Cadeia de Suprimentos Global',
                
                // Equity Card
                'equity.title': 'Investimentos em Capital',
                'equity.description': 'Participação direta em capital de empresas promissoras de energia limpa, desde inovadores em estágio inicial até líderes estabelecidos do mercado que impulsionam soluções sustentáveis.',
                'equity.feature1': 'Capital de Crescimento',
                'equity.feature2': 'Parcerias Estratégicas',
                'equity.feature3': 'Expansão de Mercado',
                
                // EV Charging Card
                'ev.title': 'Infraestrutura de Carregamento EV',
                'ev.description': 'Construindo redes abrangentes de carregamento de veículos elétricos para apoiar a rápida adoção do transporte elétrico em corredores urbanos e rodoviários.',
                'ev.feature1': 'Redes de Carregamento Rápido',
                'ev.feature2': 'Integração de Rede Inteligente',
                'ev.feature3': 'Cobertura Urbana e Rodoviária',
                
                // About Us Section
                'about.title': 'Sobre Nós',
                'about.subtitle': 'Conheça a equipe de liderança que impulsiona a missão da International Energy Partners de acelerar a transição global para energia limpa.',
                'about.experience': 'Experiência',
                'about.past-companies': 'Empresas Anteriores',
                
                // Derek's Card
                'derek.role': 'CEO',
                'derek.summary': 'Veterano da indústria energética com histórico comprovado em investimentos estratégicos e desenvolvimento de mercados. Especialista em identificar e executar oportunidades de alto impacto no setor de energia limpa.',
                'derek.accomplishment1': 'Fechado $2Bn+ em acordos de infraestrutura energética',
                'derek.accomplishment2': 'Liderou o desenvolvimento de projetos de energia renovável',
                'derek.accomplishment3': 'Estabeleceu parcerias estratégicas globalmente',
                
                // Nic's Card
                'nic.role': 'CTO',
                'nic.summary': 'Líder tecnológico com ampla experiência em integração de IA e desenvolvimento de sistemas escaláveis. Especializa-se em construir plataformas de alto desempenho que impulsionam a transformação empresarial e eficiência operacional.',
                'nic.accomplishment1': 'Liderou a integração de IA para empresas Fortune 500',
                'nic.accomplishment2': 'Desenvolveu sistemas escaláveis de automação de marketing',
                'nic.accomplishment3': 'Construiu e lançou plataformas web de alto desempenho',
                
                // Featured Investment Section
                'investment.title': 'Investimento em Destaque',
                'investment.subtitle': 'Aquisição Alvo',
                'investment.description': 'O principal provedor da América do Norte de gás natural renovável (GNR) para o setor de transporte. Sua abordagem inovadora para fornecer soluções de combustível limpo se alinha perfeitamente com nossa missão de acelerar a transição para energia sustentável.',
                'investment.feature1': 'Líder do mercado com mais de 550 estações de abastecimento de gás natural na América do Norte',
                'investment.feature2': 'Q1 2025: $103.8M de receita com EBITDA melhorado de $17.1M',
                'investment.feature3': 'Forte posição de liquidez com $226M em caixa disponível',
                'investment.feature4': 'Apoio institucional significativo com fundos importantes aumentando posições',
                'investment.cta': 'Solicitar Memorando de Investimento',
                'investment.market-data': 'Dados de mercado ao vivo atualizados a cada 60 segundos',
                
                // Invest With Us Section
                'invest.title': 'Investir Conosco',
                'invest.subtitle': 'Junte-se à nossa rede de investidores globais e seja parte da revolução da energia limpa. Investimento mínimo a partir de $1M USD.',
                'invest.cta': 'Contatar Nossa Equipe de Investimento',
                
                // Footer
                'footer.description': 'International Energy Partners é uma empresa de investimento global focada em acelerar a transição para energia limpa.',
                'footer.contact': 'Contato',
                'footer.copyright': 'International Energy Partners. Todos os direitos reservados.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageSelector();
        this.loadSavedLanguage();
        this.translatePage();
    }
    
    createLanguageSelector() {
        const nav = document.querySelector('nav .flex.justify-between');
        if (!nav) return;
        
        // Desktop language selector (inline)
        const desktopLanguageSelector = document.createElement('div');
        desktopLanguageSelector.className = 'hidden md:flex items-center space-x-1 text-sm';
        desktopLanguageSelector.innerHTML = `
            <button class="language-option-inline text-gray-600 hover:text-gray-900 transition-colors" data-lang="en">EN</button>
            <span class="text-gray-400">|</span>
            <button class="language-option-inline text-gray-600 hover:text-gray-900 transition-colors" data-lang="es">ES</button>
            <span class="text-gray-400">|</span>
            <button class="language-option-inline text-gray-600 hover:text-gray-900 transition-colors" data-lang="pt">PT</button>
        `;
        
        // Mobile language selector (dropdown)
        const mobileLanguageSelector = document.createElement('div');
        mobileLanguageSelector.className = 'md:hidden relative';
        mobileLanguageSelector.innerHTML = `
            <button id="language-btn" class="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <span id="current-lang">EN</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div id="language-dropdown" class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 hidden z-50">
                <div class="py-1">
                    <button class="language-option block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-lang="en">English</button>
                    <button class="language-option block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-lang="es">Español</button>
                    <button class="language-option block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-lang="pt">Português</button>
                </div>
            </div>
        `;
        
        // Insert both selectors before the existing nav items
        const existingNav = nav.querySelector('.hidden.md\\:flex');
        if (existingNav) {
            existingNav.parentNode.insertBefore(desktopLanguageSelector, existingNav);
            existingNav.parentNode.insertBefore(mobileLanguageSelector, existingNav);
        }
        
        // Add event listeners for desktop inline buttons
        document.querySelectorAll('.language-option-inline').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
        
        // Add event listeners for mobile dropdown
        document.getElementById('language-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('language-dropdown');
            dropdown.classList.toggle('hidden');
        });
        
        document.addEventListener('click', () => {
            document.getElementById('language-dropdown').classList.add('hidden');
        });
        
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
                document.getElementById('language-dropdown').classList.add('hidden');
            });
        });
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('iep-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
        }
        
        // Set initial styling for desktop buttons after DOM is ready
        setTimeout(() => {
            this.updateDesktopButtonStyling();
        }, 100);
    }
    
    updateDesktopButtonStyling() {
        const langCodes = { en: 'EN', es: 'ES', pt: 'PT' };
        
        // Update mobile language button
        const mobileLangBtn = document.getElementById('current-lang');
        if (mobileLangBtn) {
            mobileLangBtn.textContent = langCodes[this.currentLanguage];
        }
        
        // Update desktop inline buttons styling
        document.querySelectorAll('.language-option-inline').forEach(btn => {
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('text-gray-900', 'font-medium');
                btn.classList.remove('text-gray-600');
            } else {
                btn.classList.remove('text-gray-900', 'font-medium');
                btn.classList.add('text-gray-600');
            }
        });
    }
    
    setLanguage(lang) {
        if (!this.translations[lang]) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('iep-language', lang);
        
        // Update mobile language button
        const langCodes = { en: 'EN', es: 'ES', pt: 'PT' };
        const mobileLangBtn = document.getElementById('current-lang');
        if (mobileLangBtn) {
            mobileLangBtn.textContent = langCodes[lang];
        }
        
        // Update desktop inline buttons styling
        document.querySelectorAll('.language-option-inline').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('text-gray-900', 'font-medium');
                btn.classList.remove('text-gray-600');
            } else {
                btn.classList.remove('text-gray-900', 'font-medium');
                btn.classList.add('text-gray-600');
            }
        });
        
        this.translatePage();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    getText(key) {
        return this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
    }
}

// Initialize translator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.iepTranslator = new IEPTranslator();
}); 