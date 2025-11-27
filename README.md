# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Task progetto

Spostare cartella immagini
Cancellare collegamento bootstrap dall'index.html
impostare ambiente di lavoro
Realizzare repo
Creare progetto React con linea di comando
Creare cartella immagini e importare le immagini all'interno della cartella immagini, interno alla cartella assets (vedi all'interno di src)
Creare cartella components all'interno di src
Cancella contenuto file App.jsx
Pensa struttura HTML
Elementi che sono liste (es Navbar nell'header,liste nel main)
Main diviso in Sezioni
elementi del footer (button ed elenco con icone)
CSS
Regola di reset
Imposta font nel body
body {
font-family: Open sans;
}
Individuare macro aree del layout
Header
Main
Footer
Individuare aree all'interno delle macro aree
Nell'header troviamo la componente logo
Navbar menu a sinistra
Nel main troviamo due sezioni
Sezione dedicata ai contenuti
Sezione con elenco menu
Nel footer abbiamo due sezioni una top e l'altra bottom
Nel sezione footer top abbiamo immagine di sfondo poi immagine logo ingrandita e rotata che sovrasta l'immagine di sfondo
Elenco menu in tre colonne
Footer bottom menu con icone

Descrizione:
Continuate a lavorare nella stessa repo di ieri e create un nuovo componente riutilizzabile per visualizzare le card dei fumetti, sfruttando l’array di oggetti in allegato. Fate in modo che il componente riceva i dati del singolo fumetto come props.

Bonus: Provare a centralizzare i dati facendoli partire tutti da App.jsx e passandoli via prop ai vari componenti che li necessitano

creare cartella data all'interno di src
creare cartella data all'interno file comics.js
creare componente card
importare array in card
realizzare card componente e la sua logica
importare la componemte in main
