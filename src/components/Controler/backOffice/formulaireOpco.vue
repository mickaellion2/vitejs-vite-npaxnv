<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Opco</h5>
    <b @click="sansaide = !sansaide">Aide</b>
    <div v-if="!sansaide">
      Remplir les informations sur l'Opco puis les identifiants pour les
      accrochages en recette et en production.
    </div>
  </header>
  <section>
    <div class="detailOpco">
      <div>
        <div id="opcoInfos">
          <span class="detailFacturier">Informations</span>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom</span>
            <input
              id="inputNomOpco"
              type="text"
              v-model="nom_opco"
              placeholder="obligatoire"
              required
            />
          </div>
          ....
        </div>
        <div id="opcoAccrochages">
          <span class="detailFacturier">Accrochages</span>
          <div class="opcoAccrochage">
            <span class="detailFacturier">Accrochage Recette</span>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Clé API Recette</span>
              <input
                class="key"
                type="text"
                v-model="apikey_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Client id recette</span>
              <input
                class="key"
                type="text"
                v-model="clientid_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Client secret recette</span>
              <input
                class="key"
                type="text"
                v-model="clientsecret_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Token Url recette</span>
              <input
                class="url"
                type="text"
                v-model="tokenurl_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Api Url recette</span>
              <input
                class="url"
                type="text"
                v-model="apiurl_recete"
                placeholder="obligatoire"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <bouton-base
        class="BoutonBaseRecherche"
        intituleBouton="effacer"
        @click="this.effacerFormulaire"
      ></bouton-base>
      <bouton-insertion-bdd
        class="boutoninsertionbdd"
        nomCollection="opco"
      ></bouton-insertion-bdd>
    </div>
  </section>
</template>

<script>
import BoutonInsertionBdd from '@/components/Controler/elementsHTML/bouton/BoutonInsertionBdd.vue';
import construitURLService from '@/services/construitURL.service.vue';
import Opco from '@/components/Model/OpcoJS.Class';
import creationJSONService from '@/services/creationJSON.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';

export default {
  name: 'formulaireOpco',
  components: {
    BoutonBase,
  },

  data() {
    return {
      nom_opco: '',
      apikey_recete: '',
      cliendid_recete: '',
      clientsecret_recete: '',
      tokenurl_recete: '',
      apiurl_recete: '',
      objet:Object
    };
  },
  emits:{
    objet() {

    }
  },
  computed:{
    emitObjet(){

      return {
        nom:this.nom_opco,
        accrochages: [
          {
            apikey_recete: this.apikey_recete,
            cliendid_recete: this.apikey_recete,
            clientsecret_recete: this.apikey_recete,
            tokenurl_recete: this.apikey_recete,
            apiurl_recete: this.apikey_recete,
          }
        ]
      }

    }
  }
  methods: {
    async rentrerOpcoBDD(event) {
      let opco = new Opco(this.$data.nom_opco);
      opco.accroche({
        prod: false,
        apikey: this.$data.apikey_recette,
        apikey: this.$data.clientid_recette,
        apikey: this.$data.clientsecret_recette,
        apikey: this.$data.tokenurl_recette,
        apikey: this.$data.apiurl_recette,
      });
      let JSON = creationJSONService.methods.construitJSON(opco);
      let URL = construitURLService.methods.construitURLConnectionBack(
        configuration.data().collections.opco,
        configuration.data().urlPossibles.ajouter
      );
      let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur : ' + reponseBDD.Error_info);
      } else {
        opco.modifieIdentifiant(reponseBDD.extra_info.identifiantOpco);
        this.$emit('insertionObjetOk', { collection: 'opco', objet: opco });
        console.log('Opco ajouté en base de données, _id:' + opco.id);
      }
    },
    async effacerFormulaire() {
      for (let valeur of document.getElementsByClassName('detailOpco')[0]
        .children) {
        valeur.lastChild.value = '';
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/*section{
  display: flex;
  padding: 10px;
}*/

.detailMaitre {
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.2rem 0.5rem;
  box-shadow: 0px 5px 5px -5px;
}

.detailMaitreMineur {
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.2rem 0.5rem;
  box-shadow: 0px 5px 5px -5px;
}

.etudiantMineur {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detailMaitreMineur .etudiantMineur div {
  margin: auto;
}

.ligneHorizontaleFormulaire {
  margin: 1em;
  height: 3px;
  background: linear-gradient(#e66465, #9198e5);
  width: 95%;
}

.titreFormulaireFacturier {
  text-align: center;
}

.inputBoxFacturier {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

/*.detailMaitre div:last-child{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}*/
</style>

/* Suggestions : -prévoir d'utiliser une API pour rentrer des données
géographiques -prévoir d'utiliser une API pour rentrer des données d'entreprise
-faire une validation des données afin de vérifier quelles sont bien dans le bon
format */
