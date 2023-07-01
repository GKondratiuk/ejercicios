/* el index.js sirve como mediador entre nuestros componentes y el app.jsx, vendría a ser algo asi como un rooteador y los mismos serán importados automaticamente al app.jsx */
import Button from "./Button/Button"; 
import Input from "./Input/Input";
import Background from "./Background/Background";

/* Recordar exportar todo para importarlo nuevamente al 'App.jsx'*/
export{Button, Input, Background} 
