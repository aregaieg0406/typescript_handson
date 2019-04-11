/**
 * On considère l'objet de référence suivant
 */

const referenceObject = {
  numberValue: 5,
  stringValue: 'string',
  booleanValue: true,
};

/**
 * Question 1:
 * Remplacer le type any de sorte que la fonction takeSameTypeAsReferenceObject
 * n'accepte des paramètres que de même type que referenceObject
 */
function takeSameTypeAsReferenceObject(parameter: any): void {
  console.log(`${parameter} has the same type as referenceObject`);
}

// OK till question 4 is done
takeSameTypeAsReferenceObject({
  numberValue: 7,
  stringValue: 'ok',
  booleanValue: false,
});

// ERROR
takeSameTypeAsReferenceObject({ numberValue: 2, stringValue: 'ko' });

// ERROR
takeSameTypeAsReferenceObject({
  numberValue: 9,
  stringValue: 'ko',
  booleanValue: false,
  unknownField: 'cause of the error',
});

/**
 * Question 2:
 * Remplacer le type any de sorte que la fonction takeKeyOfReferenceObject
 * n'accepte que des paramètres correspondant aux champs de referenceObject
 */
function takeKeyOfReferenceObject(parameter: any): void {
  console.log(`${parameter} is one of referenceObject keys`);
}

// OK
takeKeyOfReferenceObject('numberValue');

// ERROR
takeKeyOfReferenceObject('unknownField');

/**
 * Question 3:
 * Remplacer le type any de sorte que la fonction takeSameTypeAsReferenceObjectWithoutBoolean
 * n'accepte des paramètres que de même type que referenceObject sans le champs booleanValue
 */
function takeSameTypeAsReferenceObjectWithoutBoolean(parameter: any): void {
  console.log(
    `${parameter} has the same type as referenceObject without booleanValue`,
  );
}

// OK till question 4 is done
takeSameTypeAsReferenceObjectWithoutBoolean({
  numberValue: 4,
  stringValue: 'ok',
});

// ERROR
takeSameTypeAsReferenceObjectWithoutBoolean({
  numberValue: 4,
  stringValue: 'ko',
  boolValue: true,
});

/**
 * Question 4:
 * Remplacer le type any de sorte que la fonction takeKeyOfReferenceObjectExceptBoolean
 * n'accepte que des paramètres correspondant aux champs de referenceObject sauf booleanValue
 */
function takeKeyOfReferenceObjectExceptBoolean(parameter: any): void {
  console.log(
    `${parameter} is one of referenceObject keys except booleanValue`,
  );
}

// OK
takeKeyOfReferenceObjectExceptBoolean('numberValue');

// ERROR
takeKeyOfReferenceObjectExceptBoolean('booleanValue');

/**
 * Question 4:
 * Ajouter à l'objet referenceObject le champ numberValue2 avec la valeur 100
 * Faire en sorte que les appels aux fonctions
 * takeKeyOfReferenceObject, takeSameTypeAsReferenceObjectWithoutBoolean
 * takeKeyOfReferenceObject et takeKeyOfReferenceObjectExceptBoolean
 * suivants continuent à compiler
 */

takeSameTypeAsReferenceObject({
  numberValue: 7,
  stringValue: 'ok',
  booleanValue: false,
  numberValue2: 0x45,
});
takeSameTypeAsReferenceObjectWithoutBoolean({
  numberValue: 7,
  stringValue: 'ok',
  numberValue2: 0x45,
});

takeKeyOfReferenceObject('numberValue2');
takeKeyOfReferenceObjectExceptBoolean('numberValue2');

/**
 * Question 5:
 * Modifier le typage des fonctions
 * takeKeyOfReferenceObject, takeSameTypeAsReferenceObjectWithoutBoolean
 * takeKeyOfReferenceObject et takeKeyOfReferenceObjectExceptBoolean
 * de sorte qu'elles continuent à respecter leurs spec quel que soit le champ
 * ajouté à referenceObject
 * Tester après modification en ajoutant un champ stringValue2 à referenceObject
 * Les appels suivants doivent compiler sans aucune autre modification
 */

takeSameTypeAsReferenceObject({
  numberValue: 7,
  stringValue: 'ok',
  booleanValue: false,
  numberValue2: 0x45,
  stringValue2: 'ok ok',
});
takeSameTypeAsReferenceObjectWithoutBoolean({
  numberValue: 7,
  stringValue: 'ok',
  numberValue2: 0x45,
  stringValue2: 'ok ok',
});

takeKeyOfReferenceObject('stringValue2');
takeKeyOfReferenceObjectExceptBoolean('stringValue2');

/**
 * Question 6:
 * Renommer le champ booleanValue en boolValue
 * Les appels suivants NE doivent PAS compiler
 */
takeKeyOfReferenceObjectExceptBoolean('boolValue');
takeKeyOfReferenceObjectExceptBoolean('booleanValue');

/**
 * Question 7:
 * Modifier le type de paramètre de takeKeyOfReferenceObjectExceptBoolean
 * de sorte que le renommage de booleanValue lève une erreur dans la définition du type
 */

/**
 * Question 8:
 * Implémenter un type générique Omit<T, U> qui sera égal à T sans les champs U
 */
