<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Apprenti</h5>
    <a target="_blank" href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103" style="font-weight: bold;">Aide pour remplir le formulaire</a>
    <!--En attendant de pouvoir implémenter correctement les enums-->
  </header>
  <section>
    <div class="detailApprenti">
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Nom de naissance</span>
        <input type="text" v-model="nom_de_naissance" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Nom d'usage</span>
        <input type="text" v-model="nom_usage">
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Prénom</span>
        <input type="text" v-model="prenom" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Date de naissance</span>
        <input id="dateNaissanceApprenti" type="date" :value="dateNaissance" @input="this.SiApprentiMineur" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Sexe</span>
        <select @change="sexe = sexe.substring(0,1);" v-model="sexe">
          <option>Masculin</option>
          <option>Féminin</option>
          <!--option>Neutre</option-->
        </select>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Numéro du département de naissance</span>
        <input type="text" v-model="departement_de_naissance" placeholder="obligatoire" required>
        <!--select>
          <option></option>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Commune de naissance</span>
        <input type="text" v-model="commune_de_naissance" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Nationalité</span>
        <input type="text" v-model="nationalite" placeholder="obligatoire" required>
        <!--select>
          <option></option>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Régime social</span>
        <div style="display: flex; flex-direction: row;">
          <input type="text" placeholder="ID" v-model="numero_regime_social" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_regime_social">
        </div>
        <!--select v-model="regime_social">
          <option value="1">MSA</option>
          <option value="2">URSSAF</option>
        </select-->
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
        <span class="detailFacturier">Courriel</span>
        <input type="text" v-model="courriel" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Situation avant ce contrat</span>
        <div style="display: flex; flex-direction: row;">
          <input type="text" placeholder="ID" v-model="numero_situation_apprenti" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_situation_apprenti">
        </div>
        <!--select v-model="libelle_situation_apprenti">
          <option value="1">Scolaire (hors DIMA)</option>
          <option value="2">Prépa apprentissage</option>
          <option value="3">Etudiant</option>
          <option value="4"> Contrat d’apprentissage</option>
          <option value="5">Contrat de professionnalisation</option>
          <option value="6">Contrat aidé</option>
          <option value="7">En formation au CFA sous statut de stagiaire de la formation professionnelle, avant signature d’un contrat d’apprentissage (L6222-12-1 du code du travail)</option>
          <option value="8">En formation, au CFA sans contrat sous statut de stagiaire de la formation professionnelle, suite à rupture (5° de L6231-2 du code du travail)</option>
          <option value="9">Autres situations sous statut de stagiaire de la formation professionnelle</option>
          <option value="10">Salarié</option>
          <option value="11">Autres situations sous statut de stagiaire de la formation professionnellePersonne à la recherche d’un emploi (inscrite ou non à Pôle Emploi)</option>
          <option value="12">Inactif</option>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Dernier diplôme ou titre préparé</span>
        <div style="display: flex; flex-direction: row;">
          <input type="text" placeholder="ID" v-model="numero_dernier_diplome" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_dernier_diplome">
        </div>
        <!--select v-model="libelle_dernier_diplome">
          <optgroup label="Diplôme ou titre de niveau bac +5 et plus">
            <option value="80">Doctorat</option>
            <option value="71">Master professionnel/DESS</option>
            <option value="72">Master recherche/DEA</option>
            <option value="73">Master indifférencié</option>
            <option value="74">Diplôme d'ingénieur, diplôme d'école de commerce</option>
            <option value="79">Autre diplôme ou titre de niveau bac+5 ou plus</option>
          </optgroup>
          <optgroup label="Diplôme ou titre de niveau bac +3 et 4 ">
            <option value="61">1ère année de Master</option>
            <option value="62">Licence professionnelle</option>
            <option value="63">Licence générale</option>
            <option value="69">Autre diplôme ou titre de niveau bac +3 ou 4</option>
          </optgroup>
          <optgroup label="Diplôme ou titre de niveau bac +2">
            <option value="54">Brevet de Technicien Supérieur</option>
            <option value="55">Diplôme Universitaire de technologie</option>
            <option value="58">Autre diplôme ou titre de niveau bac+2</option>
          </optgroup>
          <optgroup label="Diplôme ou titre de niveau bac">
            <option value="41">Baccalauréat professionnel</option>
            <option value="42">Baccalauréat général</option>
            <option value="43">Baccalauréat technologique</option>
            <option value="49">Autre diplôme ou titre de niveau bac</option>
          </optgroup>
          <optgroup label="Diplôme ou titre de niveau CAP/BEP">
            <option value="33">CAP</option>
            <option value="34">BEP</option>
            <option value="35">Mention complémentaire</option>
            <option value="38">Autre diplôme ou titre de niveau CAP/BEP</option>
          </optgroup>
          <optgroup label="Aucun diplôme ni titre">
            <option value="25">Diplôme national du Brevet</option>
            <option value="26">Certificat de formation générale</option>
            <option value="13">Aucun diplôme ni titre professionnel</option>
          </optgroup>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Derniere classe / année suivie</span>
        <div style="display: flex; flex-direction: row;">
          <input type="text" placeholder="ID" v-model="numero_derniere_classe_suivie" style="width:10%">
          <input type="text" placeholder="Libellé" v-model="libelle_derniere_classe_suivie">
        </div>
        <!--select v-model="libelle_derniere_classe_suivie">
          <option></option>
        </select-->
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Numéro de sécurité sociale</span>
        <input type="text" v-model="numero_de_securite_sociale" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Clé numéro de sécurité sociale</span>
        <input type="text" v-model="cle_numero_de_securite_sociale" placeholder="obligatoire" required>
      </div>
      <div class="inputBoxFacturier" style="display:flex;flex-direction: row;">
        <span class="detailFacturier">Travailleur handicapé</span>
        <input type="checkbox" v-model="travailleur_handicape" required>
      </div>
      <div class="inputBoxFacturier">
        <div v-if="afficheFormulaireMineur==true" class="etudiantMineur" style="display:flex;">

          <div class="inputBoxFacturier" style="display:flex;flex-direction: row;">
            <span class="detailFacturier">Mineur émancipé</span>
            <input :value="afficheMineurNonEmancipe" @input="this.SiMineurEmancipe" type="checkbox" v-model="mineur_emancipe" required>
          </div>
        </div>
      </div>           
      <bouton-facturier class="boutonFacturierRecherche" intituleBouton="effacer" v-on:click="this.effacerFormulaire"></bouton-facturier>
      <bouton-facturier class="boutonFacturierRecherche" intituleBouton="ajouter" v-on:click="this.rentrerApprentiBDD"></bouton-facturier> 
    </div>
    <div class="detailApprentiMineur">

        <div v-if="afficheFormulaireMineur==true && afficheMineurNonEmancipe==true" class="etudiantMineur">
          <!--div class="ligneHorizontaleFormulaire"></div-->
          
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom du représentant légal</span>
            <input type="text" v-model="nom_du_representant_legal">
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Adresse du représentant légal</span>
            <input type="text" v-model="adresse_du_representant_legal">
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Code postal du représentant légal</span>
            <input type="text" v-model="code_postal_du_representant_legal">
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Prénom du représentant légal</span>
            <input type="text" v-model="prenom_du_representant_legal">
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Complément d'adresse du représentant légal</span>
            <input type="text" v-model="complement_adresse_du_representant_legal">
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Commune du représentant légal</span>
            <input type="text" v-model="commune_du_representant_legal">
          </div>
        </div>
    </div>
  </section>

</template>

<script>
  import boutonFacturier from "@/components/Controler/elementsHTML/bouton/boutonFacturier.vue";
  import construitURLService from "@/services/construitURL.service.vue";
//import {Apprenti} from "@/components/Model/Apprenti.Class";
//import {Apprenti} from "@/components/Model/ApprentiTS.Class";
  import Apprenti from "@/components/Model/ApprentiJS.Class.js";
  import creationJSONService from "@/services/creationJSON.service.vue";
  import configuration from "@/administration/configuration.vue";
  import connexionAPIService from "@/services/connexionAPI.service.vue";

  export default {
    name: "formulaireApprenti",
    components: {
      boutonFacturier
    },

    data(){
      return {
        afficheFormulaireMineur:false,
        afficheMineurNonEmancipe:true,
        
        nom_de_naissance:"",
        nom_usage:"",
        prenom:"",
        dateNaissance:"",
        sexe:"",

        commune_de_naissance:"",
        departement_de_naissance:"",
        adresse:"",
        complement_adresse:"",
        code_postal:"",
        commune:"",
        nationalite:"",
        telephone:"",
        courriel:"",

        travailleur_handicape:false,
        numero_de_securite_sociale:"",
        cle_numero_de_securite_sociale:"",
        numero_situation_apprenti:"",
        libelle_situation_apprenti:"",
        numero_dernier_diplome:"",
        libelle_dernier_diplome:"",
        derniere_classe_suivie: "",

        mineur_emancipe:false,
        nom_du_representant_legal:"",
        adresse_du_representant_legal:"",
        code_postal_du_representant_legal:"",
        prenom_du_representant_legal:"",
        complement_adresse_du_representant_legal:"",
        commune_du_representant_legal:""
      }
    },
    methods: {
      SiApprentiMineur(event) {
        console.log(event);
      //on recupere la date du jour
        const dateDuJour = Date.now();
      //On recuperer la saisie de l'agent et on soustrait 18 ans
        let dateDeNaissance = document.getElementById("dateNaissanceApprenti").value;
        this.$data.dateNaissance=dateDeNaissance
        dateDeNaissance = dateDeNaissance.split("-");
        dateDeNaissance = new Date(dateDeNaissance[0], dateDeNaissance[1] - 1, dateDeNaissance[2]);
        dateDeNaissance = dateDeNaissance.getTime();
        const dixHuitAnsEnMillisecondes = 567648000000;
        if ((dateDuJour - dateDeNaissance) < dixHuitAnsEnMillisecondes) {
        //On affiche la partie pour les mineurs du formulaire
          this.$data.afficheFormulaireMineur = true;
        //On passe l'information au composant parent
          this.$emit('afficheMineurNonEmancipe', event);
        } else {
          this.$data.afficheFormulaireMineur = false;
          this.$emit('afficheMajeur', event);
        }
      },
      SiMineurEmancipe(event) {
        if (this.$data.afficheMineurNonEmancipe) {
          this.$data.afficheMineurNonEmancipe = false;
          this.$emit('afficheMineurEmancipe', event);
        } else {
          this.$data.afficheMineurNonEmancipe = true;
          this.$emit('afficheMineurNonEmancipe', event);
        }
      },
      async rentrerApprentiBDD(event){
        console.log(this.$data.nom_de_naissance);

        let apprenti= new Apprenti(
          this.$data.nom_de_naissance,
          this.$data.nom_usage,
          this.$data.prenom,
          this.$data.dateNaissance,
          this.$data.sexe,

          this.$data.commune_de_naissance,
          this.$data.departement_de_naissance,
          this.$data.adresse,
          this.$data.complement_adresse,
          this.$data.code_postal,
          this.$data.commune,
          this.$data.nationalite,
          this.$data.telephone,
          this.$data.courriel,

          this.$data.travailleur_handicape,
          this.$data.numero_de_securite_sociale,
          this.$data.cle_numero_de_securite_sociale,
          
          this.$data.mineur_emancipe,
          this.$data.nom_du_representant_legal,
          this.$data.adresse_du_representant_legal,
          this.$data.code_postal_du_representant_legal,
          this.$data.prenom_du_representant_legal,
          this.$data.complement_adresse_du_representant_legal,
          this.$data.commune_du_representant_legal
          );

        let JSON= creationJSONService.methods.construitJSON(apprenti);
        let URL = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.apprenti, configuration.data().urlPossibles.ajouter);
        //Reservation case mémoire de la BDD
        let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
        if(reponseBDD.code_reponse !==0){
          alert("erreur : "+reponseBDD.Error_info);
        }
        else{
          apprenti.modifieIdentifiantApprenti(reponseBDD.extra_info.identifiantApprenti);
          JSON= creationJSONService.methods.construitJSON(apprenti);
          //Modification de la case mémoire et ajout de l'apprenti en BDD
          URL= construitURLService.methods.construitURLConnectionBack(configuration.data().collections.apprenti, configuration.data().urlPossibles.modifier);
          reponseBDD= await connexionAPIService.methods.requete(URL, JSON);
          if(reponseBDD.code_reponse !==0){
            alert("erreur : "+reponseBDD.Error_info);
          }else{
            this.$emit('remetEtatInitial', event);
            alert("Apprenti ajouté en base de données");
          }
        }
      },
      async effacerFormulaire(){
        for(let valeur of document.getElementsByClassName("detailApprenti")[0].children){
            /*console.log(valeur.lastChild.value);*/
          valeur.lastChild.value = "";
        }
      }
    }}

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

.detailApprenti{
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

.etudiantMineur{

}

.etudiantMineur:last-child{
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;  
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2rem 0.5rem;

}

.detailApprentiMineur .etudiantMineur div{
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

/*.detailApprenti div:last-child{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}*/

</style>