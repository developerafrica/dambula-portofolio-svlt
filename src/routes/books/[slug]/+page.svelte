<script>
    /** @type {import('./$types').PageData} */
  
    import {page}  from "$app/stores"
    import {stores} from "../../../stores/store.js"
    

    const filedata = $stores.map((item)=>{
        return item
    }).filter((item)=>{
        return item.id == $page.params.slug
    })

    
</script>
<article class="slug">
    {#each filedata as item}
    <section>
        <img src={item.cover} alt="creation">
    </section>
    <section>
        <h1>{item.title}</h1>
        <p>{item.content}</p>            
    </section>
    <section>
        <a href="/documents/{item.link}" download={item.title}>download pdf</a>
    </section>
    {/each}
</article>
<style lang="scss">
    article{
        background: var(--grey);
        padding: 10vh 0 0 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        section:nth-child(1){
            width: 180px;
            margin: auto;
            padding: 15px 0;
            img{
                width: 100%;
            }
        }
        section:nth-child(2){
            flex: 1;
            background: var(--white);
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            padding: 10px 0 20vh 0;
            margin: 5px;
            h1{
                @include font(var(--black), 1.45rem, 450);
                text-align: center;
                text-transform: uppercase;
                padding: 10px;
            }
            p{
                @include font(var(--black), 1rem, 450);
                text-align: justify;
                text-transform: capitalize;
                line-height: 2rem;
                padding: 20px;
                overflow-wrap: break-word;
            }
            
        }
        section:nth-child(3){
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 10px;
            a{
                text-align: center;
                @include font(var(--black), 1rem, 450);
                padding: 10px;
                border-radius: 4px;
                background-color: var(--white);
                border: black solid 1px;
            }
        }
    }
</style>