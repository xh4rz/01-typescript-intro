import './style.css';
import { setupCounter } from './counter.ts';
// import './topics/01-basic-types';
// import './topics/02-object-interface';
// import './topics/03-functions';
// import './topics/04-homework-types';
// import './topics/05-basic-destructuring';
// import './topics/06-function-destructuring';
// import './topics/07-import-export';
// import './topics/08-classes';
import './topics/09-generics';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola Mundo
`;

console.log('hola mundo');

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
