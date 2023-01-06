<script>

const SERVEUR= {
  PROTOCOLE_SERVEUR: "http://",
  IP_SERVEUR: "212.47.248.186",
  PORT_SERVEUR: "8080"
};

const API_OPCO={
  PROTOCOLE_SERVEUR: "https://",
  ADRESSE_SERVEUR: "apiopco.opcoserveur.fr/ApiEchangeCFA/",
  VERSION:"v1",
  NOM_TYPE:"nomOPCO",
  lienGET:{
    dossiers:"dossiers",
    etats:"dossiers/etats",
    liste:"dossiers/liste",
    status:"status"
  },
  lienPOST:{
    documents:"documents",
    dossiers:"dossiers",
    factures:"factures",
  }

}

const AJAX={
  ADRESSE_SERVEUR: SERVEUR.PROTOCOLE_SERVEUR+SERVEUR.IP_SERVEUR+":"+SERVEUR.PORT_SERVEUR+"/",
  ADRESSE_API_OPCO: API_OPCO.PROTOCOLE_SERVEUR+API_OPCO.ADRESSE_SERVEUR+API_OPCO.VERSION+"/"
}

const LIEN={
  ajouter:"ajout",
  modifier:"modifie",
  supprimer:"supprime",
  obtenir:"get",
  connexion:"connexion"
}

const COLLECTIONS={
  utilisateur:"utilisateur",
  OPCO:"identifiantsOPCO",
  apprenti:"apprenti"
}

export default {
  name: "configuration_front",
  data () {
    return{
      serveur: AJAX.ADRESSE_SERVEUR,
      urlPossibles:LIEN,
      collections:COLLECTIONS,
      connexionAPI_OPCO: AJAX.ADRESSE_API_OPCO,
      infoOPCO:API_OPCO
    }
  }
}
</script>