/**
 * Définir un type Consultant
 * Le comportement attendu du compilateur est défini
 * au-dessus de chaque déclaration de variable
 */

type Consultant = any;

// NO ERROR
const correctConsultant: Consultant = {
  name: 'Ahmed',
  age: 29,
  currentProjectType: 'EXTERNAL',
};

// ERROR: Property 'currentProjectType' is missing in type...
const consultantWithMissingField: Consultant = {
  name: 'Maxime',
  age: 32,
};

// ERROR: ...Object literal may only specify known properties,
//        and 'extraField' does not exist in type 'Consultant'...
const consultantWithExtraField: Consultant = {
  name: 'Alexandre',
  age: 33,
  currentProjectType: 'INTERNAL',
  extraField: true,
};

// ERROR: ...Type '"MANAGER"' is not assignable to type...
const consultantWithUnknownValue: Consultant = {
  name: 'Olivier',
  age: 37,
  currentProjectType: 'MANAGER',
};

/**
 * Enrichir le type Consultant avec le champ optionnel 'currentClient' de type string
 * Indication: Dans le type {optionalField?: number}, optionalField est optionnel
 * PS: Le comportement du compilateur doit rester identiques pour les varianles déclarées
 *     au-dessus de cette question
 */

const enrichedConsultant: Consultant = {
  name: 'Marie',
  age: 26,
  currentProjectType: 'EXTERNAL',
  currentClient: 'BNP',
};

/**
 * Ci-dessous la declaration du type ConsultantDictionnary
 */

type ConsultantDictionnary = { [key: string]: Consultant };

/**
 * Definir le type InsertionFnType pour typer la fonction insertIntoConsultantDictionnary
 */

type InsertionFnType = any;

const insertIntoConsultantDictionnary: InsertionFnType = (
  dictionnary,
  key,
  consultantToAdd,
) => ({ ...dictionnary, [key]: consultantToAdd });

let dictionnary: ConsultantDictionnary = {};

// ok
const correctCallToInsert = insertIntoConsultantDictionnary(dictionnary, '1', {
  name: 'Ali',
  age: 28,
  currentProjectType: 'INTERNAL',
});

// error
const errorCauseMissingField = insertIntoConsultantDictionnary(
  dictionnary,
  '1',
  { name: 'Jerome', currentProjectType: 'INTERNAL' },
);

// error
const errorInsertionCauseExtraField = insertIntoConsultantDictionnary(
  dictionnary,
  '1',
  { name: 'Lisa', age: 27, currentProjectType: 'INTERNAL', extraField: 'KO' },
);

// error
const errorInsertionCauseUnknownValue = insertIntoConsultantDictionnary(
  dictionnary,
  '1',
  { name: 'Emmanuel', age: 35, currentProjectType: 'UNKNOWN' },
);

// ok
const correctCallToInsertWithEnriched = insertIntoConsultantDictionnary(
  correctCallToInsert,
  '2',
  {
    name: 'Emilie',
    age: 25,
    currentProjectType: 'EXTERNAL',
    currentClient: 'SG',
  },
);

/**
 * Definir le type UpdateFnType pour typer la fonction updateConsultantInDictionnary
 * Indication: le type Partial<{name: string, age: number}> est égal au type {name?: string, age?: number}
 */

type UpdateFnType = any;

const updateConsultantInDictionnary: UpdateFnType = (
  dictionnary,
  key,
  consultantToUpdate,
) => {
  if (!dictionnary[key]) {
    return dictionnary;
  }
  return {
    ...dictionnary,
    [key]: { ...dictionnary[key], ...consultantToUpdate },
  };
};

// ok
const correctCallToUpdate = updateConsultantInDictionnary(
  dictionnary,
  '1',
  correctConsultant,
);

// ok
const correctEvenMissingField = updateConsultantInDictionnary(
  correctCallToUpdate,
  '1',
  { name: 'Jerome', currentProjectType: 'INTERNAL' },
);

// error
const errorCauseExtraField = updateConsultantInDictionnary(dictionnary, '1', {
  name: 'Lisa',
  age: 27,
  currentProjectType: 'INTERNAL',
  extraField: 'KO',
});

// error
const errorCauseUnknownValue = updateConsultantInDictionnary(dictionnary, '1', {
  name: 'Emmanuel',
  age: 35,
  currentProjectType: 'UNKNOWN',
});

// ok
const correctCallWithEnriched = updateConsultantInDictionnary(
  correctEvenMissingField,
  '2',
  {
    name: 'Emilie',
    age: 25,
    currentProjectType: 'EXTERNAL',
    currentClient: 'SG',
  },
);

// ok
const correctCallWithEmptyObject = updateConsultantInDictionnary(
  correctCallWithEnriched,
  '2',
  {},
);
