<script lang="ts">
    import Background from "$lib/components/Background.svelte";
    import { socials } from "$lib/constants/socials";
    import SocialLinks from "$lib/components/SocialLinks.svelte";

    const channels = [
        { 
            title: "Professional", 
            links: [
                { label: "LinkedIn", value: "taaheer-labbe", icon: "💼", desc: "For career opportunities, networking, and industry-related inquiries.", href: "https://linkedin.com/in/taaheer-labbe" },
                { label: "Email", value: "taaheerlabbe@gmail.com", icon: "📧", desc: "Best for project briefs, licensing questions, and formal proposals.", href: "mailto:taaheerlabbe@gmail.com" }
            ]
        },
        { 
            title: "Creative", 
            links: [
                { label: "YouTube", value: "@TaaheerLabbe", icon: "🎥", desc: "Check out my production process, tutorials, and music videos.", href: "https://www.youtube.com/@TaaheerLabbe" },
                { label: "Portfolio", value: "View Archive", icon: "🎼", desc: "Explore my past works and musical evolution.", href: "portfolio" }
            ]
        }
    ];
</script>

<Background>
    <div class="min-h-screen text-white pt-32 pb-24 px-6">
        <div class="max-w-5xl mx-auto">
            
            <header class="mb-20">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                    </span>
                    Status: Open for Work
                </div>
                
                <h1 class="text-[clamp(2.5rem,8vw,5.5rem)] font-black italic tracking-tighter leading-[0.9] mb-6">
                    Let's talk <span class="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600">Sound.</span>
                </h1>
                <p class="text-zinc-500 text-lg max-w-2xl font-light">
                    Have a project in mind or just want to connect?
                </p>
            </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each socials as social}
            <SocialLinks {...social} />
        {/each}
        </div>


            <footer class="mt-32 text-center">
                <div class="w-px h-24 bg-linear-to-b from-yellow-400 to-transparent mx-auto mb-8"></div>
                <p class="text-zinc-600 font-serif italic text-xl">
                    "Every great project starts with a single note."
                </p>
            </footer>

        </div>
    </div>
</Background>
