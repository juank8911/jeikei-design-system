# JeiKei Design System v2 🧠

> **Living Interface Engine** — Neural glass-neon UI library for React + Vite 7

[![Version](https://img.shields.io/badge/version-0.2.0-cyan?style=flat-square)](./package.json)
[![React](https://img.shields.io/badge/React-18%2B-blue?style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-teal?style=flat-square)](https://tailwindcss.com)

---

## ✨ What is this?

JeiKei is a fully animated, WebGL-powered design system where every interaction triggers **real-time neural energy propagation** across a live node graph rendered behind your UI.

- 🧠 **NeuralEngine** — WebGL canvas with node graph, edge pulses, and energy propagation
- 🪟 **Glassmorphism** — `backdrop-blur`, neon glow, and dark contrast overlays
- ⚡ **Reactive UI** — buttons, cards, tables, and tabs emit pulses on hover/click
- 🎨 **Two themes** — `nebula` (cyan) and `mission` (amber/gold)
- 📦 **Zero-config** — CSS loads automatically, `NeoLayout` includes everything

---

## 📦 Installation

```bash
# From npm (when published)
pnpm add jeikei-design-system

# From GitHub (current)
pnpm add "git+https://github.com/juank8911/jeikei-design-system.git"
```

---

## 🚀 Quick Start

```tsx
import { NeoLayout, NeoButton, NeoCard } from 'jeikei-design-system';

// NeoLayout is self-contained — no extra providers or CSS needed
export default function App() {
  return (
    <NeoLayout>
      <NeoCard title="System Online" value="100%" trend={{ value: '+12%', direction: 'up' }}>
        Neural propagation active.
      </NeoCard>
      <NeoButton variant="primary" size="md">
        Emit Signal
      </NeoButton>
    </NeoLayout>
  );
}
```

> **`NeoLayout` wraps `SystemProvider` + `NeuralBackground` automatically.**  
> No manual setup required.

---

## 📱 Mobile Support (React Native & Expo)

¡JeiKei ahora incluye soporte móvil completo de alto rendimiento nativo! La versión móvil está optimizada para **Expo** y **React Native**, utilizando **Canvas acelerado por GPU** con `@shopify/react-native-skia` y desenfoque de vidrio con `expo-blur`.

### 📦 Instalación Móvil

Para utilizar este diseño en tus aplicaciones móviles, instala el sistema de diseño de JeiKei junto con sus dependencias nativas en tu proyecto Expo:

```bash
# 1. Instalar el sistema de diseño JeiKei
npm install "git+https://github.com/juank8911/jeikei-design-system.git"

# 2. Instalar dependencias nativas de Expo requeridas
npx expo install @shopify/react-native-skia expo-blur
```

### 🚀 Uso en Móvil (Quick Start)

Importa los componentes nativos desde el submódulo `jeikei-design-system/native`:

```tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NeoLayout, NeoCard, NeoButton, NeoInput, NeoBadge } from 'jeikei-design-system/native';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <NeoLayout>
      <View style={styles.container}>
        {/* Badge de estatus de neón */}
        <NeoBadge label="System Active" variant="success" />

        {/* Tarjeta de vidrio con efecto de desenfoque HUD */}
        <NeoCard
          title="Neural Dashboard"
          value="98.4%"
          trend={{ value: 'OPTIMAL', direction: 'up' }}
        >
          <Text style={styles.text}>
            La malla neuronal Skia está renderizando de forma fluida a 60 FPS acelerada por GPU.
          </Text>
        </NeoCard>

        {/* Input HUD neón */}
        <NeoInput
          label="Enviar Comando"
          placeholder="INGRESA PARÁMETROS..."
          value={query}
          onChangeText={setQuery}
        />

        {/* Botón neón interactivo con impulsos en el canvas */}
        <NeoButton variant="primary" size="md">
          Emitir Señal
        </NeoButton>
      </View>
    </NeoLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  }
});
```

### 🧠 ¿Cómo funciona en móviles?
- **@shopify/react-native-skia:** Dibuja la malla neuronal, las conexiones de red y los destellos directamente en un lienzo nativo de C++ acelerado por GPU para una animación fluida sin consumir batería.
- **Impulsos táctiles:** Al presionar botones o interactuar con tarjetas, se obtienen las coordenadas del gesto táctil (`pageX`, `pageY`) y se inyecta energía directamente en el nodo más cercano del lienzo de Skia en tiempo real.
- **Glassmorphism óptimo:** Utiliza `expo-blur` en iOS para un desenfoque desenfadado de alto nivel y un fallback oscuro translúcido estilizado en Android para el mejor rendimiento.

---

## 🧩 Components

| Component   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `NeoLayout` | Root layout — neural WebGL background, glass system, scanlines |
| `NeoButton` | Neon button — emits pulse on click                             |
| `NeoCard`   | Glass card — metric display + hover pulse                      |
| `NeoInput`  | HUD-style input with glow focus ring                           |
| `NeoBadge`  | Status badge with neon border variants                         |
| `NeoModal`  | Portal modal — shockwave emitted on open                       |
| `NeoPanel`  | Full-bleed glass backplane for layouts                         |
| `NeoGrid`   | Layout grid z-index aware of neural layer                      |
| `NeoTable`  | Table — row hover sends horizontal scan pulse                  |
| `NeoTabs`   | Tabs — click fires pulse + neon sliding indicator              |
| `NeoToast`  | HUD notification — pulse fires from viewport corner            |

---

## 🎛️ NeuralEngine API

```tsx
import { useSystem } from 'jeikei-design-system';

function MyComponent() {
  const { engine, theme, setTheme } = useSystem();

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    engine.emitPulse(
      rect.left + rect.width / 2,   // x (viewport coords)
      rect.top + rect.height / 2,   // y (viewport coords)
      1.0                            // intensity (0.1 – 2.0)
    );
  };

  return <button onClick={handleClick}>Emit Neural Pulse</button>;
}
```

### `emitPulse(x, y, intensity)`
- Finds the nearest node to `(x, y)`
- Injects energy into it
- Propagates via graph edges with decay

---

## 🎨 Themes

```tsx
const { setTheme } = useSystem();

setTheme('nebula')   // 🔵 Cyan glow — default
setTheme('mission')  // 🟡 Amber/gold glow
```

CSS variables update automatically across all components.

---

## 🪟 CSS Variables

```css
:root {
  --neo-accent:       #34d8ff;   /* Theme accent color */
  --neo-glow:         rgba(52, 216, 255, 0.5);
  --neo-bg:           #020202;
  --neo-muted:        rgba(255,255,255,0.3);
  --neo-radius:       12px;
}
```

---

## 🧱 Utility Classes

| Class             | Effect                                     |
| ----------------- | ------------------------------------------ |
| `.jk-glass`       | `backdrop-blur(24px)` + border + subtle bg |
| `.jk-glow`        | `box-shadow` using `--neo-glow`            |
| `.jk-scanline`    | Fixed CRT scanline overlay                 |
| `.jk-hud-heading` | Uppercase monospace label (accent color)   |
| `.jk-data-label`  | Tiny tracking mono label (muted)           |

---

## 🛠️ Development

```bash
# Clone
git clone https://github.com/jikey8911/jeikei-design-system.git
cd jeikei-design-system

# Install
pnpm install

# Run demo
pnpm dev:demo

# Build library
pnpm run build:lib

# Build types
pnpm run build:types

# Full build
pnpm run build
```

### CSS import (optional — auto-loaded via JS entry)

```css
/* Only needed if importing CSS standalone without JS */
@import "jeikei-design-system/style.css";
```

---

## 📁 Project Structure

```
src/
├── v2/
│   ├── components/     # NeoButton, NeoCard, NeoInput, NeoBadge, etc.
│   ├── layouts/        # NeoLayout (self-contained root layout)
│   ├── neural/         # NeuralEngine, NeuralBackground, WebGL shaders
│   ├── system/         # SystemProvider, SystemContext, useSystem
│   ├── hooks/          # useGlow, useHover, useMouseGlow, useKeyboardPulse
│   ├── styles/         # globals.css, effects.css
│   └── theme/          # Color token generation per theme
├── utils/
│   └── cx.ts           # Class name utility
└── index.ts            # Unified entry point
```

---

## 📄 License

MIT © 2026 JeiKei Labs — `NEURAL // NEON // LIVING_INTERFACE`
