import { IMenuItem } from '../../../Interfaces/IMenu';
export const deftopmenu: Array<IMenuItem> = 
    [
    {
      "titolo": "Dashboard",
      "url": "/dashboard"
    },
    {
      "titolo": "Inserisci Richiesta",
      "url": "/richiesta/"
    },
    {
      "titolo": "Gestione Richieste",
      "url": "#"
    },
    {
      "titolo": "Storico Richieste",
      "url": "#"
    },
    {
      "titolo": "Amministrazione",
      "url": "#",
      "sottovoci": [
        {
          "titolo": "Inserisci Tipologia Richiesta",
      "url": "#"
        },
        {
          "titolo": "Gestione Tipolgia Richiesta",
      "url": "#"
        },
        {
          "titolo": "Inserisci Settore di Competenza",
      "url": "#"
        },
        {
          "titolo": "Gestione Settori di Competenza",
      "url": "#"
        }
      ]
    }
  ]


  export const defusermenu: Array<IMenuItem> = 
    [
    {
      "titolo": "Logout",
      "url": "/logout"
    },
   
  ]