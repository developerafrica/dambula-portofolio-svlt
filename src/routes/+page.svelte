<script>
    import {stores} from "../stores/store.js"
    import SectOne from "../components/sectionone.svelte"
    import SectTwo from "../components/sectiontwo.svelte"
    import Contact from "../components/sectioncontact.svelte"
        
</script>
<article class="main">
    <section class="sectone">
        <SectOne />
    </section>
    <section class="secttwo">
        <SectTwo data={$stores}/>
    </section>
    <section class="contact">
        <Contact />
    </section>
</article>
<style lang=scss>
    article{
        background: url('/bg.svg');
        min-height: 100vh;
    }
</style>