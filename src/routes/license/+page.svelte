<script lang="ts">
    import Background from '$lib/components/Background.svelte';
    import { socials } from '$lib/constants/socials';

    const categories = [
        {
            title: "1. The Source",
            items: [
                { 
                    label: "Library Tracks", 
                    desc: "Pre-made compositions available in my catalog. These are cost-effective and ready for immediate download." 
                },
                { 
                    label: "Custom Commission", 
                    desc: "Made from scratch specifically for your project. Includes consultation, feedback rounds, and tailored sound design." 
                }
            ]
        },
        {
            title: "2. The Rights",
            items: [
                { 
                    label: "Non-Exclusive", 
                    desc: "You have the right to use the music, but I retain ownership and can license the same track to other creators." 
                },
                { 
                    label: "Exclusive", 
                    desc: "Once purchased, the track is removed from the library. You are the sole user of this composition for the duration of the contract." 
                }
            ]
        }
    ];
</script>

<div class="bg-black min-h-screen text-zinc-300 font-light">
<Background>
    <header>
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h1 class="text-white text-[clamp(2rem,5vw,4rem)] font-bold italic tracking-tighter mb-4">
                    Licensing Standards
                </h1>
                <p class="text-yellow-400 font-mono text-sm uppercase tracking-[0.3em]">
                    Legal Transparency & Usage Rights
                </p>
            </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
        <section class="grid gap-16">
            {#each categories as category}
                <div>
                    <h2 class="text-white text-2xl font-bold mb-8 flex items-center gap-4">
                        <span class="h-px w-8 bg-yellow-400"></span>
                        {category.title}
                    </h2>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        {#each category.items as item}
                            <div class="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-colors backdrop-blur-[2px]">
                                <h3 class="text-yellow-400 font-bold mb-3">{item.label}</h3>
                                <p class="leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </section>

        <section class="mt-24 space-y-12">
            <div class="bg-zinc-900/50 p-10 rounded-3xl border border-white/10 backdrop-blur-[2px]">
                <h2 class="text-white text-3xl font-bold mb-6 italic">The Production Process</h2>
                
                <div class="space-y-6">
                    <div class="flex gap-4">
                        <span class="text-yellow-400 font-bold">01.</span>
                        <p><strong class="text-white">Briefing:</strong> For custom works, we define the mood, BPM, and reference tracks before any note is played.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-yellow-400 font-bold">02.</span>
                        <p><strong class="text-white">Delivery:</strong> All licenses (unless stated) include high-quality WAV (24-bit) and MP3 (320kbps) files.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-yellow-400 font-bold">03.</span>
                        <p><strong class="text-white">Clearance:</strong> I guarantee that all sounds used are either original or 100% royalty-free, meaning no copyright strikes for you.</p>
                    </div>
                </div>
            </div>

            <div class="p-6 border-l-2 border-yellow-400 bg-yellow-400/5 text-sm italic backdrop-blur-[2px]">
                Note: Buying a "License" does not mean you own the Copyright. Copyright remains with Taaheer Labbe unless a full "Buyout" agreement is signed.
            </div>
        </section>
    </main>
</Background>

    <footer class="py-20 text-center border-t border-white/5">
        <p class="mb-4">Need a specific contract for a film or game?</p>
        <a href="{socials.find(s => s.label === "Email")?.href}" class="text-yellow-400 hover:text-white underline underline-offset-8 transition-colors">
            Request a Custom Agreement
        </a>
    </footer>
</div>
