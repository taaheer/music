<script lang="ts">
    import SocialLinks from "$lib/components/SocialLinks.svelte";

        const socials = [
        { href: "mailto:taaheerlabbe@gmail.com", icon: "📧", label: "Email", value: "taaheerlabbe@gmail.com" },
        { href: "https://linkedin.com/in/taaheer-labbe", icon: "💼", label: "LinkedIn", value: "taaheer-labbe" },
        { href: "https://www.youtube.com/@TaaheerLabbe", icon: "🎥", label: "YouTube", value: "@TaaheerLabbe" },
        { href: "https://taaheer.github.io", icon: "🎼", label: "Website", value: "taaheer.github.io" }
    ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each socials as social}
        <SocialLinks {...social}/>
    {/each}
</div>
