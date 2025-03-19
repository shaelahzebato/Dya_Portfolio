import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

function Cv() {
    return (
        <section className="mt-44 py-12 text-gray-800">
            <div className="grid grid-cols-1 gap-20">
                {/* Section Compétences max-w-4xl mx-auto  */}
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex items-center space-x-4 max-sm:flex-col max-sm:justify-center">
                        <span className="text-lg font-semibold tracking-[0.3em] uppercase">Compétences</span>
                        <div className="w-full max-w-xs h-[2px] bg-gray-800"></div>
                    </div>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed">
                        <li><strong>Langages :</strong> JavaScript (ES6+), Python</li>
                        <li><strong>Frameworks :</strong> ReactJS, Next.js, TailwindCSS, Node.js</li>
                        <li><strong>Bases de données :</strong> Firebase, MongoDB, MySQL</li>
                        <li><strong>Outils :</strong> Git, GitHub</li>
                        <li><strong>Méthodologies :</strong> Agile, Scrum</li>
                    </ul>
                </motion.div>

                {/* Section Expériences */}
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex items-center space-x-4 max-sm:flex-col max-sm:justify-center">
                        <span className="text-lg font-semibold tracking-[0.3em] uppercase">Expériences</span>
                        <div className="w-full max-w-xs h-[2px] bg-gray-800"></div>
                    </div>
                    <div className="mt-4 space-y-6 text-base leading-relaxed">
                        <div>
                            <h2 className="font-medium">🚀 DÉVELOPPEUSE FRONT-END – Rschain (2023-2024)</h2>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Refonte UI/UX d’un site e-commerce et développement d’un dashboard de suivi.</li>
                                <li>Automatisation de la correction de copies via un script en Node.js et Excel.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-medium">🔗 DÉVELOPPEUSE BLOCKCHAIN – Rschain (2022-2023)</h2>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Développement d’un portefeuille numérique sécurisé avec ReactJS.</li>
                                <li>Conception et déploiement d’une DApp pour la gestion des transactions blockchain.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-medium">💻 DÉVELOPPEUSE BÉNÉVOLE – Ivoire Dev Academy (2021)</h2>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Modernisation de l’interface du site Ivoire Dev Academy avec ReactJS et TailwindCSS.</li>
                                <li>Développement d’une application de gestion de budget.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-medium">🎓 STAGIAIRE – Arolitec (2020-2021)</h2>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Création d’une application météo interactive avec JavaScript et API météo.</li>
                                <li>Développement d’une API avec Python et Flask.</li>
                                <li>Conception UI/UX d’un site e-commerce automobile.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Section Éducation */}
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex items-center space-x-4 max-sm:flex-col max-sm:justify-center">
                        <span className="text-lg font-semibold tracking-[0.3em] uppercase">Éducation</span>
                        <div className="w-full max-w-xs h-[2px] bg-gray-800"></div>
                    </div>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed">
                        <li><strong>BTS Informatique :</strong> Groupe Loko (2016-2018)</li>
                        <li><strong>Baccalauréat D :</strong> Collège Anador (2015-2016)</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Cv;