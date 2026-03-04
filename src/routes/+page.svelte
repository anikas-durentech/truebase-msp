<script>
    import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    let isLoaded = false;
    /**
	 * @type {never[]}
	 */
    let activeCards = [];

    onMount(() => {
        isLoaded = true;
    });

    /**
	 * @param {Element} node
	 * @param {string | number} index
	 */
    function scrollSpy(node, index) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    // @ts-ignore
                    activeCards[index] = entry.isIntersecting;
                }
            });
        }, {
            rootMargin: '-45% 0px -45% 0px'
        });

        observer.observe(node);
        return {
            destroy() {
                observer.unobserve(node);
            }
        };
    }
</script>

<svelte:head>
    <title>TrueBase | Managed IT Services</title>
    <meta name="description" content="Reliable managed IT services, cybersecurity, and support for your business." />
</svelte:head>

<section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
    {#if isLoaded}
        <div 
            class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style="background-image: url('/hero-bg.png');"
            transition:fade={{ duration: 1200 }}
        >
            <div class="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
        </div>

        <div class="absolute inset-0 bg-radial from-transparent via-transparent to-black/70"></div>

        <div class="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 
                class="font-heading text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
                <span class="block" in:fly={{ x: 75, duration: 800, delay: 100, easing: circOut }}>
                    Empowering Your Business with <br class="hidden md:block" />
                </span>

                <span class="text-blue-400 block" in:fly={{ x: -75, duration: 800, delay: 200, easing: circOut }}>
                    Reliable IT Solutions
                </span>
            </h1>
            
            <p 
                class="font-sans text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200"
                in:fly={{ y: 30, duration: 800, delay: 300 }}
            >
                Comprehensive managed IT services, proactive cybersecurity, and reliable data protection so you can focus on growing your business.
            </p>
            
            <div 
                class="flex flex-col sm:flex-row gap-6 justify-center items-center"
                in:fly={{ y: 30, duration: 800, delay: 500 }}
            >
                <a 
                    href="/services" 
                    class="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto shadow-lg"
                >
                    <span>Explore Our Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                
                <a 
                    href="tel:+1234567890" 
                    class="group flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Us Today</span>
                </a>
            </div>
        </div>
    {/if}
</section>

<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="font-heading text-4xl font-bold text-blue-900 mb-4">Our Core Services</h2>
            <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive suite of IT solutions designed to keep your business secure, efficient, and running smoothly.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <a href="/services" class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block
                    {activeCards[0] ? 'shadow-xl -translate-y-2 border-blue-400' : 'border-gray-100 hover:shadow-xl hover:-translate-y-2'}"
                use:scrollSpy={0}
            >
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                    {activeCards[0] ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}">
                </div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300
                    {activeCards[0] ? 'scale-110 bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                </div>
                
                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Managed IT Support</h3>
                <p class="text-gray-600 mb-6">Proactive monitoring, maintenance, and reliable helpdesk support for your entire IT infrastructure.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                    {activeCards[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>

            <a href="/services" 
                class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block 
                    {activeCards[1] ? 'shadow-xl -translate-y-2 border-blue-400' : 'border-gray-100 hover:shadow-xl hover:-translate-y-2'}"
                use:scrollSpy={1}
            >
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                    {activeCards[1] ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}">
                </div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300
                    {activeCards[1] ? 'scale-110 bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                </div>

                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Data Backup & Archival</h3>
                <p class="text-gray-600 mb-6">Secure, automated backups and archiving to ensure your critical business data is never lost.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                    {activeCards[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>

            <a href="/services" class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block
                    {activeCards[2] ? 'shadow-xl -translate-y-2 border-blue-400' : 'border-gray-100 hover:shadow-xl hover:-translate-y-2'}"
                use:scrollSpy={2}
            >
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                    {activeCards[2] ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}">
                </div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300
                    {activeCards[2] ? 'scale-110 bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>

                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Cybersecurity & Endpoints</h3>
                <p class="text-gray-600 mb-6">Robust endpoint management and cybersecurity login management to protect against modern threats.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                    {activeCards[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>
        </div>

        <div class="text-center">
            <a href="/services" class="inline-block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-sm">
                View All Services in Detail
            </a>
        </div>
    </div>
</section>

<section class="py-20 bg-blue-900 text-white">
    <div class="container mx-auto px-6">
        <div class="flex flex-col lg-flex-row items-center gap-12">
            <div class="lg:w-1/2">
                <h2 class="font-heading text-4xl font-bold mb-6">Why Choose TrueBase?</h2>
                <p class="font-sans text-xl text-blue-100 mb-8">
                    We don't just fix computers when they break. We act as your strategic technology partner, proactively managing your network so you experience less downtime and more growth.
                </p>

                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="mt-1 bg-blue-700 p-2 rounded-lg text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                        </div>

                        <div>
                            <h4 class="font-heading font-bold text-xl mb-1">24/7 Proactive Monitoring</h4>
                            <p class="text-blue-200">We detect and resolve technical issues in the background before they ever impact your daily operations.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="mt-1 bg-blue-700 p-2 rounded-lg text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-heading font-bold text-xl mb-1">Security-First Approach</h4>
                            <p class="text-blue-200">From email spam filtering to strict login management, your data is fortified against modern cyber threats.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 w-full">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl text-center backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                        <div class="text-5xl font-bold text-blue-400 mb-2 font-heading">99.9%</div>
                        <div class="text-blue-100 font-semibold">Uptime Guarantee</div>
                    </div>
                    <div class="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl text-center backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                        <div class="text-5xl font-bold text-blue-400 mb-2 font-heading">15m</div>
                        <div class="text-blue-100 font-semibold">Average Response Time</div>
                    </div>
                    <div class="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl text-center backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                        <div class="text-5xl font-bold text-blue-400 mb-2 font-heading">24/7</div>
                        <div class="text-blue-100 font-semibold">Support Availability</div>
                    </div>
                    <div class="bg-blue-800/50 border border-blue-700 p-8 rounded-2xl text-center backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                        <div class="text-5xl font-bold text-blue-400 mb-2 font-heading">100%</div>
                        <div class="text-blue-100 font-semibold">Data Protection</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="font-heading text-4xl font-bold text-blue-900 mb-4">Trusted by Local Businesses</h2>
            <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here is what our partners have to say about working with TrueBase.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                <svg class="absolute top-6 left-6 w-10 h-10 text-blue-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative z-10 text-gray-700 text-lg mb-6 pl-12 pt-4">
                    "I recently discovered Will Duren from another local business who had used his service, and was quite pleased. I am thrilled to have a local IT expert to help with business computer needs. He recently did a fantastic job refurbishing several laptops for my office, and made excellent suggestions about upgrades with performance and cost efficacy in mind. Everything is working great and we are so pleased. He has also been super helpful with our office IT needs improving security and functionality of our Wi-Fi. He is very punctual and communication has been great. 5+ stars!"
                </p>
                <div class="flex items-center gap-4 pl-12">
                    <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold font-heading">
                        LS
                    </div>
                    <div>
                        <h5 class="font-bold text-blue-900">Dr. Lisa Shaw</h5>
                        <p class="text-sm text-gray-500">East Cobb Integral Physical Therapy</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                <svg class="absolute top-6 left-6 w-10 h-10 text-blue-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative z-10 text-gray-700 text-lg mb-6 pl-12 pt-4">
                    "As a small business owner, it is hard to employ full-time computer tech.  Will was referred to us by a colleague and has been invaluable in helping us troubleshoot various computer issues as well as advising on future computer purchases, storage and backups options.  Will is a great communicator, works quickly and is very professional.  We refer Will to our fellow small business owners as well as friends and family every opportunity we get."
                </p>
                <div class="flex items-center gap-4 pl-12">
                    <div class="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold font-heading">
                        SW
                    </div>
                    <div>
                        <h5 class="font-bold text-blue-900">Stacy Wyatt</h5>
                        <p class="text-sm text-gray-500">Stacey Wyatt Real Estate Group</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-24 bg-gray-100 border-t border-gray-200">
    <div class="container mx-auto px-6 text-center">
        <h2 class="font-heading text-4xl font-bold text-blue-900 mb-6">Ready to Optimize Your IT Infrastructure?</h2>
        <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Contact TrueBase today for a free consultation and discover how our managed IT services can streamline your operations and secure your business data.
        </p>
        <a 
            href="tel:+1234567890" 
            class="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Get in Touch Now</span>
        </a>
    </div>
</section>