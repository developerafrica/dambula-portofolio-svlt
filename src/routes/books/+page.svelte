<script>
    /** @type {import('./$types').PageData} */

    import {stores} from "../../stores/store.js"
</script>

<article class="books">
    <main>
        {#each $stores as item}
        <a href="/books/{item.id}" class="cards">
            <div class="cd">
                <section>
                    <h1>
                        {item.title}
                    </h1>
                </section>
                <section>
                    <div class="image">
                        <img src={item.cover} alt={item.title}>
                    </div>
                </section>
                <section>
                    <div class="type">
                        <p>{item.type}</p>
                    </div>
                    
                    
                </section>
            </div>
        </a>
        {/each}
    </main>
</article>
<style lang="scss">
    article{
        padding: 10vh 0 20vh 0;
        main{
            display: flex;
            flex-direction: column;
            a{
                background: var(--card);
                box-shadow: rgba(0, 0, 0, 0.144) 0 4px 4px 0;
                margin: 20px 10px;
                .cd{
                    padding: 10px;
                    section:nth-child(1){
                        h1{
                            @include font(var(--black), 1.15rem, 450);
                            text-transform: uppercase;
                            letter-spacing: 1.2px;
                        }
                    }
                    section:nth-child(2){
                       
                        .image{
                            width: 100px;
                            margin-left: auto;
                            img{
                                width: 100%;
                                margin: 10px;
                                filter: grayscale(100%);
                            }
                        }
                    }
                    section:nth-child(3){
                        .type{
                            padding: 5px 0;
                            p{
                                @include font(var(--black), 11px, 500);
                                background-color: white;
                                border: black solid 1px;
                                border-radius: 4px;
                                text-transform: uppercase;
                                padding: 5px 10px;
                                width: 50px;
                                margin-left: auto;
                            }
                        }

                    }
                }
            }

        }
    }

</style>