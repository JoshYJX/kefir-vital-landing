# Boceto de estructura — Kéfir Vital

## Escritorio (>= 1024px)

```
┌─────────────────────────────────────────────────┐
│ [Logo KéfirVital]      Inicio Beneficios Prod... │  <- menú horizontal
├─────────────────────────────────────────────────┤
│                                                   │
│              Título + Subtítulo + CTA            │  <- hero
│                                                   │
├─────────────────────────────────────────────────┤
│  [Tarjeta] [Tarjeta] [Tarjeta]                   │
│  [Tarjeta] [Tarjeta] [Tarjeta]   <- 3 columnas   │  <- beneficios (grid)
│  [Tarjeta] [Tarjeta] [Tarjeta]                   │
├─────────────────────────────────────────────────┤
│  [Producto] [Producto] [Producto]  <- 3 columnas │  <- productos
├─────────────────────────────────────────────────┤
│  [Testimonio] [Testimonio]  <- 2 columnas        │  <- testimonios
├─────────────────────────────────────────────────┤
│              Formulario de contacto              │  <- contacto
├─────────────────────────────────────────────────┤
│                   © Footer                       │
└─────────────────────────────────────────────────┘
```

## Móvil (< 768px)

```
┌───────────────────┐
│ [Logo]             │  <- menú apilado
│ Inicio              │
│ Beneficios          │
│ Productos           │
│ Contacto            │
├───────────────────┤
│  Título             │
│  Subtítulo          │
│  [CTA]              │  <- hero, todo centrado
├───────────────────┤
│ [Tarjeta]           │
│ [Tarjeta]           │  <- 1 columna
│ [Tarjeta]           │
│      ...            │
├───────────────────┤
│ [Producto]          │
│ [Producto]          │  <- 1 columna
│ [Producto]          │
├───────────────────┤
│ [Testimonio]        │  <- 1 columna
│ [Testimonio]        │
├───────────────────┤
│  Formulario         │
├───────────────────┤
│  © Footer           │
└───────────────────┘
```

## Criterio de reorganización

- El grid de Beneficios pasa de 3 columnas (escritorio) a 2 (tableta) a 1
  (móvil).
- El grid de Productos y Testimonios sigue la misma lógica.
- El menú pasa de fila horizontal a columna apilada en pantallas pequeñas.
- El hero mantiene el mismo orden de elementos en todos los tamaños, solo
  cambia el tamaño de fuente y el padding.