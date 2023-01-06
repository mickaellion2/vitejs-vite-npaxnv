<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Employeur</h5>
    <a target="_blank" href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103" style="font-weight: bold;">Aide pour remplir le formulaire</a>
    <!--En attendant de pouvoir implémenter correctement les enums-->
  </header>
  <section>
    <div class="detailEmployeur">
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Numéro SIRET</span>
        <input id="inputSiret" type="text" v-model="siret" @change="validationSiret()" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Effectif</span>
        <input id="inputEffectif" type="text" v-model="effectif" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Nom du contact</span>
        <input type="text" v-model="nom_du_contact" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Prénom du contact</span>
        <input type="text" v-model="prenom_du_contact" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Type d'employeur</span>
        <div>
          <input type="text" placeholder="ID" v-model="numero_type_employeur" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_type_employeur">
        </div>
        <!--select v-model="type_employeur" required>
          <optgroup label="Privé">
            <option value="11">Entreprise inscrite au répertoire des métiers ou au registre des entreprises pour l’Alsace-Moselle</option>
            <option value="12">Entreprise inscrite uniquement au registre du commerce et des sociétés</option>
            <option value="13">Entreprises dont les salariés relèvent de la mutualité sociale agricole</option>
            <option value="14">Profession libérale</option>
            <option value="15">Association</option>
            <option value="16">Autre employeur privé</option>
          </optgroup>
          <optgroup label="Public">
            <option value="21">Service de l’Etat (administrations centrales et leurs services déconcentrés de la fonction publique d’Etat)</option>
            <option value="22">Commune</option>
            <option value="23">Département</option>
            <option value="24">Région</option>
            <option value="25">Etablissement public hospitalier</option>
            <option value="26">Etablissement public local d’enseignement</option>
            <option value="27">Etablissement public administratif de l’Etat</option>
            <option value="28">Etablissement public administratif local(y compris établissement public de coopération intercommunale EPCI)</option>
            <option value="29">Autre employeur public</option>
          </optgroup>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Employeur spécifique</span>
        <div>
          <input type="text" placeholder="ID" v-model="numero_employeur_specifique" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_employeur_specifique">
        </div>
        <!--select v-model="employeur_specifique">
          <option value="1">Entreprise de travail temporaire</option>
          <option value="2">Groupement d’employeurs</option>
          <option value="3">Employeur saisonnier</option>
          <option value="4">Apprentissage familial : l’employeur est un ascendant de l’employeur</option>
          <option value="0">Aucun de ces cas</option>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Etablissement</span>
        <input type="text" v-model="etablissement">
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Adresse</span>
        <input type="text" v-model="adresse" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Complément d'adresse</span>
        <input type="text" v-model="complement_adresse">
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Code postal</span>
        <input type="text" v-model="code_postal" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Commune</span>
        <input type="text" v-model="commune" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Téléphone</span>
        <input type="text" v-model="telephone" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Courriel du contact</span>
        <input id="inputEmail" type="text" v-model="courriel" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Code NAF</span>
        <input type="text" v-model="code_naf" placeholder="5 caractères, 4 chiffres suivis d'une lettre">
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Code IDCC</span>
        <input type="text" v-model="code_idcc" placeholder="4 chiffres">
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Convention collective</span>
        <input type="text" v-model="convention_collective">
      </div>
      <div class="inputBoxFacturier">
        <div v-if="afficheFormulaireMineur==true" class="etudiantMineur">
          <div class="ligneHorizontaleFormulaire"></div>
          <div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Employeur Public</span>
              <input :value="afficheEmployeurPublic" @input="this.SiEmployeurPublic" type="checkbox" v-model="employeur_public" required>
            </div>
          </div>
        </div>
      </div>  
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Caisse de retraite complémentaire</span>
        <input type="text" v-model="caisse_retraite_complementaire" placeholder="obligatoire" required>
      </div>
      <div v-if="afficheEmployeurPublic==true">
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Adhésion de l'employeur au régime spécifique d'assurance chômage</span>
          <input :value="afficheEmployeurPublic" type="checkbox" v-model="adhesion_apprenti_régime_spécifique_assurance_chomage" required>
        </div>
      </div>
      <bouton-facturier class="boutonFacturierRecherche" intituleBouton="effacer" v-on:click="this.effacerFormulaire"></bouton-facturier>
      <bouton-facturier class="boutonFacturierRecherche" intituleBouton="ajouter" v-on:click="this.rentrerEmployeurBDD"></bouton-facturier> 
    </div>
  </section>

</template>

<script>
  import boutonFacturier from "@/components/Controler/elementsHTML/bouton/boutonFacturier.vue";
import construitURLService from "@/services/construitURL.service.vue";
//import {Employeur} from "@/components/Model/Employeur.Class";
//import {Employeur} from "@/components/Model/EmployeurTS.Class";
import Employeur from "@/components/Model/EmployeurJS.Class.js";
import creationJSONService from "@/services/creationJSON.service.vue";
import configuration from "@/administration/configuration.vue";
import connexionAPIService from "@/services/connexionAPI.service.vue";

  export default {
    name: "formulaireEmployeur",
    components: {
      boutonFacturier
    },

    data(){
      return {
        afficheEmployeurPublic:true,
        siret:"",
        effectif:"",
        nom_du_contact:"",
        prenom_du_contact:"",
        type_employeur:"",
        employeur_specifique:"",
        etablissement:"",
        adresse:"",
        complement_adresse:"",
        code_postal:"",
        commune:"",
        telephone:"",
        courriel:"",
        code_naf:"",
        code_idcc:"",
        convention_collective:"",
        adhesion_apprenti_régime_spécifique_assurance_chomage:"",
        caisse_retraite_complementaire:""
      }
    },
    methods:{
      SiEmployeurPublic(event) {
        if (this.$data.afficheEmployeurPublic) {
          this.$data.afficheEmployeurPublic = false;
              //this.$emit('afficheMineurEmancipe', event);
        } else {
          this.$data.afficheEmployeurPublic = true;
          this.$emit('afficheEmployeurPublic', event);
        }
      },
      validationSiret(){
        let regex = /^[0-9]{14}$/;
        let argument = document.getElementById("inputSiret").value;
        if( regex.test(argument) ){
          console.log("siret validé");
        }
        else{
          console.log("Le format du siret n'est pas bon");
        }
      },
      validationEffectif(){
        let argument = document.getElementById("inputEffectif");
        if( argument.value >=0 ){
          console.log("Effectif validé");
        }
        else{
          console.log("Le format de l'effectif n'est pas bon");

        }
      },
      validationEmail(){
        let argument = document.getElementById("inputEmail").value;
        if( argument ){
          console.log("Email validé");
        }
        else{
          console.log("Le format de l'email n'est pas bon");
        }
      },
       async rentrerEmployeurBDD(event){
        console.log(this.$data.nom_de_naissance);

        let employeur= new Employeur(
          this.$data.siret,
          this.$data.effectif,
          this.$data.nom_du_contact,
          this.$data.prenom_du_contact,
          this.$data.type_employeur,

          this.$data.employeur_specifique,
          this.$data.etablissement,
          this.$data.adresse,
          this.$data.complement_adresse,
          this.$data.code_postal,
          this.$data.commune,
          this.$data.telephone,
          this.$data.courriel,

          this.$data.code_naf,
          this.$data.code_idcc,
          this.$data.convention_collective,
          
          this.$data.adhesion_apprenti_régime_spécifique_assurance_chomage,
          this.$data.caisse_retraite_complementaire
          );

        let JSON= creationJSONService.methods.construitJSON(employeur);
        let URL = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.employeur, configuration.data().urlPossibles.ajouter);
       //Reservation case mémoire de la BDD
        let reponseBDD= await connexionAPIService.methods.requete(URL, JSON);
        if(reponseBDD.code_reponse !==0){
          alert("erreur : "+reponseBDD.Error_info);
        }else{
          employeur.modifieIdentifiantApprenti(reponseBDD.extra_info.identifiantApprenti);
          JSON= creationJSONService.methods.construitJSON(employeur);
          //Modification de la case mémoire et ajout de l'employeur en BDD
          URL= construitURLService.methods.construitURLConnectionBack(configuration.data().collections.employeur, configuration.data().urlPossibles.modifier);
          reponseBDD= await connexionAPIService.methods.requete(URL, JSON);
          if(reponseBDD.code_reponse !==0){
            alert("erreur : "+reponseBDD.Error_info);
          }else{
            this.$emit('remetEtatInitial', event);
            alert("employeur ajouté en base de données");
          }
        }
      },
      async effacerFormulaire(){
        for(let valeur of document.getElementsByClassName("detailApprenti")[0].children){
            /*console.log(valeur.lastChild.value);*/
          valeur.lastChild.value = "";
        }
      }
    }
  }

</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

/*section{
  display: flex;
  padding: 10px;
}*/

.detailEmployeur{
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

.detailEmployeurMineur{
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

.etudiantMineur{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detailEmployeurMineur .etudiantMineur div{
  margin:auto;
}

.ligneHorizontaleFormulaire{
  margin: 1em;
  height: 3px;
  background: linear-gradient(#e66465, #9198e5);
  width: 95%;
}

.titreFormulaireFacturier{
  text-align: center;
}

.inputBoxFacturier{
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

/*.detailEmployeur div:last-child{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}*/

</style>






/*

A faire : 
-formater l'effectif
-formater l'email
-formater le type d'employeur
-formater l'employeur spécifique
-formater le code NAF
-formater le code IDCC
-formater la convention collective
-formater l'employeur public
-formater l'adhésion de l'employeur au régime spécifique d'assurance chômage

-rajouter si les mentions sont obligatoires

*/


Suggestions : 
-prévoir d'utiliser une API pour rentrer des données géographiques
-prévoir d'utiliser une API pour rentrer des données d'entreprise
-faire une validation des données afin de vérifier quelles sont bien dans le bon format

*/