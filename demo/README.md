# Jeikei Design System - Demos

Esta carpeta contiene los proyectos de demostración para el sistema de diseño Jeikei.

## Demo Web (React + Vite)
Para ejecutar la demo web, asegúrate de haber instalado las dependencias en la raíz del proyecto usando `pnpm`, y luego ejecuta:

```bash
pnpm --filter jeikei-demo dev
```
o entra a la carpeta `demo` y ejecuta `pnpm run dev`.

## Demo Mobile (React Native / Expo)

La demo mobile se encuentra en `demo/mobile/App.tsx`. Debido a que React Native requiere un entorno configurado (como Expo), sigue estos pasos para ejecutar la demo mobile localmente:

### Opción 1: Usar Expo Go (Recomendado)

1. Instala la CLI de Expo globalmente si no la tienes:
   ```bash
   npm install -g create-expo-app
   ```

2. Crea un nuevo proyecto de Expo dentro de la carpeta `demo` llamado `mobile-app`:
   ```bash
   npx create-expo-app demo/mobile-app
   ```

3. Mueve o copia el archivo `App.tsx` de `demo/mobile/App.tsx` para reemplazar el que se generó en `demo/mobile-app/App.tsx`:
   ```bash
   cp demo/mobile/App.tsx demo/mobile-app/App.tsx
   ```

4. Entra a la carpeta del nuevo proyecto y levanta el entorno de Expo:
   ```bash
   cd demo/mobile-app
   npx expo start
   ```

5. Escanea el código QR generado con la app **Expo Go** en tu celular (iOS o Android) o presiona `a` para abrirlo en un emulador de Android si lo tienes configurado.

> **Nota:** El archivo `App.tsx` importa componentes nativos usando la ruta `../../src/native`. Asegúrate de que las dependencias de `jeikei-design-system` estén construidas.

### Requisitos previos

Si el proyecto nativo falla al encontrar módulos de Three.js (debido al `useSystem`), podrías necesitar instalar paquetes adicionales en tu entorno Expo:
```bash
npx expo install three expo-gl
```
