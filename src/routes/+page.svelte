<script>
    // no scripts yet...
</script>

<svelte:head>
    <title>TrueBase | Managed IT Services</title>
    <meta name="description" content="Reliable managed IT services, cybersecurity, and support for your business." />
</svelte:head>

<section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style="background-image: url('/hero-bg.png');"
    >
        <div class="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>    
    </div>

    <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 class="font-heading text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Empowering your business with <br class="hidden md:block" />
            <span class="text-blue-400">Reliable IT Solutions</span>
        </h1>

        <p class="font-sans text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Comprehensive managed IT services, proactive cybersecurity, and reliable data protection so you can focus on growing your business.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
                href="/services"
                class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors w-full sm:w-auto shadow-lg"
            >
                Explore Our Services
            </a>
            <a
                href="tel:+1234567890"
                class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors w-full sm:w-auto shadow-lg"
            >
                Call Us Today
            </a>
        </div>
    </div>
</section>