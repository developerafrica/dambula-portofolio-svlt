<script>
    export let data;
</script>
<article class="sectiontwo">
    <main>
        {#each data as item}
        <a href="/books/{item.id}" class="cards">
            <div class="cd">
                <section>
                    <h1>
                        {item.title}
                    </h1>
                    <div class="type">
                        <p>{item.type}</p>
                    </div>
                    <div class="content">
                        <p>{item.content}</p>
                    </div>
                </section>
                <section>
                    <div class="svg">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" fill="#1A1A1A"/>
                            <rect x="20" y="18.1213" width="3" height="12" rx="1.5" transform="rotate(-45 20 18.1213)" fill="#D9D9D9"/>
                            <rect x="28.4853" y="23" width="3" height="12" rx="1.5" transform="rotate(45 28.4853 23)" fill="#D9D9D9"/>
                        </svg>                            
                    </div>
                    <div class="image">
                        <img src={item.cover} alt={item.title}>
                    </div>
                </section>
            </div>
        </a>
        {/each}
    </main>
</article>
<style lang="scss">
    article{
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
                            @include font(var(--black), 1.4rem, 450);
                            text-transform: uppercase;
                        }
                        .type{
                            padding: 10px 0;
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
                        .content{
                            p{
                                @include font(var(--black), 12px, 600);
                                text-transform: uppercase;
                                padding: 8px 0;
                                line-height: 1.2rem;
                                word-spacing: 3px;
                            }
                        }
                    }
                    section:nth-child(2){
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        .image{
                            width: 150px;
                            img{
                                width: 100%;
                                filter: grayscale(100%);
                            }
                        }
                        .svg{
                            svg{
                                width: 30px;
                            }
                        }
                    }
                }
            }

        }
    }

</style>