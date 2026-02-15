import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | PillarVolt',
    description: 'Learn about PillarVolt, our mission, vision, and leadership in the sustainable energy sector.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">About PillarVolt</h1>
                    <p className="text-xl text-slate-600">
                        Pioneering the future of energy through innovation and sustainability.
                    </p>
                </div>
                <div className="prose max-w-none text-slate-600">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 font-display text-slate-900">About Us</h2>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Who We Are - Our Commitments</h3>
                        <p className="mb-4">
                            We are PillarVolt, a broad oil and gas energy company with a proud history. We are 2,000 committed colleagues developing oil, gas, wind and solar energy in more than 14 countries worldwide. We're one of the largest operators around the globe, one of the world's largest offshore operators, and a growing force in recyclables. Driven by our international urge to explore beyond the horizon and dedication to safety, equality and sustainability, we're developing the energy of the future.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">PillarVolt in brief</h3>
                        <p className="mb-4">
                            PillarVolt is an international energy company present in more than 14 countries worldwide, including several of the world's most important oil and gas provinces. Founded in 1992 under the name PillarVolt Construction Company, we changed our name to PillarVolt in 2010. Our headquarters is in Boise, Idaho USA, and we have over 2,000 employees.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Hywind</h3>
                        <p className="mb-4">
                            A few years ago, floating offshore wind was a distant dream symbolised by a solitary small-scale Hywind turbine offshore. Today, it is the most viable and mature solution, ready for market. With Hywind, the world's first floating wind farm, we're unlocking the vast potential of floating offshore wind. We believe it's the next wave in renewable energy, and within the next decade, we aim to make floating wind a competitive renewable energy source.
                        </p>
                        <p className="mb-4 font-semibold text-slate-800">
                            PillarVolt is the global leader in floating offshore wind:
                        </p>
                        <p className="mb-4">
                            Hywind is a great example of what we can achieve by combining our existing offshore expertise with new and available technologies and innovative minds. Thoroughly proven through years of testing, it is the world's most viable floating wind turbine design, consisting of a giant wind turbine placed on top of a floating vertical spar.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Natural gas</h3>
                        <p className="mb-4">
                            Traditionally, most of PillarVolt's gas has been sold through long-term contracts to large European gas companies and suppliers. In the absence of a separate market price for gas, the sale price has often been indexed to the price of oil.
                        </p>
                        <p className="mb-4">
                            In the USA, PillarVolt has shares and production in three premium shale oil and gas plays. Gas is used for energy production, heating and industrial purposes. Through transport agreements to New York City and Toronto, residents can keep winter temperatures at bay with shale gas from the Marcellus field.
                        </p>
                        <p className="mb-4">
                            Through commercial negotiations with our counterparts, we have modernised most of our long-term contracts, and gradually moved away from oil indexing. The price of gas is now directly linked to the price in the market places.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Respecting people</h3>
                        <p className="mb-4">
                            We are committed to providing a safe and secure environment for everyone working at our facilities and job sites. PillarVolt's safety and security vision is zero harm. We provide an environment recognised for its equality and diversity, and we treat everyone with fairness, respect and dignity. We do not tolerate any discrimination or harassment of colleagues or others affected by our operations.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Relating to business partners</h3>
                        <p className="mb-4">
                            We seek to work with others who share our commitment to ethics and compliance. We believe in the benefits of competition, and PillarVolt always competes in a fair and ethically justifiable manner.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Working with communities</h3>
                        <p className="mb-4">
                            We aim to create lasting value for local communities through our business activities. Our contribution may include direct and indirect local employment, local procurement of goods and services, local infrastructure development and capacity-building as well as social investments. We will conduct our business consistently with the United Nations Guiding Principles on Business and Human Rights and the ten principles of the United Nations Global Compact.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Sustainability</h3>
                        <p className="mb-4">
                            Can an oil and gas company be part of a sustainable energy future? We are working actively to reduce climate emissions, put a price on carbon, and benefit societies around the world. We are determined to develop resources responsibly and create lasting value for communities. Our industry needs to be part of the solution.
                        </p>
                        <p>
                            We aim to be recognised as the most carbon-efficient oil and gas producer, committed to creating lasting value for communities.
                        </p>
                    </div>

                    <div className="mb-8">
                        <p className="italic">
                            In all our business activities we comply with applicable laws, act in an ethical, sustainable and socially responsible manner, practise good corporate governance and respect internationally recognised human rights. We maintain an open dialogue on ethical Issues - both internally and externally. Open, honest and accurate communication is essential to our integrity and business success.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
