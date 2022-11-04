# Inicios JS: week 5

## Día 1. Testing

### Jest. Instalación y configuración

```shell
npm i jest
```

package.json

```json
"babel": {
        "env": {
            "test": {
                "plugins": [
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }
        }
    }
```

.eslintrc.json

```json
 "env": {

        "jest": true
    },
```

### Elementos

-   describe() -> agrupa una suite
-   test() -> un test -> 1 expect // expects relacionados
-   expect()
-   matchers

#### Ejemplos

-   una función "básica"
-   la función strictEquals del Challenge
    -   iteración en los ejemplos de test

Tests del challenge strictEquals
Patrones Testing. Gherkin - AAA. TDD: ejemplo Factorial. Corner case: fac175 -> Infinite

## Día 2

### Intelisense en testing

```
npm i -D @types/jest
```

jsconfig.json

```json
{
    "typeAcquisition": {
        "include": ["jest"]
    }
}
```

### TDD.

Ejemplo de la función factorial()

### Errores.

    -   Testing de errores.
    -   Objetos Error.
    -   Gestión de errores (Try/catch).

### Refactorización.

Principios de diseño de software

KISS v. DRY
SOLID -> S de Solid: Singled Responsibility

Módulos. Elementos exportados o no

### Github Actions

### SonarCloud

## Día 3

### Repaso modelos mentales
