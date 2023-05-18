<div class="container">
  <div class="circle" />
</div>

<style>
  .container {
    width: 81px;
    margin: 50px auto;
  }

  .circle {
    height: 61px;
    width: 61px;
    border: 1px solid red;
    border-bottom: none;
    border-radius: 50%;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    animation-name: spin;
    animation-duration: 2600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
