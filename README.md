## Ce readme résume le learning path sur jasmine
[Lien vers le débot Github] (https://github.com/Sidiki-lab/code-source-jasmine)
````Il contient 4 TPs à réaliser pour comprendre les fonctions de base de Jasmine :
__TP1: How to to use jasmine to test Node js Application
__TP2: NodeJS Jasmine Describe Blocks Nested Example
__TP3: NodeJS Unit Test with Jasmine
__TP4: NodeJS with jasmine learning with matchers exemple
````

## TEST UNITAIRE
Les tests unitaires sont des méthodes permettant de tester de façon unitaire des éléments d’un code source. Leur principal objectif est de vérifier le bon fonctionnement de sous-ensembles de code tels que les fonctions, les procédures, les classes, etc.. Les tests unitaires garantissent que ces éléments de base fonctionnent comme souhaité et préviennent des potentiels bugs.
Jasmine est un framework de tests open-source pour JavaScript. Il possède une syntaxe assez facile à prendre en main. C’est un framework dit Behaviour-Driven Development.Installation
Installation
- Installation dans le projet actuel : npm install --save jasmine
-	Installation globale : npm install -g jasmine
-	Test du code : Jasmine init 

## Exemple d’un test simple 
Une suite de spécifications permet de décrire un ensemble de tests à effectuer. La fonction 'describe', dont on peut voir la structure ci-dessous, est utilisée pour décrire cette suite.*/

```javascript
describe("Une suite de spécifications", function() {
  //Configurer et décrire chaque spécification à l’exécuter
});
```

La suite de spécifications est ici déclarée avec le nom " Une suite de spécifications ". Elle prend pour premier paramètre une chaîne de caractères la décrivant, et en deuxième paramètre une fonction définissant un ensemble de cas de test aussi appelés 'spécifications'. Chaque cas de test est décrit via la fonction 'it', par un nom et un corps contenant son code d’exécution, comme on peut le voir sur la capture d'écran ci-dessous.

```javascript
describe("Une suite de spécifications", function() {
  it("Voici une spécifications", function() {
    let a = 1,
      b = 2;
    let goodResult = a + b;
    expect(a + a).toBe(goodResult);
  });

  it("Voici une deuxième spécification", function() {
    let a = 1,
      b = 1;
    let badResult = a + b + 1;
    expect(a + b).not.toBe(badResult);
  });
});
```
## Vérification du résultat d’un test
'expect()': La fonction 'expect' est le cœur du mécanisme de vérification d’un test. Elle permet de décrire une assertion en lui passant en paramètre une valeur à tester. 
'toBe()': La méthode 'toBe' est un " matcher " permettant de spécifier que la valeur passée à expect doit être égale à la valeur passée en paramètre.
  expect(true).toBe(true);

'not': La propriété 'not' permet d’inverser le comportement de la vérification. Ainsi, en chaînant cette propriété avec une fonction " matcher ", il est possible de dire que le résultat d'un test ne doit pas correspondre à une certaine valeur.
expect(false).not.toBe(true);

## Before et After
Il est possible d’exécuter du code avant ou après chacune des specs écrites, respectivement grâce aux fonctionnalités beforeEach et afterEach. Cela peut devenir très pratique si l’on veut factoriser du code, ou si l’on utilise des variables globales que l’on soit réinitialisé après un test.

```javascript
describe("My first suite with 'beforeEach' and 'afterEach'", function() {
  var a = 0;

  beforeEach(function() {
    a += 1;
  });

  afterEach(function() {
    a = 0;
  });

  it("checks the value of a", function() {
    expect(a).toEqual(1);
    a += 1;
  });

  it("expects a to still be equal to 1", function() {
    expect(a).toEqual(1);
  });
});
```
Il est également possible d’exécuter du code avant ou après toutes les specs contenues dans une suite. Comme le suggère son nom, la fonction beforeAll est appelée avant l’exécution de toutes les specs, et afterAll est appelée après l’exécution de toutes les specs.*/

```javascript
describe("My first suite with 'beforeAll' and 'afterAll'", function() {
  var a;

  beforeAll(function() {
    a += 1;
  });

  afterAll(function() {
    a = 0;
  });

  it("checks the value of a", function() {
    expect(a).toEqual(1);
    a += 1;
  });

  it("does not reset a between specs", function() {
    expect(a).toEqual(2);
  });
});
```
## Les matchers
Un matcher produit une comparaison booléenne entre la valeur réelle d’un élément et sa valeur attendue. Si ces deux valeurs sont divergentes, l’expectation est considérée comme fausse, et Jasmine fait échouer la spec.
Un matcher peut aussi être évalué avec une assertion négative. Il suffit pour cela d’ajouter le mot clé not avant l’utilisation du matcher.*/

```javascript
describe("My first suite", function() {
  var a = true;

  it("contains spec with an expectation", function() {
    expect(a).not.toBe(false);
  });
});
```
## Un grand nombre de matchers sont disponibles nativement dans Jasmine.
- toBeEqual
- toBeDefined
- toBeUndefined
- toBeTruthy
- tobeFasly
- tobeLessThan
- tobeGreaterThan
- tobeMatch
- tobeContain

## Exemple d’application de quelques Matchers

## toBe
Le matcher toBe compare deux valeurs entre elles grâce à l’opérateur === en JavaScript.
```javascript
describe("The 'toBe' matcher", function() {
  var a = 1,
    b = 2;

  it("compares with ===", function() {
    expect(a + b).toBe(3);
    expect(a).not.toBe(b);
  });
});
```
## toEqual
Le matcher toEqual permet de vérifier l’équivalence de deux valeurs. toBe est donc plus strict que toEqual.

```javascript
describe("The 'toEqual' matcher", function() {
  it("works with simple variables", function() {
    var a = 4;
    expect(a).toEqual(4);
  });

  it("works also well with arrays", function() {
    var b = new Array("1", "2"),
      c = new Array("1", "2");
    expect(b).toEqual(c);
  });
});
```
## toContain
toContain permet de vérifier la présence d’un élément dans un tableau.
```javascript
describe("The 'toContain' matcher", function() {
  var a = ["banana", "pineapple", "coconut"];

  it("finds an item in an Array", function() {
    expect(a).toContain("banana");
    expect(a).not.toContain("strawberry");
  });
});
```
toContain fonctionne également avec les chaînes de caractères : la fonction permet alors de vérifier si un ensemble de caractères figurent dans la chaîne globale.
```javascript
describe("The 'toContain' matcher", function() {
  var a = "The quick brown fox jumps over the lazy dog";

  it("finds a substring in an String", function() {
    expect(a).toContain("fox");
    expect(a).not.toContain("foxy");
  });
});
```
D'autres exemples de Matchers sont disponibles dans le TP4.
