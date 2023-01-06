<template>
  <section class="boutonFlashy">
    <button><span>{{ intituleBouton }}</span></button>
  </section>
</template>

<script>
export default {
  name: "boutonFacturier",
  props: {
    intituleBouton: String
  }
}
</script>

<style scoped>
.boutonFlashy{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
border-radius: 6px 0 6px 0;
}

.boutonFlashy button{
  position: relative;
  width: 60%;
  height: 30px;
  display: inline-block;
  margin-top: 6px;
  border-style: none;
border-radius: 6px 0 6px 0;
}

.boutonFlashy button:before,
.boutonFlashy button:after{
  content : '';
  position: absolute;
  inset: 0;
  background: red;
  transition: 0.5s;
}

.boutonFlashy button:nth-child(1):before,
.boutonFlashy button:nth-child(1):after{
  background: linear-gradient(45deg,var(--mauve-clair), var(--mauve-clair),#DC143C );
}

.boutonFlashy button:hover:before{
  inset: -3px;
}

.boutonFlashy button:hover:after{
  inset: -3px;
  filter: blur(2px);
}

.boutonFlashy button span{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  /*
  changer de la couleur du fond
  et la couleur de la police
   */
  background: var(--color-dark);
  color: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  text-transform: uppercase;
border-radius: 6px 0 6px 0;
}

</style>