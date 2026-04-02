# Plan: Publicacion Incremental de TinyMedia Compress

**Origen:** web26-051-tinymedia-compress en server005 (~/projects/web26-051-tinymedia-compress/)
**Destino GitHub:** github.com/abelardodiaz/tinymedia-compress
**Destino local:** C:/Users/abela/prweb/public/tinymedia-compress/
**Periodo:** 10 dias (del 5 al 14 de abril 2026, 1 commit/dia)
**Licencia:** MIT (cambio de propietario a open source)

---

## Contexto

TinyMedia Compress es una app Android (Kotlin + Jetpack Compose) para comprimir,
redimensionar y convertir imagenes. Tiene clean architecture con domain/usecase pattern.
El codigo esta completo (MVP v0.1.0) en server005 pero nunca se publico.

Se va a publicar incrementalmente: 1 commit por dia durante 10 dias, cada uno agregando
una pieza logica del proyecto. Asi se ve como desarrollo activo en el contribution graph.

## Fuente de los archivos

Todos los archivos .kt vienen de:
```
server005:~/projects/web26-051-tinymedia-compress/app/src/main/java/com/tinymedia/compress/
```

Los archivos de configuracion Gradle vienen de:
```
server005:~/projects/web26-051-tinymedia-compress/
  build.gradle.kts
  settings.gradle.kts
  gradle.properties
  gradle/
  gradlew
  gradlew.bat
  app/build.gradle.kts
  app/src/main/AndroidManifest.xml
  app/src/main/res/
```

## Sanitizacion CRITICA (hacer ANTES de cualquier commit)

Revisar TODOS los archivos copiados de server005. Eliminar o reemplazar:

| Buscar | Reemplazar con | Donde |
|--------|---------------|-------|
| IDs de AdMob reales (ca-app-pub-XXXX) | ca-app-pub-3940256099942544/6300978111 (test ID de Google) | BannerAd.kt, AndroidManifest.xml |
| Billing product IDs reales | "pro_upgrade" (generico) | UpgradeProCard.kt, cualquier billing |
| web26-051 | (eliminar referencia) | Cualquier archivo |
| web25-996 | (eliminar referencia) | Cualquier archivo |
| gitlab.com/abelardodiaz | github.com/abelardodiaz | README, configs |
| Signing configs (keystore paths, passwords) | (eliminar por completo) | build.gradle.kts |
| google-services.json | (NO copiar, agregar a .gitignore) | app/ |
| IPs internas (10.x.x.x) | (eliminar) | Cualquier archivo |
| Paths privados (/mnt/c/Users/abela/) | (eliminar) | Cualquier archivo |

Comando de verificacion (ejecutar despues de cada copia):
```bash
grep -r "ca-app-pub\|billing\|keystore\|10\.254\|server00\|gitlab\|web26-051\|web25-996\|abela\|996.*agente" C:/Users/abela/prweb/public/tinymedia-compress/
```

## Estructura final del repo publico

```
tinymedia-compress/
  app/
    build.gradle.kts
    src/
      main/
        AndroidManifest.xml
        java/com/tinymedia/compress/
          MainActivity.kt
          domain/
            model/
              CompressionPreset.kt
              CompressionResult.kt
              ConvertFormat.kt
              MediaItem.kt
              ResizePreset.kt
            usecase/
              CompressImageUseCase.kt
              ConvertImageUseCase.kt
              ResizeImageUseCase.kt
              SaveImageUseCase.kt
              ShareImageUseCase.kt
          ui/
            navigation/
              AppNavigation.kt
            screens/
              HomeScreen.kt
              CompressionScreen.kt
              ResultsScreen.kt
              ResizeScreen.kt
              ConvertScreen.kt
              AboutScreen.kt
            theme/
              Color.kt
              Type.kt
              Theme.kt
            components/
              BannerAd.kt
              UpgradeProCard.kt
          utils/
            FileUtils.kt
        res/
          values/strings.xml
          values/colors.xml
          values/themes.xml
          drawable/  (iconos si hay)
          mipmap/    (launcher icons)
  build.gradle.kts         (proyecto root)
  settings.gradle.kts
  gradle.properties
  gradle/
    wrapper/
      gradle-wrapper.jar
      gradle-wrapper.properties
  gradlew
  gradlew.bat
  README.md
  LICENSE
  .gitignore
```

---

## Plan dia por dia

### DIA 1 (5 abril) - Scaffold + README + Domain Models

**Que hacer:**
1. Crear directorio: `C:/Users/abela/prweb/public/tinymedia-compress/`
2. Crear README.md (sanitizado, sin refs internas)
3. Crear LICENSE (MIT)
4. Crear .gitignore (Android standard)
5. Copiar de server005 los 5 archivos de domain/model/:
   - CompressionPreset.kt
   - CompressionResult.kt
   - ConvertFormat.kt
   - MediaItem.kt
   - ResizePreset.kt
6. Sanitizar (grep de verificacion)
7. git init + commit + crear repo en GitHub + push

**Comando para copiar:**
```bash
wsl bash -c 'ssh server005 "cat ~/projects/web26-051-tinymedia-compress/app/src/main/java/com/tinymedia/compress/domain/model/CompressionPreset.kt"' > archivo.kt
```
(Repetir para cada archivo)

**Commit message:**
```
feat: scaffold + domain models (CompressionPreset, MediaItem, ResizePreset)
```

---

### DIA 2 (6 abril) - Use Cases

**Que hacer:**
1. Copiar de server005 los 5 archivos de domain/usecase/:
   - CompressImageUseCase.kt
   - ConvertImageUseCase.kt
   - ResizeImageUseCase.kt
   - SaveImageUseCase.kt
   - ShareImageUseCase.kt
2. Sanitizar
3. Commit + push

**Commit message:**
```
feat: add image use cases (compress, convert, resize, save, share)
```

---

### DIA 3 (7 abril) - UI Theme + Components

**Que hacer:**
1. Copiar de server005:
   - ui/theme/Color.kt
   - ui/theme/Type.kt
   - ui/theme/Theme.kt
   - ui/components/BannerAd.kt (SANITIZAR AdMob IDs!)
   - ui/components/UpgradeProCard.kt (SANITIZAR billing IDs!)
2. Sanitizar (ESPECIALMENTE BannerAd y UpgradeCard)
3. Commit + push

**Commit message:**
```
feat: add UI theme (Material3) and ad/billing components
```

---

### DIA 4 (8 abril) - Screens Parte 1

**Que hacer:**
1. Copiar de server005:
   - ui/screens/HomeScreen.kt
   - ui/screens/CompressionScreen.kt
   - ui/screens/ResultsScreen.kt
2. Sanitizar
3. Commit + push

**Commit message:**
```
feat: add core screens (Home, Compression, Results)
```

---

### DIA 5 (9 abril) - Screens Parte 2

**Que hacer:**
1. Copiar de server005:
   - ui/screens/ResizeScreen.kt
   - ui/screens/ConvertScreen.kt
   - ui/screens/AboutScreen.kt
2. Sanitizar
3. Commit + push

**Commit message:**
```
feat: add secondary screens (Resize, Convert, About)
```

---

### DIA 6 (10 abril) - Navigation + MainActivity + Utils

**Que hacer:**
1. Copiar de server005:
   - ui/navigation/AppNavigation.kt
   - MainActivity.kt
   - utils/FileUtils.kt
2. Sanitizar
3. Commit + push

**Commit message:**
```
feat: add navigation, MainActivity and file utilities
```

---

### DIA 7 (11 abril) - Gradle Config (Root)

**Que hacer:**
1. Copiar de server005:
   - build.gradle.kts (root)
   - settings.gradle.kts
   - gradle.properties
   - gradle/ (wrapper completo)
   - gradlew + gradlew.bat
2. SANITIZAR: eliminar signing configs, paths locales, repos privados
3. Commit + push

**Commit message:**
```
build: add Gradle project configuration and wrapper
```

---

### DIA 8 (12 abril) - App Gradle + AndroidManifest + Resources

**Que hacer:**
1. Copiar de server005:
   - app/build.gradle.kts (SANITIZAR signing, AdMob meta-data)
   - app/src/main/AndroidManifest.xml (SANITIZAR AdMob app ID)
   - app/src/main/res/ (strings.xml, colors.xml, themes.xml, drawables)
2. NO copiar google-services.json (agregarlo a .gitignore)
3. SANITIZAR todo lo de AdMob y billing
4. Commit + push

**Commit message:**
```
build: add app module config, manifest and resources
```

---

### DIA 9 (13 abril) - README mejorado + Badges

**Que hacer:**
1. Mejorar README.md:
   - Agregar badges (Kotlin, Android, Jetpack Compose, License)
   - Agregar seccion "Architecture" con diagrama
   - Agregar seccion "Build" con instrucciones de compilacion
   - Agregar seccion "Screenshots" (placeholder o reales si hay)
2. Commit + push

**Commit message:**
```
docs: improve README with architecture diagram, badges and build instructions
```

---

### DIA 10 (14 abril) - Topics + Sitio 073

**Que hacer:**
1. Agregar topics en GitHub:
   ```bash
   gh repo edit abelardodiaz/tinymedia-compress --add-topic android,kotlin,jetpack-compose,image-compression,material3,spanish
   ```
2. Crear MDX en 073: site/content/projects/tinymedia-compress.mdx
3. Deploy a Vercel
4. Commit en 073

**Commit message (073):**
```
feat(projects): add TinyMedia Compress to portfolio
```

---

## Compilacion Independiente (Post-publicacion)

Una vez publicados todos los archivos (dia 8+), el repo debe compilar de forma independiente.

**Pre-requisitos para compilar:**
- Android Studio Ladybug o superior
- JDK 17+
- Android SDK 34+
- Kotlin 2.0+

**Pasos para verificar compilacion:**
```bash
# Clonar el repo publico (no el de server005)
git clone https://github.com/abelardodiaz/tinymedia-compress.git
cd tinymedia-compress

# Compilar
./gradlew assembleDebug

# Si falla, verificar:
# 1. Que no falten archivos (comparar con estructura arriba)
# 2. Que las dependencias en build.gradle.kts esten correctas
# 3. Que el AndroidManifest tenga los permisos necesarios
# 4. Que no haya refs a google-services.json (debe ser opcional)
```

**IMPORTANTE:** Verificar compilacion ANTES del dia 9 (README mejorado).
Si no compila, el dia 9 se usa para fixes en vez de README.

**Posibles problemas de compilacion:**
- google-services.json faltante: hacer que Firebase/AdMob sea opcional
- Signing config: eliminar del build.gradle, usar solo debug signing
- Dependencias privadas: verificar que todo venga de Maven Central / Google

---

## Checklist de Seguridad Final

Ejecutar ANTES de cada push:
```bash
grep -rn "ca-app-pub\|keystore\|signing\|10\.254\|server00\|gitlab\|web26-051\|web25-996\|abela\|google-services" C:/Users/abela/prweb/public/tinymedia-compress/ --include="*.kt" --include="*.kts" --include="*.xml" --include="*.properties" --include="*.md"
```

Si encuentra algo, NO hacer push hasta sanitizar.

---

*Plan creado 2 abril 2026. Origen: conversacion sobre ideas de ideas.md (server002) -> plan de 15 dias de contribuciones -> commit #3 diario para repos nuevos.*
