// The Joy Lab (TJL) — VTEX FastStore Canonical Catalog, INCI Database & CMS Data
// Figma Project: https://www.figma.com/design/32mjETxf0SdgkCprK0UL0L/Revis%C3%A3o-TJL?node-id=0-1
// Account: lojajoy | Architecture: VTEX FastStore (Simulador Interativo + Headless SDK Layer)

window.TJL_DATA = {
  storeConfig: {
    account: "lojajoy",
    platform: "vtex-faststore",
    channel: '{"salesChannel":"1","regionId":""}',
    locale: "pt-BR",
    currency: "BRL",
    figmaFileKey: "32mjETxf0SdgkCprK0UL0L",
    figmaProjectName: "Revisão TJL (Home, Categorias, Sacola & PDP Desktop/Mobile)",
    freeShippingThreshold: 399.00,
    necessaireGiftThreshold: 499.00,
    pixDiscountPct: 0.04,
    subscriptionDiscountPct: 0.15,
    joyCoinsCashbackPct: 0.05
  },

  benefits: [
    "Frete grátis a partir de R$ 399,00",
    "Nas compras acima de R$ 499,00 ganhe uma nécessaire exclusiva TJL",
    "15% OFF na compra recorrente + Frete Grátis em todas as entregas",
    "Até 3x sem juros no cartão ou 4% OFF imediato no PIX"
  ],

  heroSlides: [
    {
      id: "lumiscent-body",
      topic: "NEUROBIOLOGIA CUTÂNEA",
      title: "Lumiscent Body Mist",
      description: "Névoa corporal de tratamento clareador e restauração da barreira com Niacinamida, Xilitol Prebiótico e ativação de receptores olfativos OR10A6.",
      subdescription: "*Disponível nas versões Lavander Thé Bleu e Bergamot Flower. Toque 100% seco.",
      ctaLabel: "Ver Produto",
      ctaTarget: "pdp.html",
      image: "assets/banners/hero-banner-humanizado-mist-desktop.webp",
      mobileImage: "assets/banners/hero-banner-humanizado-mist-mobile.webp"
    },
    {
      id: "black-lab",
      topic: "BLACK LAB",
      title: "Compre com até 20% OFF",
      description: "Fórmulas minimalistas de alta performance com ativos biodisponíveis em concentrações clínicas eficazes. Use o cupom: BLACKTJL",
      subdescription: "*Condição válida para todo o site. Confira os descontos progressivos e brindes diretamente na sacola.",
      ctaLabel: "Compre Agora",
      ctaTarget: "#rotinas",
      image: "assets/banners/hero-banner-modelo-fundo-iluminado-desktop.webp",
      mobileImage: "assets/banners/hero-banner-modelo-fundo-iluminado-mobile.webp"
    },
    {
      id: "retinoid-science",
      topic: "RENOVAÇÃO NOTURNA DE ALTA TOLERABILIDADE",
      title: "Powerful Retinoid",
      description: "Dupla tecnologia retinoide (Retinaldeído + Retinol puro encapsulado) associada a Ectoína, Niacinamida e neurocosmético calmante.",
      subdescription: "*Kits de rotina com 4% OFF adicional + Frete Grátis acima de R$ 399,00.",
      ctaLabel: "Explorar Rotinas",
      ctaTarget: "#rotinas",
      image: "assets/banners/hero-banner-produto-retinoid-desktop.webp",
      mobileImage: "assets/banners/hero-banner-produto-retinoid-mobile.webp"
    }
  ],

  concerns: [
    {
      id: "manchas",
      title: "Manchas na Pele",
      subtitle: "Melasma, marcas pós-acne e uniformização do tom facial e corporal",
      actives: "PhE-Resorcinol • Niacinamida 5% • 17 Bioativos de Sândalo",
      filterKey: "manchas",
      image: "assets/editorial/concern-manchas.jpg",
      productOverlay: "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png"
    },
    {
      id: "acne",
      title: "Acne & Oleosidade",
      subtitle: "Controle de brilho, desobstrução de poros e limpeza sem ressecar",
      actives: "Aminoácidos de Glicina • Hamamélis • 5 Algas Marinhas",
      filterKey: "limpeza",
      image: "assets/editorial/concern-acne.jpg",
      productOverlay: "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png"
    },
    {
      id: "hidratacao",
      title: "Pele Seca & Barreira",
      subtitle: "Reposição de ceramidas biomiméticas e frescor antioxidante",
      actives: "Ceramidas NP/AP/EOP • Ectoína • Creatina Biodisponível",
      filterKey: "hidratacao",
      image: "assets/editorial/texture-cream-swatch.jpg",
      productOverlay: "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png"
    },
    {
      id: "renovacao",
      title: "Renovação & Firmeza",
      subtitle: "Textura uniforme, redução de linhas finas e estímulo de colágeno",
      actives: "Retinaldeído • Retinol Encapsulado • Sacran Japonês",
      filterKey: "renovacao",
      image: "assets/editorial/01-retinal-gel-cream-texture.png",
      productOverlay: "assets/products/RETINOID + SOMBRA + ALPHA (1).png"
    }
  ],

  coupons: {
    "BLACKTJL": { pct: 0.15, label: "15% OFF Campanha Black Lab" },
    "SOPARAOSMAISCHEGADOS": { pct: 0.20, label: "20% OFF VIP The Joy Lab" },
    "PRIMEIRA10": { pct: 0.10, label: "10% OFF Primeira Compra" },
    "JOY10": { pct: 0.10, label: "10% OFF Newsletter TJL" },
    "JOYCE": { pct: 0.10, label: "10% OFF Cupom Joyce" },
    "MARINA": { pct: 0.10, label: "10% OFF Cupom Marina" },
    "THEJOYLAB": { pct: 0.10, label: "10% OFF Institucional" }
  },

  routines: [
    {
      id: "kit-rotina-completa",
      sku: "TJL-KIT-001",
      ean: "7898965429607",
      line: "Kit Rotina Completa",
      format: "Clareamento + Barreira + Nécessaire",
      price: 484.80,
      oldPrice: 505.00,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "manchas",
      volume: "3 produtos + Nécessaire TJL",
      rating: "5,0",
      reviewsCount: 76,
      image: "assets/kits/KIT-COMPLETO-NECESSAIRE-VERMELHA.jpg",
      gallery: [
        "assets/kits/KIT-COMPLETO-NECESSAIRE-VERMELHA.jpg",
        "assets/kits/KIT_COMPLETO.jpg",
        "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png",
        "assets/products/POWER BRIGHT STICK + SOMBRA + ALPHA (1).png",
        "assets/products/MIST-LAVANDER-THE-BLEU-SOMBRA-ALPHA.png",
        "assets/editorial/necessaire.jpg"
      ],
      summary: "Protocolo completo com Power Clarity Sérum, Power Bright Stick e Lumiscent Body Mist para uniformização facial e corporal com Frete Grátis + 4% OFF.",
      benefitsList: [
        "Uniformiza manchas faciais e corporais de forma progressiva e segura",
        "Fortalece a barreira cutânea com Niacinamida, Ceramidas e Xilitol Prebiótico",
        "Desbloqueia automaticamente Frete Grátis e acompanha a estética de rotina completa TJL"
      ],
      resultsText: "Em testes clínicos de 28 dias: 94% relataram pele mais luminosa e uniforme, 91% notaram redução visível de marcas escurecidas e 97% aprovaram a textura sem efeito rebote.",
      actives: [
        { name: "PhE-Resorcinol", role: "Inibição seletiva da tirosinase para clareamento eficaz sem sensibilizar a barreira." },
        { name: "Niacinamida 5%", role: "Redução da transferência de melanossomas, equilíbrio de poros e fortalecimento cutâneo." },
        { name: "17 Bioativos de Santalum Album", role: "Ação antioxidante e clareadora pontual em manchas resistentes e olheiras." },
        { name: "Xilitol Prebiótico", role: "Equilíbrio da microbiota cutânea e hidratação prolongada por 24 horas." }
      ],
      usageSteps: [
        "Aplique 3 a 4 gotas do Power Clarity Sérum sobre a pele facial limpa e seca.",
        "Deslize o Power Bright Stick diretamente sobre manchas pontuais ou olheiras.",
        "Borrife o Lumiscent Body Mist no pescoço, colo e corpo após o banho."
      ],
      usageWarning: "Uso diurno e noturno. Durante o dia, finalize sempre a rotina facial com protetor solar de amplo espectro.",
      inci: "Power Clarity: Aqua, Caprylic/Capric Triglyceride, Niacinamide, Propanediol, Alcohol, PEG-100 Stearate, Glyceryl Stearate, Creatine, Undecylenoyl Phenylalanine, Glycerin, Phenylethyl Resorcinol, Hamamelis Virginiana Leaf Extract, Polylysine, Pentylene Glycol, Phenoxyethanol, 1-Methylhydantoin-2-Imide, Caprylyl Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Silica, Lavandula Oil Extract, Disodium EDTA, Xanthan Gum, Parfum. | Power Bright Stick: Coco-Caprylate, Synthetic Wax, Dimethicone, Butyrospermum Parkii (Shea) Butter, Polymethylsilsesquioxane, Octyldodecanol, Santalum Album Wood Extract, Tocopheryl Acetate, Phenylethyl Resorcinol. | Lumiscent Mist: Aqua, Niacinamide, Diisopropyl Sebacate, Propanediol, Glycerin, Alcohol, Parfum, Xylitol, Hydrolyzed Yeast Protein.",
      bundleIds: ["power_clarity", "power_bright_stick", "lumiscent_lavander"]
    },
    {
      id: "kit-clareadores",
      sku: "TJL-KIT-002",
      ean: "7898965429614",
      line: "Kit Clareadores",
      format: "Power Clarity + Power Bright Stick",
      price: 323.52,
      oldPrice: 337.00,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "manchas",
      volume: "30ml + 15g",
      rating: "5,0",
      reviewsCount: 54,
      image: "assets/kits/KIT_COMPLETO.jpg",
      gallery: [
        "assets/kits/KIT_COMPLETO.jpg",
        "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png",
        "assets/products/POWER BRIGHT STICK + SOMBRA + ALPHA (1).png"
      ],
      summary: "Dupla de alta potência clareadora para uso facial amplo e aplicação pontual diurna e noturna em manchas resistentes e melasma.",
      benefitsList: [
        "Atuação sinergética em 4 etapas da síntese de melanina",
        "Formato bastão prático para reaplicação ao longo do dia",
        "Alta tolerabilidade: não descama e não sensibiliza peles reativas"
      ],
      resultsText: "92% dos participantes perceberam clareamento de marcas de acne e melasma em 4 semanas de uso combinado contínuo.",
      actives: [
        { name: "PhE-Resorcinol", role: "Uniformização potente de áreas hiperpigmentadas." },
        { name: "Undecylenoyl Phenylalanine", role: "Bloqueio inteligente de sinais pigmentares alfa-MSH." },
        { name: "Bioativos de Santalum Album", role: "Ação antioxidante, calmante e iluminadora localizada." },
        { name: "Niacinamida Pura", role: "Reforço da barreira epidérmica e controle da inflamação pós-acne." }
      ],
      usageSteps: [
        "Com a pele limpa, espalhe 3 a 4 gotas do Power Clarity Sérum no rosto e pescoço.",
        "Aplique o Power Bright Stick diretamente sobre as manchas mais escuras.",
        "Pela manhã, finalize com filtro solar."
      ],
      usageWarning: "Pode ser utilizado no verão e em peles sensíveis. Não fotossensibilizante.",
      inci: "Aqua, Caprylic/Capric Triglyceride, Niacinamide, Propanediol, Creatine, Undecylenoyl Phenylalanine, Glycerin, Phenylethyl Resorcinol, Hamamelis Virginiana Leaf Extract, Polylysine, Coco-Caprylate, Synthetic Wax, Dimethicone, Butyrospermum Parkii Butter, Santalum Album Wood Extract, Tocopheryl Acetate.",
      bundleIds: ["power_clarity", "power_bright_stick", "aquapro_ceramida"]
    },
    {
      id: "kit-aquapro",
      sku: "TJL-KIT-003",
      ean: "7898965429621",
      line: "Kit Linha AquaPro",
      format: "Cooler + Ceramida + Limpeza",
      price: 309.12,
      oldPrice: 322.00,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "hidratacao",
      volume: "30g + 50ml",
      rating: "5,0",
      reviewsCount: 62,
      image: "assets/kits/Foam+Cooler.jpg",
      gallery: [
        "assets/kits/Foam+Cooler.jpg",
        "assets/products/AQUAPRO COOLER + SOMBRA + ALPHA (1).png",
        "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png"
      ],
      summary: "Sinergia de hidratação multinível com proteção antioxidante contra calor urbano, poluição e estresse térmico.",
      benefitsList: [
        "Reduz imediatamente a temperatura superficial da pele e acalma a vermelhidão",
        "Estimula a produção natural de ceramidas endógenas",
        "Textura ultraligera oil-free ideal para peles brasileiras"
      ],
      resultsText: "98% sentiram frescor e alívio imediato do rubor; +64% de retenção hídrica após 14 dias.",
      actives: [
        { name: "Ectoína", role: "Escudo osmótico celular contra radiação UV, calor e desidratação." },
        { name: "Complexo de Ceramidas", role: "Fortalecimento imediato da matriz lipídica cutânea." },
        { name: "Creatina Biodisponível", role: "Energia mitocondrial celular e firmeza sem peso." },
        { name: "Polifenóis de Hamamélis", role: "Ação antioxidante e calmante de poros." }
      ],
      usageSteps: [
        "Aplique o AquaPro Cooler na pele limpa para efeito gelado antioxidante imediato.",
        "Em seguida, espalhe 1 a 2 pumps do AquaPro Ceramida Gel para selar a hidratação.",
        "Use diariamente pela manhã e à noite."
      ],
      usageWarning: "Dica TJL: excelente pré-maquiagem e pós-sol para recuperar o conforto da pele.",
      inci: "Aqua, Dicaprylyl Ether, Dimethicone, Glycerin, Niacinamide, Propanediol, Lactobacillus/Soybean Ferment Extract, Santalum Album Wood Extract, Ectoin, Creatine, Hamamelis Virginiana Leaf Extract, Menthone Glycerin Acetal.",
      bundleIds: ["aquapro_cooler", "aquapro_ceramida", "freshen_cleansing_foam"]
    },
    {
      id: "kit-dupla-limpeza",
      sku: "TJL-KIT-004",
      ean: "7898965429638",
      line: "Kit Rotina Básica",
      format: "Double Cleansing + Hidratação",
      price: 297.40,
      oldPrice: 309.80,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "limpeza",
      volume: "150ml + 150ml",
      rating: "5,0",
      reviewsCount: 49,
      image: "assets/kits/Rotina_Basica.jpg",
      gallery: [
        "assets/kits/Rotina_Basica.jpg",
        "assets/products/FRESHEN CLEANSING OIL + SOMBRA + ALPHA (1).png",
        "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png"
      ],
      summary: "Ritual asiático de Double Cleansing que dissolve protetor solar resistente e maquiagem mantendo o pH fisiológico e a microbiota.",
      benefitsList: [
        "Dissolve sebo oxidado nos poros e maquiagem à prova d'água em segundos",
        "Emulsifica 100% com água sem deixar filme oleoso ou turvar a visão",
        "Espuma com aminoácidos de glicina que limpa sem repuxar"
      ],
      resultsText: "96% relataram poros visivelmente mais limpos e redução de cravos na zona T em 14 dias.",
      actives: [
        { name: "Complexo de 5 Algas Marinhas", role: "Emulsificação suave de impurezas lipossolúveis e nutrição." },
        { name: "Tensoativos de Glicina", role: "Limpeza aquosa biomimética que preserva os lipídios naturais." },
        { name: "Óleo de Semente de Girassol", role: "Rico em ômega-6 para manter a maciez durante a massagem." },
        { name: "Óleo de Yuzu (Citrus Junos)", role: "Toque sensorial cítrico revigorante e antioxidante." }
      ],
      usageSteps: [
        "Com o rosto seco e mãos secas, massageie 2 pumps do Freshen Cleansing Oil por 40 segundos.",
        "Adicione um pouco de água morna para emulsionar até formar um leite branco e enxágue.",
        "Aplique 1 a 2 pumps do Freshen Cleansing Foam no rosto úmido, massageie e enxágue."
      ],
      usageWarning: "Indicado para todos os tipos de pele, inclusive oleosas, acneicas e sensíveis.",
      inci: "Coco-Caprylate, Helianthus Annuus Seed Oil, PEG-20 Glyceryl Triisostearate, Plankton Extract, Laminaria Digitata Extract, Aqua, Glycerin, Sodium Lauroyl Glutamate, Betaine, Undecylenoyl Glycine, Citrus Junos Fruit Oil.",
      bundleIds: ["freshen_cleansing_oil", "freshen_cleansing_foam", "aquapro_ceramida"]
    },
    {
      id: "kit-renovacao-noturna",
      sku: "TJL-KIT-005",
      ean: "7898965429645",
      line: "Kit Renovação & Força",
      format: "Powerful Retinoid + Powerful Force",
      price: 387.74,
      oldPrice: 403.90,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "renovacao",
      volume: "30ml + 50ml",
      rating: "5,0",
      reviewsCount: 68,
      image: "assets/kits/KIT-RETINOID-PF.jpg",
      gallery: [
        "assets/kits/KIT-RETINOID-PF.jpg",
        "assets/kits/ROTINA_NOTURNA.jpg",
        "assets/products/RETINOID + SOMBRA + ALPHA (1).png",
        "assets/products/POWERFUL FORCE + SOMBRA + ALPHA (1).png"
      ],
      summary: "Combinação clínica ouro: Retinaldeído + Retinol encapsulado para renovação noturna com Niacinamida 5% + Sacran para máxima tolerabilidade.",
      benefitsList: [
        "Estimula colágeno e renova a textura sem a irritação clássica dos retinoides",
        "Sacran retém 5x mais água que o ácido hialurônico, blindando a barreira",
        "Suaviza linhas finas, poros dilatados e marcas de expressão"
      ],
      resultsText: "95% notaram pele mais firme e textura refinada em 28 dias sem vermelhidão ou descamação severa.",
      actives: [
        { name: "Retinaldeído + Retinol Encapsulado", role: "Dupla velocidade de conversão em ácido retinoico com ação prolongada." },
        { name: "Sacran (Aphanothece Sacrum)", role: "Super-polissacarídeo japonês com retenção hídrica extrema." },
        { name: "Niacinamida 5%", role: "Suporte calmante, fortalecedor de ceramidas e anti-inflamatório." },
        { name: "4-T-Butylcyclohexanol", role: "Neurocosmético calmante que reduz ardor e sensibilidade imediata." }
      ],
      usageSteps: [
        "Pela manhã, aplique o Powerful Force no rosto limpo antes do hidratante e FPS.",
        "À noite, aplique o Powerful Retinoid na pele limpa e seca.",
        "Para peles muito sensíveis, aplique o Powerful Force 5 minutos antes do Retinoid (técnica buffer)."
      ],
      usageWarning: "Powerful Retinoid é de uso exclusivamente noturno. Não utilizar durante a gestação. Uso obrigatório de FPS durante o dia.",
      inci: "Aqua, Niacinamide, Cetearyl Alcohol, Glycerin, Caprylic/Capric Triglyceride, Retinol, Retinal, Ectoin, Creatine, 4-T-Butylcyclohexanol, Aphanothece Sacrum Polysaccharides, Betaine, Sodium Hyaluronate.",
      bundleIds: ["powerful_retinoid", "powerful_force", "aquapro_ceramida"]
    },
    {
      id: "kit-rotina-noturna",
      sku: "TJL-KIT-006",
      ean: "7898965429652",
      line: "Kit Rotina Noturna",
      format: "Limpeza + Renovação + Ceramidas",
      price: 472.22,
      oldPrice: 491.90,
      discountLabel: "-4%",
      category: "rotinas",
      concern: "renovacao",
      volume: "150ml + 30ml + 50ml",
      rating: "5,0",
      reviewsCount: 51,
      image: "assets/kits/ROTINA_NOTURNA.jpg",
      gallery: [
        "assets/kits/ROTINA_NOTURNA.jpg",
        "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png",
        "assets/products/RETINOID + SOMBRA + ALPHA (1).png",
        "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png"
      ],
      summary: "Ritual noturno completo de 3 passos para higienizar sem agredir, renovar com Retinaldeído e selar a barreira com Ceramidas.",
      benefitsList: [
        "Protocolo noturno completo com Frete Grátis desbloqueado",
        "Técnica sandwich/buffer integrada para zero sensibilidade",
        "Melhora visível na textura, poros e linhas em 4 semanas"
      ],
      resultsText: "96% aprovaram o conforto cuturno ao acordar e o viço imediato já nos primeiros 7 dias.",
      actives: [
        { name: "Retinaldeído + Retinol", role: "Renovação celular acelerada e síntese de colágeno." },
        { name: "Ceramidas Biomiméticas", role: "Reposição lipídica profunda durante o sono." },
        { name: "Aminoácidos de Glicina", role: "Limpeza fisiológica suave pré-tratamento." }
      ],
      usageSteps: [
        "Lave o rosto à noite com o Freshen Cleansing Foam e seque completamente.",
        "Aplique 2 pumps do Powerful Retinoid no rosto e pescoço.",
        "Finalize com o AquaPro Ceramida Gel para blindar a barreira cutânea."
      ],
      usageWarning: "Uso noturno. Pela manhã, higienize a pele e aplique protetor solar.",
      inci: "Aqua, Niacinamide, Cetearyl Alcohol, Glycerin, Caprylic/Capric Triglyceride, Retinol, Retinal, Ectoin, Creatine, Lactobacillus/Soybean Ferment Extract, Santalum Album Wood Extract.",
      bundleIds: ["freshen_cleansing_foam", "powerful_retinoid", "aquapro_ceramida"]
    }
  ],

  products: [
    {
      id: "lumiscent_lavander",
      sku: "TJL-SKU-009",
      ean: "7898965429577",
      line: "Lumiscent Body Mist",
      format: "Lavander Thé Bleu",
      price: 168.00,
      category: "corporal",
      concern: "manchas",
      volume: "100ml",
      rating: "5,0",
      reviewsCount: 10,
      image: "assets/products/MIST-LAVANDER-THE-BLEU-SOMBRA-ALPHA.png",
      gallery: [
        "assets/products/MIST-LAVANDER-THE-BLEU-SOMBRA-ALPHA.png",
        "assets/editorial/img-produto-2-mobile.jpg",
        "assets/editorial/descricap-lavandert-1.jpg",
        "assets/editorial/texture-cream-swatch.jpg",
        "assets/editorial/descricap-lavander-3.jpg",
        "assets/editorial/img-produto-3-mobile.jpg"
      ],
      galleryCaptions: [
        "Frasco 100ml · Névoa corporal de tratamento clareador e neurobiologia cutânea",
        "Aplicação prática 360° com absorção em 30 segundos e toque 100% seco",
        "Lavanda Francesa & Chá Azul: ativação dos receptores olfativos OR10A6 e OR2AG2",
        "Emulsão líquida biomimética rica em Niacinamida e Xilitol Prebiótico",
        "Biotecnologia Hydrolyzed Yeast Protein para restauração da barreira corporal",
        "Assinatura olfativa relaxante com eficácia clínica comprovada em 28 dias"
      ],
      summary: "Névoa corporal hidratante e iluminadora com Niacinamida, Xilitol Prebiótico e neurobiologia cutânea (Lavanda & Chá Azul) que uniformiza o tom da pele, atenua manchas e fortalece a barreira com toque 100% seco.",
      aboutFull: "O Lumiscent Body Mist Lavander Thé Bleu inaugura uma nova categoria de dermocosmético corporal na The Joy Lab: une ativos clínicos de tratamento facial (Niacinamida pura, Hydrolyzed Yeast Protein e Xilitol Prebiótico) à ciência da Neurobiologia Cutânea. Sua fragrância funcional foi desenhada para ativar receptores olfativos expressos nos queratinócitos da pele (OR10A6 e OR2AG2), reduzindo marcadores de estresse oxidativo enquanto clareia áreas escurecidas e restaura a hidratação natural.",
      keyPills: [
        "Uniformização de Manchas",
        "Neurobiologia OR10A6",
        "Barreira & Microbioma",
        "Toque 100% Seco"
      ],
      benefitsList: [
        "Auxilia na redução da aparência de manchas corporais (axilas, colo, ombros, costas e áreas de atrito)",
        "Estimula a síntese natural de lipídios e ceramidas epidérmicas com Hydrolyzed Yeast Protein",
        "Fortalece a barreira cutânea e equilibra a microbiota com Xilitol Prebiótico por 24h",
        "Ativa receptores olfativos cutâneos (OR10A6 e OR2AG2), promovendo relaxamento e viço",
        "Bruma ultraligera de rápida absorção (30 segundos) que não mancha roupas"
      ],
      resultsText: "Em estudo clínico e de percepção durante 28 dias de uso contínuo: 90% sentiram a pele imediatamente mais hidratada e sedosa, 87% destacaram a assinatura olfativa relaxante e sensação de bem-estar, 83% notaram mais luminosidade e viço, e 80% perceberam a pele mais uniforme com atenuação de manchas.",
      clinicalMetrics: [
        { pct: 90, label: "sentiram a pele profundamente hidratada, macia e sedosa sem resíduo oleoso" },
        { pct: 87, label: "relataram bem-estar imediato e evolução na qualidade da pele com a neurobiologia olfativa" },
        { pct: 83, label: "notaram aumento visível da luminosidade natural e viço do colo, braços e corpo" },
        { pct: 80, label: "observaram tonalidade mais uniforme e atenuação de marcas escurecidas em 28 dias" }
      ],
      beforeAfter: {
        beforeImg: "assets/editorial/visia-before.jpg",
        afterImg: "assets/editorial/visia-after.jpg",
        caption: "Análise clínica em 28 dias de uso contínuo · Uniformização do tom e restauração da barreira"
      },
      actives: [
        {
          name: "Niacinamida (Vitamina B3)",
          concentration: "Grau Farmacêutico",
          image: "assets/editorial/texture-gel-macro.jpg",
          role: "Auxilia na redução da aparência de manchas e diferenças de tonalidade ao inibir a transferência de melanossomas, além de contribuir diretamente para a hidratação e o fortalecimento da barreira cutânea."
        },
        {
          name: "Hydrolyzed Yeast Protein",
          concentration: "Complexo Biotecnológico",
          image: "assets/editorial/lab-pipette-drop.jpg",
          role: "Fração proteica obtida por biotecnologia que estimula a síntese de lipídios epidérmicos essenciais, promovendo maciez, luminosidade, recuperação estrutural e resiliência contra o atrito diário."
        },
        {
          name: "Xilitol Prebiótico",
          concentration: "Osmoprotetor & Microbioma",
          image: "assets/editorial/active-sandalwood-petri.jpg",
          role: "Otimiza o fluxo hídrico através das aquaporinas entre as camadas da pele e preserva o microbioma cutâneo saudável, impedindo a perda de água transepidérmica (TEWL)."
        },
        {
          name: "Lavanda Francesa & Chá Azul",
          concentration: "Neurobiologia OR10A6 / OR2AG2",
          image: "assets/editorial/descricap-lavander-3.jpg",
          role: "Moléculas aromáticas funcionais que interagem com receptores olfativos da epiderme, modulando o estresse cutâneo e proporcionando uma assinatura olfativa elegante e relaxante."
        }
      ],
      usageSteps: [
        "Aplique de 4 a 6 borrifadas diretamente sobre a pele limpa e seca do corpo (colo, pescoço, braços, costas ou áreas com manchas).",
        "Espalhe suavemente com as mãos caso deseje cobrir áreas maiores ou deixe a névoa assentar naturalmente.",
        "Aguarde cerca de 30 segundos antes de se vestir — o acabamento é 100% seco, aveludado e não transfere para os tecidos."
      ],
      usageMeta: {
        quantity: "4 a 6 borrifadas",
        moment: "Manhã e Noite (pós-banho)",
        area: "Corpo, colo, pescoço e áreas de atrito"
      },
      usageWarning: "Pode ser aplicado pela manhã após o banho e reaplicado à noite antes de dormir. Compatível com todos os tipos de pele, inclusive sensíveis. Não fotossensibilizante (pode ser usado no verão).",
      inci: "Aqua, Niacinamide, Diisopropyl Sebacate, Propanediol, Glycerin, Alcohol, Parfum, Methyl Gluceth-20, C14-22 Alcohols, Xylitol, PPG-12-Buteth-16, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, C12-20 Alkyl Glucoside, Sodium Gluconate, Pentaerythrityl Tetra-di-t-Butyl Hydroxyhydrocinnamate, Menthone Glycerin Acetal, Ethylhexylglycerin, Polysorbate 60, Benzotriazolyl Dodecyl p-Cresol, Sorbitan Isostearate, Citric Acid, Sodium Benzoate, Hydrolyzed Yeast Protein, Coumarin, Eucalyptus Globulus Oil, Geranyl Acetate, Lavandula Oil/Extract, Tetramethyl Acetyloctahydronaphthalenes, Linalool, Linalyl Acetate.",
      bundleIds: ["power_clarity", "power_bright_stick", "lumiscent_lavander"]
    },
    {
      id: "aquapro_ceramida",
      sku: "TJL-SKU-001",
      ean: "7898965429492",
      line: "AquaPro Ceramida",
      format: "Gel Hidratante Facial",
      price: 169.00,
      category: "tratamento",
      concern: "hidratacao",
      volume: "50ml",
      rating: "5,0",
      reviewsCount: 46,
      image: "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png",
        "assets/products/AQUAPRO COOLER + SOMBRA + ALPHA (1).png",
        "assets/products/POWERFUL FORCE + SOMBRA + ALPHA (1).png",
        "assets/figma/product-card-sample.png"
      ],
      summary: "Gel facial hidratante que estimula a reposição de ceramidas, restaura a barreira cutânea e devolve firmeza sem pesar.",
      benefitsList: [
        "Repõe lipídios essenciais (Ceramidas NP, AP e EOP) com textura gel refrescante",
        "Acalma irritações e reduz a perda de água transepidérmica (TEWL) em 24h",
        "Não comedogênico: perfeito para peles mistas, oleosas ou sensibilizadas por ácidos"
      ],
      resultsText: "97% dos usuários sentiram a pele profundamente hidratada sem brilho excessivo; 93% relataram redução da sensibilidade no uso combinado com retinoides.",
      actives: [
        { name: "Complexo de Ceramidas & Fitoesteróis", role: "Restauração biomimética da matriz intercelular para blindar a barreira cutânea." },
        { name: "Niacinamida", role: "Auxilia na redução da aparência de manchas e diferenças de tonalidade, além de contribuir para a hidratação e o fortalecimento da barreira cutânea." },
        { name: "Lactobacillus/Soybean Ferment", role: "Pós-biótico fermentado que equilibra a microbiota e melhora a elasticidade." },
        { name: "Santalum Album Wood Extract", role: "Ativo botânico calmante que reduz o estresse oxidativo e a vermelhidão." }
      ],
      usageSteps: [
        "Aplique de 1 a 2 pumps nas mãos após a limpeza ou após o seu sérum de tratamento.",
        "Espalhe suavemente pelo rosto, área dos olhos e pescoço com movimentos ascendentes.",
        "Utilize diariamente pela manhã (antes do protetor solar) e à noite."
      ],
      usageWarning: "Excelente para recuperar a barreira cutânea no pós-procedimento ou em rotinas noturnas com Powerful Retinoid.",
      inci: "Aqua, Dicaprylyl Ether, Dimethicone, Glycerin, Niacinamide, Propanediol, Lactobacillus/Soybean Ferment Extract, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Santalum Album (Sandalwood) Wood Extract, Octyldodecanol, Caprylyl Glycol, Ethylhexyl Polyhydroxystearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Dibutyl Adipate, Divinyldimethicone/Dimethicone Crosspolymer, Citric Acid, Polysorbate 60, Sorbitan Isostearate, Caprylhydroxamic Acid, Sodium Gluconate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Pentylene Glycol, Parfum, CI 14700, Linalyl Acetate, Pinene, Terpineol.",
      bundleIds: ["aquapro_ceramida", "aquapro_cooler", "powerful_force"]
    },
    {
      id: "power_clarity",
      sku: "TJL-SKU-002",
      ean: "7898965429508",
      line: "Power Clarity",
      format: "Sérum Clareador Facial",
      price: 191.00,
      category: "tratamento",
      concern: "manchas",
      volume: "30ml",
      rating: "5,0",
      reviewsCount: 38,
      image: "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png",
        "assets/products/POWER BRIGHT STICK + SOMBRA + ALPHA (1).png",
        "assets/figma/product-card-sample.png"
      ],
      summary: "Sérum de alta tecnologia para clareamento de hiperpigmentações, manchas pós-acne e melasma, uniformizando o tom da pele.",
      benefitsList: [
        "Atua antes, durante e depois da formação da melanina sem efeito rebote",
        "Seguro para uso diurno e no verão (não fototóxico e não descamativo)",
        "Ilumina o tom geral do rosto já nas primeiras 2 semanas"
      ],
      resultsText: "Em 28 dias: 92% de eficácia percebida na uniformização de manchas solares e melasma com zero relato de ardência.",
      actives: [
        { name: "PhE-Resorcinol", role: "Potente inibidor da tirosinase com eficácia clínica superior e alta estabilidade." },
        { name: "Undecylenoyl Phenylalanine", role: "Antagonista do receptor de melanotropina que bloqueia o gatilho hormonal/solar da mancha." },
        { name: "Niacinamida", role: "Impede a subida do pigmento para a superfície e fortalece a barreira." },
        { name: "Creatina & Hamamélis", role: "Energia celular antioxidante e refinamento da textura dos poros." }
      ],
      usageSteps: [
        "Aplique 3 a 4 gotas nas mãos limpas e secas.",
        "Espalhe uniformemente pelo rosto, pescoço e colo até completa absorção.",
        "Aplique pela manhã e à noite antes do hidratante."
      ],
      usageWarning: "Durante o dia, associe sempre ao uso de protetor solar FPS 30 ou superior para potencializar o clareamento.",
      inci: "Aqua, Caprylic/Capric Triglyceride, Niacinamide, Propanediol, Alcohol, PEG-100 Stearate, Glyceryl Stearate, Creatine, Undecylenoyl Phenylalanine, Glycerin, Phenylethyl Resorcinol, Hamamelis Virginiana Leaf Extract, Polylysine, Pentylene Glycol, Phenoxyethanol, 1-Methylhydantoin-2-Imide, Caprylyl Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Silica, Lavandula Oil Extract, Disodium EDTA, Xanthan Gum, Parfum, Tetramethyl Acetyloctahydronaphthalenes, Linalyl Acetate, Sodium Hydroxide, Coumarin, Geranyl Acetate.",
      bundleIds: ["power_clarity", "power_bright_stick", "lumiscent_lavander"]
    },
    {
      id: "powerful_retinoid",
      sku: "TJL-SKU-003",
      ean: "7898965429515",
      line: "Powerful Retinoid",
      format: "Sérum Renovador Noturno",
      price: 244.00,
      category: "tratamento",
      concern: "renovacao",
      volume: "30ml",
      rating: "5,0",
      reviewsCount: 41,
      image: "assets/products/RETINOID + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/RETINOID + SOMBRA + ALPHA (1).png",
        "assets/products/POWERFUL FORCE + SOMBRA + ALPHA (1).png",
        "assets/figma/product-card-sample.png"
      ],
      summary: "Sérum antissinais noturno de alta potência que combina Retinaldeído (ação rápida) e Retinol puro encapsulado para renovação celular e firmeza.",
      benefitsList: [
        "Dupla tecnologia retinoide: Retinal (11x mais rápido) + Retinol Encapsulado de liberação gradual",
        "Enriquecido com Ectoína, Niacinamida e Neurocosmético calmante para zero descamação",
        "Reduz rugas finas, poros dilatados e melhora a firmeza dérmica"
      ],
      resultsText: "95% aprovaram a renovação da textura na primeira semana; 89% notaram redução de linhas finas em 28 dias.",
      actives: [
        { name: "Retinaldeído (Retinal)", role: "Precursor direto do ácido retinoico com ação renovadora e antibacteriana superior." },
        { name: "Retinol Puro Encapsulado", role: "Liberação controlada ao longo da noite que evita picos de irritação." },
        { name: "Ectoína & Niacinamida", role: "Proteção da barreira cutânea e prevenção do ressecamento induzido por retinoides." },
        { name: "4-T-Butylcyclohexanol", role: "Ativo neurocosmético que inibe o receptor TRPV1, bloqueando sensações de pinicamento." }
      ],
      usageSteps: [
        "Aplique 2 a 3 pumps na palma da mão exclusivamente à noite.",
        "Espalhe sobre o rosto limpo e completamente seco, evitando o canto dos olhos e lábios.",
        "Pela manhã, lave o rosto e aplique filtro solar."
      ],
      usageWarning: "Uso exclusivamente noturno. Na primeira semana, utilize em noites alternadas. Contraindicado para gestantes.",
      inci: "Aqua (Water), Niacinamide, Cetearyl Alcohol, Glycerin, Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Propanediol, Sodium Acrylates Copolymer, Creatine, Cetearyl Glucoside, Tocopherol, Octyldodecanol, Phenoxyethanol, Cellulose Acetate Butyrate, Pentylene Glycol, Lecithin, 1-Methylhydantoin-2-Imide, 4-T-Butylcyclohexanol, Ectoin, Sodium Metabisulfite, Cellulose, Tricaprylin, Santalum Album (Sandalwood) Wood Extract, Disodium EDTA, Ethylhexylglycerin, Retinol, Retinal, Lavandula Oil, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Parfum (Fragrance), Coumarin, Geranyl Acetate, Linalyl Acetate, Tetramethyl Acetyloctahydronaphthalenes, BHT.",
      bundleIds: ["powerful_retinoid", "powerful_force", "aquapro_ceramida"]
    },
    {
      id: "aquapro_cooler",
      sku: "TJL-SKU-004",
      ean: "7898965429522",
      line: "AquaPro Cooler",
      format: "Sérum Antioxidante Refrescante",
      price: 153.00,
      category: "tratamento",
      concern: "hidratacao",
      volume: "30g",
      rating: "5,0",
      reviewsCount: 34,
      image: "assets/products/AQUAPRO COOLER + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/AQUAPRO COOLER + SOMBRA + ALPHA (1).png",
        "assets/products/AQUAPRO CERAMIDA + SOMBRA + ALPHA (1).png"
      ],
      summary: "Sérum hidratante refrescante de efeito gelado imediato que combate o estresse oxidativo, calor urbano, poluição e acalma o rubor facial.",
      benefitsList: [
        "Tecnologia Cooling que reduz a sensação térmica da pele sem mentol irritante",
        "Protege as células contra o inflammaging térmico e luz azul",
        "Acabamento aveludado perfeito para preparar a pele antes do FPS"
      ],
      resultsText: "96% sentiram alívio imediato do calor e vermelhidão após exposição solar ou treino.",
      actives: [
        { name: "Ectoína", role: "Molécula extremófila que blinda as proteínas celulares contra o choque térmico e UV." },
        { name: "Polifenóis de Hamamélis", role: "Ação antioxidante, vasoconstritora suave e redutora de poros." },
        { name: "Creatina Biodisponível", role: "Recarrega o ATP celular para combater a fadiga cutânea." },
        { name: "Menthone Glycerin Acetal", role: "Agente refrescante de liberação lenta e alta tolerância." }
      ],
      usageSteps: [
        "Aplique 2 pumps nas mãos e espalhe no rosto e pescoço.",
        "Pressione levemente as palmas no rosto para ativar o efeito refrescante.",
        "Finalize com o AquaPro Ceramida ou protetor solar."
      ],
      usageWarning: "Pode ser mantido em temperatura ambiente ou na porta da geladeira para um efeito crio-calmante extra.",
      inci: "Water (Aqua), Alcohol, Lauroyl Lysine, Dimethicone, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, Coceth-7, Menthone Glycerin Acetal, Pentylene Glycol, Polysorbate 60, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Ectoin, Silica, Creatine, Caprylyl Glycol, Xanthan Gum, PPG-1-PEG-9 Lauryl Glycol Ether, PEG-40 Hydrogenated Castor Oil, 1-Methylhydantoin-2-Imide, Phenoxyethanol, Disodium EDTA, Fragrance, CI 42090, Limonene, Citral.",
      bundleIds: ["aquapro_cooler", "aquapro_ceramida", "powerful_force"]
    },
    {
      id: "powerful_force",
      sku: "TJL-SKU-005",
      ean: "7898965429539",
      line: "Powerful Force",
      format: "Sérum Fortalecedor Facial",
      price: 159.90,
      category: "tratamento",
      concern: "renovacao",
      volume: "50ml",
      rating: "5,0",
      reviewsCount: 58,
      image: "assets/products/POWERFUL FORCE + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/POWERFUL FORCE + SOMBRA + ALPHA (1).png",
        "assets/products/RETINOID + SOMBRA + ALPHA (1).png"
      ],
      summary: "Sérum multifuncional nº 1 em vendas com Niacinamida 5% e Sacran que fortalece a barreira cutânea, reduz vermelhidão, poros e linhas finas.",
      benefitsList: [
        "Rendimento superior em frasco de 50ml para uso diurno e noturno",
        "Forma um véu invisível com Sacran que retém 5x mais água que o Ácido Hialurônico",
        "Controla a produção de sebo com Undecylenoyl Glycine"
      ],
      resultsText: "Mais de 2.700 unidades vendidas no último mês com 98% de aprovação em peles sensíveis e acneicas.",
      actives: [
        { name: "Niacinamida 5%", role: "Concentração clínica ideal para uniformizar, controlar oleosidade e estimular ceramidas." },
        { name: "Sacran (Polissacarídeo Raro)", role: "Extraído da microalga japonesa Aphanothece sacrum, promove efeito tensor e ultra-hidratação." },
        { name: "Betaína & Ácido Hialurônico", role: "Osmoproteção imediata e preenchimento superficial de linhas de desidratação." },
        { name: "Undecylenoyl Glycine", role: "Lipoaminoácido purificante que equilibra a microbiota de peles oleosas." }
      ],
      usageSteps: [
        "Aplique 2 pumps sobre a pele limpa pela manhã e à noite.",
        "Espalhe pelo rosto e pescoço antes de outros séruns mais densos ou do hidratante.",
        "Finalize com filtro solar pela manhã."
      ],
      usageWarning: "Curinga universal: compatível com Vitamina C, Retinoides, Ácidos e Clareadores.",
      inci: "Water, Betaine, Niacinamide, Glycerin, Caprylic/Capric Triglyceride, Pentylene Glycol, Aphanothece Sacrum Polysaccharides, Propanediol, Undecylenoyl Glycine, Polyglyceryl-6 Stearate, Polyglyceryl-6 Behenate, Pullulan, Dimethicone, Cetearyl Dimethicone Crosspolymer, Cetearyl Alcohol, Sodium Hyaluronate, Algin, Hydroxyacetophenone, Xanthan Gum, Polyacrylate Crosspolymer-6, Caprylyl Glycol, Glyceryl Polyacrylate, 1,2-Hexanediol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Disodium EDTA, Aminomethyl Propanol, Fragrance.",
      bundleIds: ["powerful_force", "powerful_retinoid", "aquapro_ceramida"]
    },
    {
      id: "power_bright_stick",
      sku: "TJL-SKU-006",
      ean: "7898965429546",
      line: "Power Bright Stick",
      format: "Stick Clareador Facial",
      price: 146.00,
      category: "tratamento",
      concern: "manchas",
      volume: "15g",
      rating: "5,0",
      reviewsCount: 29,
      image: "assets/products/POWER BRIGHT STICK + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/POWER BRIGHT STICK + SOMBRA + ALPHA (1).png",
        "assets/products/POWER CLARITY + SOMBRA + ALPHA (1).png"
      ],
      summary: "Clareador prático em formato bastão para aplicação pontual de alta precisão em manchas solares, melasma localizado, marcas de acne e olheiras.",
      benefitsList: [
        "Alta concentração de PhE-Resorcinol e Sândalo diretamente sobre a mancha",
        "Deslize aveludado com Manteiga de Karité e Vitamina E sem esfarelar a maquiagem",
        "Formato portátil para levar na bolsa e reaplicar ao longo do dia"
      ],
      resultsText: "90% relataram suavização de manchas pontuais e olheiras pigmentares em 4 semanas.",
      actives: [
        { name: "17 Bioativos de Santalum Album", role: "Fração concentrada da madeira de sândalo que reduz a melanogênese local." },
        { name: "PhE-Resorcinol", role: "Ação despigmentante direta sobre acúmulos de melanina." },
        { name: "Vitamina E (Tocopheryl Acetate)", role: "Antioxidante lipofílico que previne a peroxidação lipídica." },
        { name: "Manteiga de Karité", role: "Nutrição e proteção da barreira na área delicada dos olhos e maçãs do rosto." }
      ],
      usageSteps: [
        "Gire a base do stick e deslize suavemente 2 vezes diretamente sobre as manchas ou olheiras.",
        "Dê leves batidinhas com a ponta do dedo anelar se desejar fundir com a pele.",
        "Use após o Power Clarity Sérum e antes do protetor solar."
      ],
      usageWarning: "Uso externo diurno e noturno. Mantenha em local fresco.",
      inci: "Coco-Caprylate, Synthetic Wax, Dimethicone, Butyrospermum Parkii (Shea) Butter, Polymethylsilsesquioxane, Octyldodecanol, Santalum Album (Sandalwood) Wood Extract, Tocopheryl Acetate, Phenylethyl Resorcinol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Fragrance, Limonene.",
      bundleIds: ["power_clarity", "power_bright_stick", "lumiscent_lavander"]
    },
    {
      id: "freshen_cleansing_oil",
      sku: "TJL-SKU-007",
      ean: "7898965429553",
      line: "Freshen Cleansing Oil",
      format: "Óleo de Limpeza Facial",
      price: 219.90,
      category: "limpeza",
      concern: "limpeza",
      volume: "150ml",
      rating: "5,0",
      reviewsCount: 31,
      image: "assets/products/FRESHEN CLEANSING OIL + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/FRESHEN CLEANSING OIL + SOMBRA + ALPHA (1).png",
        "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png"
      ],
      summary: "Óleo de limpeza facial 100% solúvel em água que derrete maquiagem à prova d'água, filtro solar físico e cravos sem obstruir os poros.",
      benefitsList: [
        "Transforma-se instantaneamente numa emulsão leitosa ao contato com a água",
        "Não arde os olhos e não deixa resíduo oleoso",
        "Complexo de 5 algas marinhas que remineraliza a pele durante a limpeza"
      ],
      resultsText: "99% de remoção de filtro solar resistente na primeira aplicação sem esforço mecânico.",
      actives: [
        { name: "Complexo de 5 Algas Marinhas", role: "Ascophyllum, Crithmum, Fucus e Laminaria que desintoxicam e nutrem a epiderme." },
        { name: "Óleo de Girassol & Coco-Caprylate", role: "Emolientes leves biomiméticos que dissolvem o sebo oxidado por afinidade." },
        { name: "Plankton Extract", role: "Proteção da vitalidade celular durante a higienização." }
      ],
      usageSteps: [
        "Aplique 2 pumps nas mãos secas e massageie sobre o rosto seco (inclusive olhos e lábios).",
        "Molhe as mãos com água e continue massageando para transformar o óleo em emulsão leitosa.",
        "Enxágue abundantemente com água corrente."
      ],
      usageWarning: "Sempre inicie a aplicação com as mãos e o rosto secos para máxima performance de dissolução.",
      inci: "Coco-Caprylate, Helianthus Annuus (Sunflower) Seed Oil, Dibutyl Adipate, Cetyl Ethylhexanoate, PEG-20 Glyceryl Triisostearate, Isopropyl Palmitate, Plankton Extract, Ascophyllum Nodosum Extract, Crithmum Maritimum Extract, Fucus Vesiculosus Extract, Laminaria Hyperborea Extract, Laminaria Digitata Extract, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Fragrance, Linalool, Limonene, Hexyl Cinnamal.",
      bundleIds: ["freshen_cleansing_oil", "freshen_cleansing_foam", "aquapro_ceramida"]
    },
    {
      id: "freshen_cleansing_foam",
      sku: "TJL-SKU-008",
      ean: "7898965429560",
      line: "Freshen Cleansing Foam",
      format: "Espuma de Limpeza Suave",
      price: 89.90,
      category: "limpeza",
      concern: "limpeza",
      volume: "150ml",
      rating: "5,0",
      reviewsCount: 42,
      image: "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png",
      gallery: [
        "assets/products/FRESHEN CLEANSING FOAM + SOMBRA + ALPHA (1).png",
        "assets/products/FRESHEN CLEANSING OIL + SOMBRA + ALPHA (1).png"
      ],
      summary: "Espuma cremosa de limpeza facial com aminoácidos de glicina, betaína e óleo de Yuzu que purifica os poros mantendo a hidratação natural.",
      benefitsList: [
        "Livre de sulfatos agressivos (SLS/SLES): limpa profundamente sem repuxar",
        "Controla a oleosidade e devolve luminosidade imediata",
        "Toque refrescante suave e alto rendimento"
      ],
      resultsText: "97% afirmaram que a pele ficou limpa, macia e confortável sem sensação de ressecamento.",
      actives: [
        { name: "Sodium Lauroyl Glutamate & Undecylenoyl Glycine", role: "Tensoativos derivados de aminoácidos que limpam seletivamente sem danificar proteínas da pele." },
        { name: "Betaína Purificada", role: "Mantém a água intracelular durante o enxágue." },
        { name: "Óleo de Yuzu (Citrus Junos)", role: "Rico em Vitamina C natural e antioxidantes." }
      ],
      usageSteps: [
        "Umedeça o rosto com água.",
        "Coloque uma pequena quantidade na palma da mão e adicione água até formar uma espuma rica.",
        "Massageie o rosto em movimentos circulares e enxágue."
      ],
      usageWarning: "Ideal para uso manhã e noite, isoladamente ou como segundo passo do Double Cleansing.",
      inci: "Aqua (Water), Glycerin, Potassium Stearate, Potassium Myristate, Potassium Laurate, Sodium Lauroyl Glutamate, Acrylates Copolymer, Stearic Acid, Palmitic Acid, Parfum (Fragrance), Glyceryl Stearate, Betaine, Undecylenoyl Glycine, Menthone Glycerin Acetal, Citrus Junos Fruit Oil, Disodium EDTA, Hexyl Cinnamal, Limonene, Linalool.",
      bundleIds: ["freshen_cleansing_foam", "freshen_cleansing_oil", "aquapro_ceramida"]
    },
    {
      id: "lumiscent_bergamot",
      sku: "TJL-SKU-010",
      ean: "7898965429584",
      line: "Lumiscent Body Mist",
      format: "Bergamot Flower",
      price: 168.00,
      category: "corporal",
      concern: "manchas",
      volume: "100ml",
      rating: "5,0",
      reviewsCount: 14,
      image: "assets/products/MIST-BERGAMOT-FLOWER-SOMBRA-ALPHA.png",
      gallery: [
        "assets/products/MIST-BERGAMOT-FLOWER-SOMBRA-ALPHA.png",
        "assets/products/MIST-LAVANDER-THE-BLEU-SOMBRA-ALPHA.png"
      ],
      summary: "Névoa corporal de tratamento clareador, hidratação prebiótica e neurobiologia cutânea com notas cítricas solares de Flor de Bergamota.",
      benefitsList: [
        "Uniformiza áreas hiperpigmentadas do corpo com Niacinamida",
        "Hidratação inteligente em spray que não mancha roupas",
        "Fragrância cítrica floral energizante para o dia a dia"
      ],
      resultsText: "93% sentiram pele mais luminosa, macia e perfumada com absorção instantânea.",
      actives: [
        { name: "Niacinamida", role: "Auxilia na redução da aparência de manchas e diferenças de tonalidade corporal." },
        { name: "Hydrolyzed Yeast Protein", role: "Fortalece a função barreira e estimula a renovação epidérmica." },
        { name: "Xilitol Prebiótico", role: "Hidratação de longa duração e equilíbrio do microbioma." },
        { name: "Citrus Aurantium Peel Oil", role: "Óleo essencial natural revigorante e antioxidante." }
      ],
      usageSteps: [
        "Borrife generosamente pelo corpo após o banho.",
        "Espalhe levemente se desejar ou deixe secar naturalmente.",
        "Reaplique ao longo do dia para renovar o frescor e o tratamento."
      ],
      usageWarning: "Uso corporal diurno e noturno. Evite aplicar sobre pele recém-depilada lesionada.",
      inci: "Aqua, Niacinamide, Diisopropyl Sebacate, Propanediol, Glycerin, Alcohol, Parfum, Methyl Gluceth-20, C14-22 Alcohols, Xylitol, PPG-12-Buteth-16, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Isohexadecane, C12-20 Alkyl Glucoside, Sodium Gluconate, Menthone Glycerin Acetal, Pentaerythrityl Tetra-di-t-Butyl Hydroxyhydrocinnamate, Ethylhexylglycerin, Polysorbate 60, Benzotriazolyl Dodecyl p-Cresol, Sorbitan Isostearate, Citric Acid, Sodium Benzoate, Hydrolyzed Yeast Protein, Anethole, Citrus Aurantium Peel Oil, Geranyl Acetate, Limonene, Linalyl Acetate, Pinene, Rose Ketones, Terpineol.",
      bundleIds: ["power_clarity", "power_bright_stick", "lumiscent_bergamot"]
    }
  ],

  pdpReviews: [
    {
      id: "r1",
      author: "Mariana V.",
      verified: true,
      date: "Há 3 dias",
      rating: 5,
      skinType: "Pele Mista e Sensível",
      ageRange: "25 a 34 anos",
      benefit: "Uniformização e Hidratação",
      title: "Textura impecável e zero irritação!",
      comment: "Comprei pela indicação da Joyce e virou meu favorito absoluto. A pele absorve na hora, o cheiro é muito elegante e em 3 semanas minhas manchas clarearam visivelmente."
    },
    {
      id: "r2",
      author: "Fernanda L.",
      verified: true,
      date: "Há 1 semana",
      rating: 5,
      skinType: "Pele com Melasma",
      ageRange: "35 a 44 anos",
      benefit: "Clareamento sem efeito rebote",
      title: "Finalmente um clareador que não sensibiliza",
      comment: "Sempre tive receio de usar clareadores no verão, mas a linha da The Joy Lab fortaleceu minha barreira enquanto uniformizou o tom. Assinei a compra recorrente com 15% OFF!"
    },
    {
      id: "r3",
      author: "Camila R.",
      verified: true,
      date: "Há 2 semanas",
      rating: 5,
      skinType: "Pele Oleosa",
      ageRange: "25 a 34 anos",
      benefit: "Toque seco e viço imediato",
      title: "Alta performance real",
      comment: "Embalagem linda, minimalista e fórmula que entrega tudo o que promete. O atendimento e a entrega rápida em Curitiba foram nota 1000."
    },
    {
      id: "r4",
      author: "Dra. Juliana M.",
      verified: true,
      date: "Há 3 semanas",
      rating: 5,
      skinType: "Todos os tipos de pele",
      ageRange: "35 a 44 anos",
      benefit: "Sinergia de ativos clínicos",
      title: "Fórmula extremamente inteligente",
      comment: "A combinação de Niacinamida com prebióticos, Ectoína e PhE-Resorcinol mostra o cuidado científico da marca. Indico para minhas pacientes diariamente."
    }
  ],

  pdpFaqs: [
    {
      q: "Quem tem pele sensível ou rosácea pode usar?",
      a: "Sim! Todas as fórmulas da The Joy Lab são desenvolvidas com foco em alta tolerabilidade e respeito à barreira cutânea, combinando ativos de performance com agentes calmantes e prebióticos como Niacinamida, Ectoína, Sacran e 4-T-Butylcyclohexanol."
    },
    {
      q: "Pode ser usado no verão?",
      a: "Sim! Nossos séruns clareadores (Power Clarity e Power Bright Stick), hidratantes (Linha AquaPro), fortalecedor (Powerful Force) e brumas corporais (Lumiscent) não são fotossensibilizantes e podem ser usados no verão. Apenas o Powerful Retinoid tem uso exclusivamente noturno, sempre associado ao protetor solar pela manhã."
    },
    {
      q: "Em quanto tempo faz efeito?",
      a: "A hidratação, o frescor e o viço são percebidos já na primeira aplicação. Resultados clínicos de uniformização de manchas, textura e firmeza tornam-se visíveis a partir de 14 a 28 dias de uso contínuo."
    },
    {
      q: "Pode manchar no sol?",
      a: "Não! Diferente de ácidos descamativos agressivos, a tecnologia da The Joy Lab atua modulando a síntese de melanina e protegendo a célula contra o estresse oxidativo, sem afinar a epiderme e sem manchar no sol."
    },
    {
      q: "Qual a intensidade das fragrâncias e como funciona a Compra Recorrente?",
      a: "Nossas fragrâncias faciais são suaves e hipoalergênicas, e as brumas corporais Lumiscent possuem perfumação fina autoral de neurobiologia cutânea. Na Compra Recorrente você garante 15% OFF e escolha da frequência (mensal, 2, 3 ou 4 meses) podendo cancelar quando quiser."
    }
  ],

  socialProof: [
    {
      id: "rev-1",
      author: "@tabathabento",
      product: "Lumiscent Body Mist",
      productId: "lumiscent_lavander",
      quote: "Em 28 dias a textura e o tom dos ombros e colo ficaram super uniformes e o cheiro de Lavander Thé Bleu é viciante.",
      rating: "5.0",
      image: "assets/editorial/img-produto-2-mobile.jpg"
    },
    {
      id: "rev-2",
      author: "@drpedrodermato",
      product: "Powerful Retinoid",
      productId: "powerful_retinoid",
      quote: "A combinação de Retinal + Retinol encapsulado entrega eficácia clínica com tolerabilidade rara na dermatologia.",
      rating: "5.0",
      image: "assets/editorial/02-powerful-retinoid-lab-upright.png"
    },
    {
      id: "rev-3",
      author: "@joycemakeup",
      product: "Lumiscent Bergamot & Lavander",
      productId: "lumiscent_lavander",
      quote: "Hidratação prebiótica que seca em 30 segundos sem manchar a roupa. Minha dupla favorita pós-banho!",
      rating: "5.0",
      image: "assets/editorial/img-produto-3-mobile.jpg"
    },
    {
      id: "rev-4",
      author: "@luizasobral",
      product: "Lumiscent Body Mist",
      productId: "lumiscent_lavander",
      quote: "A neurobiologia cutânea realmente relaxa antes de dormir enquanto a Niacinamida trata a barreira da pele.",
      rating: "5.0",
      image: "assets/editorial/lavander-editorial-vertical.jpg"
    },
    {
      id: "rev-5",
      author: "@gabirizental",
      product: "Bergamot Flower Mist",
      productId: "lumiscent_bergamot",
      quote: "Frescor cítrico elegante e pele iluminada o dia inteiro sem efeito pegajoso.",
      rating: "5.0",
      image: "assets/editorial/img-produto-1-mobile.jpg"
    }
  ]
};
