<script lang="ts">
    import { resolve } from "$app/paths";

    const currentYear = 2026; // Static as requested for 2026
    
    const links = [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Licensing", href: "/license" },
        { label: "Contact", href: "/contact" }
    ];

    const socials = [
        { icon: "📧", href: "mailto:taaheerlabbe@gmail.com", label: "Email" },
        { icon: "💼", href: "https://linkedin.com/in/taaheer-labbe", label: "LinkedIn" },
        { icon: "🎥", href: "https://www.youtube.com/@TaaheerLabbe", label: "YouTube" }
    ];
</script>

<footer class="bg-black text-yellow-200 py-[clamp(3rem,8vw,6rem)] px-6 mt-auto border-t border-white/5">
    <div class="max-w-7xl mx-auto flex flex-col items-center">
        
        <nav aria-label="Footer Navigation" class="mb-8">
            <a 
                href="{resolve('/')}" 
                class="text-yellow-400 flex items-center justify-center 
                       text-[clamp(4rem,12vw,6rem)] hover:scale-110 
                       transition-transform duration-500 motion-safe:animate-pulse"
                aria-label="Back to home"
            >
                𝄞
            </a>
        </nav>

        <div class="flex gap-8 mb-10">
            {#each socials as social}
                <a 
                    href={social.href} 
                    target="_blank" 
                    class="text-2xl opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                >
                    {social.label}
                </a>
            {/each}
        </div>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {#each links as link}
                <a 
                    href={link.href} 
                    class="text-[clamp(0.8rem,1.5vw,1rem)] uppercase tracking-[0.3em] font-light hover:text-white transition-colors"
                >
                    {link.label}
                </a>
            {/each}
        </div>

        <div class="text-center space-y-3">
            <div class="h-px w-12 bg-yellow-400/30 mx-auto mb-6"></div>
            <p class="text-[clamp(1rem,2.5vw,1.25rem)] font-bold tracking-[0.2em] uppercase">
                Taaheer Labbe
            </p>
            <p class="text-[clamp(0.7rem,1.2vw,0.8rem)] font-mono opacity-40 uppercase tracking-widest">
                © {currentYear} ©
            </p>
        </div>
    </div>
</footer>
