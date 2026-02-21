<script lang="ts">
    import { page } from '$app/stores';
    import Background from '$lib/components/Background.svelte';
</script>

<Background>
    <div class="min-h-[85vh] flex flex-col items-center justify-center px-6 font-mono">
        <div class="w-full max-w-2xl bg-zinc-900/80 border border-white/10 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl">
            <div class="bg-zinc-800 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span class="text-[10px] uppercase tracking-widest text-zinc-400">System Diagnostic</span>
            </div>

            <div class="p-8 md:p-12">
                <div class="flex items-start gap-6 mb-8">
                    <div class="text-yellow-400 text-5xl">⚠</div>
                    <div>
                        <h1 class="text-white text-2xl font-bold mb-1">
                            Status: {$page.status}
                        </h1>
                        <p class="text-zinc-400 text-sm">
                            {#if $page.status === 404}
                                ERROR_CODE: NULL_POINTER_EXCEPTION // Path not found in library.
                            {:else}
                                ERROR_CODE: INTERNAL_SIGNAL_FAILURE // System dissonance.
                            {/if}
                        </p>
                    </div>
                </div>

                <div class="bg-black/50 rounded p-6 mb-8 border border-white/5 space-y-2 text-xs text-zinc-500">
                    <p><span class="text-zinc-700">[{new Date().toISOString()}]</span> Initializing request...</p>
                    <p><span class="text-zinc-700">[{new Date().toISOString()}]</span> Fetching asset from: <span class="text-yellow-400/70">{$page.url.pathname}</span></p>
                    <p class="text-red-400/80"><span class="text-zinc-700">[{new Date().toISOString()}]</span> Signal Lost. Source file missing or moved.</p>
                </div>

                <div class="flex flex-wrap gap-4">
                    <a 
                        href="/" 
                        class="px-6 py-2 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-white transition-all"
                    >
                        Return to Master
                    </a>
                    <button 
                        onclick={() => history.back()}
                        class="px-6 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all"
                    >
                        Previous Track
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-8 text-[10px] text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
            <span class="animate-pulse text-yellow-500">●</span> 24-bit / 48kHz System Online
        </div>
    </div>
</Background>
