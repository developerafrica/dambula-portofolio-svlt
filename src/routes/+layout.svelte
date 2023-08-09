<script>
  import "../app.scss";
</script>
<section class="layout">
  <header>
    <nav>
      <a href="/" class="logo">
        <h1>DAMBULA</h1>
      </a>
      <div class="toggle">
        <button>
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7" height="7" rx="3.5" fill=var(--grey) fill-opacity="0.51"/>
            <rect x="15" y="9" width="7" height="7" rx="3.5" fill=var(--grey) fill-opacity="0.51"/>
            <rect y="17" width="7" height="7" rx="3.5" fill=var(--grey) fill-opacity="0.51"/>
          </svg>            
        </button>
      </div>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</section>
<style lang="scss">
  .layout{
    header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: var(--nav);
        .logo{
          h1{
            @include font(var(--grey), 1rem, 450)
          }
        }
        .toggle{
          button{
            padding: 5px;
            svg{
              width: 17px;
            }
          }
        }
      }

    }

  }
</style>
