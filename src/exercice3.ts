/**
 * On considère les types suivants
 */
type Carnivore = 'CARNIVORE';
type Herbivore = 'HERBIVORE';
type Omnivore = 'OMNIVORE';
type RegimeAlimentaire = Carnivore | Herbivore | Omnivore;

interface Chat {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPoiles: string;
  nomProprietaire: string;
  regimeAlimentaire: Carnivore;
  chasse(): void;
  miole(): void;
}

interface Chien {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPoiles: string;
  nomProprietaire: string;
  regimeAlimentaire: Carnivore;
  chasse(): void;
  aboie(): void;
}

interface Lion {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPoiles: string;
  regimeAlimentaire: Carnivore;
  chasse(): void;
  rugit(): void;
}

interface Loup {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPoiles: string;
  regimeAlimentaire: Carnivore;
  chasse(): void;
  hurle(): void;
}

interface Coq {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPlumes: string;
  regimeAlimentaire: Omnivore;
  nomProprietaire: string;
  chante(): void;
}

interface Aigle {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurPlumes: string;
  regimeAlimentaire: Carnivore;
  chasse(): void;
  glatit(): void;
}

interface Mouton {
  age: number;
  longivite: number;
  couleurYeux: string;
  couleurLaine: string;
  regimeAlimentaire: Herbivore;
  nomProprietaire: string;
  bele(): void;
}

/**
 * Question 1:
 * Créer les types
 * - Felin, Canide, Oiseau, Caprine
 * - Chasseur, Chasse
 * - Animal
 * en utilisant les types ci-dessus
 */

type Felin = any;
type Canide = any;
type Oiseau = any;
type Caprine = any;

type Chasseur = any;
type Chasse = any;

type Animal = any;

/**
 * Question 2:
 * Renomer le champ age en ageEstime pour tous les animaux
 * Indication: Penser à l'héritage avec extend
 */

/**
 * Question 3:
 * Caster l'objet chat tout en gardant son type Animal de sorte que
 * - chat.miole() compile
 * - chat.glatit() ne compile pas
 */

function knownType() {
  const chat: Animal = {
    age: 2,
    longivite: 16,
    couleurPoiles: 'gris',
    couleurYeux: 'bleu',
    nomProprietaire: 'Ahmed',
    regimeAlimentaire: 'CARNIVORE',
    chasse: () => {
      console.log('chasse souris, reptiles et oiseaux');
    },
    miole: () => {
      console.log('souvent');
    },
  };

  // ok
  chat.miole();

  // error
  chat.glatit();
}

/**
 * Question 4:
 * Tout en gardant Animal comme type d'animal
 * Faire en sorte que animal.chasse() compile
 */
function callChasse(animal: Animal): void {
  if (true /** replace true to check type */) {
    animal.chasse();

    // Type '"HERBIVORE"' is not assignable to type '"CARNIVORE"'
    animal.regimeAlimentaire = 'HERBIVORE';
  }
}

/**
 * Question 5:
 * Ajouter le champs sousFamille à tous les types d'animaux
 * qui a pour valeurs possibles:
 * FELIN, CANIDE, OISEAU, CAPRINE
 * en fonction de l'animal
 */

/**
 * Question 6:
 * Modifier la fonction suivante pour bien afficher la couleur de la robe de l'animal
 * Indication: Penser à définir isTypeFunction
 */

function afficherLaCouleurDeLaRobe(animal: Animal) {
  if (true) {
    console.log(animal.couleurPoiles);
  }

  if (true) {
    console.log(animal.couleurPlumes);
  }

  if (true) {
    console.log(animal.couleurLaine);
  }
}
