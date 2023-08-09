<article class="sectionone">
    <main>
        <section class="image">
            <img src="/landing.png" alt="landing">
        </section>
        <section class="text">
            <h1><span>STORIES BY</span><span>DAMBULA</span><span>JEDIDIAH</span></h1>
            <p>stories and poems encompassing love, loss, trauma , healing and joy</p>
        </section>
    </main>
    <footer>
        <a href="/books">
            <h2>EXPLORE &rarr;</h2>
        </a>
    </footer>
</article>
<style lang="scss">
    
    article{
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 10vh 0;
        main{
            flex: 1;
            .image{
                width: 250px;
                margin: auto;
                img{
                    width: 100%;
                }
            }
            .text{
                padding: 10px;
                h1{
                    @include font(var(--black), 1.75rem, 400);
                    display: flex;
                    flex-direction: column;
                    border-left: var(--grey) 1px solid;
                    padding: 0 5px;
                }
                p{
                    @include font(var(--black), 14px, 450);
                    padding: 0 5px;
                    margin: 10px 0;
                }
            }
            
        }
        footer{
            padding: 10px;
            a{
                margin-left: auto;
                background-color: var(--grey);
                display: flex;
                align-items: center; 
                width: 100px;
                border-radius: 4px;     
                h2{
                    @include font(var(--white), 14px, 420);
                    padding: 10px;
                }          
            }
        }

    }
</style>