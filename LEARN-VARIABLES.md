# LEARN-VARIABLES

https://fr.wikipedia.org/wiki/Variable_(informatique)

Une variable permet d'associer un identifiant et une valeur.

Par exemple :

```js
const name = 'toto'
```

## Différence `let` | `const` | `var`

### `const`
Le mot clé `const` permet de déclarer une nouvelle variable, l'usage de `const` ici informe que la variable a une valeur "constante", et n'est donc pas susceptible de changer durant l'exécution du programme.
```js
const name = 'toto'
name = 'titi' // Oups! Ici une erreur sera levée à l'exécution
```

### `let`
À l'inverse le mot-clé `let` permet la modification de cette même variable : 
```js
let name = 'toto'
name = 'titi'
```

### et `var` alors ?
`var` est l'ancienne manière de déclarer une variable en javascript. Le comportement des variables déclarées avec `var` souffrent de défauts (selon les nouveaux standards de développement), on a tendance à privilégier l'usage de `let` ou `const` à `var`. 

Reste que `var` est parfaitement utilisable : 
```js
var name = 'James'
```

Pour un aperçu exhaustif des différences entre `let`, `const` et `var` [voir par exemple cet article](https://blog.nicolas.brondin-bernard.com/quelles-sont-les-differences-entre-var-let-et-const-en-javascript/).

