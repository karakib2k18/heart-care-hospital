import React from 'react';

const FrequentlyAsk = () => {
    return (
        <div>
            <div>
                <section className="text-gray-700">
                    <div className="container px-5 pt-16 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                Frequently Asked Question
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Public Health Veteran Leads Global CDC Team  During COVID-19?
                                    </summary>

                                    <span>
                                        I first learned about what would soon be called the COVID-19 pandemic after I returned from the 2020 New Year holidays and met with a colleague to resume work as usual.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                        Moving to Atlanta to Help Stop COVID-19 in Kansas?
                                    </summary>

                                    <span>
                                        Before the COVID-19 pandemic began, I was a Public Health Institute/CDC Global Health fellow in CDC’s Central America office located in Guatemala City, Guatemala.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Routine Monitoring Reveals COVID-19 Surge?
                                    </summary>

                                    <span>
                                        I joined the CDC South America Regional Office on August 31, 2020, as its Senior Technical Advisor. The global pandemic had been going on for most of 2020 I remember the sense of dread I had when I first heard about it
                                    </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Diverse Group of Atlanta Experts Support COVID-19 ?
                                    </summary>

                                    <span className="px-4 py-2">
                                        When CDC staff go into the field to investigate outbreaks, a diverse group based in Atlanta supports their every move. Scientists create research protocols
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Investigate a New COVID-19 Variant was Enormously Rewarding?
                                    </summary>

                                    <span className="px-4 py-2">
                                        I got a medical education at a top institution, a privilege very few have. When I decided to come to the United States to pursue residency and training
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        We’ve made lots of progress, but our work is not done?
                                    </summary>

                                    <span className="px-4 py-2">
                                        I have seen many important and positive changes around Chagas disease awareness, diagnosis, and treatment over the past few years, but there is still much  Director for the Division of Global Health Protection Program
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FrequentlyAsk;