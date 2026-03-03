<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let isLoaded = false;

    onMount(() => {
        isLoaded = true;
    });
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

        <div class="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 
                class="font-heading text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                in:fly={{ y: 30, duration: 800, delay: 100 }}
            >
                Empowering Your Business with <br class="hidden md:block" />
                <span class="text-blue-400">Reliable IT Solutions</span>
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
            <a href="/services" class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block">
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                </div>
                
                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Managed IT Support</h3>
                <p class="text-gray-600 mb-6">Proactive monitoring, maintenance, and reliable helpdesk support for your entire IT infrastructure.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>

            <a href="/services" class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block">
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                </div>

                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Data Backup & Archival</h3>
                <p class="text-gray-600 mb-6">Secure, automated backups and archiving to ensure your critical business data is never lost.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>

            <a href="/services" class="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden block">
                <div class="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                
                <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>

                <h3 class="font-heading text-2xl font-bold text-blue-800 mb-3">Cybersecurity & Endpoints</h3>
                <p class="text-gray-600 mb-6">Robust endpoint management and cybersecurity login management to protect against modern threats.</p>
                
                <div class="flex items-center text-blue-600 font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
                <div class="grid grid-cols-2 gap-6">
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