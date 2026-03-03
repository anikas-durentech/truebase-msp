<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let isLoaded = false;
    onMount(() => {
        isLoaded = true;
    });

    const values = [
        {
            title: "Problem Solvers at Heart",
            description: "We don't just apply bandages to IT issues; we dig deep to find the root cause, permanently fixing problems so that they don't disrupt your day again.",
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`
        },
        {
            title: "Improving Lives",
            description: "Technology should empower your team, not frustrate them. Our goal is to improve the daily lives of your employees by providing seamless, reliable tools.",
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`
        },
        {
            title: "Proactive Partnership",
            description: "We treat your business like it's our own. By anticipating needs and proactively securing your network, we help you focus on growth rather than IT headaches.",
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`
        },
    ];
</script>

<svelte:head>
    <title>About Us | TrueBase Managed IT</title>
    <meta name="description" content="Learn more about TrueBase, founded in Marietta, GA, and our mission to improve lives by solving complex technology problems." />
</svelte:head>

<section class="bg-blue-900 py-20 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-blue-950/50 mix-blend-multiply z-0"></div>
    <div class="container mx-auto px-6 relative z-10">
        {#if isLoaded}
            <div in:fly={{ y: 20, duration: 800 }}>
                <h1 class="font-heading text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                <p class="font-sans text-xl text-blue-100 max-w-3xl">
                    Rooted in a passion for fixing problems and driven by a commitment to our local business community.
                </p>
            </div>
        {/if}
    </div>
</section>

<section class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex flex-col md:flex-row gap-16 items-center">
            
            <div class="md:w-1/2">
                {#if isLoaded}
                    <div in:fly={{ x: -30, duration: 800, delay: 200 }}>
                        <h2 class="font-heading text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">How It Started</h2>
                        <h3 class="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">From DurenTech to TrueBase</h3>
                        
                        <div class="space-y-6 text-lg text-gray-600 leading-relaxed font-sans">
                            <p>
                                The foundation of our business was laid in June 2015 when Will Duren founded DurenTech right here in Marietta, GA. From the very beginning, Will was driven by a fundamental passion: fixing problems, repairing essential equipment, and ultimately improving the lives of the people who rely on that technology.
                            </p>
                            <p>
                                What started as a dedicated effort to troubleshoot and repair has evolved over the years. As businesses grew more dependent on complex networks and cloud infrastructure, the need shifted from reactive repairs to proactive management. 
                            </p>
                            <p>
                                Today, as <strong class="text-blue-900">TrueBase</strong>, we carry that original mission forward. We provide comprehensive Managed IT Services designed not just to fix what's broken, but to ensure it never breaks in the first place—allowing our local partners to thrive without technological friction.
                            </p>
                        </div>
                    </div>
                {/if}
            </div>

            <div class="md:w-1/2 w-full">
                {#if isLoaded}
                    <div 
                        class="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm"
                        in:fly={{ x: 30, duration: 800, delay: 400 }}
                    >
                        <div class="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
                        <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 z-0"></div>
                        
                        <div class="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h4 class="font-heading text-2xl font-bold text-blue-900 mb-2">Established 2015</h4>
                            <p class="text-gray-500 font-medium">Marietta, Georgia</p>
                            
                            <hr class="my-6 border-gray-100" />
                            
                            <p class="text-gray-600 italic">
                                "Our core purpose has never changed: we are here to solve problems so you can get back to doing what you do best."
                            </p>
                        </div>
                    </div>
                {/if}
            </div>

        </div>
    </div>
</section>

<section class="py-24 bg-gray-50 border-y border-gray-200">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide every support ticket we answer and every network we secure.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {#if isLoaded}
                {#each values as value, index}
                    <div 
                        class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
                        in:fly={{ y: 40, duration: 800, delay: 200 + (index * 150) }}
                    >
                        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                {@html value.icon}
                            </svg>
                        </div>
                        <h4 class="font-heading text-xl font-bold text-blue-900 mb-4">{value.title}</h4>
                        <p class="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</section>

<section class="py-20 bg-white">
    <div class="container mx-auto px-6 text-center">
        <h2 class="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">Ready to Partner With Us?</h2>
        <p class="font-sans text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Join the other local businesses in Metro Atlanta who trust TrueBase to keep their operations running smoothly.
        </p>
        <a 
            href="tel:+1234567890" 
            class="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Contact Us Today</span>
        </a>
    </div>
</section>