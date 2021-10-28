# LEARN-CSS

## Les variables en css
Il est possible de déclarer des variables en css (comme en JS donc !).
La syntaxe est la suivante (double tiret précédent le nom de la variable) : 
```css
body {
  --grid-row: 4; 
}
```
Ici `--grid-row` est une variable css dont la valeur est "4".

Pour en faire usage, il faut utiliser la syntaxe `var()`, ex :
```css
#grid {
  height: calc(var(--grid-row) * 80px);
}
```

[Pour en savoir, voir la documentation sur MDN.](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)

## Box-sizing
`box-sizing` est une propriété css complexe déterminant la façon dont est calculé 
la taille des éléments d'une page web.

[Voir MDN pour en savoir plus.](https://developer.mozilla.org/fr/docs/Web/CSS/box-sizing)