<script lang="ts">
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import Music from '$lib/assets/Reject.wav'

    let isPlayerVisible = $state(true);
</script>

<AudioPlayer bind:isVisible={isPlayerVisible} src={Music}></AudioPlayer>
