<script>
    import { onMount, tick } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let isLoaded = false;
    onMount(async () => {
        await tick();
        isLoaded = true;
    });

    const services = [
        {
            title: "Managed IT Services",
            description: "Comprehensive support and proactive maintenance for your entire technology infrastructure, minimizing downtime and maximizing productivity.",
            iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        },
        {
            title: "Data Backup Archival Services",
            description: "Automated, secure backups and long-term archiving solutions to ensure your critical business data is protected against loss and easily recoverable.",
            iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        },
        {
            title: "Email Spam Filtering",
            description: "Advanced filtering algorithms to block phishing attempts, malware, and unwanted spam before they ever reach your employees' inboxes.",
            iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        },
        {
            title: "Cybersecurity Login Management",
            description: "Implement robust access controls, multi-factor authentication (MFA), and secure sign-on protocols to protect your business network from unauthorized access.",
            iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            title: "Endpoint Management",
            description: "Centralized monitoring, patching, and security management for all company devices, including laptops, desktops, and mobile phones.",
            iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        },
        {
            title: "Business Password Manager",
            description: "Secure, encrypted password vaults for your team. Safely share credentials, enforce strong password policies, and revoke access instantly when needed.",
            iconPath: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        }
    ];

    const processSteps = [
        {
            stepNumber: "Phase 01",
            title: "Discovery & Assessment",
            description: "We start by auditing your current IT infrastructure, identifying vulnerabilities, performance bottlenecks, and areas for immediate improvement."
        },
        {
            stepNumber: "Phase 02",
            title: "Strategic Planning",
            description: "Our team designs a customized technology roadmap aligned with your business goals, ensuring you have the right tools without paying for unnecessary extras."
        },
        {
            stepNumber: "Phase 03",
            title: "Seamless Onboarding",
            description: "We deploy our monitoring agents, configure your backups, and secure your endpoints with minimal disruption to your daily operations."
        },
        {
            stepNumber: "Phase 04",
            title: "Proactive Management",
            description: "Your systems are monitored 24/7. We handle the updates, patch management, and helpdesk support so you can focus on running your business."
        },
    ];

    /**
     * @type {any[]}
     */
    let activeServiceCards = [];

    /**
	 * @type {any[]}
	 */
    let activeSteps = [];

    /**
     * @param {Element} node
     * @param {{ index: number; isStep: boolean }} params
     */
    function scrollSpy(node, { index, isStep = false }) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    if (isStep) {
                        activeSteps[index] = entry.isIntersecting;
                        activeSteps = [...activeSteps];
                    } else {
                        activeServiceCards[index] = entry.isIntersecting;
                        activeServiceCards = [...activeServiceCards];
                    }
                }
                if (isStep) {
                    activeSteps[index] = entry.isIntersecting;
                    activeSteps = [...activeSteps];
                }
            });
        }, {
            rootMargin: '-45% 0px -45% 0px'
        });

        observer.observe(node);
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }
</script>

<svelte:head>
    <title>Our Services | TrueBase Managed IT</title>
    <meta name="description" content="Explore our managed IT services, cybersecurity solutions, data backup, and endpoint management for your business." />
</svelte:head>

<section class="bg-blue-900 py-20 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-blue-950/50 mix-blend-multiply z-0"></div>
    <div class="container mx-auto px-6 relative z-10">
        {#if isLoaded}
            <div in:fly={{ y: 20, duration: 800 }}>
                <h1 class="font-heading text-4xl md:text-5xl font-bold mb-6">Comprehensive IT Solutions</h1>
                <p class="font-sans text-xl text-blue-100 max-w-3xl">
                    We provide a full stack of technology services designed to secure your data, streamline your operations, and support your team's day-to-day needs.
                </p>
            </div>
        {/if}
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
        {#if isLoaded}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" transition:fade>
                {#each services as service, index (service.title)}
                    <div 
                        class="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden cursor-pointer
                            {activeServiceCards[index] ? 'shadow-xl -translate-y-2 border-blue-400' : 'border-gray-100 hover:shadow-xl hover:-translate-y-2'}"
                        in:fly={{
                            x: -200, 
                            y: 100,
                            duration: 1000, 
                            delay: 200 + (index * 150) 
                        }}
                        use:scrollSpy={{ index, isStep: false }}
                    >
                        <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out
                            {activeServiceCards[index] ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}">
                        </div>
                        
                        <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md transition-all duration-500
                            {activeServiceCards[index] ? 'scale-110 -rotate-3 bg-blue-600 text-white shadow-md' : 'bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md'}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d={service.iconPath} />
                            </svg>
                        </div>
                        
                        <h3 class="font-heading text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300
                                {activeServiceCards[index] ? 'text-blue-700' : 'text-blue-900 group-hover:text-blue-700'}">
                            {service.title}
                        </h3>
                        
                        <p class="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                        </p>

                        <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500
                                {activeServiceCards[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}">
                            <span>Contact us about this</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300
                                    {activeServiceCards[index] ? 'translate-x-1' : 'group-hover:translate-x-1'}" 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</section>

<section class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6">
        <div class="text-center mb-20">
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">How We Work With You</h2>
            <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                Transitioning your IT support shouldn't be stressful. Our proven onboarding process ensures a smooth handover and immediate improvements to your network stability.
            </p>
        </div>

        <div class="max-w-5xl mx-auto relative">
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2 rounded-full"></div>

            <div class="space-y-16">
                {#if isLoaded}
                    {#each processSteps as step, index (step.stepNumber)}
                        <div 
                            class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center"
                            use:scrollSpy={{ index, isStep: true }}
                        >
                            
                            <div class="hidden md:block w-5/12 text-right pr-10">
                                {#if index % 2 === 0}
                                    <div in:fly={{ x: -40, duration: 800, delay: 200 + (index * 200) }}>
                                        <h3 class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">{step.stepNumber}</h3>
                                        <h4 class="font-heading text-2xl font-bold mb-3 transition-colors duration-500 {activeSteps[index] ? 'text-blue-600' : 'text-blue-900'}">{step.title}</h4>
                                        <p class="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                {/if}
                            </div>

                            <div 
                                class="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-white border-4 rounded-full flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 transition-all duration-500 z-10 shadow-sm {activeSteps[index] ? 'border-blue-600 scale-125' : 'border-blue-200'}"
                                in:fade={{ duration: 400, delay: 100 + (index * 200) }}
                            >
                                <div class="w-2.5 h-2.5 rounded-full transition-colors duration-500 {activeSteps[index] ? 'bg-blue-500' : 'bg-blue-600'}"></div>
                            </div>

                            <div class="w-full md:w-5/12 pl-14 md:pl-10 pt-1 md:pt-0">
                                {#if index % 2 !== 0}
                                    <div class="hidden md:block" in:fly={{ x: 40, duration: 800, delay: 200 + (index * 200) }}>
                                        <h3 class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">{step.stepNumber}</h3>
                                        <h4 class="font-heading text-2xl font-bold mb-3 transition-colors duration-500 {activeSteps[index] ? 'text-blue-600' : 'text-blue-900'}">{step.title}</h4>
                                        <p class="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                {/if}
                                
                                <div class="block md:hidden" in:fly={{ x: 40, duration: 800, delay: 200 + (index * 200) }}>
                                    <h3 class="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">{step.stepNumber}</h3>
                                    <h4 class="font-heading text-2xl font-bold mb-3 transition-colors duration-500 {activeSteps[index] ? 'text-blue-600' : 'text-blue-900'}">{step.title}</h4>
                                    <p class="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>

                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</section>

<section class="py-20 bg-white border-t border-gray-100">
    <div class="container mx-auto px-6 text-center">
        <h2 class="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">Need a custom IT solution?</h2>
        <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Let's discuss how TrueBase can tailor these services to fit the unique needs of your business.
        </p>
        <a href="/contact" class="hidden md:inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Us Now</span>
        </a>

        <a href="tel:+1234567890" class="inline-flex md:hidden items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Us Now</span>
        </a>
    </div>
</section>