<script>
    import {stores} from "../stores/store.js"

    export let data
    import SectOne from "../components/sectionone.svelte"
    import SectTwo from "../components/sectiontwo.svelte"
    import Contact from "../components/sectioncontact.svelte"
    

    const {body} = data
    let parsebody = JSON.parse(body) 
   
    stores.set(parsebody)
    console.log($stores)
    
</script>
<article class="main">
    <section class="sectone">
        <SectOne />
    </section>
    <section class="secttwo">
        <SectTwo data={parsebody}/>
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