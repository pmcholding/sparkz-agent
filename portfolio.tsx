"use client";

import { useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

const portfolioItems = [
    {
        title: "Lemon & Menez",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/5jldwq4ld7n-1762958007529.jpg",
        link: "https://www.lemonemenez.com.br/",
        category: "Consultoria / Mentoria",
    },
    {
        title: "ONG Tarfet Tri",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/0coa9im7odlf-1762957429279.jpg",
        link: "https://www.targettri.ong.br/",
        category: "ONG / Projeto Social",
    },
    {
        title: "Summer Pet",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/ycnbynf626l-1762959238439.jpg",
        link: "https://www.summerpet.com.br/",
        category: "Pet",
    },
    {
        title: "Vini Personalizados",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/tr933z1zhq-1762958799293.jpg",
        link: "https://www.vinipersonalizados.com.br/",
        category: "Gráfica / Comunicação",
    },
    {
        title: "Aktoro",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/of9tn659n8i-1762957581717.jpg",
        link: "https://www.aktoroprofi.com.br/",
        category: "Serviços",
    },
    {
        title: "SMARTEVO",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/vvezdhzq5er-1762958527466.jpg",
        link: "https://smartevo.com.br/",
        category: "Tecnologia",
    },
    {
        title: "Reforma Balneário Camboriu",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/fkyamn85ef-1762959694324.jpg",
        link: "https://www.reformabalneariocamboriu.com.br/",
        category: "Imóveis / Reformas",
    },
    {
        title: "Moda Índia",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/n2gx2svb44b-1762957073991.jpg",
        link: "https://www.modaindia.com.br/",
        category: "Moda",
    },
    {
        title: "MB Dogs",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/svokn01k3j-1762959552924.jpg",
        link: "https://mbdogs.com.br/",
        category: "Pet",
    },
    {
        title: "Recicla Fácil",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/5rcomtqkj5-1762960021286.jpg",
        link: "https://www.reciclafacilsp.com.br/",
        category: "Serviços",
    },
    {
        title: "BIOSEG",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/kkgf02n2czg-1762960366456.jpg",
        link: "https://www.biosegseguranca.com.br/",
        category: "Serviços",
    },
    {
        title: "Toldos Rondônia",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/b6080knsmy8-1762960627979.jpg",
        link: "https://www.toldosrondonia.com.br/",
        category: "Serviços",
    },
    {
        title: "Protel",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/n6y3ym8qjza-1762960767099.jpg",
        link: "https://www.protelprotecaoeletronica.com.br/",
        category: "Serviços",
    },
    {
        title: "FT Marketing",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/he0e653csot-1762960890932.jpg",
        link: "https://www.ftpremium8.com.br/",
        category: "Marketing / Publicidade",
    },
    {
        title: "Sitec Sistemas",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/jv1oo2lekq-1762961032101.jpg",
        link: "https://www.sitec.seg.br/",
        category: "Tecnologia",
    },
    {
        title: "T&g MAX",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/8cpwqbwy0kq-1762961128386.jpg",
        link: "https://www.tegmaxdedetizadora.com.br/",
        category: "Serviços",
    },
    {
        title: "Focus Equilibrium",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/mvzvgafkasp-1763918203409.jpg",
        link: "https://tdahfocusequilibrium.com.br/",
        category: "Saúde",
    },
    {
        title: "Carvalho Consórcios",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/36j3p7o4zx-1762957137655.jpg",
        link: "https://www.carvalhoconsorcios.com.br/",
        category: "Consultoria / Mentoria",
    },
    {
        title: "Viero Shop",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/y604ztpv84c-1762959865884.jpg",
        link: "https://www.vieroshop.com.br/",
        category: "E-commerce",
    },
    {
        title: "Agência de Influenciadores Monsters",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/b8noob7dqng-1763822057213.png",
        link: "https://www.agenciamonstrossa.com.br/",
        category: "Marketing / Publicidade",
    },
    {
        title: "Fluxo Sistêmico",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/0kc4aw988f7l-1763917797515.jpg",
        link: "https://www.fluxosistemico.com.br/",
        category: "Consultoria / Mentoria",
    },
    {
        title: "ASAFE - Transformando Vidas Através do Esporte",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/20i8ue5gpr-1763917819241.jpg",
        link: "https://www.associacaoasafe.com.br/",
        category: "ONG / Projeto Social",
    },
    {
        title: "Robust - O Segredo de um Homem Robust",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/mp1vn47m9g-1763917946372.jpg",
        link: "https://www.originalrobust.com.br/",
        category: "Encapsulados",
    },
    {
        title: "RB Comunicação Visual",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/3d5b7h1ba7w-1762958218811.jpg",
        link: "https://www.graficarbvisual.com.br/",
        category: "Gráfica / Comunicação",
    },
    {
        title: "RM Consultoria & Informática",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/vkhpwkptb6-1763917989075.jpg",
        link: "https://www.rmci.com.br/",
        category: "Tecnologia",
    },
    {
        title: "Temperatura Certta",
        image: "https://mrrhfcmrlvompkmuwder.supabase.co/storage/v1/object/public/portfolio-images/qysmr12ak5j-1762959025651.jpg",
        link: "https://www.temperaturacertta.com.br/",
        category: "Serviços",
    },
];

const categories = ["Todos", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

export function Portfolio() {
    const [filter, setFilter] = useState("Todos");

    const filteredItems =
        filter === "Todos"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === filter);

    return (
        <section className="py-24 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                        Selected Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of our most impactful projects.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                filter === category
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative h-[400px] w-full block group"
                        >
                            <MagicCard
                                className="flex flex-col p-0 overflow-hidden border-none"
                                gradientColor="#262626"
                            >
                                <div className="flex flex-col h-full w-full">
                                    {/* Image Section */}
                                    <div className="relative flex-1 w-full overflow-hidden bg-neutral-900">
                                        <div
                                            className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="relative z-10 flex flex-col justify-between p-4 bg-card border-t border-white/10 h-[100px]">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground line-clamp-1" title={project.title}>
                                                {project.title}
                                            </h3>
                                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mt-1">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                            Ver site
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-external-link"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <BorderBeam
                                    size={250}
                                    duration={12}
                                    delay={index * 0.2}
                                    colorFrom="#ffaa40"
                                    colorTo="#9c40ff"
                                />
                            </MagicCard>
                        </a>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <p className="text-center text-muted-foreground py-12">
                        Nenhum projeto encontrado nesta categoria.
                    </p>
                )}
            </div>
        </section>
    );
}
