<template>
  <div id="tableaufacture" @insertion-bdd="insereObjetDansBdd(nomCollection)">
    <div id="titreTableauFacturerNonSolde">
      <div id="numeroTitreFacturier" class="titreTableau">
        <h4>N°</h4>
      </div>
      <div class="titreTableau">
        <h4>Apprenti</h4>
      </div>
      <div class="titreTableau">
        <h4>Section</h4>
      </div>
      <div class="titreTableau">
        <h4>Employeur</h4>
      </div>
      <div class="titreTableau">
        <h4>Contrat</h4>
      </div>
      <div class="titreTableau">
        <h4>OPCO</h4>
      </div>
      <div class="titreTableau">
        <h4>Facture</h4>
      </div>
      <div class="titreTableau">
        <h4>Reste à payer</h4>
      </div>
      <div class="titreTableau">
        <h4>Etape</h4>
      </div>
      <div id="titreTableauDerniereCase" class="titreTableau">
        <h4></h4>
      </div>
    </div>
    <div id="filtresFacturier">
      <div id="premiereCaseTableauRecherche"></div>
      <div class="enteteRecherche">
        <select>
          <option>Choisir un apprenti</option>
        </select>
        <bouton-base
          @click="etatFormulaire = 'apprenti'"
          class="BoutonBaseRecherche"
          id="BoutonBaseRechercheApprenti"
          :intituleBouton="this.$data.nomBoutonApprenti"
          v-on:click="this.ajouterUnApprenti"
        ></bouton-base>
      </div>
      <div class="enteteRecherche">
        <select>
          <option>CI</option>
          <option>CDUI</option>
          <option>COM</option>
          <option>GPME</option>
          <option>MCO</option>
          <!--anciennement MUC-->
          <option>MMV</option>
          <option>NDRC</option>
          <option>SAM</option>
        </select>
        <bouton-base
          class="BoutonBaseRecherche"
          id="BoutonBaseRechercheSection"
          :intituleBouton="this.$data.nomBoutonSection"
          v-on:click="this.ajouterUneSection"
        ></bouton-base>
      </div>
      <div class="enteteRecherche">
        <select>
          <option>Test employeur</option>
        </select>
        <bouton-base
          @click="etatFormulaire = 'employeur'"
          class="BoutonBaseRecherche"
          id="BoutonBaseRechercheEmployeur"
          :intituleBouton="this.$data.nomBoutonEmployeur"
          v-on:click="this.ajouterUnEmployeur"
        ></bouton-base>
        <!--bouton-base @click="formMaitre = true" class="BoutonBaseRecherche" id="BoutonBaseRechercheMaitre" :intituleBouton="this.$data.nomBoutonMaitre" v-on:click="this.ajouterUnMaitre"></bouton-base-->
      </div>
      <div ></div>
      <div class="enteteRecherche">
        <select>
          <option>Choisir</option>
        </select>
        <bouton-base
          class="BoutonBaseRecherche"
          id="BoutonBaseRechercheOPCO"
          :intituleBouton="this.$data.nomBoutonOPCO"
          v-on:click="this.ajouterUnOPCO"
        ></bouton-base>
      </div>
      <div></div>
      <div></div>
      <div>
        <select>
          <option>en cours</option>
        </select>
      </div>
      <div></div>
    </div>

    <div id="lesFormulairesAjoutFacturier">
      <formulaire-apprenti
        v-if="etatFormulaire == 'apprenti'"
        v-on:afficheMineurEmancipe="this.apprentiMineurEmancipe"
        v-on:afficheMineurNonEmancipe="this.apprentiMineurNonEmancipe"
        v-on:afficheMajeur="this.apprentiMajeur"
        v-on:remetEtatInitial="this.remetEtatInitial"
        id="formApprenti"
      ></formulaire-apprenti>
      <formulaire-employeur
        v-if="etatFormulaire == 'employeur'"
        v-on:afficheEmployeurPublic="this.SiEmployeurPublic"
        v-on:remetEtatInitial="this.remetEtatInitial"
        id="formEmployeur"
      ></formulaire-employeur>
      <formulaire-maitre
        v-if="formMaitre"
        v-on:remetEtatInitial="this.remetEtatInitial"
        id="formMaitre"
      ></formulaire-maitre>
      <formulaire-contrat
        v-if="formContrat"
        v-on:afficheEmployeurPublic="this.SiEmployeurPublic"
        v-on:remetEtatInitial="this.remetEtatInitial"
        id="formEmployeur"
      ></formulaire-contrat>
    </div>

    <div class="boutonCreationDossier">
      <span class="iconeAjout"
        ><font-awesome-icon icon="fa-person-circle-plus"
      /></span>
      <span>Creer un nouveau dossier</span>
    </div>
    <div id="lignesDuFacturier">
      <element-contrat-tableau-facturier></element-contrat-tableau-facturier>
    </div>
  </div>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
import elementContratTableauFacturier from '@/components/Controler/backOffice/elementContratTableauFacturier.vue';
import formulaireApprenti from '@/components/Controler/backOffice/formulaireApprenti.vue';
import formulaireEmployeur from '@/components/Controler/backOffice/formulaireEmployeur.vue';
import formulaireMaitre from '@/components/Controler/backOffice/formulaireMaitre.vue';
//import formulaireContrat from "@/components/Controler/backOffice/formulaireContrat.vue";

export default {
  name: 'tableauFactureNonSoldees',
  components: {
    BoutonBase,
    elementContratTableauFacturier,
    formulaireApprenti,
    formulaireEmployeur,
    formulaireMaitre,
  },
  data() {
    return {
      nomBoutonApprenti: 'ajouter',
      nomBoutonSection: 'ajouter',
      nomBoutonEmployeur: 'ajouter',
      nomBoutonOPCO: 'ajouter',
      nomBoutonMaitre: 'ajouter',
    };
  },
  methods: {
    ajouterUnApprenti() {
      console.log('ajoute un apprenti');
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      let formulaireApprenti = document.getElementById(
        'lesFormulairesAjoutFacturier'
      );

      //A RENDRE DYNAMIQUE
      if (this.$data.nomBoutonApprenti == 'ajouter') {
        if (
          formulaireApprenti.classList.contains('fermetureFormulaireFacturier')
        ) {
          formulaireApprenti.classList.remove('fermetureFormulaireFacturier');
        } else {
          formulaireApprenti.classList.add('OuvertureFormulaireFacturier');
        }

        this.$data.nomBoutonApprenti = 'annuler';
        barreRechercheFacturier.style.height = '26rem';
        formulaireApprenti.style.display = 'unset';
      } else {
        /*this.$data.nomBoutonApprenti="ajouter";
        barreRechercheFacturier.style.height= "4rem";
        formulaireApprenti.classList.add("fermetureFormulaireFacturier");*/
        this.resetFormulaire('Apprenti');
      }
    },
    resetFormulaire(NomFormulaire) {
      let formulaire = document.getElementById('lesFormulairesAjoutFacturier');
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      formulaire.classList.add('fermetureFormulaireFacturier');
      barreRechercheFacturier.style.height = '4rem';
      this.$data['nomBouton' + NomFormulaire] = 'ajouter';
      this['form' + nomFormulaire] = false;
    },
    apprentiMineurEmancipe() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '28rem';
    },
    apprentiMineurNonEmancipe() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '35rem';
    },
    apprentiMajeur() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '26rem';
    },
    ajouterUneSection() {
      console.log('ajoute une section');
    },
    ajouterUnEmployeur() {
      console.log('ajoute un employeur');
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      let formulaireEmployeur = document.getElementById(
        'lesFormulairesAjoutFacturier'
      );

      //A RENDRE DYNAMIQUE
      if (this.$data.nomBoutonEmployeur == 'ajouter') {
        if (
          formulaireEmployeur.classList.contains('fermetureFormulaireFacturier')
        ) {
          formulaireEmployeur.classList.remove('fermetureFormulaireFacturier');
        } else {
          formulaireEmployeur.classList.add('OuvertureFormulaireFacturier');
        }

        this.$data.nomBoutonEmployeur = 'annuler';
        barreRechercheFacturier.style.height = '26rem';
        formulaireEmployeur.style.display = 'unset';
      } else {
        /*this.$data.nomBoutonEmployeur="ajouter";
          barreRechercheFacturier.style.height= "4rem";
          formulaireEmployeur.classList.add("fermetureFormulaireFacturier");*/
        this.resetFormulaire('Employeur');
      }
    },
    /*resetFormulaireEmployeur(){
        let formulaireEmployeur=document.getElementById("lesFormulairesAjoutFacturier");
        let barreRechercheFacturier=document.getElementById("filtresFacturier");
        formulaireEmployeur.classList.add("fermetureFormulaireFacturier");
        barreRechercheFacturier.style.height= "4rem";
        this.$data.nomBoutonEmployeur="ajouter";
    },*/
    ajouterUnOPCO() {
      console.log('ajoute un OPCO');
    },
    remetEtatInitial() {
      console.log('remet en place');
      this.resetFormulaireApprenti();
    },
    async insereObjetDansBdd(nomCollection) {
      let objet = Array.from( document.querySelectorAll(
        '#collection-' + nomCollection + ' .inputBoxFacturier input'
      )).map(function());

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
  },
};
</script>

<style scoped>
#titreTableauFacturerNonSolde {
  display: flex;
  background: var(--mauve-clair);
  height: 28px;
  box-shadow: 0px 5px 5px -3px;
}

.titreTableau h4 {
  font-weight: 300;
  font-size: 1rem;
  color: white;
  text-align: center;
}

#numeroTitreFacturier {
  width: 3%;
  min-width: 30px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 0 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(2) {
  background: var(--color-dark);
  width: 18%;
  min-width: 150px;
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(3) {
  width: 5%;
  min-width: 60px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}
#titreTableauFacturerNonSolde :nth-child(4) {
  width: 18%;
  min-width: 100px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(5) {
  width: 6%;
  min-width: 60px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(6) {
  width: 8%;
  min-width: 70px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(7) {
  width: 8%;
  min-width: 70px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(8) {
  width: 8%;
  min-width: 98px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(9) {
  width: 25%;
  min-width: 150px;
  background: var(--color-dark);
  border-radius: 6px 0 0 0;
}

#titreTableauDerniereCase {
  width: 15%;
  min-width: 130px;
  background: var(--color-dark);
  background: var(--color-dark);
  height: 28px;
}

/* Valeur height a changer dynamiquement pour englober les formulaires*/
#filtresFacturier {
  display: flex;
  background: var(--mauve-clair);
  height: 4rem;
  box-shadow: 0px 5px 5px -4px;
  transition-property: height;
  transition-duration: 1s;
}

#premiereCaseTableauRecherche {
  width: 3%;
  min-width: 30px;
}

#filtresFacturier :nth-child(2) {
  padding: 0px;
  width: 18%;
  min-width: 150px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(3) {
  width: 5%;
  min-width: 60px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(4) {
  width: 18%;
  min-width: 100px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(5) {
  width: 6%;
  min-width: 60px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(6) {
  width: 8%;
  min-width: 70px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(7) {
  width: 8%;
  min-width: 70px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(8) {
  width: 8%;
  min-width: 98px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(9) {
  width: 25%;
  min-width: 150px;
}

#filtresFacturier :nth-child(10) {
  width: 15%;
  min-width: 130px;
}

.enteteRecherche {
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  width: 100%;
}

#lesFormulairesAjoutFacturier {
  display: none;
  position: absolute;
  top: 9.5rem;
  margin-top: 4em;
  width: 100%;
  height: 13rem;
  animation: fadein 3s;
}

.OuvertureFormulaireFacturier {
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  margin-left: 0%;
  opacity: 1;
}

.fermetureFormulaireFacturier {
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  margin-left: 100%;
  opacity: 0;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.boutonCreationDossier {
  margin: 0.5rem 3rem 0.5rem 3rem;
  padding: 0.3rem;
  text-align: center;
  border-style: dashed;
  color: #ffaece;
  border-color: #ffaece;
  text-transform: capitalize;
  border-radius: 10px;
  transition-duration: 1s;
}

.iconeAjout {
  font-size: 120%;
}

.boutonCreationDossier span {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.boutonCreationDossier:hover {
  font-size: 120%;
}

#lignesDuFacturier {
  /*
  La seule barre de defilement du facturier
   */
  background: var(--mauve-clair);
  flex-grow: 3;
  margin: 0rem 0.5rem 0.5rem 0.3rem;
  margin-bottom: 2.4rem;
  border-radius: 7px;
  box-shadow: 0px 5px 5px -3px;
}

.detailApprenti select {
  width: 50%;
}
</style>
