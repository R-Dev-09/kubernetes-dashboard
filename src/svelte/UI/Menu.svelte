<div class=menu>
  <img class=logo alt='Kubernetes Logo' src='assets/kubernetes.png'/>
  <slot/>
  <div class=user></div>
</div>

<style lang=scss>
  .menu {
    height: 100%;
    width: 4rem;
    min-width: 4rem;
    background: #222;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 2rem 2rem 0;
    overflow: hidden;
    -webkit-app-region: drag;

    .logo {
      height: 2rem;
    }
  }
</style>