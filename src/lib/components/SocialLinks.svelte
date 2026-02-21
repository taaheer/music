<script lang="ts">
    let {href, icon, label, value} = $props<{
        href: string;
        icon: string;
        label: string;
        value: string;
    }>();
</script>

<a 
    {href} 
    target="_blank" 
    rel="noopener noreferrer"
    class="flex items-center justify-between p-[clamp(1rem,3vw,1.5rem)] bg-zinc-900/50 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all group border border-white/5 backdrop-blur-[2px]"
>
    <div class="flex items-center gap-4">
        <span class="text-[clamp(1.25rem,2.5vw,1.75rem)]" role="img" aria-label={label}>
            {icon}
        </span>
        <span class="font-bold tracking-tight text-[clamp(0.9rem,2vw,1.1rem)]">
            {label}
        </span>
    </div>
    <span class="text-[clamp(0.6rem,1.5vw,0.75rem)] opacity-50 group-hover:opacity-100 italic truncate ml-4">
        {value}
    </span>
</a>
